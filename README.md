# Muhammad Saad - Personal Portfolio

Personal portfolio website built with React + Vite.

🌐 **Live Site**: [https://muhammadsaad850.github.io/](https://muhammadsaad850.github.io/)

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ installed ([Download here](https://nodejs.org/))

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Build for Production

```bash
# Build the site
npm run build

# Preview the production build locally
npm run preview
```

## 📦 Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

### Initial Setup (One-time only)

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push any commit to `main` - the workflow will automatically build and deploy

That's it! No need to configure a `gh-pages` branch or manual deployments.

### How It Works

- The `.github/workflows/deploy.yml` workflow automatically:
  1. Installs dependencies
  2. Builds the React app
  3. Deploys to GitHub Pages
- The workflow runs on every push to `main`
- You can also manually trigger it from the Actions tab

## 🛠️ Tech Stack

- **React** 19.2.6
- **Vite** 8.0.12
- **ESLint** for code quality
- **GitHub Actions** for CI/CD

## 📝 Note

You cannot open `index.html` directly in your browser. This is a React application that requires:
- Development: Run `npm run dev`
- Production: Run `npm run build` then `npm run preview`
