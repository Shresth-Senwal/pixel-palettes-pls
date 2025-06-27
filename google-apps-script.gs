/**
 * Google Apps Script for Pixel Palettes Project Submission Form
 * 
 * This script handles POST requests from the Pixel Palettes submission form
 * and writes the data to a Google Sheets spreadsheet for tracking hackathon
 * project submissions.
 * 
 * Setup Instructions:
 * 1. Open https://script.google.com/
 * 2. Create a new project and paste this code
 * 3. Save the script with a meaningful name
 * 4. Update SPREADSHEET_ID below with your Google Sheets ID
 * 5. Run setupHeaders() function to initialize the sheet
 * 6. Run testSetup() function to verify everything works
 * 7. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose "Web app" as type
 *    - Set "Execute as" to "Me"
 *    - Set "Who has access" to "Anyone"
 *    - Click "Deploy"
 * 8. Copy the web app URL and update it in the SubmissionForm component
 * 
 * Google Sheets Setup:
 * 1. Make sure the sheet has the correct headers in the first row
 * 2. The script will automatically create headers if they don't exist
 * 
 * Security Features:
 * - Input validation and sanitization
 * - Error handling with detailed logging
 * - Timestamp tracking for submissions
 * - Email format validation
 * - WhatsApp number validation
 * - Video link validation for Google Drive/YouTube
 * 
 * @author IEEE RAS MUJ Development Team
 * @version 2.0.0
 * @since 2024
 */

// Configuration - Update this with your Google Sheets ID
const SPREADSHEET_ID = '184xftc2j56eglJTSFniJM7064e8PqUUdLRWxYLMyknU';
const SHEET_NAME = 'Project Submissions'; // Name of the sheet tab

/**
 * Handles HTTP POST requests from the submission form
 * @param {GoogleAppsScript.Events.DoPost} e - The POST request event
 * @returns {GoogleAppsScript.Content.TextOutput} JSON response
 */
function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e.postData?.contents);
    
    // Parse the JSON data from the request
    let data;
    try {
      data = JSON.parse(e.postData?.contents || '{}');
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return createResponse(false, 'Invalid JSON data received');
    }
    
    // Validate required fields
    const validationResult = validateSubmissionData(data);
    if (!validationResult.isValid) {
      console.error('Validation failed:', validationResult.errors);
      return createResponse(false, 'Validation failed: ' + validationResult.errors.join(', '));
    }
    
    // Process and save the data
    const result = saveSubmissionData(data);
    
    if (result.success) {
      console.log('Submission saved successfully');
      return createResponse(true, 'Submission recorded successfully');
    } else {
      console.error('Failed to save submission:', result.error);
      return createResponse(false, 'Failed to save submission: ' + result.error);
    }
    
  } catch (error) {
    console.error('Unexpected error in doPost:', error);
    return createResponse(false, 'An unexpected error occurred');
  }
}

/**
 * Handles HTTP GET requests (for testing purposes)
 * @returns {GoogleAppsScript.Content.TextOutput} JSON response
 */
function doGet() {
  return createResponse(true, 'Pixel Palettes Submission API is running');
}

/**
 * Validates the submission data
 * @param {Object} data - The submission data to validate
 * @returns {Object} Validation result with isValid flag and errors array
 */
