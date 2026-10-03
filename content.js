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
      "Nine years across Google Cloud and ASML, an Oxford MBA, and a growing body of work on AI governance. I'm passionate about emerging technologies. Off the clock: hiking, surfing, film photography, and a long reading list.",
    sticker: ["Let's talk", "AI, strategy, books"], // the round badge on the portrait; it links to the contact section
    tags: ["Strategy & Ops", "Program Management", "AI Governance", "Emerging Tech"],
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

  // SELECTED WORK. Case studies follow the Context / Approach / Outcome
  // pattern. While `projects` is empty, the page shows `projectsPlaceholder`
  // instead. To add a case study, copy this template into the list:
  //
  //   {
  //     number: "01",
  //     title: "Short, specific title",
  //     org: "Company or partner",
  //     year: "2026",
  //     kind: "Programme lead",            // your role or the type of work
  //     context: "The situation and why it mattered.",
  //     approach: "What you did and how.",
  //     outcome: "What changed as a result.",
  //     skills: ["Skill one", "Skill two"],
  //     links: [{ label: "Read more", url: "https://..." }]   // or []
  //   },
  projects: [],
  projectsPlaceholder: {
    title: "Case studies in the works.",
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
      title: "Maya's Journey",
      outlet: "mayasjourney.ai",
      kind: "Interactive story",
      url: "https://mayasjourney.ai/",
      blurb: "The companion narrative to the brief: one student, two possible AI futures, and the choices that separate them."
    },
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

  // Speaking & advisory section. Add real events to `proof` as you do them,
  // e.g. "Panel on AI governance, Oxford AI Society, Nov 2026".
  speaking: {
    heading: "Speaking & advisory.",
    intro:
      "Alongside my day job, I'm available for talks, panels and workshops, and for short advisory projects. I draw on nine years of strategy and operations in technology companies, my work on AI governance, and plenty of time spent at the front of a room.",
    offers: [
      {
        title: "Talks & panels",
        text: "Keynotes, fireside chats and panel seats for conferences, universities and company events.",
        topics: ["AI governance and responsible adoption", "AI, education and the future of work", "Going slow in an age of speed"]
      },
      {
        title: "Workshops & masterclasses",
        text: "Hands-on sessions for teams, from a single afternoon to a short series.",
        topics: ["Turning strategy into programmes that ship", "Forecasting and planning that people trust", "Operational excellence and automation"]
      },
      {
        title: "Short advisory projects",
        text: "Scoped engagements of days or weeks for founders and leadership teams.",
        topics: ["Strategy and operations for scaling teams", "Post-merger integration", "AI readiness and governance"]
      }
    ],
    proofLabel: "Rooms I've led",
    proof: [
      "Operational excellence workshops for 200+ people at ASML",
      "Sales masterclass adopted across EMEA at Google",
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
    text: "I'm always keen to exchange ideas on strategy, AI governance, or a good book. I also welcome speaking invitations and short advisory projects. Feel free to reach out."
  }
};
