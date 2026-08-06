# 🚀 Deployment Guide — Aryan Singh Nagar Portfolio

This guide walks you through deploying your portfolio to GitHub Pages in **under 5 minutes**. The repo is pre-configured with a GitHub Action that auto-deploys on every push to `main`.

---

## ⚡ Quick Deploy (4 commands)

### Step 1 — Create the GitHub repository

Go to: **https://github.com/new**

- **Repository name**: `aryansinghnagar.github.io` *(must be exactly this — lowercase, no spaces)*
- **Description**: `Generative AI Engineer · ML Engineer · Full-Stack Developer — IIT Bombay '25`
- **Visibility**: **Public** (required for free GitHub Pages)
- **Initialize**: Leave unchecked (do NOT add README, .gitignore, or license — we have them)
- Click **Create repository**

### Step 2 — Push the code

From the terminal, in the project root:

```bash
cd /path/to/portfolio

# Initialize git (skip if .git already exists)
git init
git branch -M main

# Add all files
git add .
git commit -m "feat: initial portfolio — Neon Blue x Platinum, IIT Bombay '25"

# Add your GitHub remote (replace aryansinghnagar with your actual username)
git remote add origin https://github.com/aryansinghnagar/aryansinghnagar.github.io.git

# Push
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to: **https://github.com/aryansinghnagar/aryansinghnagar.github.io/settings/pages**
2. Under **Build and deployment** → **Source**: select **GitHub Actions**
3. That's it. The deploy workflow will run automatically on every push.

### Step 4 — Verify the live site

- Wait ~90 seconds for the GitHub Action to complete: https://github.com/aryansinghnagar/aryansinghnagar.github.io/actions
- Visit your live portfolio: **https://aryansinghnagar.github.io**
- Run a quick check:
  - [ ] Hero loads with name + headshot
  - [ ] All 6 nav links scroll to correct sections
  - [ ] Theme toggle (top right) switches dark/light
  - [ ] "Download Resume" downloads the PDF
  - [ ] Contact form opens email client pre-filled
  - [ ] Mobile responsive (test in DevTools)

---

## 🔄 Updating the portfolio

After the initial deploy, every future update is automatic:

```bash
git add .
git commit -m "update: <describe your change>"
git push
```

The GitHub Action will rebuild and redeploy within ~90 seconds. No manual steps required.

---

## 📧 Enabling the contact form (Formspree)

The contact form currently opens the user's email client (mailto:). To enable server-side form submission via Formspree (no backend needed):

### 1. Create a Formspree endpoint
- Go to: **https://formspree.io**
- Sign up with `asn.dyrnwyn@gmail.com`
- Click **New Form** → name it "Portfolio Contact"
- Copy the form ID (looks like `xayznvqe`)

### 2. Update the contact form code

Open: `src/components/sections/contact.tsx`

Find this block (around line 38-50):
```typescript
// Build a mailto: link as a no-backend fallback.
// To enable Formspree: replace this block with:
//   await fetch('https://formspree.io/f/YOUR_ID', {
//     method: 'POST', headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
const body = encodeURIComponent(...)
const mailtoUrl = `mailto:...`;
window.open(mailtoUrl, '_self');
```

Replace it with:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(data),
});

if (!response.ok) throw new Error('Form submission failed');
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### 3. Commit & push
```bash
git add src/components/sections/contact.tsx
git commit -m "feat: enable Formspree contact form"
git push
```

### 4. Verify
- Submit a test message through the form
- Check your `asn.dyrnwyn@gmail.com` inbox — Formspree will forward the message
- Confirm submissions appear in your Formspree dashboard

---

## 📊 Enabling Google Analytics 4

You requested GA4. To enable:

### 1. Create a GA4 property
- Go to: **https://analytics.google.com**
- Create a new property → name it "Portfolio"
- Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### 2. Install the GA4 package
```bash
bun add @next/third-parties
```

### 3. Add GA4 to the layout

Open `src/app/layout.tsx` and add at the top:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google';
```

