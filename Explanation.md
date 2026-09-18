# Deploying a React + Vite Project to GitHub Pages

A reference for future me. Follow this every time you want to put a React/Vite project live on GitHub Pages.

---

## The Core Idea

GitHub Pages is a **static file server**. It can only serve plain HTML/CSS/JS — it cannot run React, JSX, or Vite.

So there are always **two versions** of your project:

| Branch | Contains | Purpose |
|---|---|---|
| `main` | Your raw source code (JSX, configs, unbuilt) | Version history, editing |
| `gh-pages` | The **built** output (`dist` folder contents) | What the browser actually loads live |

`npm run build` is the "translator" that turns your React code into plain files a browser understands. GitHub Pages only ever serves the translated version.

---

## One-Time Setup (per project)

### 1. Set the base path in `vite.config.js`
GitHub Pages serves project repos at `username.github.io/repo-name/`, not the root. Vite needs to know this or all your asset paths will 404.

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // must match your exact repo name
})
```

### 2. If using React Router, add `basename`
```jsx
const router = createBrowserRouter(
  createRoutesFromElements(...),
  { basename: "/your-repo-name/" }
);
```

### 3. Install the `gh-pages` package
```bash
npm install gh-pages --save-dev
```

### 4. Add deploy scripts to `package.json`
```json
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
- `predeploy` runs automatically before `deploy` — no need to call it manually.
- `deploy` takes the `dist` folder and force-pushes it to a `gh-pages` branch.

### 5. Add a `.nojekyll` file (Windows-safe way)
```bash
echo. > public\.nojekyll
```
Prevents GitHub's Jekyll processor from messing with folders that start with `_` or other special characters in your build output.

### 6. First deploy
```bash
npm run deploy
```
This creates the `gh-pages` branch on GitHub automatically.

### 7. Point GitHub Pages at the right branch
Repo → **Settings → Pages** → Source → **Deploy from a branch** → Branch: **`gh-pages`**, folder **`/ (root)`** → Save.

Wait 1–2 minutes, then visit:
```
https://yourusername.github.io/your-repo-name/
```

---

## Every Time You Update the Project

Two separate steps — don't skip either:

```bash
git add .
git commit -m "describe your changes"
git push              # updates main — your source code / history

npm run deploy        # rebuilds dist + updates gh-pages — the live site
```

`git push` alone does **not** update your live site. You must also run `npm run deploy`.

---

## Common Errors & Fixes

**White screen + 404 in console**
→ `base` in `vite.config.js` doesn't match your repo name, or you forgot `basename` in the router. Rebuild and redeploy after fixing.

**404 when refreshing on a route like `/jobs/5`**
→ GitHub Pages has no idea about client-side routes; it looks for a literal folder called `jobs` and fails. Fixes:
- Easiest: use `createHashRouter` instead of `createBrowserRouter` (URLs get a `#`, e.g. `/#/jobs`, but zero config needed).
- Cleaner but more setup: add a `404.html` redirect trick (search "spa-github-pages" for the script).

**`npm error Missing script: "deploy"`**
→ You forgot to add the `deploy`/`predeploy` scripts to `package.json` (Step 4 above).

**`'touch' is not recognized` (Windows)**
→ Use `echo. > public\.nojekyll` instead of `touch public/.nojekyll`.

**Deployed but still showing old content**
→ Hard refresh: `Ctrl + Shift + R`. Browsers aggressively cache static sites.

---

## When to Skip GitHub Pages Entirely

GitHub Pages works, but for React/Vite projects, **Vercel** or **Netlify** are usually less friction:
- No `base` config needed
- No routing 404 workarounds needed
- Auto-deploys on every `git push` (no separate `npm run deploy` step)

Good rule: use GitHub Pages for plain HTML/CSS/JS static sites. Use Vercel/Netlify for React/Vite apps.