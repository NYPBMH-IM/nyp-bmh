# NYP BMH Internal Medicine Residency Website

A complete website for the NYP Brooklyn Methodist Internal Medicine Residency Program.
Built with plain HTML/CSS/JS — no frameworks needed.

---

## Files Included

```
nyp-bmh/
├── index.html          ← Homepage
├── didactics.html      ← Didactics & Exams
├── schedules.html      ← Schedules
├── policies.html       ← Policies & Guidelines
├── resources.html      ← Resources (payroll, forms, EPIC, MTR, etc.)
├── wellness.html       ← Resident Wellness
├── recruitment.html    ← Recruitment page
├── phone-directory.html← Phone Directory
├── css/
│   └── style.css       ← All styles
└── js/
    └── shared.js       ← Navigation & footer (shared across all pages)
```

---

## How to Add OneDrive Embeds

Each page has placeholder sections like this:

```html
<!-- PASTE YOUR ONEDRIVE EMBED BELOW THIS LINE -->
```

To get your embed code:
1. Go to **OneDrive on the web** (onedrive.live.com or your Microsoft 365)
2. Right-click the folder or file → **Embed**
3. Copy the `<iframe>` code
4. Open the relevant HTML file in any text editor (Notepad, TextEdit, VS Code)
5. Find the placeholder comment and paste the iframe code below it

Example:
```html
<!-- PASTE YOUR ONEDRIVE LECTURES EMBED BELOW THIS LINE -->
<iframe src="https://onedrive.live.com/embed?..." width="100%" height="400" frameborder="0" scrolling="no"></iframe>
```

---

## How to Update Content

- **Change text:** Open any `.html` file in Notepad and edit the text directly
- **Add an announcement:** Copy one of the `<div class="ann-item">` blocks in `index.html` and paste/edit it
- **Change a link:** Find the `href="..."` and update the URL
- **Add a new form link:** Find the forms section in `resources.html` and add a new `<a href="..." class="card">` block

---

## How to Deploy on GitHub Pages (FREE)

1. Go to **github.com** and create a free account
2. Click **New Repository** → name it `nyp-bmh` → set to **Public** → click Create
3. Click **Upload files** → drag all the files and folders from this zip
4. Click **Commit changes**
5. Go to **Settings** → **Pages** → under Source select **main** branch → click Save
6. Your site will be live at: `https://YOUR-USERNAME.github.io/nyp-bmh/`

That's it! Updates: just re-upload the changed files.

---

## How to Deploy on SharePoint (if IT approves)

1. Create a new SharePoint site
2. Add a "Web Part" → choose "Embed"
3. Paste the HTML content of each page into the embed
4. Or: ask IT to host these files directly on the SharePoint file server

---

## Customization Tips

- **Logo:** Replace the "NYP" text box with an `<img>` tag pointing to your logo file
- **Program director welcome:** Add a quote or message in the hero section of `index.html`
- **Resident photos:** Embed a OneDrive folder with headshots in the `recruitment.html` page
- **Color changes:** Edit `--red`, `--navy`, `--gold` values at the top of `css/style.css`
- **Add a page:** Copy any existing `.html` file, update the content, and add it to the nav in `js/shared.js`

---

## Questions?

Contact your chief residents or IT Help Desk: 212-746-4357
