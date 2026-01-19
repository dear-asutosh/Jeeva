# Vercel 404 Error - Troubleshooting Guide

## What I've Done

1. ✅ Updated `vercel.json` with proper configuration:
   - Added `buildCommand`: `npm run build`
   - Added `outputDirectory`: `dist`
   - Added SPA rewrites to handle client-side routing

2. ✅ Verified local build works (dist folder created successfully)

## Steps to Fix on Vercel Dashboard

### Option 1: Check Vercel Project Settings (Recommended)

1. Go to your Vercel project dashboard
2. Click on **Settings** → **General**
3. Verify these settings:

   **Framework Preset**: `Vite`
   
   **Build & Development Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Root Directory**: Should be empty or `./` (NOT `project/`)

### Option 2: Redeploy with Updated vercel.json

Since I've updated `vercel.json`, you need to:

```bash
# Commit the changes
git add vercel.json
git commit -m "Fix Vercel deployment configuration"
git push origin main
```

Vercel will automatically redeploy with the new configuration.

### Option 3: Check Build Logs

1. Go to your Vercel deployment
2. Click on the failed deployment
3. Check the **Build Logs** tab
4. Look for errors like:
   - "Error: No output directory named 'dist' found"
   - Build failures
   - Missing dependencies

## Common Causes of 404 on Vercel

### 1. Wrong Root Directory
**Problem**: Vercel is looking in `d:/Jeeva/bolt/project` but your repo structure might be different.

**Solution**: 
- If your GitHub repo has the project files at the root → Root Directory should be empty
- If your GitHub repo has files inside a `project/` folder → Root Directory should be `project`

### 2. Wrong Output Directory
**Problem**: Vercel is looking for build files in the wrong place.

**Solution**: Ensure Output Directory is set to `dist` (which is Vite's default)

### 3. Build Failing Silently
**Problem**: Build command runs but fails, leaving no dist folder.

**Solution**: Check build logs for errors (import issues, missing dependencies, etc.)

## What to Do Next

1. **Push the updated vercel.json**:
   ```bash
   git add .
   git commit -m "Update Vercel configuration"
   git push origin main
   ```

2. **Check Vercel Settings**:
   - Go to your project settings
   - Verify Root Directory is correct
   - Verify Framework Preset is "Vite"

3. **Check Build Logs**:
   - Look at the deployment logs
   - Share any error messages you see

4. **If still failing**, try manual configuration:
   - Delete the project from Vercel
   - Re-import it
   - Let Vercel auto-detect settings
   - Don't override anything unless necessary

## Expected Vercel Configuration

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x or higher
```

## Need More Help?

Share the following:
1. Screenshot of Vercel project settings
2. Build logs from the failed deployment
3. Your GitHub repository structure (is the code at root or in a subfolder?)
