/* Renders the page from window.SITE (content.js). No build step. */
(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = 'target="_blank" rel="noopener"';

  document.title = S.meta.title;

  /* ---- theme ---- */
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  const themeBtn = $("#theme");
  const paintTheme = () => {
    const dark = root.dataset.theme === "dark" || (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    themeBtn.textContent = dark ? "☀" : "☾";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  };
  themeBtn.addEventListener("click", () => {
    const dark = root.dataset.theme === "dark" || (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    paintTheme();
  });
  paintTheme();

  /* ---- nav ---- */
  const sections = [
    ["about", "About"], ["experience", "Experience"], ["projects", "Projects"],
    ["writing", "Writing"], ["speaking", "Speaking"], ["beyond", "Beyond work"], ["contact", "Contact"]
  ];
  $("#nav-links").innerHTML = sections.map(([id, label], i) =>
    `<a href="#${id}" data-id="${id}"><span class="n">0${i + 1}</span>${label}</a>`).join("");
  $("#brand-name").textContent = S.meta.name;
  $("#monogram").textContent = S.meta.name.split(" ").map((w) => w[0]).join("");
  $("#burger").addEventListener("click", () => $("#nav-links").classList.toggle("open"));
  $("#nav-links").addEventListener("click", () => $("#nav-links").classList.remove("open"));

  /* ---- hero ---- */
  const h = S.hero;
  $("#hero-volume").textContent = `${S.meta.name} · ${S.meta.volume}`;
  $("#hero-status").innerHTML = S.meta.status
    ? `<span class="dot"></span>${esc(S.meta.status)} · ${esc(S.meta.location)}`
    : esc(S.meta.location);
  document.querySelectorAll(".js-disclaimer").forEach((el) => { el.textContent = S.meta.disclaimer || ""; });
  $("#hero-title").innerHTML = `${esc(h.greeting)}<br>${esc(S.meta.firstName)} <span class="outline">${esc(S.meta.name.split(" ").slice(1).join(" "))}.</span>`;
  $("#hero-tagline").textContent = h.tagline;
  $("#hero-intro").textContent = h.intro;
  $("#hero-tags").innerHTML = h.tags.map((t) => `<span class="pill">${esc(t)}</span>`).join("");
  $("#hero-cta").innerHTML = `
    <a class="btn" href="#experience">View my experience</a>
    <a class="btn ghost" href="${esc(S.meta.resume)}" ${ext}>Resume ↗</a>`;
  $("#sticker").innerHTML = h.sticker.map(esc).join(" ★ ");
  const portrait = $("#portrait-img");
  const showPlaceholder = () => { portrait.outerHTML = `<div class="placeholder">Portrait goes here<br><small class="mono">assets/headshot.jpg</small></div>`; };
  if (S.meta.headshot) { portrait.alt = S.meta.name; portrait.onerror = showPlaceholder; portrait.src = S.meta.headshot; } else showPlaceholder();
  $("#facts").style.setProperty("--facts", h.facts.length);
  $("#facts").innerHTML = h.facts.map((f) => `<div><div class="mono">${esc(f.label)}</div><div class="v">${esc(f.value)}</div></div>`).join("");

  /* ---- marquee ---- */
  const orgs = S.organisations.map((o) =>
    `<a href="${esc(o.url)}" ${ext}>${o.logo ? `<img src="${esc(o.logo)}" alt="${esc(o.name)}">` : esc(o.name)}</a>`).join("");
  $("#marquee-track").innerHTML = orgs + orgs;

  /* ---- stats ---- */
  $("#stats").style.setProperty("--stats", S.stats.length > 5 ? 3 : S.stats.length);
  const hasStory = (id) => id && (S.projects || []).some((p) => p.id === id);
  $("#stats").innerHTML = S.stats.map((s) => hasStory(s.story)
    ? `<a class="stat story reveal" href="#case-${esc(s.story)}"><div class="v">${esc(s.value)}</div><div class="l">${esc(s.label)}</div><span class="more mono">Read the story <span aria-hidden="true">↓</span></span></a>`
    : `<div class="stat reveal"><div class="v">${esc(s.value)}</div><div class="l">${esc(s.label)}</div></div>`).join("");

  /* ---- experience ---- */
  $("#timeline").innerHTML = S.experience.map((j) => `
    <div class="job reveal">
      <span class="mono when ${j.current ? "now" : ""}">${esc(j.period)}</span>
      <span class="company">${esc(j.company)}</span>
      <span class="roleline"><span class="role">${esc(j.role)}</span><br><span class="team">${esc(j.team)}</span></span>
      <span class="mono loc">${esc(j.location)}</span>
    </div>`).join("") + (S.alsoWorked && S.alsoWorked.length ? `
    <div class="also reveal">
      <div class="mono">Also · internships &amp; programmes</div>
      <div class="also-grid">${S.alsoWorked.map((a) => `
        <a href="${esc(a.url || "#")}" ${a.url ? ext : ""}>
          <div class="org">${esc(a.org)}</div>
          <div class="role">${esc(a.role)}</div>
          <div class="note">${esc(a.note || "")}</div>
        </a>`).join("")}</div>
    </div>` : "");

  $("#edu-list").innerHTML = S.education.map((e) => `
    <li><div><div class="school">${esc(e.school)}</div>${e.note ? `<div class="note">${esc(e.note)}</div>` : ""}</div><div class="mono">${esc(e.degree)}</div></li>`).join("");
  $("#cert-list").innerHTML = S.certifications.map((c) => `
    <li><div><div>${c.url ? `<a href="${esc(c.url)}" ${ext}>${esc(c.name)}</a>` : esc(c.name)}</div>${c.note ? `<div class="note">${esc(c.note)}</div>` : ""}</div><div class="mono">${esc(c.issuer)}</div></li>`).join("");

  /* ---- projects ---- */
  const ph = S.projectsPlaceholder || {};
  $("#cases").innerHTML = !S.projects.length ? `
    <div class="case-placeholder reveal">
      <span class="mono">${esc(ph.label || "Case studies")}</span>
      <h3>${esc(ph.title || "Coming soon.")}</h3>
      <p>${esc(ph.text || "")}</p>
      <a class="btn ghost" href="#writing">Read my writing ↓</a>
    </div>` : S.projects.map((p, i) => {
      const two = (n) => String(n).padStart(2, "0");
      const block = (label, text) => text ? `<div class="block"><span class="mono">${label}</span><p>${esc(text)}</p></div>` : "";
      const fig = p.built && p.built.length ? `
        <div class="case-fig">
          <span class="mono">— ${esc(p.builtLabel || "What I built")}</span>
          <ol class="built">${p.built.map((bItem, j) => `
            <li><span class="bn">${two(j + 1)}</span><div>
              <div class="bt">${esc(bItem.title)}</div><p>${esc(bItem.text)}</p>
              ${bItem.tag ? `<span class="mono btag">${esc(bItem.tag)}</span>` : ""}
            </div></li>`).join("")}</ol>
          ${p.flow && p.flow.length ? `<div class="flow mono">${p.flowLabel ? `<b>${esc(p.flowLabel)}</b> · ` : ""}${p.flow.map(esc).join(" → ")}</div>` : ""}
        </div>` : "";
      const results = p.results && p.results.length ? `
        <div class="results" style="--cols: ${p.results.length > 1 ? `1.5fr repeat(${p.results.length - 1}, 1fr)` : "1fr"}">${p.results.map((r, j) => `
          <div class="result ${j === 0 ? "big" : ""}"><div class="v">${esc(r.value)}</div><span class="mono">${j === 0 ? "Results · " : ""}${esc(r.label)}</span></div>`).join("")}
        </div>` : "";
      return `
    <article class="case reveal" id="case-${esc(p.id || two(i + 1))}">
      <header class="case-top">
        <span class="mono">Case ${two(i + 1)}${S.projects.length > 1 ? ` · of ${two(S.projects.length)}` : ""}</span>
        <span class="mono">${esc([p.org, p.year].filter(Boolean).join(" · "))}</span>
      </header>
      <h3 class="case-title">${esc(p.title)}</h3>
      <div class="case-grid">
        <div class="case-text">
          ${block("Context", p.context)}
          ${block("Problem", p.problem)}
          ${block("Approach", p.approach)}
          ${!results ? block("Outcome", p.outcome) : ""}
          ${p.skills && p.skills.length ? `<div class="block"><span class="mono">Skills</span><div class="skills">${p.skills.map((s) => `<span class="pill">${esc(s)}</span>`).join("")}</div></div>` : ""}
        </div>
        ${fig}
      </div>
      ${results}
      ${p.closing ? `<p class="case-closing">${esc(p.closing)}</p>` : ""}
      ${p.links && p.links.length ? `<div class="links">${p.links.map((l) => `<a href="${esc(l.url)}" ${ext}>${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
      <a class="case-back mono" href="#experience">↑ Back to all stories</a>
    </article>`; }).join("");

  /* ---- writing ---- */
  $("#writing-grid").innerHTML = S.writing.map((w) => `
    <article class="post reveal">
      <div class="top"><span class="mono">${esc(w.kind)}</span><span class="mono">${esc(w.outlet)}</span></div>
      <h3><a class="post-link" href="${esc(w.url)}" ${ext}>${esc(w.title)}</a></h3>
      <p>${esc(w.blurb)}</p>
      ${w.featured ? `<a class="post-also" href="${esc(w.featured.url)}" ${ext}>${esc(w.featured.label)} ↗</a>` : ""}
      <span class="arrow" aria-hidden="true">↗</span>
    </article>`).join("");

  /* ---- speaking & advisory ---- */
  const sp = S.speaking;
  if (sp) {
    $("#speaking-heading").textContent = sp.heading;
    $("#speaking-intro").textContent = sp.intro;
    $("#offers").innerHTML = sp.offers.map((o) => `
      <article class="offer reveal">
        <h3>${esc(o.title)}</h3>
        <p>${esc(o.text)}</p>
        <span class="mono">Topics</span>
        <ul>${o.topics.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      </article>`).join("");
    $("#speaking-proof").innerHTML = sp.proof && sp.proof.length
      ? `<span class="mono">${esc(sp.proofLabel || "Experience")}</span>` + sp.proof.map((p) => `<span class="pill">${esc(p)}</span>`).join("")
      : "";
    $("#speaking-cta").innerHTML = `
      <a class="btn" href="mailto:${esc(S.meta.email)}?subject=${encodeURIComponent(sp.emailSubject || "Enquiry")}">${esc(sp.cta)}</a>
      <a class="btn ghost" href="#contact">Contact details</a>
      <span class="speak-note">${esc(sp.note || "")}</span>`;
  } else {
    $("#speaking").style.display = "none";
  }

  /* ---- beyond ---- */
  const b = S.beyond;
  $("#beyond-intro").textContent = b.intro;
  if (!b.pursuits || !b.pursuits.length) $("#pursuits").style.display = "none";
  $("#pursuits").innerHTML = (b.pursuits || []).map((p) => `<div class="pursuit reveal"><div class="icon">${p.icon}</div><div class="name">${esc(p.name)}</div><div class="note">${esc(p.note)}</div></div>`).join("");
  const capOf = (p) => [p.caption, p.date].filter(Boolean).join(" · ");
  $("#photo-note").textContent = b.photoNote || "";
  const gal = $("#gallery");
  gal.innerHTML = b.photos.map((p, i) => `
    <button class="shot" data-i="${i}" aria-label="Enlarge photo: ${esc(p.caption || "photograph")}">
      <img src="assets/photos/thumbs/${esc(p.file)}" alt="${esc(p.caption || "Photograph")}" loading="lazy"${p.w && p.h ? ` width="${+p.w}" height="${+p.h}"` : ""}>
      <span class="cap">${esc(capOf(p))}</span>
    </button>`).join("");

  /* Fit the wall to the screen: use the fewest columns (largest photos)
     that still let the whole wall be seen at once below the nav bar. */
  const fitGallery = () => {
    const W = gal.clientWidth;
    if (!W) return;
    const head = $("#gallery-head");
    const room = Math.max(300, innerHeight - 64 - (head ? head.offsetHeight + 18 : 0) - 40);
    const minCols = W < 480 ? 2 : W < 860 ? 3 : 4;
    const maxCols = Math.max(minCols, Math.min(7, Math.floor(W / 80)));
    let n = minCols;
    for (; n <= maxCols; n++) {
      gal.style.columnCount = n;
      if (gal.offsetHeight <= room) break;
    }
    if (n > maxCols) gal.style.columnCount = maxCols;
    gal.classList.toggle("dense", parseInt(gal.style.columnCount, 10) > 4 || W / parseInt(gal.style.columnCount, 10) < 150);
  };
  fitGallery();
  let fitTimer;
  addEventListener("resize", () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitGallery, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitGallery);

  /* lightbox */
  const lb = $("#lightbox"), lbImg = $("#lb-img"), lbCap = $("#lb-cap");
  let cur = 0;
  const show = (i) => {
    cur = (i + b.photos.length) % b.photos.length;
    const p = b.photos[cur];
    lbImg.src = "assets/photos/" + p.file;
    lbImg.alt = p.caption || "Photograph";
    lbCap.textContent = `${capOf(p)}  ·  ${cur + 1} / ${b.photos.length}`;
  };
  const openLb = (i) => { show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; };
  const closeLb = () => { lb.classList.remove("open"); document.body.style.overflow = ""; lbImg.removeAttribute("src"); };
  $("#gallery").addEventListener("click", (e) => { const s = e.target.closest(".shot"); if (s) openLb(+s.dataset.i); });
  $("#lb-close").addEventListener("click", closeLb);
  $("#lb-prev").addEventListener("click", (e) => { e.stopPropagation(); show(cur - 1); });
  $("#lb-next").addEventListener("click", (e) => { e.stopPropagation(); show(cur + 1); });
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
  $("#books").innerHTML = b.books.map((k) => `
    <div class="book ${k.note || k.take ? "quoted" : ""}"><div><div class="t">${esc(k.title)}</div><div class="a">${esc(k.author)}</div></div>${
      k.note ? `<div class="q">“${esc(k.note)}”${k.source ? `<span class="src">${esc(k.source)}</span>` : ""}</div>`
      : k.take ? `<div class="q take">${esc(k.take)}</div>` : ""}</div>`).join("");
  $("#goodreads").href = S.meta.goodreads;

  /* ---- contact ---- */
  $("#contact-heading").textContent = S.contact.heading;
  $("#contact-text").textContent = S.contact.text;
  $("#contact-links").innerHTML = `
    <a href="mailto:${esc(S.meta.email)}" id="email-copy" aria-label="Copy email address ${esc(S.meta.email)}"><span class="mono">Email · <span id="email-hint">click to copy</span></span><span class="val" id="email-val">${esc(S.meta.email)}</span></a>
    <a href="${esc(S.meta.linkedin)}" ${ext}><span class="mono">LinkedIn</span><span class="val">/in/tanvinautiyal ↗</span></a>
    <a href="${esc(S.meta.resume)}" ${ext}><span class="mono">Resume</span><span class="val">View ↗</span></a>`;
  /* email: click copies the address; falls back to opening a mail app */
  const emailRow = $("#email-copy");
  let copyTimer;
  const legacyCopy = (text) => {
    const ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
    document.body.appendChild(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    ta.remove();
    return ok;
  };
  const showCopied = () => {
    emailRow.classList.add("copied");
    $("#email-hint").textContent = "copied ✓";
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { emailRow.classList.remove("copied"); $("#email-hint").textContent = "click to copy"; }, 2000);
  };
  emailRow.addEventListener("click", (e) => {
    e.preventDefault();
    const openMail = () => { location.href = "mailto:" + S.meta.email; };
    const fallback = () => (legacyCopy(S.meta.email) ? showCopied() : openMail());
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(S.meta.email).then(showCopied).catch(fallback);
    } else fallback();
  });

  $("#year").textContent = new Date().getFullYear();
  $("#footer-name").textContent = S.meta.name;

  /* ---- scroll effects ---- */
  const nav = $("#nav"), bar = $("#progress");
  const links = [...document.querySelectorAll("#nav-links a")];
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 10);
    const max = document.body.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* arriving somewhere via an in-page link shows it straight away, without waiting for the fade-in */
  const showTarget = (hash) => {
    if (!hash || hash.length < 2) return;
    let el = null;
    try { el = document.querySelector(hash); } catch (e) { return; }
    if (!el) return;
    if (el.classList.contains("reveal")) el.classList.add("in");
    el.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));
  };
  document.addEventListener("click", (e) => { const a = e.target.closest('a[href^="#"]'); if (a) showTarget(a.getAttribute("href")); });
  addEventListener("hashchange", () => showTarget(location.hash));
  showTarget(location.hash);

  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const spy = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.dataset.id === e.target.id)); });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(([id]) => { const el = document.getElementById(id); if (el) spy.observe(el); });
})();
