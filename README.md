# HILDINGS HANTVERK – Hemsida
-----------------------------------------------

This website is built so that non-developers can easily update content like
products and gallery images without touching any code.

You mainly work with TWO files:
- products.json
- gallery.json


No programming knowledge is required for normal updates.

--------------------------------------------------
### For developing, see README file under src/
--------------------------------------------------

--------------------------------------------------
## QUICK START (NON-DEVELOPER FRIENDLY)
--------------------------------------------------

1. Open the project folder
2. Go to:
   src/_data/

3. Edit one of these files:
   - products.json  → products in the catalog
   - gallery.json   → images in the gallery

4. Save the file
5. Refresh the website


--------------------------------------------------
## EDITING PRODUCTS (products.json)
--------------------------------------------------

File:
src/_data/products.json

Each product looks like this:

{
  "name": "Product name",
  "price": "350 kr",
  "image": "/images/example.jpg",
  "shortDesc": "Short description",
  "longDesc": "Longer description shown in popup"
}

What you can safely change:
- name
- price
- image
- shortDesc
- longDesc

IMPORTANT:
- Keep quotation marks
- Do NOT remove commas
- Images must exist in src/images/


--------------------------------------------------
## EDITING GALLERY (gallery.json)
--------------------------------------------------

File:
src/_data/gallery.json

Each gallery item looks like this:

{
  "image": "/images/gallery1.jpg",
  "alt": "Description of image"
}

You can:
- Add new images
- Remove images
- Change the order

Images must be placed in:
src/images/


--------------------------------------------------
## WHERE IMAGES GO
--------------------------------------------------

All images must be placed in:

src/images/

Recommended:
- JPG
- Around 1200x1600 resolution
- Optimized size (under 500 KB if possible)
- Use squoosh.app to convert sizes to the right size


--------------------------------------------------
## RUNNING THE WEBSITE LOCALLY
--------------------------------------------------

OPTION 1 (Easiest):
- Install VS Code
- Install the “Live Server” extension
- Open the _site folder
- Right-click index.html → “Open with Live Server”

OPTION 2 (Developer mode):
- Requires Node.js
- Run:
  npm install
  npm run start


--------------------------------------------------
## HOW THE WEBSITE IS HOSTED
--------------------------------------------------

- The website is hosted using GitHub Pages
- When changes are pushed to the main branch, the site updates automatically
- No manual upload needed

