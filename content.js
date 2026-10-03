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
    status: "Open to conversations",
    email: "tanvinautiyal5@gmail.com",
    linkedin: "https://www.linkedin.com/in/tanvinautiyal/",
    resume: "https://docs.google.com/document/d/1JHPfzMx5o-e4SsV16CDrYn55ZYgExd_nxBvmLZ3qzUI/edit",
    goodreads: "https://www.goodreads.com/tanvisbookshelf",
    substack: "https://tanvinautiyal5.substack.com/",
    headshot: "assets/headshot.jpg",
    volume: "Portfolio · Vol. I / 2026"
  },

  hero: {
    greeting: "Hi, I'm",
    tagline: "Strategy & operations lead who turns ambiguity into programs that ship.",
    intro:
      "Nine years across Google Cloud and ASML, an Oxford MBA, and a growing body of work on AI governance. I'm passionate about emerging technologies, stoicism, and mental health. Off the clock: hiking, surfing, film photography, and a long reading list.",
    sticker: ["Oxford MBA", "AI Governance"],
    tags: ["Strategy & Ops", "Program Management", "AI Governance", "Emerging Tech", "Stoicism", "Mental Health"],
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
        "Partner to 2 VPs, 5 MDs and 500+ field sellers driving Google Cloud across EMEA North, UK & Ireland and Sub-Saharan Africa.",
      highlights: [
        "Spearheaded the UKI SSA FY26 Strategy & Execution program for Gemini Enterprise, increasing attainment 5× in one quarter with a blocker taxonomy that unjammed the largest strategic deals.",
        "Built a new forecasting framework that lifted efficiency ~30% and drove accuracy above 95%, clarifying roles across Strategy & Ops and Finance.",
        "Owned the end-to-end FY25 quota cascade for ~200 FTE across 9 products, delivered on time in Anaplan as a single source of truth.",
        "Designed an iACV masterclass adopted by 150+ sellers in EMEA and picked up by APAC as best practice.",
        "20% projects: co-authored the Cloud AI Compliance Framework for a 2026 AI compliance strategy, and launched a privacy engagement program between Chrome Partnerships and ad agencies."
      ]
    },
    {
      company: "Google",
      role: "MBA Intern",
      team: "EMEA Business Finance · Ads",
      location: "London",
      period: "Jul — Sep 2023",
      summary: "Modelled the revenue impact of incoming regulation on Google Ads using SQL and cross-functional review with finance, commercial and legal.",
      highlights: [
        "Proposed 10 actionable risk-mitigation recommendations that let Ads focus its business model on high-risk scenarios."
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
    },
    {
      number: "02",
      title: "UK AI-SME Fund",
      org: "BlueDot Impact · AI Governance course",
      year: "2025",
      kind: "Policy proposal · Final project",
      context:
        "New AI regulation risks pricing small and medium enterprises out of the LLM market: a 200% rise in fixed compliance costs can turn a profitable AI startup loss-making while barely denting a tech giant.",
      approach:
        "Proposed a dedicated fund, capitalised by regulatory revenues, that offsets the single biggest barrier to entry: compute. Designed a tiered voucher program modelled on Canada's AI Compute Access Fund, with eligibility rules, safety-aligned priorities and mitigations for compute scarcity and the subsidy cliff.",
      outcome:
        "Earned the BlueDot AI Governance certification. The proposal argues regulatory objectives and market competitiveness need not be mutually exclusive.",
      skills: ["AI Policy", "Competition Economics", "Program Design"],
      links: [
        { label: "Read the proposal", url: "https://docs.google.com/document/d/17lshGZEjIqNXb2YA-D5Hnp2N3TpY7_yShPnuyvq8QpM/edit" },
        { label: "Certificate", url: "https://bluedot.org/certification?id=recBVckv0k3Z3c3Cs" }
      ]
    },
    {
      number: "03",
      title: "2026 AI Compliance Strategy for Google Cloud",
      org: "Google · 20% project",
      year: "2025",
      kind: "Internal strategy",
      context:
        "Cloud AI revenue was growing faster than the organisation's shared understanding of regulatory exposure.",
      approach:
        "Synthesised Cloud AI revenue data with regulatory risk assessments and co-authored the Cloud AI Compliance Framework, building the case-for-change narrative for senior leadership.",
      outcome:
        "Framework influenced the product roadmap and gave leadership a single view of where compliance and revenue intersect.",
      skills: ["AI Compliance", "Executive Influence", "Data Synthesis"],
      links: []
    }
  ],

  writing: [
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
      "The parts of me that don't fit on a CV. I shoot film, read widely, and spend as much time outdoors as London allows.",
    pursuits: [
      { icon: "📷", name: "Film photography", note: "Olympus OM10 and AF-10XB, mostly city light" },
      { icon: "🥾", name: "Hiking", note: "Long days, small summits" },
      { icon: "🏄", name: "Surfing", note: "Cold water, warm coffee after" },
      { icon: "🏛️", name: "Stoicism", note: "A daily practice, not a slogan" }
    ],
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
      { file: "2023-04-israel.jpg", w: 597, h: 900, caption: "Israel", date: "Apr 2023" },
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
    text: "I'm always keen to exchange ideas on strategy, AI governance, or a good book. If you're hiring for a role where ambiguity needs turning into programs, I'd love to hear about it."
  }
};
