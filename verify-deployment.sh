#!/bin/bash

# IEEE RAS MUJ Pixel Palettes - Deployment Verification Script
# This script verifies that the deployment directory is ready for Netlify

echo "🔍 Verifying deployment readiness..."
echo ""

# Check if we're in the right directory
if [ ! -f "netlify.toml" ]; then
    echo "❌ Error: netlify.toml not found. Are you in the deployment directory?"
    exit 1
fi

# Initialize counters
CHECKS_PASSED=0
TOTAL_CHECKS=0

# Function to check and report
check_item() {
    local item="$1"
    local description="$2"
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    
    if [ -e "$item" ]; then
        echo "✅ $description"
        CHECKS_PASSED=$((CHECKS_PASSED + 1))
    else
        echo "❌ $description"
    fi
}

# Check essential files
echo "📁 Checking essential files..."
check_item "package.json" "package.json exists"
check_item "next.config.ts" "Next.js configuration exists"
check_item "netlify.toml" "Netlify configuration exists"
check_item "src" "Source code directory exists"
check_item "public" "Public assets directory exists"

echo ""

# Check build output
echo "🏗️  Checking build output..."
check_item "out" "Static export directory exists"
check_item "out/index.html" "Main index.html generated"
check_item "out/_next" "Next.js assets generated"
check_item "out/images" "Images directory exists"

echo ""

# Check configuration
echo "⚙️  Checking configuration..."

# Check if netlify.toml points to 'out' directory
if grep -q 'publish = "out"' netlify.toml; then
    echo "✅ Netlify configured to publish 'out' directory"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ Netlify not configured to publish 'out' directory"
fi
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

# Check if Next.js is configured for static export
if grep -q 'output.*export' next.config.ts; then
    echo "✅ Next.js configured for static export"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ Next.js not configured for static export"
fi
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

echo ""

# Check dependencies
echo "📦 Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ Dependencies not installed (run: npm install)"
fi
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

echo ""

# Final report
echo "📊 Verification Results:"
echo "   Passed: $CHECKS_PASSED/$TOTAL_CHECKS checks"

if [ $CHECKS_PASSED -eq $TOTAL_CHECKS ]; then
    echo ""
    echo "🎉 All checks passed! Ready for deployment!"
    echo ""
    echo "🚀 Deployment options:"
    echo "   1. Git Integration: Push to GitHub and connect to Netlify"
    echo "   2. Manual CLI: netlify deploy --prod --dir=out"
    echo "   3. Drag & Drop: Upload 'out' folder to Netlify dashboard"
    echo ""
    echo "📖 See DEPLOY_README.md for detailed instructions"
    exit 0
else
    echo ""
    echo "⚠️  Some checks failed. Please fix the issues above before deploying."
    echo ""
    echo "💡 Common fixes:"
    echo "   - Run 'npm install' to install dependencies"
    echo "   - Run 'npm run build' to generate static files"
    echo "   - Check that all required files are present"
    exit 1
fi 