/* =====================================================================
   CONTENT FILE — this is the only file you normally need to change.
   Everything on the site is rendered from the data below.
   To update the site: edit this file (or ask Claude to), commit, push.
   ===================================================================== */

window.SITE = {
  meta: {
    name: "Tanvi Nautiyal",
    firstName: "Tanvi",
    title: "Tanvi Nautiyal — Portfolio",
    pronouns: "She/Her",
    location: "London, UK",
    status: "", // optional short badge text shown before the location; leave empty for location only
    disclaimer: "Views expressed are my own and do not represent those of my employer.",
    email: "tanvinautiyal5@gmail.com",
    linkedin: "https://www.linkedin.com/in/tanvinautiyal/",
    resume: "https://docs.google.com/document/d/1JHPfzMx5o-e4SsV16CDrYn55ZYgExd_nxBvmLZ3qzUI/preview", // "/preview" opens a clean read-only view
    goodreads: "https://www.goodreads.com/tanvisbookshelf",
    substack: "https://tanvinautiyal5.substack.com/",
    headshot: "assets/headshot.jpg",
    volume: "Portfolio"
  },

  hero: {
    greeting: "Hi, I'm",
    tagline: "Strategist and operator. I make new technology work at scale.",
    intro:
      "Nine years of experience, mostly at Google and ASML, across program management, strategy & operations and business development, plus an Oxford MBA. I'm at my best solving complex problems in ambiguous, high-stakes environments. On top of my core work, I build and scale AI automations that give my team time back for value-adding work.",
    sticker: ["Let's talk", "AI, strategy, books"], // the round badge on the portrait; it links to the contact section
    tags: ["Strategy & Ops", "Program Management", "AI Automation", "AI Governance", "Emerging Tech"],
    facts: [
      { label: "Role", value: "Strategy & Operations, Google Cloud" },
      { label: "Based", value: "London, UK · GMT" },
      { label: "Languages", value: "English · Hindi · Dutch" }
    ]
  },

  // Organisations shown in the scrolling strip. Drop a logo file into
  // assets/logos/ and add  logo: "assets/logos/name.png"  to show an image
  // instead of the wordmark.
  organisations: [
    { name: "Google", url: "https://about.google/" },
    { name: "ASML", url: "https://www.asml.com/en" },
    { name: "Oxford Saïd", url: "https://www.sbs.ox.ac.uk" },
    { name: "University of Amsterdam", url: "https://www.uva.nl/en" },
    { name: "University of Delhi", url: "https://www.du.ac.in/" },
    { name: "Oxford AI Society", url: "https://www.oxai.org/" },
    { name: "Future Impact Group", url: "https://futureimpact.group/fellowship" },
    { name: "BlueDot Impact", url: "https://aisafetyfundamentals.com/governance/" },
    { name: "Ormit Talent", url: "https://ormittalent.nl/nl/home/" },
    { name: "Arda", url: "https://arda.bio/" },
    { name: "Littleplace", url: "https://www.littleplace.com/" },
    { name: "Cosuno", url: "https://www.cosuno.com/en" }
  ],

  stats: [
    // Each box shows one top metric. `story` is the `id` of a case study in
    // `projects` below; the box then links down to that story.
    { value: "5×", label: "Attainment increase for Gemini Enterprise in one quarter", story: "gemini-enterprise" },
    { value: "10", label: "Risk-mitigation recommendations for Google Ads on incoming regulation", story: "ads-regulation" },
    { value: "25%", label: "Of my working week won back through AI automations I built", story: "ai-automations" },
    { value: "200+", label: "Employees integrated across 3 acquisitions in 7 months", story: "integration" },
    { value: "90%", label: "Reduction in VAT filing time via automation", story: "vat-automation" }
  ],

  // One plain row per role. The detail lives in the case studies below.
  experience: [
    {
      company: "Google",
      role: "Business Performance Lead",
      team: "EMEA Strategy & Operations, Cloud · Business Finance, Ads",
      location: "London & Stockholm",
      period: "2023 — Present",
      current: true
    },
    {
      company: "ASML",
      role: "Program Manager",
      team: "Global Finance · previously Financial Analyst",
      location: "Veldhoven, NL",
      period: "2017 — 2022"
    }
  ],

  // Optional block of shorter engagements shown under the roles, e.g.
  //   { org: "Company", role: "Title", note: "One line", url: "https://..." }
  // Left empty on purpose so the page leads with senior roles only.
  alsoWorked: [],

  education: [
    { school: "University of Oxford, Saïd Business School", degree: "MBA", note: "Sponsorships & Partnerships lead, Oxford AI Society · Creative Destruction Lab" },
    { school: "University of Amsterdam", degree: "M.Sc. Economics", note: "" },
    { school: "University of Delhi", degree: "B.Sc. Mathematics (Honours)", note: "" }
  ],

  certifications: [
    // Every entry carries a `year`, shown after the issuer, so they stay consistent.
    { name: "AI Governance", issuer: "BlueDot Impact", year: "2025", url: "https://bluedot.org/certification?id=recBVckv0k3Z3c3Cs" },
    { name: "Professional Scrum Master I", issuer: "Scrum.org", year: "2022", url: "https://www.credly.com/badges/265cd7c0-117f-4d81-a821-485468012e92" },
    { name: "Project Management & Lean Green Belt", issuer: "ASML", year: "2021" }
  ],

  // SELECTED WORK. Each case study follows the same pattern:
  //   a headline, then Context / Problem / Approach / Skills on the left,
  //   a "what I built" figure on the right, and results numbers underneath.
  // Only `title`, `context` and `approach` are required. Leave out `built`,
  // `flow`, `results`, `closing` or `links` and that part simply isn't shown.
  // The first entry in `results` is displayed large. If `projects` is empty,
  // the page shows `projectsPlaceholder` instead.
  //
  // Case studies still being written live in a separate private file,
  // drafts.local.js, which stays on your computer and is never uploaded.
  // To publish one, move it from that file into the list below.
  projects: [],
  projectsPlaceholder: {
    label: "Case studies",
    title: "Coming soon.",
    text: "I'm writing up a few projects from my strategy and operations work. In the meantime, my published writing is just below."
  },

  writing: [
    {
      title: "Tactical Guidance on AI-Integrated Education & Training",
      outlet: "IYF · Convergence Analysis",
      kind: "Policy brief",
      url: "https://www.convergenceanalysis.org/fellowships/economics/tactical-guidance-on-ai-integrated-education-and-training",
      blurb: "Co-authored brief on keeping AI a catalyst for human potential rather than a substitute for critical thinking, with guidance for educators, policymakers and funders. Written as a Future Impact Group fellow."
    },
    {
      title: "UK AI-SME Fund",
      outlet: "BlueDot Impact",
      kind: "Policy proposal",
      url: "https://docs.google.com/document/d/17lshGZEjIqNXb2YA-D5Hnp2N3TpY7_yShPnuyvq8QpM/preview",
      blurb: "A proposal for a UK fund that offsets AI compliance costs for smaller firms through compute vouchers. Final project for the AI Governance course."
    },
    {
      title: "Tanvi's Substack",
      outlet: "Substack",
      kind: "Essays",
      url: "https://tanvinautiyal5.substack.com/",
      blurb: "My personal Substack, where I write the occasional essay.",
      // `featured` adds a second link inside the card, to one example piece.
      featured: { label: "Start with: Going Slow in an Age of Speed", url: "https://open.substack.com/pub/tanvinautiyal5/p/going-slow-in-an-age-of-speed" }
    },
    {
      title: "Oxford MBA Blog Series",
      outlet: "Saïd Business School",
      kind: "Series",
      url: "https://www.sbs.ox.ac.uk/oxford-experience/blogs/tanvi-nautiyal",
      blurb: "Dispatches from the MBA year: what it's like from the inside."
    },
    {
      title: "ASMLers leren Nederlands",
      outlet: "Eindhovens Dagblad",
      kind: "Press",
      url: "https://www.ed.nl/asml/asmlers-leren-nederlands-zelfs-mijn-eindhovense-vriend-begint-vaak-in-het-engels~a9386e2a/",
      blurb: "Featured on moving to the Netherlands and the challenge of learning Dutch. Reporting by Harrie Verrijt."
    },
    {
      title: "Mentor Spotlight",
      outlet: "Oxford Women in Business",
      kind: "Feature",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6724237198180265984/",
      blurb: "Profiled as a mentor with Oxford Women in Business."
    }
  ],

  beyond: {
    intro:
      "The parts of me that don't fit on a CV. I shoot film, read widely, care about mental health and wellbeing, and spend as much time as I can outdoors, hiking or surfing.",
    // Optional row of interest cards, e.g. { icon: "📷", name: "Film photography", note: "..." }. Empty = hidden.
    pursuits: [],
    // Each photo needs a web-sized file in assets/photos/ and a small copy
    // with the same name in assets/photos/thumbs/ (see README).
    //
    // The gallery is a wall of photos in their natural shapes. It picks its
    // own number of columns so the whole wall fits on one screen. `w` and `h`
    // are the thumbnail's pixel size (they keep the layout steady while
    // images load). The order here is the order on the page.
    photoNote: "Shot on 35mm film · Olympus OM10 & Olympus AF-10XB",
    photos: [
      { file: "2026-06-oxford.jpg", w: 900, h: 597, caption: "Radcliffe Camera, Oxford", date: "Jun 2026" },
      { file: "2025-04-kings-cross-2.jpg", w: 597, h: 900, caption: "Regent's Canal, King's Cross", date: "Apr 2025" },
      { file: "2025-08-helsinki.jpg", w: 597, h: 900, caption: "Uspenski Cathedral, Helsinki", date: "Aug 2025" },
      { file: "2025-04-hackney.jpg", w: 597, h: 900, caption: "Spring in Hackney, London", date: "Apr 2025" },
      { file: "2025-06-athens.jpg", w: 900, h: 808, caption: "Temple of Hephaestus, Athens", date: "Jun 2025" },
      { file: "2025-01-amsterdam.jpg", w: 597, h: 900, caption: "The Amstel, Amsterdam", date: "Jan 2025" },
      { file: "2026-02-sri-lanka-2.jpg", w: 597, h: 900, caption: "Sri Lanka", date: "Feb 2026" },
      { file: "2025-04-regents-park.jpg", w: 746, h: 900, caption: "Regent's Park, London", date: "Apr 2025" },
      { file: "2025-04-warsaw.jpg", w: 597, h: 900, caption: "Warsaw", date: "Apr 2025" },
      { file: "2025-04-kings-cross.jpg", w: 597, h: 900, caption: "Regent's Wharf, King's Cross", date: "Apr 2025" },
      { file: "2026-02-sri-lanka.jpg", w: 597, h: 900, caption: "Sri Lanka", date: "Feb 2026" }
    ],
    // `note` is a line quoted from the book (shown in quotation marks; add
    // `source` if someone other than the author wrote it). `take` is your own
    // comment, shown without quotation marks. Books with either go first.
    books: [
      { title: "The Art of Living", author: "Epictetus", note: "If we let our attention slip we can quickly lose whatever progress we have made. So we need to integrate a period of reflection into our daily lives." },
      { title: "Educated", author: "Tara Westover", note: "The ability to evaluate many ideas, many histories, many points of view, is at the heart of what it means to create one's self." },
      { title: "A Room of One's Own", author: "Virginia Woolf", note: "Woolf's way of asking these questions about women and fiction is to write a lecture that is really an essay and an essay that is really a story.", source: "Hermione Lee, introduction" },
      { title: "Small Things Like These", author: "Claire Keegan" },
      { title: "The Island of Missing Trees", author: "Elif Shafak" },
      { title: "Co-Intelligence", author: "Ethan Mollick" },
      { title: "Orbital", author: "Samantha Harvey" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl" },
      { title: "The Five Dysfunctions of a Team", author: "Patrick Lencioni" }
    ]
  },

  contact: {
    heading: "Let's talk.",
    text: "I'm always keen to exchange ideas on tech strategy, putting AI to work and AI governance. I'm also open to media enquiries and speaking engagements. Feel free to reach out."
  }
};
