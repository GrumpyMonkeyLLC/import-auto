# Import AutoCare – Website Replica

Static HTML/CSS/JS replication of [import-autocare.com](https://www.import-autocare.com/) intended for GitHub Pages or any static host.

## File Structure

```
import-autocare/
├── index.html        ← Main homepage
├── styles.css        ← All CSS (typography, layout, responsive)
├── scripts.js        ← Mobile nav, counter animation, fade-ins
├── images/           ← Drop your image assets here (see below)
└── README.md
```

## Images Needed

Replace the placeholder `images/` paths with your actual assets:

| File | Used For |
|------|----------|
| `images/logo.webp` | Header logo |
| `images/logo-footer.webp` | Footer logo |
| `images/hero-bg.webp` | Hero section background |
| `images/shop.webp` | About section photo |

You can also swap `.webp` for `.jpg` or `.png` — just update the `src` attributes in `index.html`.

## Running Locally

```bash
# Any static server works, e.g.:
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo.
2. Go to **Settings → Pages**.
3. Set the source to your `main` branch, root `/`.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Tech Stack

- Plain HTML5
- Vanilla CSS3 (CSS variables, Grid, Flexbox, sticky header, responsive breakpoints)
- Vanilla JavaScript (IntersectionObserver for counter + fade-ins, mobile nav toggle)
- Google Fonts: Oswald + Open Sans

No build tools or frameworks required.
