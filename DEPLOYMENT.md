# GitHub Pages Deployment Guide

This guide explains how to deploy Eduardo's portfolio website to GitHub Pages.

## 🚀 Quick Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository: `eduardo-portfolio-github` (or any name you prefer)
4. Make sure it's set to **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Push Code to GitHub

After creating the repository, GitHub will show you the commands to push existing code. Run these commands in your local project directory:

```bash
git remote add origin https://github.com/YOUR_USERNAME/eduardo-portfolio-github.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The site will automatically deploy using the included GitHub Actions workflow

### Step 4: Access Your Website

After the deployment completes (usually 1-3 minutes), your website will be available at:
```
https://YOUR_USERNAME.github.io/eduardo-portfolio-github
```

## 🔧 Advanced Configuration

### Custom Domain (Optional)

To use a custom domain:

1. In your repository, go to Settings > Pages
2. Under "Custom domain", enter your domain (e.g., `eduardo.yourdomain.com`)
3. Add a `CNAME` file to your repository root with your domain name
4. Configure your domain's DNS to point to `YOUR_USERNAME.github.io`

### Automatic Deployment

The included GitHub Actions workflow (`/.github/workflows/deploy.yml`) automatically:

1. **Triggers on**: Every push to the `main` branch
2. **Builds the site**: Installs dependencies and runs `npm run build`
3. **Deploys**: Uploads the `dist/` folder to GitHub Pages

### Manual Deployment

If you prefer to deploy manually:

1. Build the project locally:
```bash
npm install
npm run build
```

2. Push the changes:
```bash
git add .
git commit -m "Update portfolio"
git push
```

## 🛠️ Updating Content

### Portfolio Data

Edit `public/data.json` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education

### Images

Replace `public/profile.jpg` with your professional photo. Ensure it's:
- High quality (at least 400x400px)
- Professional appearance
- Reasonable file size (< 1MB)

### Styling

- Modify component files in `src/components/`
- Update Tailwind classes for design changes
- Add custom CSS in `src/index.css`

## 📊 Monitoring

### Deployment Status

- Check deployment status in the "Actions" tab of your GitHub repository
- Green checkmark = successful deployment
- Red X = deployment failed (check logs for details)

### Analytics (Optional)

Add Google Analytics or other tracking:

1. Edit `dist/index.html` to include tracking code
2. Or modify `index.html` and rebuild

## 🔍 Troubleshooting

### Common Issues

**Build Fails:**
- Check GitHub Actions logs in the "Actions" tab
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**404 Error:**
- Ensure GitHub Pages source is set to "GitHub Actions"
- Check if the repository is public
- Verify the URL format: `https://username.github.io/repository-name`

**Styling Issues:**
- Clear browser cache
- Check if all CSS files are properly built
- Verify Tailwind CSS build process

### Getting Help

1. Check GitHub Actions logs for specific error messages
2. Ensure all file paths are correct and case-sensitive
3. Verify that the `dist/` folder contains all necessary files

## 📝 Repository Structure

```
eduardo-portfolio-github/
├── .github/workflows/deploy.yml  # Automatic deployment
├── dist/                         # Built files (served by GitHub Pages)
├── public/                       # Static assets
├── src/                          # Source code
├── README.md                     # Project documentation
├── DEPLOYMENT.md                 # This file
└── package.json                  # Dependencies and scripts
```

## 🎯 Next Steps

After successful deployment:

1. ✅ Test all sections and links on the live website
2. ✅ Verify responsive design on mobile devices
3. ✅ Update the GitHub repository description
4. ✅ Add topics/tags to your repository for better discoverability
5. ✅ Share your portfolio URL on LinkedIn and other professional networks

---

**Need help?** Open an issue in the repository or check the GitHub Pages documentation.
