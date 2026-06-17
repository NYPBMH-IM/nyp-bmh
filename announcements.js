/*
  NYP BMH — Announcements Loader
  ================================
  Reads from a publicly shared OneDrive Excel file (saved as CSV).

  HOW TO SET UP (one time):
  1. In OneDrive, open your Announcements.xlsx file
  2. Click File → Share → Anyone with the link can view
  3. Click the three dots (...) → Embed
  4. Copy the share link — it looks like:
     https://1drv.ms/x/s!Abc123...
  5. Convert it to a CSV download link by replacing the end with:
     &download=1
  6. Paste that URL below as ANNOUNCEMENTS_URL

  HOW CHIEFS UPDATE ANNOUNCEMENTS:
  - Open Announcements.xlsx in OneDrive
  - Add a new row with: Date, Month, Tag, Text, Subtext
  - Save — the website updates automatically within a few minutes
  - To remove an announcement: delete the row and save

  EXCEL FILE FORMAT (columns A-E):
  | Date | Month | Tag      | Text                        | Subtext                  |
  |------|-------|----------|-----------------------------|--------------------------|
  | 16   | JUN   | Reminder | Log your duty hours         | nypbmh.medhub.com        |
  | 18   | JUN   | IT Update| Google Drive being blocked  | Files moving to OneDrive |
*/

// ── PASTE YOUR ONEDRIVE CSV LINK HERE ──
const ANNOUNCEMENTS_URL = 'PASTE_YOUR_ONEDRIVE_CSV_LINK_HERE';
// ────────────────────────────────────────

// Fallback announcements shown before OneDrive is connected
const FALLBACK_ANNOUNCEMENTS = [
  {
    date: '16',
    month: 'JUN',
    tag: 'Reminder',
    text: 'Please log your duty hours in MEdhub',
    subtext: 'nypbmh.medhub.com · All residents'
  },
  {
    date: '18',
    month: 'JUN',
    tag: 'IT Update',
    text: 'Google Drive access blocked on NYP network — files moving to OneDrive',
    subtext: 'All shared file links will be updated shortly'
  },
  {
    date: '30',
    month: 'JUN',
    tag: 'Finance',
    text: 'Educational allowance reminder — $2,000/year, does not roll over',
    subtext: 'Contact program coordinator for reimbursement questions'
  },
  {
    date: '30',
    month: 'DAY',
    tag: 'Ongoing',
    text: 'Imprivata passwords must be reset every 30 days',
    subtext: 'infonetbrooklyn.nyp.org → Technology → Self Service Password Reset'
  }
];

function renderAnnouncements(items) {
  const container = document.getElementById('announcements-container');
  if (!container) return;
  if (!items || items.length === 0) {
    container.innerHTML = '<p style="font-size:13px;color:#888;padding:12px;">No announcements at this time.</p>';
    return;
  }
  container.innerHTML = items.map(item => `
    <div class="ann-item">
      <div class="ann-box">
        <div class="day">${item.date}</div>
        <div class="mon">${item.month}</div>
      </div>
      <div>
        <div class="ann-tag">${item.tag}</div>
        <div class="ann-text">${item.text}</div>
        ${item.subtext ? `<div class="ann-sub">${item.subtext}</div>` : ''}
      </div>
    </div>
  `).join('');
}

function parseCSV(text) {
  const lines = text.trim().split('\n');
  // skip header row
  return lines.slice(1).map(line => {
    // handle commas inside quoted fields
    const cols = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '"') {
        inQuotes = !inQuotes;
      } else if (line[i] === ',' && !inQuotes) {
        cols.push(current.trim());
        current = '';
      } else {
        current += line[i];
      }
    }
    cols.push(current.trim());
    return {
      date: cols[0] || '',
      month: cols[1] || '',
      tag: cols[2] || '',
      text: cols[3] || '',
      subtext: cols[4] || ''
    };
  }).filter(item => item.text); // skip empty rows
}

async function loadAnnouncements() {
  // If no URL set yet, show fallback
  if (!ANNOUNCEMENTS_URL || ANNOUNCEMENTS_URL === 'PASTE_YOUR_ONEDRIVE_CSV_LINK_HERE') {
    renderAnnouncements(FALLBACK_ANNOUNCEMENTS);
    return;
  }

  try {
    const response = await fetch(ANNOUNCEMENTS_URL);
    if (!response.ok) throw new Error('Could not load');
    const text = await response.text();
    const items = parseCSV(text);
    renderAnnouncements(items.length > 0 ? items : FALLBACK_ANNOUNCEMENTS);
  } catch (err) {
    // If fetch fails, show fallback silently
    renderAnnouncements(FALLBACK_ANNOUNCEMENTS);
  }
}

// Load when page is ready
document.addEventListener('DOMContentLoaded', loadAnnouncements);
