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
    resume: "https://docs.google.com/document/d/1JHPfzMx5o-e4SsV16CDrYn55ZYgExd_nxBvmLZ3qzUI/edit",
    goodreads: "https://www.goodreads.com/tanvisbookshelf",
    substack: "https://tanvinautiyal5.substack.com/",
    headshot: "assets/headshot.jpg",
    volume: "Portfolio"
  },

  hero: {
    greeting: "Hi, I'm",
    tagline: "Strategy & operations lead who turns ambiguity into programs that ship.",
    intro:
      "Nine years across Google Cloud and ASML, an Oxford MBA, and a growing body of work on AI governance. I'm passionate about emerging technologies and stoicism. Off the clock: hiking, surfing, film photography, and a long reading list.",
    sticker: ["Oxford MBA", "AI Governance"],
    tags: ["Strategy & Ops", "Program Management", "AI Governance", "Emerging Tech", "Stoicism"],
    facts: [
      { label: "Role", value: "Business Performance Lead, Google Cloud" },
      { label: "Based", value: "London, UK · GMT" },
      { label: "Range", value: "Strategy → Programs → Policy" },
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
    { value: ">95%", label: "Forecast accuracy across EMEA North & UKI SSA" },
    { value: "200+", label: "Employees integrated across 3 acquisitions in 7 months" },
    { value: "90%", label: "Reduction in VAT filing time via automation" }
  ],

  experience: [
    {
      company: "Google",
      role: "Business Performance Lead",
      team: "EMEA Strategy & Operations · Cloud",
      location: "London & Stockholm",
      period: "Oct 2023 — Present",
      current: true,
      summary:
        "Strategy and operations partner to senior sales leadership for Google Cloud across EMEA North, UK & Ireland and Sub-Saharan Africa.",
      highlights: [
        "Led the regional strategy and execution programme for Gemini Enterprise, building a blocker taxonomy that helped sales teams unblock their largest strategic deals.",
        "Built a new forecasting framework that made the process faster and more accurate, clarifying roles across Strategy & Ops and Finance.",
        "Owned the end-to-end annual quota cascade across multiple product lines, delivered on time as a single source of truth.",
        "Designed a sales masterclass adopted across EMEA and picked up by APAC as best practice.",
        "20% projects: contributed to AI compliance strategy for Cloud, and launched a privacy engagement programme with advertising agencies."
      ]
    },
    {
      company: "Google",
      role: "MBA Intern",
      team: "EMEA Business Finance · Ads",
      location: "London",
      period: "Jul — Sep 2023",
      summary: "Analysed the potential impact of incoming regulation on the Ads business, working with finance, commercial and legal teams.",
      highlights: [
        "Turned the analysis into a set of actionable risk-mitigation recommendations for leadership."
      ]
    },
    {
      company: "ASML",
      role: "Program Manager",
      team: "Finance · Corporate Integration · joined via the Ormit Talent management traineeship",
      location: "Veldhoven, NL",
      period: "2017 — 2022",
      summary: "Led integration of three acquired companies and a string of finance automation and compliance programs across Europe and Asia.",
      highlights: [
        "Managed 60 people across 6 departments to integrate 200+ employees in 7 months within a €500k budget.",
        "Proposed and shipped VAT robotic process automation, cutting filing time by 90%.",
        "Automated statutory annual report data collection across 17 countries and 30 legal entities, reducing manual input and errors by 70%.",
        "Built the operational excellence strategy for Finance and ran workshops for 200+ people, seeding ~160 improvement projects."
      ]
    }
  ],

  // Shorter engagements: internships, traineeships, programmes.
  alsoWorked: [
    { org: "Cosuno", role: "Product Management Intern", note: "Construction-tech scale-up, Berlin", url: "https://www.cosuno.com/en" },
    { org: "Arda", role: "Go-to-Market Intern", note: "Via Creative Destruction Lab, Oxford", url: "https://arda.bio/" },
    { org: "Little Place Labs", role: "Go-to-Market Intern", note: "Space-tech start-up", url: "https://www.littleplace.com/" },
    { org: "Ormit Talent", role: "Management Traineeship", note: "Placed at ASML, Netherlands", url: "https://ormittalent.nl/nl/home/" }
  ],

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

  // Case studies follow the Context / Approach / Outcome pattern.
  projects: [
    {
      number: "01",
      title: "Tactical Guidance on AI-Integrated Education & Training",
      org: "International Youth Foundation · Convergence Analysis · Future Impact Group",
      year: "2025",
      kind: "Policy brief · Co-author",
      context:
        "AI is reshaping how young people learn and work. Without deliberate design, classroom AI risks cognitive dependency instead of critical thinking.",
      approach:
        "As a Future Impact Group fellow, co-authored a policy brief with IYF and Convergence Analysis. Framed the choices through Maya's Journey, a fictional narrative that follows one student down two divergent AI futures, then translated each fork into guidance for educators, policymakers and funders.",
      outcome:
        "Published by IYF alongside the interactive Maya's Journey site, with actionable recommendations on pedagogy, AI guardrails and a flexible, skills-based workforce ecosystem.",
      skills: ["AI Governance", "Policy Writing", "Narrative Strategy", "Education"],
      links: [
        { label: "Read the brief", url: "https://www.convergenceanalysis.org/fellowships/economics/tactical-guidance-on-ai-integrated-education-and-training" },
        { label: "Maya's Journey", url: "https://mayasjourney.ai/" },
        { label: "IYF announcement", url: "https://www.linkedin.com/feed/update/urn:li:activity:7412870299261767680/" }
      ]
    }
  ],

  writing: [
    {
      title: "UK AI-SME Fund",
      outlet: "BlueDot Impact",
      kind: "Policy proposal",
      url: "https://docs.google.com/document/d/17lshGZEjIqNXb2YA-D5Hnp2N3TpY7_yShPnuyvq8QpM/preview",
      blurb: "A proposal for a UK fund that offsets AI compliance costs for smaller firms through compute vouchers. Final project for the AI Governance course."
    },
    {
      title: "Going Slow in an Age of Speed",
      outlet: "Substack",
      kind: "Essay",
      url: "https://open.substack.com/pub/tanvinautiyal5/p/going-slow-in-an-age-of-speed",
      blurb: "On stoicism, attention, and choosing depth when everything around you accelerates."
    },
    {
      title: "Oxford MBA Blog Series",
      outlet: "Saïd Business School",
      kind: "Series",
      url: "https://www.sbs.ox.ac.uk/oxford-experience/blogs/tanvi-nautiyal",
      blurb: "Dispatches from the MBA year: what it's like from the inside."
    },
    {
      title: "Berlin VC Insights",
      outlet: "LinkedIn",
      kind: "Field notes",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7074867170463113217/",
      blurb: "Takeaways from time spent with Berlin's venture ecosystem."
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
    // The order here is the order on the page.
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
    books: [
      { title: "The Art of Living", author: "Epictetus", note: "If we let our attention slip we can quickly lose whatever progress we have made. So we need to integrate a period of reflection into our daily lives." },
      { title: "Educated", author: "Tara Westover", note: "The ability to evaluate many ideas, many histories, many points of view, is at the heart of what it means to create one's self." },
      { title: "The Island of Missing Trees", author: "Elif Shafak" },
      { title: "Co-Intelligence", author: "Ethan Mollick" },
      { title: "Orbital", author: "Samantha Harvey" },
      { title: "A Room of One's Own", author: "Virginia Woolf" },
      { title: "Small Things Like These", author: "Claire Keegan" },
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl" },
      { title: "The Five Dysfunctions of a Team", author: "Patrick Lencioni" }
    ]
  },

  contact: {
    heading: "Let's talk.",
    text: "I'm always keen to exchange ideas on strategy, AI governance, or a good book. Feel free to reach out."
  }
};
