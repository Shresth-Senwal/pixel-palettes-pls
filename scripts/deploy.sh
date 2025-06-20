#!/bin/bash

# IEEE RAS MUJ Pixel Palettes - Netlify Deployment Script
# This script builds the project and prepares it for Netlify deployment

set -e

echo "🚀 Starting Netlify deployment preparation..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run quality checks
echo "🔍 Running quality checks..."
npm run lint
npm run type-check

# Build for production
echo "🏗️  Building for production..."
npm run build

# Verify build output
if [ -d "out" ]; then
    echo "✅ Build successful! Static files generated in 'out' directory."
    echo "📁 Contents of out directory:"
    ls -la out/
    echo ""
    echo "🌐 Ready for Netlify deployment!"
    echo "   - Publish directory: out"
    echo "   - Build command: npm run build"
    echo ""
    echo "🔗 To deploy manually:"
    echo "   1. Install Netlify CLI: npm install -g netlify-cli"
    echo "   2. Login: netlify login"
    echo "   3. Deploy: netlify deploy --prod --dir=out"
else
    echo "❌ Build failed! 'out' directory not found."
    exit 1
fi

echo "✨ Deployment preparation complete!" 