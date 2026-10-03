# tanvinautiyal.com

Personal portfolio. Plain HTML, CSS and JavaScript. No build step, no dependencies.

## How the site is organised

| File | What it is | Change it when |
|---|---|---|
| `content.js` | All the words, links, jobs, projects, books, photos | You want to update anything on the site |
| `index.html` | Page skeleton and section order | You want to add or reorder a section |
| `style.css` | Colours, fonts, layout | You want a different look |
| `main.js` | Turns `content.js` into the page | Rarely |
| `assets/` | Headshot, photos, logos | You have new images |

Everything a recruiter reads comes from `content.js`. To add a new article, job, book or project, add an entry to the matching list in that file. The site re-renders itself.

## Images

- `assets/headshot.jpg` — hero portrait. Portrait orientation, at least 1000px tall.
- `assets/photos/` — gallery photos, web-sized (about 2000px on the long edge), with a small copy of the same name in `assets/photos/thumbs/` (about 900px). List each one in the `photos` section of `content.js` with its caption and date. Full-resolution originals live in `assets/photos/originals/`, which is not uploaded.
- `assets/logos/name.png` — optional. Add `logo: "assets/logos/name.png"` to an organisation in `content.js` to show a logo instead of its name.

## Updating

Edit `content.js`, commit and push. GitHub Pages redeploys in about a minute.
To preview locally first, run `serve.ps1` and open http://localhost:8765.

## Deploying

The site is served by GitHub Pages from the `main` branch, root folder.
Custom domain is set in `CNAME`.
