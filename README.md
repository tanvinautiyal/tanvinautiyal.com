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
- `assets/photos/photoNN.jpg` — gallery. Update the `photos` list in `content.js` with captions and set `tall: true` on any you want to span two rows.
- `assets/logos/name.png` — optional. Add `logo: "assets/logos/name.png"` to an organisation in `content.js` to show a logo instead of its name.

## Updating via Claude

Open Claude Code in this folder and describe the change in plain language, for example
"add my new Substack post about X" or "swap the Google summary for this text".
Claude edits `content.js`, commits and pushes. GitHub Pages redeploys in about a minute.

## Deploying

The site is served by GitHub Pages from the `main` branch, root folder.
Custom domain is set in `CNAME`.
