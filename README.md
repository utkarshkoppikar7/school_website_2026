# Sheela Koppikar Vidya Mandir (SKVM)

The official website for **Sheela Koppikar Vidya Mandir, Dharwad** — a school
established in 1986, built around the idea of *building leaders with heart & soul*.

This is a fast, dependency-free static website: plain HTML, CSS and JavaScript.
There is no build step and no framework to install.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Academics | `academics.html` |
| Admissions | `admissions.html` |
| Admission Process | `admission-process.html` |
| Events | `events.html` |
| Life at SKVM | `life-at-skvm.html` |
| Monthly Competitions | `monthly-competitions.html` |
| School Assembly | `school-assembly.html` |
| Sports | `sports.html` |
| Classroom Activities | `classroom-activities.html` |
| Mental Math | `mental-math.html` |
| Spell Bee | `spell-bee.html` |
| Sambhramada Shanivaar | `sambhramada-shanivaar.html` |
| Science Exhibition | `science-exhibition.html` |
| Contact | `contact.html` |

## Project structure

```
.
├── index.html                 # 16 static pages
├── *.html
├── css/
│   └── styles.css             # All site styles
├── js/
│   └── main.js                # Mobile nav, scroll reveal, small interactions
└── assets/
    └── images/                # Photos used across the site
        └── gallery/           # Event and activity gallery images
```

## Run locally

No installation required. Either:

1. Open `index.html` directly in a browser, **or**
2. Serve the folder locally (recommended):

   ```bash
   python -m http.server 8000
   ```

   Then visit <http://localhost:8000>.

## Deployment

The site works on any static host. For GitHub Pages:

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the **main** branch and the **/ (root)** folder, then save.

The included `.nojekyll` file tells GitHub Pages to serve the files as-is.

## Editing

- **Content:** edit the relevant `.html` file directly.
- **Styling:** all styles live in `css/styles.css`.
- **Behaviour:** navigation and scroll effects live in `js/main.js`.
- **Images:** add or replace files in `assets/images/` and update the `src`
  attributes that reference them.

## License

All content and photographs belong to Sheela Koppikar Vidya Mandir.
