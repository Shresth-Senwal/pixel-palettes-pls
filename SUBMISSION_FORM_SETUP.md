# Pixel Palettes Submission Form Setup Guide

This guide will help you set up the Google Apps Script backend and configure the submission form to work with your Google Sheets.

## Prerequisites

- Google account with access to Google Sheets and Google Apps Script
- The Google Sheets ID: `1sibFST8KvIRVJLORl7DF81NWSwL36MDjPYPzofd5nUY`

## Step 1: Set up Google Sheets

1. Open the Google Sheets with ID `1sibFST8KvIRVJLORl7DF81NWSwL36MDjPYPzofd5nUY`
2. Create a new sheet tab called "Project Submissions" (or rename an existing sheet)
3. The script will automatically create headers when it runs for the first time

## Step 2: Create Google Apps Script Web App

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Delete the default code and paste the content from `google-apps-script.gs`
4. Save the project with a name like "Pixel Palettes Submission Handler"

## Step 3: Configure the Script

1. In the Google Apps Script editor, verify the `SPREADSHEET_ID` constant matches your sheet ID:
   ```javascript
   const SPREADSHEET_ID = '1sibFST8KvIRVJLORl7DF81NWSwL36MDjPYPzofd5nUY';
   ```

2. Optionally, modify the `SHEET_NAME` if you want to use a different sheet name:
   ```javascript
   const SHEET_NAME = 'Project Submissions';
   ```

## Step 4: Test the Script

1. **First, run the debug function**:
   - In the Google Apps Script editor, click on the function dropdown and select `debugSpreadsheet`
   - Click the "Run" button
   - Grant permissions when prompted:
     - Click "Review permissions"
     - Choose your Google account
     - Click "Advanced" → "Go to [Your Project Name] (unsafe)"
     - Click "Allow"
   - Check the execution log - it should show spreadsheet info and confirm access

2. **Initialize the headers** (optional but recommended):
   - Select `initializeHeaders` from the function dropdown
   - Click "Run" to set up the sheet headers with proper formatting
   - This creates the header row and formats it nicely

3. **Then run the full test**:
   - Select `testScript` from the function dropdown
   - Click "Run" to test the complete flow (includes debug, header init, validation, and data save)
   - Check the execution log to ensure all steps passed

4. **If you see any errors**, check the troubleshooting section below

## Step 5: Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Click the gear icon next to "Type" and select "Web app"
3. Configure the deployment:
   - **Description**: "Pixel Palettes Submission Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/[SCRIPT_ID]/exec`)

## Step 6: Update the Frontend

1. Open `src/components/SubmissionForm.tsx`
2. Find the line with `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`
3. Replace it with your Web App URL:
   ```typescript
   const webAppUrl = 'https://script.google.com/macros/s/[YOUR_SCRIPT_ID]/exec';
   ```

## Step 7: Test the Complete Setup

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```
2. Navigate to `/pixelpalettes`
3. Click the "SUBMIT" button to open the form
4. Fill out the form with test data and submit
5. Check your Google Sheets to verify the data was recorded

## Form Fields

The submission form includes the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Email Address | Email | Yes | Participant's email address |
| Team Name | Text | Yes | Name of the team |
| Project Title | Text | Yes | Title of the project |
| Team Leader's Email | Email | Yes | Team leader's email address |
| Final Project Description | Textarea | Yes | Detailed project description (min 50 characters) |
| Project/Demo Link | URL | Yes | Link to live project or demo |
| Final PPT Link | URL | Yes | Link to presentation slides |
| Extra Assets Link | URL | No | Optional link to additional assets |

## Troubleshooting

### Error: "Cannot read properties of null (reading 'getLastRow')"

This is the most common error and indicates the script can't access the sheet. Follow these steps:

1. **Run the debug function first**:
   - In Google Apps Script, select `debugSpreadsheet` from the function dropdown
   - Click "Run" and check the execution log
   - This will show you exactly what's wrong

2. **Check spreadsheet access**:
   - Verify the Google Sheets ID is correct: `1sibFST8KvIRVJLORl7DF81NWSwL36MDjPYPzofd5nUY`
   - Make sure you have edit access to the spreadsheet
   - Ensure the spreadsheet exists and isn't deleted

3. **Sheet name issues**:
   - The script looks for a sheet named "Project Submissions"
   - If it doesn't exist, the script will try to create it
   - Make sure you have permission to add new sheets

4. **Permission issues**:
   - Re-run the authorization process
   - Make sure you granted access to Google Sheets

### Common Issues

1. **"Permission denied" error**
   - Ensure you've granted all necessary permissions to the script
   - Check that the spreadsheet is accessible to the script
   - Try running `debugSpreadsheet()` function first

2. **"Invalid JSON data received" error**
   - Verify the frontend is sending properly formatted JSON
   - Check the browser's developer console for network errors

3. **Data not appearing in sheets**
   - Confirm the spreadsheet ID is correct
   - Verify the sheet name matches the `SHEET_NAME` constant
   - Check the Google Apps Script execution log for errors

4. **CORS errors in browser**
   - This is expected due to `no-cors` mode - errors in the frontend are normal
   - Check the Google Sheets to verify data was actually saved

### Debugging Tips

1. **Check Google Apps Script logs**:
   - Open your Google Apps Script project
   - Click "Executions" in the left sidebar
   - Review recent execution logs

2. **Test the endpoint directly**:
   - Use the `testScript()` function in Google Apps Script
   - Send a test POST request using tools like Postman

3. **Verify sheet permissions**:
   - Ensure the sheet is not protected
   - Check that the script has edit permissions

## Security Considerations

- The script validates all input data
- URLs are validated before storage
- Input length is limited to prevent abuse
- All data is sanitized before storage

## Customization

### Adding New Fields

1. Update the form in `src/components/SubmissionForm.tsx`
2. Add validation logic for new fields
3. Update the `google-apps-script.gs` to handle new fields:
   - Add to `requiredFields` array if required
   - Add to `headers` array
   - Add to `rowData` array

### Modifying Validation

Edit the `validateSubmissionData()` function in `google-apps-script.gs` to add custom validation rules.

### Changing Sheet Formatting

Modify the formatting code in the `saveSubmissionData()` function to customize how data appears in the sheet.

## Support

If you encounter issues:

1. Check the Google Apps Script execution logs
2. Verify all URLs and IDs are correct
3. Ensure proper permissions are granted
4. Test with sample data first

The submission form follows modern web standards and provides comprehensive error handling and user feedback. 