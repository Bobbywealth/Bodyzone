# How to Push Your Body Zone Website to GitHub

## Step 1: Create a GitHub Repository

1. Go to https://github.com
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it (e.g., "bodyzone-website")
5. Keep it Public
6. **Do NOT** initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /path/to/your/bodyzone-files

# Change default branch from master to main (recommended)
git branch -M main

# Add the remote repository (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push your code
git push -u origin main
```

### Example:
If your GitHub username is "johndoe" and your repo is "bodyzone-website":

```bash
git branch -M main
git remote add origin https://github.com/johndoe/bodyzone-website.git
git push -u origin main
```

## Step 3: Deploy to GitHub Pages (Free Hosting!)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes
7. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Alternative: Quick Deploy with Netlify (Even Easier!)

1. Go to https://app.netlify.com/drop
2. Drag and drop your entire folder
3. Your site goes live instantly!
4. You'll get a URL like: `https://random-name.netlify.app`
5. You can change the name in settings

## Troubleshooting

### "Permission denied" when pushing
You need to authenticate. GitHub recommends using a Personal Access Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Give it "repo" permissions
4. Use the token as your password when pushing

### Want to make updates?
```bash
# Make your changes to files
git add .
git commit -m "Description of changes"
git push
```

## Your Files Are Ready!

✅ index.html - Your main website file
✅ README.md - Documentation
✅ Git repository initialized
✅ Initial commit made

You just need to:
1. Create the GitHub repository
2. Connect it with `git remote add origin ...`
3. Push with `git push -u origin main`

Need help? The README.md file has all the instructions too!
