# 🚀 Deploy Terra Labs to GitHub Pages - Quick Start

Your website is ready! Follow these 4 simple steps to go live:

---

## Step 1: Create GitHub Repository (2 minutes)

1. Go to https://github.com
2. Log in to your account (or create one)
3. Click the **+** icon in the top-right corner
4. Select **New repository**
5. Fill in:
   - **Repository name**: `terralabs-website` (or your preferred name)
   - **Description**: Terra Labs - AI/RAG, Big Data & Go/Java Development
   - **Visibility**: ☑️ Public (required for GitHub Pages)
6. Click **Create repository**

---

## Step 2: Connect Your Local Git to GitHub (1 minute)

Copy the commands below and paste them in your terminal (replace with your details):

```bash
# Replace YOUR_USERNAME with your GitHub username
# Replace YOUR_REPO with your repository name (e.g., terralabs-website)

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub (this will ask for your GitHub username/password/token)
git push -u origin main
```

**Example (if your username is `alexchernyshev` and repo is `terralabs-website`):**
```bash
git remote add origin https://github.com/alexchernyshev/terralabs-website.git
git push -u origin main
```

---

## Step 3: Enable GitHub Pages (1 minute)

1. Go to your new GitHub repository page
2. Click **Settings** (gear icon, top-right)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**, find **Source**
5. Select **GitHub Actions**
6. Click **Save**

---

## Step 4: Wait for Deployment (2-5 minutes)

The GitHub Actions workflow will automatically:

1. ✅ Build your Next.js website
2. ✅ Export it as static HTML/CSS/JS
3. ✅ Deploy to GitHub Pages

**Track Progress:**
- Click the **Actions** tab in your repository
- Watch the "Deploy to GitHub Pages" workflow run
- It should turn green (✅) when complete

---

## 🎉 Your Website Is Live!

Once deployment completes:

1. Go to **Settings** → **Pages**
2. Your URL will appear at the top, e.g.:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO
   ```

**Example:**
```
https://alexchernyshev.github.io/terralabs-website
```

Click the link to visit your live Terra Labs website! 🎊

---

## 📱 What's Deployed

Your website includes:
- ✅ Terra Labs branding & logo
- ✅ Dark mode toggle (Sun/Moon icon)
- ✅ Three core services: AI/RAG, Big Data, Go/Java
- ✅ Contact form with your email, phone, and Krakow address
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional statistics section
- ✅ About section for solo founder

---

## 🔄 Updating Your Website

To make changes later:

1. Edit files in your local project
2. Test locally: `bun run dev`
3. Commit & push:
   ```bash
   git add .
   git commit -m "Your change description"
   git push
   ```
4. GitHub Actions automatically rebuilds and deploys!

---

## 🌐 Using a Custom Domain (Optional)

If you want `terralabs.com` instead of the GitHub URL:

1. **Create a CNAME file:**
   ```bash
   echo "terralabs.com" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS:**
   - Go to your domain registrar (e.g., Namecheap, GoDaddy)
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Wait up to 48 hours for DNS propagation

3. **Update GitHub Pages:**
   - Settings → Pages
   - Enter `terralabs.com` as custom domain
   - Enable Enforce HTTPS

---

## 🔧 Troubleshooting

**Can't push to GitHub?**
- Make sure you're logged into GitHub CLI, OR
- Use a Personal Access Token (Settings → Developer settings → Personal access tokens)

**Build fails in GitHub Actions?**
- Go to Actions tab → Click on failed workflow
- Check the error logs
- Make sure you pushed all files (`git push`)

**404 error on website?**
- Verify GitHub Pages is enabled in Settings
- Check that the Actions workflow completed successfully (green checkmark ✅)

**Theme doesn't work?**
- Theme uses localStorage - make sure cookies are enabled in your browser
- Try hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

---

## 📚 Need More Help?

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Next.js Static Exports**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Deployment Guide**: See `GITHUB_PAGES_DEPLOYMENT.md` in your project

---

## ✨ Share Your Website!

Once live, share it on:
- LinkedIn: Add to your profile
- Email: Send to clients and contacts
- Portfolio: Include in your work samples

**Congratulations! Your Terra Labs website is live! 🎊**
