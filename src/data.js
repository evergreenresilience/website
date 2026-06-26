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

// --- PROJECTS --- (description fields support markdown)
// Each project maps to a dedicated page at /projects/:slug
export const projects = [
  {
    slug: "global-water-cycle",
    num: "01",
    title: "Global Water Cycle Monitoring",
    tagline: "Tracking freshwater change from space using AI-driven satellite synthesis",
    status: "Active",
    leads: ["Hrishikesh A. Chandanpurkar"],
    description: `
We are building a continuous, near-real-time synthesis of global freshwater availability using data from multiple satellite missions — GRACE/GRACE-FO, MODIS, Landsat, Sentinel, and others — combined with AI/ML workflows to detect emerging trends and tipping points.

**What we're doing:**

- Integrating satellite gravity (GRACE/GRACE-FO), optical, and microwave remote sensing to track groundwater, surface water, and snow water equivalent simultaneously
- Developing open, reproducible pipelines for freshwater monitoring that any researcher or agency can adopt
- Identifying regions approaching critical freshwater thresholds, particularly in dryland and heavily irrigated basins
- Connecting global-scale drying trends to local water supply and ecosystem vulnerability

**Why it matters:**

Our 2025 *Science Advances* paper documented unprecedented continental drying over the past two decades. This project builds on that foundation to provide ongoing, actionable monitoring — not just a historical snapshot.
    `,
    tags: ["Remote Sensing", "GRACE/GRACE-FO", "Groundwater", "Tipping Points", "Extremes", "AI/ML"],
    outputs: [
      { label: "GRACE Water Stocks Dashboard", url: "https://waterstocks.evergreenresilience.org" },
    ],
    // relatedPubs: indices into publications array
    relatedPubs: [2, 3, 5],
  },
  {
    slug: "brain",
    num: "02",
    title: "Bow River Basin AI Network (BRAIN)",
    tagline: "A community digital twin of the Bow River Basin powered by ethical, local AI",
    status: "In Development",
    leads: ["Hrishikesh A. Chandanpurkar", "Juhi Huda"],
    description: `
The Bow River Basin AI Network (BRAIN) is a community-scale digital twin of the Bow River watershed — one of the most important freshwater systems in Western Canada and the primary water source for Calgary and southern Alberta.

**What we're building:**

- A near-real-time dashboard integrating stream gauge data, snowpack measurements, glacier retreat estimates, and groundwater levels across the Bow Basin
- AI/ML models trained locally for drought prediction, flood risk, and long-term water availability forecasting specific to the Bow
- Open, privacy-respecting infrastructure: all models run locally, no data leaves the community
- Tools co-designed with Indigenous communities, municipalities, agricultural users, and conservation organizations across the basin

**Guiding principles:**

BRAIN is built on three commitments — it must be **free** (no paywalls, ever), **local** (data stays in the community), and **ethical** (minimal energy footprint, transparent methods). We call this the FLE framework for responsible AI in environmental monitoring.
    `,
    tags: ["Digital Twins", "Bow River", "AI-Native", "Data Fusion", "Community Co-design"],
    outputs: [],
    relatedPubs: [],
  },
  {
    slug: "food-energy-water",
    num: "03",
    title: "Food-Energy-Water Nexus",
    tagline: "Understanding the interconnected governance of food, energy, and water systems in Alberta",
    status: "Active",
    leads: ["Juhi Huda"],
    description: `
Food production, energy generation, and freshwater availability are deeply entangled systems. Decisions in one domain inevitably ripple through the others — yet they are typically governed and studied in silos.

**What we're investigating:**

- How water policy, agricultural incentives, and energy regulation interact and sometimes conflict in Alberta and the broader Canadian Prairies
- Barriers and enablers for digital agriculture adoption among Alberta farmers, and what this means for water efficiency
- The role of narrative and trust in shaping farmer and stakeholder responses to climate-adaptive governance
- Pathways toward regenerative agriculture that reduce pressure across all three systems simultaneously

**Methods:**

We combine quantitative analysis of agricultural and hydrological datasets with qualitative social science: interviews, stakeholder consultations, narrative policy analysis, and survey methods. This mixed-methods approach lets us move from "what is changing" to "why, and what can be done."
    `,
    tags: ["Water Governance", "Food Systems", "Policy Narratives", "Digital Agriculture", "Alberta"],
    outputs: [],
    relatedPubs: [1, 4],
  },
  {
    slug: "nature-journaling",
    num: "04",
    title: "Community Resiliency Through Nature Journaling",
    tagline: "Building ecological literacy and community connection through the practice of observing and recording nature",
    status: "Active",
    leads: ["Juhi Huda", "Hrishikesh A. Chandanpurkar"],
    description: `
Science literacy and ecological connection are preconditions for community climate resilience — but traditional public engagement often fails to build lasting relationships between people and the landscapes they depend on.

Nature journaling offers a different path: through sustained, personal observation and recording of the natural world, participants develop deep attentiveness to seasonal change, species presence and absence, and long-term ecological shifts in their own neighborhoods.

**What we're doing:**

- Running nature journaling workshops in Calgary's Evergreen neighborhood and along the Bow River corridor
- Documenting how consistent journaling practice changes participants' relationship to local ecosystems and climate change
- Building a community archive of observations that captures phenological change over time
- Connecting journaling communities to the broader citizen science and Indigenous land stewardship networks in the region

**Why nature journaling:**

The practice is radically accessible — all you need is a notebook. It scales from children to seniors, requires no scientific background, and has been shown to build the kind of slow, attentive relationship with place that underlies genuine community resilience.
    `,
    tags: ["Science Communication", "Community Engagement", "Phenology", "Bow River", "Citizen Science"],
    outputs: [],
    relatedPubs: [],
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
