---
description: How to deploy the vCRO application to Vercel
---

# Deploying to Vercel

Since this is a Next.js application, the easiest and best way to publish it is using [Vercel](https://vercel.com), the creators of Next.js.

## Option 1: Vercel CLI (Recommended for quick deploy)

1.  **Install Vercel CLI** (if you haven't already):
    ```bash
    npm i -g vercel
    ```

2.  **Login to Vercel**:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    Run the following command in your terminal. It will guide you through setting up the project (you can accept all defaults).
    ```bash
    // turbo
    vercel
    ```

4.  **Production Deploy**:
    Once checked, deploy to production:
    ```bash
    // turbo
    vercel --prod
    ```

## Option 2: Git Integration (Recommended for maintenance)

1.  Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Go to [Vercel Dashboard](https://vercel.com/new).
3.  Import your repository.
4.  Vercel will detect it's a Next.js app and configure the build settings automatically.
5.  Click **Deploy**.

## Build Command Verification

Before deploying, it is always good to verify the build locally:

```bash
// turbo
npm run build
```
