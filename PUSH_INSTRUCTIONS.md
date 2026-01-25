# Push Body Zone to GitHub

Your repository: https://github.com/Bobbywealth/Bodyzone.git

## Quick Push (3 Commands)

Open your terminal in the downloaded folder and run:

```bash
git branch -M main
git remote add origin https://github.com/Bobbywealth/Bodyzone.git
git push -u origin main
```

## Or Use The Script

We've included a push script! Just run:

```bash
chmod +x push-to-github.sh
./push-to-github.sh
```

## After Pushing

### Enable GitHub Pages (Free Hosting!)

1. Go to: https://github.com/Bobbywealth/Bodyzone
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes

Your live site will be at: **https://bobbywealth.github.io/Bodyzone/**

## Authentication

If GitHub asks for authentication:
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your password)
  - Go to: GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token with "repo" permissions
  - Use this token as your password

## Future Updates

After making changes to your website:

```bash
git add .
git commit -m "Description of your changes"
git push
```

That's it! Your changes will be live.
