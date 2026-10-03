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
    tagline: "Strategy & operations lead who turns ambiguity into programs that ship.",
    intro:
      "Nine years across Google Cloud and ASML, plus an Oxford MBA. I like putting new technology to work, and lately that means building the AI automations that give my team its time back. On the side I pursue a personal interest in AI governance through fellowships and writing. Off the clock: hiking, surfing, film photography, and a long reading list.",
    sticker: ["Let's talk", "AI, strategy, books"], // the round badge on the portrait; it links to the contact section
    tags: ["Strategy & Ops", "Program Management", "AI Automation", "AI Governance", "Emerging Tech"],
    facts: [
      { label: "Role", value: "Strategy & Operations, Google Cloud" },
      { label: "Based", value: "London, UK · GMT" },
      { label: "Builds with", value: "Gemini · NotebookLM · Apps Script" },
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
    { value: "5×", label: "Attainment increase for Gemini Enterprise in one quarter" },
    { value: "10", label: "Risk-mitigation recommendations for Google Ads on incoming regulation" },
    { value: "25%", label: "Of my working week won back through AI automations I built" },
    { value: "200+", label: "Employees integrated across 3 acquisitions in 7 months" },
    { value: "90%", label: "Reduction in VAT filing time via automation" },
    { value: "70%", label: "Fewer manual inputs and errors after automating statutory reporting" }
  ],

  experience: [
    {
      company: "Google",
      role: "Business Performance Lead",
      team: "EMEA Strategy & Operations, Cloud · Business Finance, Ads",
      location: "London & Stockholm",
      period: "2023 — Present",
      current: true,
      summary:
        "Strategy and operations partner to senior sales leadership for Google Cloud across EMEA North, UK & Ireland and Sub-Saharan Africa.",
      highlights: [
        "Led the regional strategy and execution programme for Gemini Enterprise, building a blocker taxonomy that helped sales teams unblock their largest strategic deals.",
        "Became my team's informal AI lead. With no budget, built three automations using Gemini, NotebookLM and Apps Script: a weekly pipeline digest for leadership, a self-serve forecasting assistant that cut repeat questions by about 90%, and an action tracker for deal reviews. Documented each one so colleagues could build their own.",
        "Built a new forecasting framework that made the process faster and more accurate, clarifying roles across Strategy & Ops and Finance.",
        "Owned the end-to-end annual quota cascade across multiple product lines, delivered on time as a single source of truth.",
        "Designed a sales masterclass adopted across EMEA and picked up by APAC as best practice.",
        "20% projects: contributed to AI compliance strategy for Cloud, and launched a privacy engagement programme with advertising agencies.",
        "Earlier, in Business Finance for Ads: analysed the potential impact of incoming regulation on the business and turned it into risk-mitigation recommendations for leadership."
      ]
    },
    {
      company: "ASML",
      role: "Program Manager",
      team: "Global Finance · previously Financial Analyst",
      location: "Veldhoven, NL · Global role",
      period: "2017 — 2022",
      summary: "A global role in Finance. Led the integration of three acquired companies and a string of automation and compliance programmes across Europe and Asia.",
      highlights: [
        "Managed 60 people across 6 departments to integrate 200+ employees in 7 months within a €500k budget.",
        "Proposed and shipped VAT robotic process automation, cutting filing time by 90%.",
        "Automated statutory annual report data collection across 17 countries and 30 legal entities, reducing manual input and errors by 70%.",
        "Built the operational excellence strategy for Finance and ran workshops for 200+ people, seeding ~160 improvement projects."
      ]
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
    { name: "AI Governance (2024–25)", issuer: "BlueDot Impact", url: "https://bluedot.org/certification?id=recBVckv0k3Z3c3Cs", note: "12-week course · final project: UK AI-SME Fund" },
    { name: "Professional Scrum Master I", issuer: "Scrum.org" },
    { name: "Project Management & Lean Green Belt", issuer: "ASML" }
  ],

  // SELECTED WORK. Each case study follows the same pattern:
  //   a headline, then Context / Problem / Approach / Skills on the left,
  //   a "what I built" figure on the right, and results numbers underneath.
  // Only `title`, `context` and `approach` are required. Leave out `built`,
  // `flow`, `results`, `closing` or `links` and that part simply isn't shown.
  // The first entry in `results` is displayed large. If `projects` is empty,
  // the page shows `projectsPlaceholder` instead.
  projects: [
    {
      number: "01",
      org: "Google Cloud",
      year: "2025 – 26",
      title: "Growing the business without growing the team.",
      context:
        "Sales Strategy & Operations at Google Cloud, covering the UK, Ireland and Sub-Saharan Africa. My team is the business partner to the region's sales leadership.",
      problem:
        "The business was growing fast and the team was expected to keep pace without adding headcount. The only route was to make the people we already had more productive, and routine reporting, repeat questions and follow-ups were eating the week.",
      approach:
        "Took the lead on AI adoption for the team with a three-step plan: master the tools myself, automate the routine tasks that mattered most, then show the results so colleagues could do the same. Mapped my own workload on a 2×2 of how automatable each task was against its business impact, picked three, and built the simplest working version of each with no budget, improving it alongside the people using it.",
      skills: ["AI automation", "Process design", "Change adoption", "Enablement"],
      builtLabel: "What I built",
      built: [
        {
          title: "Weekly pipeline digest",
          text: "A script snapshots pipeline data every week and emails leadership a clear week-over-week summary before the Monday business review, so risks surface early.",
          tag: "Gemini + Apps Script · 4 hrs saved a week"
        },
        {
          title: "Self-serve forecasting assistant",
          text: "The forecasting sources that matter, curated into one searchable expert. Sellers get an answer in seconds, with a pointer to the source document.",
          tag: "NotebookLM · 5 hrs saved a week"
        },
        {
          title: "Deal-review action tracker",
          text: "Captures every action agreed in a review with an owner and a due date, chases updates by email and rolls everything into one view of open actions.",
          tag: "Apps Script · runs unattended"
        }
      ],
      flowLabel: "The plan",
      flow: ["Explore the tools", "Automate high-impact tasks", "Showcase and enable the team"],
      results: [
        { value: "25%", label: "of my working week won back, at zero cost" },
        { value: "90%", label: "fewer repeat forecasting questions" },
        { value: "90", label: "priority actions closed in five months" },
        { value: "3", label: "automations running without supervision" }
      ],
      closing:
        "I documented every build in a step-by-step guide. Colleagues now come to me first when they want a task automated, and the team keeps finding new ones.",
      links: []
    }
  ],
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

  // Speaking & advisory section. Add real events to `proof` as you do them,
  // e.g. "Panel on AI governance, Oxford AI Society, Nov 2026".
  speaking: {
    heading: "Speaking & advisory.",
    intro:
      "Alongside my day job, I'm available for talks, panels and workshops, and for short advisory projects. I draw on nine years of strategy and operations in technology companies, my independent work on AI governance, and plenty of time spent at the front of a room.",
    offers: [
      {
        title: "Talks & panels",
        text: "Keynotes, fireside chats and panel seats for conferences, universities and company events.",
        topics: ["AI governance and responsible adoption", "AI, education and the future of work", "Going slow in an age of speed"]
      },
      {
        title: "Workshops & masterclasses",
        text: "Hands-on sessions for teams, from a single afternoon to a short series.",
        topics: ["Practical AI automation for non-engineering teams", "Turning strategy into programmes that ship", "Forecasting and planning that people trust"]
      },
      {
        title: "Short advisory projects",
        text: "Scoped engagements of days or weeks for founders and leadership teams.",
        topics: ["Finding and automating high-impact routine work", "Strategy and operations for scaling teams", "AI readiness and governance"]
      }
    ],
    proofLabel: "Rooms I've led",
    proof: [
      "Operational excellence workshops for 200+ people at ASML",
      "Sales masterclass adopted across EMEA at Google",
      "AI automation how-to sessions for my team at Google",
      "Mentor, Oxford Women in Business",
      "Sponsorships & Partnerships lead, Oxford AI Society"
    ],
    cta: "Enquire about speaking or advisory",
    emailSubject: "Speaking or advisory enquiry",
    note: "Undertaken in a personal capacity, subject to my employer's policies."
  },

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
    text: "I'm always keen to exchange ideas on strategy, putting AI to work, AI governance, or a good book. I also welcome speaking invitations and short advisory projects. Feel free to reach out."
  }
};