function validateSubmissionData(data) {
  const errors = [];
  
  // Required fields validation
  const requiredFields = [
    { field: 'emailAddress', name: 'Email Address' },
    { field: 'teamName', name: 'Team Name' },
    { field: 'projectTitle', name: 'Project Title' },
    { field: 'teamLeaderEmail', name: 'Team Leader Email' },
    { field: 'teamLeaderWhatsApp', name: 'Team Leader WhatsApp' },
    { field: 'projectVideoLink', name: 'Project Video Link' }
  ];
  
  requiredFields.forEach(({ field, name }) => {
    if (!data[field] || typeof data[field] !== 'string' || !data[field].trim()) {
      errors.push(`${name} is required`);
    }
  });
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.emailAddress && !emailRegex.test(data.emailAddress)) {
    errors.push('Invalid email address format');
  }
  if (data.teamLeaderEmail && !emailRegex.test(data.teamLeaderEmail)) {
    errors.push('Invalid team leader email format');
  }
  
  // WhatsApp validation
  if (data.teamLeaderWhatsApp) {
    const cleanNumber = data.teamLeaderWhatsApp.replace(/\D/g, '');
    if (cleanNumber.length < 10 || cleanNumber.length > 15) {
      errors.push('WhatsApp number must be between 10-15 digits');
    }
  }
  
  // Video link validation (Google Drive or YouTube)
  if (data.projectVideoLink) {
    const cleanUrl = data.projectVideoLink.toLowerCase().trim();
    const isValidVideoUrl = cleanUrl.includes('drive.google.com') || 
                           cleanUrl.includes('youtube.com') || 
                           cleanUrl.includes('youtu.be');
    if (!isValidVideoUrl) {
      errors.push('Project video link must be from Google Drive or YouTube');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

/**
 * Saves the validated submission data to Google Sheets
 * @param {Object} data - The validated submission data
 * @returns {Object} Result object with success flag and error message if applicable
 */
function saveSubmissionData(data) {
  try {
    console.log('Attempting to open spreadsheet with ID:', SPREADSHEET_ID);
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('Spreadsheet opened successfully:', spreadsheet.getName());
    
    let sheet;
    
    // Try to get the sheet by name, create if it doesn't exist
    sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      console.log('Sheet not found, creating new sheet:', SHEET_NAME);
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      console.log('New sheet created successfully');
    } else {
      console.log('Found existing sheet:', SHEET_NAME);
    }
    
    // Verify sheet is accessible
    if (!sheet) {
      throw new Error('Failed to access or create sheet: ' + SHEET_NAME);
    }
    
    console.log('Sheet last row:', sheet.getLastRow());
    
    // Initialize headers if needed
    if (sheet.getLastRow() === 0) {
      console.log('Sheet is empty, initializing headers...');
      const headerResult = setupHeaders();
      if (!headerResult.success) {
        throw new Error('Failed to initialize headers: ' + headerResult.error);
      }
      console.log('Headers initialized successfully');
    }
    
    // Prepare the data row
    const timestamp = new Date();
    const rowData = [
      timestamp,
      sanitizeInput(data.emailAddress),
      sanitizeInput(data.teamName),
      sanitizeInput(data.projectTitle),
      sanitizeInput(data.teamLeaderEmail),
      sanitizeInput(data.teamLeaderWhatsApp),
      sanitizeInput(data.projectVideoLink)
    ];
    
    // Add the data to the next available row
    const nextRow = sheet.getLastRow() + 1;
    sheet.getRange(nextRow, 1, 1, rowData.length).setValues([rowData]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, rowData.length);
    
    // Add alternating row colors for better readability
    if (nextRow % 2 === 0) {
      sheet.getRange(nextRow, 1, 1, rowData.length).setBackground('#F3F4F6');
    }
    
    console.log(`Data saved successfully to row ${nextRow}`);
    
    return { success: true };
    
  } catch (error) {
    console.error('Error saving to spreadsheet:', error);
    return { success: false, error: error.toString() };
  }
}

/**
 * Sanitizes input to prevent potential issues
 * @param {string} input - Input string to sanitize
 * @returns {string} Sanitized string
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') {
    return '';
  }
  
  // Trim whitespace and limit length to prevent extremely long entries
  return input.trim().substring(0, 5000);
}

/**
 * Creates a standardized JSON response
 * @param {boolean} success - Whether the operation was successful
 * @param {string} message - Response message
 * @returns {GoogleAppsScript.Content.TextOutput} JSON response
 */
function createResponse(success, message) {
  const response = {
    success: success,
    message: message,
    timestamp: new Date().toISOString()
  };
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Setup headers in the Google Sheet
 * Creates and formats the header row for the new form fields
 * Call this function once to initialize your sheet
 * @returns {Object} Result object with success flag and message
 */
function setupHeaders() {
  try {
    console.log('=== SETTING UP HEADERS ===');
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('Spreadsheet opened:', spreadsheet.getName());
    
    // Get or create the target sheet
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      console.log('Creating new sheet:', SHEET_NAME);
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }
    
    // Check if headers already exist
    if (sheet.getLastRow() > 0) {
      const existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      if (existingHeaders.length > 0 && existingHeaders[0]) {
        console.log('Headers already exist:', existingHeaders);
        return { 
          success: true, 
          message: 'Headers already initialized',
          headers: existingHeaders 
        };
      }
    }
    
    // Define the new headers for the updated form
    const headers = [
      'Timestamp',
      'Email Address',
      'Team Name', 
      'Project Title',
      'Team Leader Email',
      'Team Leader WhatsApp',
      'Project Video Link'
    ];
    
    console.log('Creating headers:', headers);
    
    // Set the headers
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format the header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#7C3AED'); // IEEE Purple background
    headerRange.setFontColor('#FFFFFF'); // White text
    headerRange.setFontWeight('bold');
    headerRange.setHorizontalAlignment('center');
    headerRange.setVerticalAlignment('middle');
    
    // Set column widths for better readability
    sheet.setColumnWidth(1, 180); // Timestamp
    sheet.setColumnWidth(2, 250); // Email Address
    sheet.setColumnWidth(3, 200); // Team Name
    sheet.setColumnWidth(4, 250); // Project Title
    sheet.setColumnWidth(5, 250); // Team Leader Email
    sheet.setColumnWidth(6, 180); // Team Leader WhatsApp
    sheet.setColumnWidth(7, 300); // Project Video Link
    
    // Freeze the header row
    sheet.setFrozenRows(1);
    
    console.log('✅ Headers set up successfully');
    console.log('=== HEADER SETUP COMPLETE ===');
    
    return { 
      success: true, 
      message: 'Headers set up successfully',
      headers: headers 
    };
    
  } catch (error) {
    console.error('❌ Failed to set up headers:', error);
    return { 
      success: false, 
      error: error.toString() 
    };
  }
}

/**
 * Test the complete setup
 * Call this function to verify everything is working correctly
 * @returns {Object} Result object with success flag and details
 */
function testSetup() {
  console.log('=== RUNNING COMPLETE SETUP TEST ===');
  
  try {
    // Step 1: Verify spreadsheet access
    console.log('Step 1: Verifying spreadsheet access...');
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('✅ Spreadsheet accessible:', spreadsheet.getName());
    console.log('Spreadsheet URL:', spreadsheet.getUrl());
    
    // Step 2: Check/create sheet
    console.log('Step 2: Checking sheet...');
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      console.log('Creating new sheet...');
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }
    console.log('✅ Sheet ready:', sheet.getName());
    
    // Step 3: Setup headers
    console.log('Step 3: Setting up headers...');
    const headerResult = setupHeaders();
    if (!headerResult.success) {
      throw new Error('Header setup failed: ' + headerResult.error);
    }
    console.log('✅ Headers ready:', headerResult.message);
    
    // Step 4: Test data validation
    console.log('Step 4: Testing data validation...');
    const testData = {
      emailAddress: 'test@example.com',
      teamName: 'Test Team',
      projectTitle: 'Test Project',
      teamLeaderEmail: 'leader@example.com',
      teamLeaderWhatsApp: '+91 9876543210',
      projectVideoLink: 'https://drive.google.com/file/d/test123/view'
    };
    
    const validation = validateSubmissionData(testData);
    if (!validation.isValid) {
      throw new Error('Validation test failed: ' + validation.errors.join(', '));
    }
    console.log('✅ Validation test passed');
    
    // Step 5: Test data saving
    console.log('Step 5: Testing data save...');
    const saveResult = saveSubmissionData(testData);
    if (!saveResult.success) {
      throw new Error('Save test failed: ' + saveResult.error);
    }
    console.log('✅ Save test passed');
    
    console.log('=== ALL TESTS PASSED ===');
    return { 
      success: true, 
      message: 'Complete setup test successful. Your form is ready to receive submissions!',
      details: {
        spreadsheetName: spreadsheet.getName(),
        spreadsheetUrl: spreadsheet.getUrl(),
        sheetName: SHEET_NAME,
        headers: headerResult.headers
      }
    };
    
  } catch (error) {
    console.error('❌ Setup test failed:', error);
    return { 
      success: false, 
      error: error.toString() 
    };
  }
}

/**
 * Additional helper function to clear all data (for testing)
 * WARNING: This will delete all submission data!
 */
function clearAllData() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (sheet) {
      // Clear all content except headers
      if (sheet.getLastRow() > 1) {
        sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).clear();
        console.log('✅ All data cleared (headers preserved)');
        return { success: true, message: 'All data cleared successfully' };
      } else {
        console.log('No data to clear');
        return { success: true, message: 'No data to clear' };
      }
    } else {
      return { success: false, error: 'Sheet not found' };
    }
  } catch (error) {
    console.error('❌ Failed to clear data:', error);
    return { success: false, error: error.toString() };
  }
} 