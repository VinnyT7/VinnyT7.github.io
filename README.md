# Patrik Tomažič s.p.

Business and project consulting website built with React, Vite, and Tailwind CSS.

## Edit and preview locally

1. Install [Node.js 22](https://nodejs.org/) and [pnpm 10](https://pnpm.io/installation).
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the local development server:
   ```bash
   pnpm dev
   ```
4. Open the URL printed in the terminal.

The main page is in `src/App.tsx`, global styles are in `src/index.css`, and page metadata is in `.figma/make/site.json`.

## Photography

The site uses Ljubljana photography from [Unsplash](https://unsplash.com/), which is available under the [Unsplash License](https://unsplash.com/license):

- Lake Bled by [Ben Schr](https://unsplash.com/@benschr)
- Sunlit workspace by [Mikey Harris](https://unsplash.com/@mikeyharris)
- Slovenian alpine valley by [Aleš Krivec](https://unsplash.com/@aleskrivec)

## Publish with GitHub Pages

1. Create a new GitHub repository. Do not initialize it with another README.
2. From this project folder, connect and push the repository:
   ```bash
   git init
   git add .
   git commit -m "Add consulting website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```
   If the project is already a Git repository, skip `git init`. Replace the example URL with the repository URL GitHub gives you.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the repository’s **Actions** tab and wait for the “Deploy to GitHub Pages” workflow to finish.
6. Return to **Settings → Pages** to find the public URL.

Every later push to `main` automatically republishes the site.

## Connect a custom domain later

1. In **Settings → Pages**, enter the domain under **Custom domain** and save it.
2. At the domain registrar, create the DNS records GitHub displays or follow [GitHub’s custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. Wait for DNS verification, then enable **Enforce HTTPS** in GitHub Pages settings.

Configure the domain in GitHub before changing DNS. Do not commit a `CNAME` file unless GitHub instructs you to; GitHub can manage it from the Pages settings.
