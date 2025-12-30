# HILDINGS HANTVERK – DEVELOPER README

This document is intended for developers or technically interested users.
It explains how the project is structured, how to run it locally, and how hosting works.

--------------------------------------------------
## TECH STACK
--------------------------------------------------
- Eleventy (11ty) – Static Site Generator
- HTML / CSS / JavaScript
- Node.js + npm
- GitHub Pages (hosting)

--------------------------------------------------
## PROJECT STRUCTURE
--------------------------------------------------

src/
 ├── _includes/        Layouts and shared components
 ├── css/              Global styles
 ├── assets/
 │    └── js/          JavaScript files
 ├── images/           All image assets
 ├── data/
 │    ├── products.json
 │    └── gallery.json
 ├── contact.html
 ├── gallery.html
 └── index.html

_site/
 └── (Generated output – DO NOT EDIT)

.eleventy.js           Eleventy configuration
package.json           Project dependencies and scripts

--------------------------------------------------
## IMPORTANT DATA FILES
--------------------------------------------------

products.json
- Controls all products shown in the catalog
- Each product includes name, image, price, and descriptions

gallery.json
- Controls gallery images
- Each image has a size (small / medium / large)

Only these files should be edited for content updates.

--------------------------------------------------
## INSTALLATION (WSL2 – Recommended)
--------------------------------------------------

1. Install WSL2:
   https://learn.microsoft.com/windows/wsl/install

2. Open Ubuntu terminal

3. Install Node.js and npm:
   sudo apt update
   sudo apt install nodejs npm

4. Clone the repository:
   git clone https://github.com/flugge00/hildings-hantverk-hemsida.git
   cd hildings-hantverk-hemsida

5. Install dependencies:
   npm install

--------------------------------------------------
## DEVELOPMENT (WINDOWS POWERSHELL)
--------------------------------------------------

1. Install Node.js:
   https://nodejs.org

2. Clone the repository using Git for Windows:
   https://git-scm.com

3. Run:
   npm install
   npm run start

--------------------------------------------------
## RUNNING LOCALLY
--------------------------------------------------

Option 1 – Eleventy dev server:
   npm run start

Option 2 – VS Code Live Server:
   - Install Live Server extension
   - Right-click _site/index.html → Open with Live Server

--------------------------------------------------
## HOSTING (GITHUB PAGES)
--------------------------------------------------

- The main branch is automatically deployed
- Output folder: _site
- Hosted via GitHub Pages

--------------------------------------------------
### CUSTOM DOMAIN (FUTURE)
--------------------------------------------------

1. Buy a domain (e.g. Loopia, Namecheap)
2. Add a CNAME file with your domain name
3. Update DNS records to point to GitHub Pages
4. Change pathPrefix in Eleventy config