// ============================================================
// EVERGREEN RESILIENCE INSTITUTE — SITE DATA
// ============================================================
// Edit THIS file to update your website content.
// Content fields marked with (markdown) support full markdown:
//   **bold**, *italic*, # Heading, - lists, 1. numbered lists
// You never need to touch App.jsx for content changes.
// ============================================================

// --- SITE INFO ---
export const siteInfo = {
  name: "Evergreen Resilience Institute",
  tagline: "Where frontier science meets community resilience",
location: "Calgary, Alberta, Canada",
  type: "Independent Research Foundation",
  affiliations: [], // e.g. ["NASA JPL Alumni", "World Bank"]
  // logo: "/images/logo.svg",
};

// --- UI STRINGS ---
// All section labels, headings, buttons, and blurbs that appear in the site.
// Edit here — never touch App.jsx for text changes.
export const ui = {
  hero: {
    badge: "An independent not-for-profit think tank\u00a0\u00a0|\u00a0\u00a0Registered under the Canada Not-for-profit Corporations Act\u00a0\u00a0|\u00a0\u00a0Established April 2026",
    // h1 is split: accentWord is highlighted in green, rest is plain
    h1AccentWord: "Where",
    h1Rest: "frontier science meets community resilience",
    descLine1: "Advancing AI-driven Earth observation and building climate resilience through community engagement,",
    descLine2: "based out of Evergreen neighborhood, Calgary, Canada",
    btnPrimary: "Our Research",
    btnSecondary: "Collaborate",
  },
  about: {
    sectionLabel: "About Us",
  },
  research: {
    sectionLabel: "Research Focus",
    headingAccent: "Where",
    headingRest: "frontier science meets community resilience",
  },
  team: {
    sectionLabel: "Our Team",
    headingAccent: "Researchers",
    headingRest: "building resilience",
    pubsButton: "Selected recent publications \u2193",
  },
  publications: {
    sectionLabel: "Selected Publications",
    headingAccent: "Selected",
    headingRest: "recent research from the founders",
    blurb: "Selected from 40+ combined publications. Full lists on Google Scholar:",
  },
  contact: {
    sectionLabel: "Get in Touch",
    heading: "Collaborate with us",
    blurb: "We welcome collaborations with researchers, communities, funding agencies, and organizations working on climate resilience, water systems, and food security.",
  },
  footer: {
    tagline: "Open Science for Climate Resilience",
  },
};

// --- ABOUT --- (markdown supported)
export const about = {
  paragraph1: `
The Evergreen Resilience Institute is an independent, not-for-profit research institution based in Calgary, Alberta. We investigate:

- how complex global environmental systems change;
- what causes them to change;
- the implications for local communities and ecosystems; and
- how to make local systems resilient to these changes

We use varied approaches including leveraging field observation network using **remote sensing**, **climate modeling** and **AI-ML workflows**, as well as social science techniques such as narrative analysis, interviews, surveys, stakeholder consultations, and policy labs.
  `,

  paragraph2: `
Founded by earth system science and environmental social science researchers with experience at **NASA Jet Propulsion Laboratory**,  **National Center for Atmospheric Research**,  **University of Colorado Boulder**, **Arizona State University**, and the **World Bank**, we bridge the gap between state-of-the-art Earth system science and local action — from global continental drying studies published in *Science Advances* to a community digital twin of the Bow River Basin.
  `,

  values: [
    { label: "Open Science", desc: "All research freely accessible" },
    { label: "Ethical AI-Driven", desc: "Water-efficient AI tools meet Earth observation" },
    { label: "Community-Rooted", desc: "Global methods, local impact" },
  ],
};

// --- RESEARCH AREAS --- (desc fields support markdown)
export const researchAreas = [
  {
    num: "01",
    title: "Local-to-Global Water Cycle Change",
    desc: `
Quantifying how climate change and human activity are altering freshwater availability. Using multiple satellite missions to track:

- Groundwater depletion
- Water supply and demand changes
- Climate risks to society and ecosystems
    `,
    tags: ["Remote Sensing", "Tipping Points", "Extremes", "Vulnerability"],
  },
  {
    num: "02",
    title: "Ethical AI for Earth Observation",
    desc: `
Developing free, open, local, and private AI/ML workflows with minimal water footprint to:

- Provide openly accessible, near-real-time data via digital twins
- Detecting emerging drought signals
- Building predictive tools for freshwater availability
    `,
    tags: ["AI-Native models", "Data-fusion", "Digital Twins", "Prediction"],
  },
  {
    num: "03",
    title: "Water & Food Policy",
    desc: `
Investigating the governance and policy dimensions of water and food systems — from agricultural water sustainability and digital agriculture adoption in Alberta to stakeholder engagement in climate adaptation and the food-energy-water nexus.
    `,
    tags: [
      "Water Governance",
      "Food Systems",
      "Policy Narratives",
      "Digital Agriculture",
    ],
  },
  {
    num: "04",
    title: "Community Resilience",
    desc: `
Translating science into local action through:

- Public engagement and connecting communities to the climate science shaping their landscapes
- Nature journalling workshops
- Providing tools to reduce water, food, and energy dependence
    `,
    tags: [
      "Bow River Basin",
      "Science Communication",
      "Food Security",
    ],
  },
];

