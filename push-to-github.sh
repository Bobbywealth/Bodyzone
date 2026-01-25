#!/bin/bash

# Body Zone - Push to GitHub Script
# Repository: https://github.com/Bobbywealth/Bodyzone.git

echo "🚀 Pushing Body Zone website to GitHub..."
echo ""

# Change to main branch
echo "📝 Switching to main branch..."
git branch -M main

# Add remote if it doesn't exist
if ! git remote | grep -q 'origin'; then
    echo "🔗 Adding remote repository..."
    git remote add origin https://github.com/Bobbywealth/Bodyzone.git
else
    echo "✅ Remote repository already configured"
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✨ Done! Your website is now on GitHub!"
echo "🌐 View it at: https://github.com/Bobbywealth/Bodyzone"
echo ""
echo "To enable GitHub Pages (free hosting):"
echo "1. Go to your repository on GitHub"
echo "2. Click Settings → Pages"
echo "3. Select 'main' branch and Save"
echo "4. Your site will be live at: https://bobbywealth.github.io/Bodyzone/"