Add inside the `<body>` tag, just before `</body>`:
```tsx
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### 4. Commit & push
```bash
git add -A
git commit -m "feat: enable Google Analytics 4"
git push
```

### 5. Verify
- Visit your live site
- Check GA4 Realtime reports — you should see yourself as an active user within 30 seconds

---

## 🌐 Optional — Custom domain (later)

If you later buy a custom domain (e.g., `aryansinghnagar.dev`):

### 1. Add a CNAME file
Create `public/CNAME` with your domain:
```
aryansinghnagar.dev
```

### 2. Configure DNS at your registrar
Add an **A record** pointing to GitHub Pages IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Or a **CNAME record**:
```
www  CNAME  aryansinghnagar.github.io.
```

### 3. Enable HTTPS
- Go to repo Settings → Pages
- Under "Custom domain", enter your domain → **Save**
- Check "Enforce HTTPS" (may take up to 24 hours to activate)

### 4. Commit & push
```bash
git add public/CNAME
git commit -m "feat: add custom domain"
git push
```

---

## 🛠️ Local development

To run the portfolio locally for testing or content edits:

```bash
cd /path/to/portfolio
bun install        # first time only
bun run dev        # starts dev server on http://localhost:3000
bun run lint       # check code quality
```

---

## 📁 Project structure

```
aryansinghnagar.github.io/
├── .github/workflows/deploy.yml    # Auto-deploy on push to main
├── public/
│   ├── assets/
│   │   ├── headshot.jpg            # Your headshot
│   │   └── Aryan_Singh_Nagar_Resume.pdf
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout + SEO metadata
│   │   ├── page.tsx                # Main page (assembles all sections)
│   │   └── globals.css             # Neon Blue x Platinum design system
│   ├── components/
│   │   ├── sections/               # All portfolio sections
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── education.tsx
│   │   │   └── contact.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       └── portfolio-data.ts       # ⭐ Single source of truth for all content
├── next.config.ts
├── package.json
└── README.md                       # This file
```

---

## ✏️ Editing content

**All portfolio content lives in one file**: `src/lib/portfolio-data.ts`

To update:
- **Experience**: edit the `experiences` array
- **Projects**: edit the `projects` array
- **Skills**: edit the `skills` array
- **Education / Certifications / Achievements**: edit respective arrays
- **Contact info / socials**: edit `profile` and `socials` objects

After editing, commit and push — the site auto-redeploys.

---

## 🆘 Troubleshooting

### The deploy action failed
Check the logs at: `https://github.com/aryansinghnagar/aryansinghnagar.github.io/actions`
Common causes:
- **Build error**: usually a TypeScript issue — run `bun run lint` locally
- **Permission denied**: ensure Settings → Pages → Source is set to "GitHub Actions"

### The site shows 404
- Verify the repo name is EXACTLY `aryansinghnagar.github.io` (lowercase)
- Verify the repo is **Public** (Settings → General → Danger Zone → Change visibility)
- Wait 2-3 minutes after the first push — GitHub Pages can be slow on initial setup

### Images don't load
- All images must be in the `public/` folder
- Reference them with paths starting from `/` (e.g., `/assets/headshot.jpg`)
- For external images, ensure domains are whitelisted in `next.config.ts`

### Theme toggle doesn't work
- Clear browser cache and hard-refresh (Ctrl+Shift+R / Cmd+Shift+R)
- Check console for JavaScript errors (F12 → Console)

---

## ✅ Final checklist

Before sharing your portfolio link with recruiters:

- [ ] Site loads at `https://aryansinghnagar.github.io`
- [ ] All sections render correctly (Hero, About, Skills, Experience, Projects, Education, Contact)
- [ ] Mobile responsive (test on a phone or DevTools mobile view)
- [ ] Theme toggle works
- [ ] "Download Resume" downloads the PDF
- [ ] Contact form works (either mailto or Formspree)
- [ ] All GitHub links go to the right profile
- [ ] LinkedIn link works
- [ ] Google Analytics installed (optional)
- [ ] Run Lighthouse audit (Chrome DevTools → Lighthouse) — aim for 90+ on all metrics

---

**Built with**: Next.js 16 · TypeScript · Tailwind CSS 4 · Framer Motion · shadcn/ui
**Theme**: Dark Neon Blue (#00d4ff) × Platinum (#c8d0e0)