// --- TEAM --- (bio fields support markdown)
export const team = [
  {
    name: "Hrishikesh A. Chandanpurkar, PhD",
    aka: "Hrishi",
    role: "Co-Founder, Director of Science",
    bio: `
Earth system scientist studying global water cycle changes at multiple scales. PhD in Earth System Science from **University of California, Irvine**.

He has conducted research at/for **The World Bank**, **NASA Jet Propulsion Laboratory**, **National Center for Atmospheric Research**, **Colorado Center for Astrodynamics Research**, **Global Institute for Water Security**, and **Arizona State University** among others. His work has been published in journals such as *Science Advances*, *Nature*, *PNAS*, *Geophysical Research Letters*, and other leading journals. He has served as a reviewer for multiple NASA ROSES panels. He is a member of the **Bow River Basin Council Science Committee**.
    `,
    expertise: [
      "Remote Sensing",
      "GRACE/GRACE-FO",
      "Climate Modeling",
      "Hydrology",
      "AI/ML",
      "Python",
    ],
    links: {
      scholar: "https://scholar.google.com/citations?user=jlwo8s8AAAAJ&hl=en",
      github: "https://github.com/hrishikeshac",
      orcid: "https://orcid.org/0000-0002-7573-8056",
    },
    initial: "H",
    photo: "/images/hrishi_photo.jpg",
  },
  {
    name: "Juhi Huda, PhD",
    role: "Co-Founder, Director of Policy & Engagement",
    bio: `
Environmental social scientist studying how policy, governance, and communication intersect to shape environmental and agricultural outcomes. PhD in Environmental Studies from **University of Colorado, Boulder**.

She has conducted research at **NASA Jet Propulsion Laboratory**, **International Centre for Integrated Mountain Development (ICIMOD, Nepal)**, **Great Basin Institute**,  **FLAME University (India)**, and **University of Calgary** among others. Her work has been published in Review of Policy Research, Politics & Policy, and Journal of Rural Studies among others. She is a member of the **Bow River Basin Council Legislation and Policy Committee**.
    `,
    expertise: [
      "Water Policy",
      "Food Systems Governance",
      "Science Communication",
      "Narrative Policy",
      "Digital Agriculture",
    ],
    links: {
      scholar: "https://scholar.google.com/citations?user=s4FyAlQAAAAJ&hl=en&oi=ao",
    },
    initial: "J",
    photo: "/images/juhi_photo.jpg",
  },
];

// --- PUBLICATIONS ---
// highlight: true  →  shown in accent color with "Featured" badge
// To add a new paper, copy one block and fill in the fields.
export const publications = [
  {
    year: "2026",
    authors: "Mohajer, B., Famiglietti, J.S., Chandanpurkar, H.A., et al.",
    title: "Key natural influences on groundwater storage changes in Central and Southern Arizona",
    journal: "Nature Scientific Reports",
    highlight: true,
    doi: "https://doi.org/10.1038/s41598-026-44132-0",
  },
  {
    year: "2026",
    authors: "Ishaque, H., Huda, J., & Lhermie, G.",
    title: "Beyond cost-benefit: Governance, trust, and support in the adoption of digital agriculture technologies in Alberta, Canada",
    journal: "Journal of Rural Studies, 122, 103996",
    highlight: true,
    doi: "https://doi.org/10.1016/j.jrurstud.2025.103996",
  },
  {
    year: "2025",
    authors: "Chandanpurkar, H.A., Famiglietti, J.S., Gopalan, K., Wiese, D.N., Wada, Y., Kakinuma, K., Reager, J.T., Zhang, F.",
    title: "Unprecedented continental drying, shrinking freshwater availability, and increasing land contributions to sea level rise",
    journal: "Science Advances, 11, eadx0298",
    highlight: true,
    doi: "https://doi.org/10.1126/sciadv.adx0298",
  },
  {
    year: "2025",
    authors: "Zhang, F., Borja-Vega, C., Chandanpurkar, H.A., et al.",
    title: "Continental Drying: A Threat to Our Common Future",
    journal: "World Bank Policy Report",
    highlight: true,
    doi: "https://research.utwente.nl/en/publications/continental-drying-a-threat-to-our-common-future/",
  },
  {
    year: "2025",
    authors: "Mambo, T., Nelson, F., Huda, J., Lhermie, G.",
    title: "Identifying gaps and opportunities to promote regenerative agriculture in Alberta, Canada",
    journal: "Journal of Rural Studies, 119, 103748",
    highlight: true,
    doi: "https://doi.org/10.1016/j.jrurstud.2025.103748",
  },
  {
    year: "2024",
    authors: "Rohde, M., ... Chandanpurkar, H.A., ... et al.",
    title: "Groundwater-dependent ecosystem map exposes global dryland protection needs",
    journal: "Nature, 632, 101–107",
    highlight: true,
    doi: "https://doi.org/10.1038/s41586-024-07702-8",
  },
];

// --- CONTACT ---
export const contact = {
  emails: [
    { label: "General Inquiries", address: "info@evergreenresilience.org" },
    { label: "Director of Science", address: "hrishi@evergreenresilience.org" },
    { label: "Director of Policy & Engagement", address: "juhi@evergreenresilience.org" },
  ],
  socialLinks: [
    // {
    //   label: "Google Scholar",
    //   url: "https://scholar.google.com/citations?user=jlwo8s8AAAAJ&hl=en",
    // },
    // { label: "GitHub", url: "https://github.com/hrishikeshac" },
    // {
    //   label: "ResearchGate",
    //   url: "https://www.researchgate.net/profile/Hrishikesh-Chandanpurkar",
    // },
  ],
};
