# Automated Accessibility Testing with axe-core CLI

This script will run accessibility tests on your built site using axe-core CLI.

## 1. Install axe-core CLI

Open your terminal and run:

npm install -g @axe-core/cli

## 2. Build your Astro site

npm run build

## 3. Serve your site locally (if not already running)

npx serve dist

## 4. Run axe-core CLI against your local site

axe http://localhost:3000 --save results.json

# The results will be saved to results.json for review.
# You can change the URL to test other pages (e.g., http://localhost:3000/standard/).

# For more options, see: https://github.com/dequelabs/axe-core-npm/tree/develop/packages/cli
