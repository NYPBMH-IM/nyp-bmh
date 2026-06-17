// NYP BMH — shared nav & footer injected on every page

function renderNav(activePage) {
  const pages = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'didactics', label: 'Didactics & Exams', href: 'didactics.html' },
    { id: 'schedules', label: 'Schedules', href: 'schedules.html' },
    { id: 'policies', label: 'Policies', href: 'policies.html' },
    { id: 'resources', label: 'Resources', href: 'resources.html' },
    { id: 'wellness', label: 'Wellness', href: 'wellness.html' },
    { id: 'recruitment', label: 'Recruitment', href: 'recruitment.html' },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="nav-link${p.id === activePage ? ' active' : ''}">${p.label}</a>`
  ).join('');

  return `
  <div class="utility-bar">
    <a href="https://nypbmh.medhub.com/" target="_blank">MEdhub Login</a>
    <a href="https://my.adp.com/" target="_blank">ADP Portal</a>
    <a href="https://www.uptodate.com" target="_blank">UpToDate</a>
    <a href="phone-directory.html">Phone Directory</a>
    <a href="mailto:hrc@nyp.org">Contact</a>
  </div>
  <nav class="main-nav">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-box">NYP</div>
      <div class="nav-logo-text">
        <span class="line1">NewYork-Presbyterian</span>
        <span class="line2">Brooklyn Methodist · Internal Medicine Residency</span>
      </div>
    </a>
    <div class="nav-links">${links}</div>
    <button class="nav-search" onclick="document.getElementById('search-bar').focus()">
      🔍 Search
    </button>
  </nav>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="footer-top">
      <div class="footer-grid">
        <div class="footer-col footer-brand">
          <div class="logo-row">
            <div class="nyp-box">NYP</div>
            <span class="name">NewYork-Presbyterian</span>
          </div>
          <div class="sub">Brooklyn Methodist Hospital<br>Internal Medicine Residency Program<br>506 Sixth Street, Brooklyn, NY 11215</div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="https://nypbmh.medhub.com/" target="_blank">MEdhub (Duty Hours)</a>
          <a href="https://my.adp.com/" target="_blank">ADP Payroll Portal</a>
          <a href="https://www.uptodate.com" target="_blank">UpToDate</a>
          <a href="phone-directory.html">Phone Directory</a>
        </div>
        <div class="footer-col">
          <h4>Residency</h4>
          <a href="didactics.html">Didactics & Exams</a>
          <a href="schedules.html">Schedules</a>
          <a href="policies.html">Policies</a>
          <a href="wellness.html">Wellness</a>
          <a href="recruitment.html">Recruitment</a>
        </div>
        <div class="footer-col">
          <h4>Hospital</h4>
          <a href="https://www.nyp.org/locations/brooklyn/nyp-brooklyn-methodist-hospital" target="_blank">NYP Brooklyn Methodist</a>
          <a href="https://www.nyp.org/professionals/graduate-medical-education" target="_blank">Graduate Medical Education</a>
          <a href="https://careers.nyp.org" target="_blank">Careers at NYP</a>
          <a href="https://www.nyp.org" target="_blank">NYP Main Site</a>
        </div>
      </div>
      <hr class="footer-divider">
    </div>
    <div class="footer-bottom">
      <p>© 2025 NewYork-Presbyterian Hospital · Internal Medicine Residency · Brooklyn Methodist</p>
      <div class="footer-bottom-links">
        <a href="https://www.nyp.org/privacy-notice" target="_blank">Privacy Notice</a>
        <a href="https://www.nyp.org/disclaimer" target="_blank">Disclaimer</a>
        <a href="mailto:hrc@nyp.org">Contact IT</a>
      </div>
    </div>
  </footer>`;
}

// Search functionality
function initSearch(pages) {
  const bar = document.getElementById('search-bar');
  const results = document.getElementById('search-results');
  if (!bar || !results) return;
  bar.addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    if (!q) { results.innerHTML = ''; results.style.display = 'none'; return; }
    const matches = pages.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    if (!matches.length) { results.innerHTML = '<div class="sr-item">No results found.</div>'; results.style.display = 'block'; return; }
    results.innerHTML = matches.map(p => `<a class="sr-item" href="${p.href}">${p.title}<span>${p.desc}</span></a>`).join('');
    results.style.display = 'block';
  });
  document.addEventListener('click', e => { if (!bar.contains(e.target)) { results.style.display = 'none'; } });
}
