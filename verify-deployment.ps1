# IEEE RAS MUJ Pixel Palettes - Deployment Verification Script (PowerShell)
# This script verifies that the deployment directory is ready for Netlify

Write-Host "🔍 Verifying deployment readiness..." -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "netlify.toml")) {
    Write-Host "❌ Error: netlify.toml not found. Are you in the deployment directory?" -ForegroundColor Red
    exit 1
}

# Initialize counters
$ChecksPassed = 0
$TotalChecks = 0

# Function to check and report
function Check-Item {
    param(
        [string]$Path,
        [string]$Description
    )
    
    $script:TotalChecks++
    
    if (Test-Path $Path) {
        Write-Host "✅ $Description" -ForegroundColor Green
        $script:ChecksPassed++
    } else {
        Write-Host "❌ $Description" -ForegroundColor Red
    }
}

# Check essential files
Write-Host "📁 Checking essential files..." -ForegroundColor Yellow
Check-Item "package.json" "package.json exists"
Check-Item "next.config.ts" "Next.js configuration exists"
Check-Item "netlify.toml" "Netlify configuration exists"
Check-Item "src" "Source code directory exists"
Check-Item "public" "Public assets directory exists"

Write-Host ""

# Check build output
Write-Host "🏗️  Checking build output..." -ForegroundColor Yellow
Check-Item "out" "Static export directory exists"
Check-Item "out/index.html" "Main index.html generated"
Check-Item "out/_next" "Next.js assets generated"
Check-Item "out/images" "Images directory exists"

Write-Host ""

# Check configuration
Write-Host "⚙️  Checking configuration..." -ForegroundColor Yellow

# Check if netlify.toml points to 'out' directory
$TotalChecks++
if ((Get-Content "netlify.toml" -Raw) -match 'publish = "out"') {
    Write-Host "✅ Netlify configured to publish 'out' directory" -ForegroundColor Green
    $ChecksPassed++
} else {
    Write-Host "❌ Netlify not configured to publish 'out' directory" -ForegroundColor Red
}

# Check if Next.js is configured for static export
$TotalChecks++
if ((Get-Content "next.config.ts" -Raw) -match 'output.*export') {
    Write-Host "✅ Next.js configured for static export" -ForegroundColor Green
    $ChecksPassed++
} else {
    Write-Host "❌ Next.js not configured for static export" -ForegroundColor Red
}

Write-Host ""

# Check dependencies
Write-Host "📦 Checking dependencies..." -ForegroundColor Yellow
Check-Item "node_modules" "Dependencies installed"

Write-Host ""

# Final report
Write-Host "📊 Verification Results:" -ForegroundColor Cyan
Write-Host "   Passed: $ChecksPassed/$TotalChecks checks" -ForegroundColor White

if ($ChecksPassed -eq $TotalChecks) {
    Write-Host ""
    Write-Host "🎉 All checks passed! Ready for deployment!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Deployment options:" -ForegroundColor Cyan
    Write-Host "   1. Git Integration: Push to GitHub and connect to Netlify" -ForegroundColor White
    Write-Host "   2. Manual CLI: netlify deploy --prod --dir=out" -ForegroundColor White
    Write-Host "   3. Drag & Drop: Upload 'out' folder to Netlify dashboard" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 See DEPLOY_README.md for detailed instructions" -ForegroundColor Yellow
    exit 0
} else {
    Write-Host ""
    Write-Host "⚠️  Some checks failed. Please fix the issues above before deploying." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "💡 Common fixes:" -ForegroundColor Cyan
    Write-Host "   - Run 'npm install' to install dependencies" -ForegroundColor White
    Write-Host "   - Run 'npm run build' to generate static files" -ForegroundColor White
    Write-Host "   - Check that all required files are present" -ForegroundColor White
    exit 1
} 