# GitHub Pages Deployment Guide

This portfolio is configured for easy deployment to GitHub Pages.

## Prerequisites

1. Push your code to a GitHub repository
2. Ensure you have a clean working directory (all changes committed)

## Configuration Steps

### 1. Update the Homepage URL

Edit `package.json` and replace the placeholder with your actual GitHub username:

```json
"homepage": "https://[your-github-username].github.io/port"
```

**Example:**
If your GitHub username is `johndoe`, change it to:
```json
"homepage": "https://johndoe.github.io/port"
```

### 2. Deploy to GitHub Pages

Run the following command from the project root:

```bash
npm run deploy
```

This command will:
- Build your production-ready application (`npm run build`)
- Deploy the `dist/` folder to the `gh-pages` branch
- Push the branch to GitHub

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**

Your site will be available at: `https://[your-github-username].github.io/port/`

## Subsequent Deployments

After making changes to your portfolio:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. Deploy the updates:
   ```bash
   npm run deploy
   ```

Your changes will be live in a few minutes!

## Troubleshooting

### 404 Error or Blank Page

- Verify the `homepage` URL in `package.json` matches your GitHub username and repository name
- Ensure the `base` path in `vite.config.js` is `/port/` (or your repo name)
- Check that GitHub Pages is enabled and using the `gh-pages` branch

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Try deleting `node_modules` and `package-lock.json`, then reinstall: `npm install`
- Check that there are no console errors in development: `npm run dev`

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

See [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.

## Alternative: Deploy to Root Domain

If you want to deploy to `https://[your-github-username].github.io/` instead of `/port/`:

1. Rename your repository to `[your-github-username].github.io`
2. Update `package.json`:
   ```json
   "homepage": "https://[your-github-username].github.io"
   ```
3. Update `vite.config.js`:
   ```javascript
   base: '/',
   ```
4. Run `npm run deploy`
