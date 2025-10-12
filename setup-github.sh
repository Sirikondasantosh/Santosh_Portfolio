#!/bin/bash

# GitHub Portfolio Setup Script
# Run this script to connect your portfolio to GitHub

echo "🚀 GitHub Portfolio Setup Script"
echo "================================"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the portfolio directory"
    exit 1
fi

echo "✅ Found portfolio files"
echo ""

# Get GitHub username
echo "📝 Please enter your GitHub username:"
read -p "GitHub Username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Get repository name
echo ""
echo "📝 Please enter your repository name (or press Enter for 'santosh-portfolio'):"
read -p "Repository Name: " REPO_NAME

if [ -z "$REPO_NAME" ]; then
    REPO_NAME="santosh-portfolio"
fi

echo ""
echo "🔧 Setting up GitHub repository..."
echo ""

# Add remote repository
echo "Adding remote repository..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# Push to GitHub
echo "Pushing code to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Repository setup complete!"
echo ""
echo "🌐 Your portfolio will be available at:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "2. Click 'Settings' → 'Pages'"
echo "3. Select 'Deploy from a branch' → 'main' → 'Save'"
echo "4. Wait 5-10 minutes for deployment"
echo "5. Add the portfolio URL to your LinkedIn profile"
echo ""
echo "🎉 Your portfolio will be live soon!"
