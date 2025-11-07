# Deployment Guide - Judicial Portal

## 🚀 Deployment Options

Your Judicial Portal can be deployed to various platforms. Here are the most popular options:

---

## Option 1: Netlify (Recommended - Easiest)

### Steps:

1. **Build the project:**
   ```powershell
   npm run build
   ```

2. **Install Netlify CLI:**
   ```powershell
   npm install -g netlify-cli
   ```

3. **Deploy:**
   ```powershell
   netlify deploy
   ```
   - Follow the prompts
   - Choose "Create & configure a new site"
   - Select your team
   - Enter site name (e.g., judicial-portal)
   - Set publish directory: `dist`

4. **Deploy to production:**
   ```powershell
   netlify deploy --prod
   ```

### Or Deploy via Netlify Website:

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up/Login
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your `dist` folder
5. Your site is live!

**Site will be available at:** `https://your-site-name.netlify.app`

---

## Option 2: Vercel

### Steps:

1. **Install Vercel CLI:**
   ```powershell
   npm install -g vercel
   ```

2. **Deploy:**
   ```powershell
   vercel
   ```
   - Login when prompted
   - Follow the setup wizard
   - Confirm settings

3. **Deploy to production:**
   ```powershell
   vercel --prod
   ```

### Or Deploy via Vercel Website:

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Import your project
4. Vercel auto-detects Vite settings
5. Click "Deploy"

**Site will be available at:** `https://your-project.vercel.app`

---

## Option 3: GitHub Pages

### Steps:

1. **Install gh-pages:**
   ```powershell
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`:** (Already configured if needed)

3. **Add deploy script to `package.json`:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy:**
   ```powershell
   npm run deploy
   ```

**Site will be available at:** `https://your-username.github.io/portal`

---

## Option 4: Firebase Hosting

### Steps:

1. **Install Firebase CLI:**
   ```powershell
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```powershell
   firebase login
   ```

3. **Initialize Firebase:**
   ```powershell
   firebase init hosting
   ```
   - Select existing project or create new
   - Set public directory: `dist`
   - Configure as single-page app: `Yes`
   - Don't overwrite index.html

4. **Build and deploy:**
   ```powershell
   npm run build
   firebase deploy
   ```

**Site will be available at:** `https://your-project.firebaseapp.com`

---

## Option 5: Render

### Steps:

1. Go to [https://render.com](https://render.com)
2. Sign up/Login
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Click "Create Static Site"

**Site will be available at:** `https://your-site.onrender.com`

---

## 📦 Pre-Deployment Checklist

Before deploying, make sure:

- [x] Build works locally: `npm run build`
- [x] No console errors in production build
- [x] Test the production build: `npm run preview`
- [x] All routes work correctly
- [x] Images and assets load properly
- [x] Mobile responsive design is working

---

## 🔧 Current Build Output

Your production build will be in the `dist` folder with:
- Optimized JavaScript bundles
- Minified CSS
- Compressed assets
- Index.html entry point

---

## 🌐 Quick Deploy Commands

### Test Production Build Locally:
```powershell
npm run build
npm run preview
```
This will start a local server at `http://localhost:4173`

### Deploy to Netlify (Fastest):
```powershell
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### Deploy to Vercel (Alternative):
```powershell
npx vercel --prod
```

---

## 📝 Environment Variables

If you need environment variables in production:

1. Create `.env.production` file
2. Add variables with `VITE_` prefix:
   ```
   VITE_API_URL=https://api.example.com
   ```
3. Access in code: `import.meta.env.VITE_API_URL`

---

## 🚨 Common Issues & Solutions

### Issue: Routes not working (404 on refresh)
**Solution:** Configure redirects for SPA

**For Netlify:** Create `public/_redirects` file:
```
/*    /index.html   200
```

**For Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Issue: Assets not loading
**Solution:** Check `base` in `vite.config.js`

### Issue: Build fails
**Solution:** 
- Clear node_modules: `rm -r node_modules`
- Reinstall: `npm install`
- Try build again: `npm run build`

---

## 🎉 Recommended: Deploy to Netlify

**Why Netlify?**
- ✅ Free tier with generous limits
- ✅ Automatic HTTPS
- ✅ CDN included
- ✅ Easy custom domain setup
- ✅ Continuous deployment from Git
- ✅ Instant rollbacks

**Quick Netlify Deploy:**
```powershell
npm run build
npx netlify-cli deploy --prod --dir=dist
```

---

## 📱 Post-Deployment

After deployment:
1. Test all pages and routes
2. Test on mobile devices
3. Check browser console for errors
4. Share your live URL! 🎊

**Your site will be live and accessible worldwide!** 🌍
