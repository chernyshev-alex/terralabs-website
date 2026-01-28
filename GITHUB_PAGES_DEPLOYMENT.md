# GitHub Pages Deployment Guide

This guide will help you deploy your Terra Labs website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your machine

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name your repository (e.g., `terralabs-website`)
5. Make it **Public** (GitHub Pages requires public repositories)
6. Click "Create repository"

### 2. Initialize Git and Push Your Code

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Terra Labs website"

# Rename the main branch to 'main' (GitHub's default)
git branch -M main

# Add your GitHub repository as remote
# Replace 'YOUR_USERNAME' with your GitHub username and 'YOUR_REPO' with your repository name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (gear icon in the top-right)
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment** > **Source**, select **GitHub Actions**
5. Click **Save** (if prompted)

### 4. Deploy!

The workflow you've added (`.github/workflows/deploy.yml`) will automatically:

- Trigger on every push to the `main` branch
- Build your Next.js app as a static site
- Deploy it to GitHub Pages

### 5. Access Your Website

After the workflow completes (usually takes 1-2 minutes):

1. Go to your repository's **Settings** → **Pages**
2. You'll see your site URL at the top (e.g., `https://YOUR_USERNAME.github.io/YOUR_REPO/`)
3. Click the link to visit your live Terra Labs website!

## Using a Custom Domain

If you want to use your own domain (e.g., `terralabs.com`):

1. **Add a CNAME file:**
   - Create a file named `CNAME` (no extension) in the `public` folder
   - Add your domain name (e.g., `terralabs.com`)
   - Save and push to GitHub

2. **Configure DNS:**
   - Go to your domain registrar (e.g., Namecheap, GoDaddy)
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Wait for DNS propagation (can take up to 48 hours)

3. **Update GitHub Pages:**
   - Go to Settings → Pages
   - Enter your custom domain
   - Enable Enforce HTTPS (recommended)

## Updating Your Website

To make changes to your website:

1. Edit files locally
2. Test: `bun run dev` (preview in the Preview Panel)
3. Commit changes:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
4. GitHub Actions will automatically rebuild and deploy!

## Troubleshooting

### Build fails in GitHub Actions:
- Check the workflow run logs in the **Actions** tab
- Make sure all dependencies are in `package.json`

### 404 errors:
- Make sure GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully

### Theme doesn't work:
- Theme uses localStorage, which requires cookies/localStorage enabled
- Works fine in modern browsers with default settings

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
