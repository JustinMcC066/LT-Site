# Let's Talk SPHE — Site Update Guide

## Overview

The site is hosted on **Vercel** and automatically deploys from the GitHub repo. Any changes pushed to the `main` branch will trigger a new deployment.

- **GitHub Repo:** github.com/R22JMC/Lets-Talk-Website
- **Hosting:** Vercel (Rooftop Twenty Two team)

## Team Access

### GitHub (can push code changes)
- justin@rooftoptwentytwo.ie
- cathal@rooftoptwentytwo.ie
- padraic@rooftoptwentytwo.ie
- connor@moveatpace.com

### Vercel (can manage hosting, domains, deployments)
- justin@rooftoptwentytwo.ie (Owner)
- cathal@rooftoptwentytwo.ie (Owner)

## Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:R22JMC/Lets-Talk-Website.git
cd Lets-Talk-Website
```

### 2. Open locally

Open any `.html` file in your browser to preview. For example:

```bash
open homepage.html
```

## Making Updates

### 1. Pull the latest changes

Always pull before making edits to avoid conflicts:

```bash
git pull origin main
```

### 2. Edit the files

The site is static HTML. Key files:

| File | Page |
|------|------|
| `homepage.html` | Homepage |
| `about.html` | About |
| `contact.html` | Contact |
| `courses.html` | Courses |
| `for-schools.html` | For Schools |
| `for-teachers.html` | For Teachers |
| `resources.html` | Resources |
| `platform.html` | Platform |
| `student-support.html` | Student Support |

Assets (images, logos, etc.) are in the `assets/` folder.

### 3. Preview your changes

Open the edited file in your browser to check it looks correct.

### 4. Commit and push

```bash
git add .
git commit -m "Brief description of your change"
git push origin main
```

### 5. Verify the deployment

After pushing, Vercel will automatically build and deploy. You can check the deployment status on the Vercel dashboard.

## Tips

- **Small commits:** Make small, focused changes and commit often. This makes it easier to track and revert if needed.
- **Pull before you push:** Always `git pull origin main` before starting work to get the latest version.
- **Communicate:** Let the team know if you're working on a page to avoid two people editing the same file at the same time.

## Domain Management

Domain settings are managed via the Vercel dashboard. Contact Justin or Cathal to add or update domains.
