const icons = {
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12Z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>',
  briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"></path><rect x="3" y="6" width="18" height="14" rx="2"></rect><path d="M3 12h18"></path></svg>',
  mode: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13a8 8 0 0 1 16 0"></path><path d="M12 13l4-5"></path><path d="M4 17h16"></path></svg>',
  language: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a14 14 0 0 1 0 18"></path><path d="M12 3a14 14 0 0 0 0 18"></path></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v4"></path><path d="M16 3v4"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M4 10h16"></path></svg>',
};

const teamClass = {
  Marketing: "team-marketing",
  Climbing: "team-marketing",
  Fishing: "team-marketing",
  Design: "team-design",
  Sales: "team-sales",
  Operations: "team-operations",
  Support: "team-support",
  "French-speaking": "team-support",
};

const testimonials = [
  {
    quote:
      '"The best ideas usually start as a real training problem. The satisfying part is watching the right people gather around it and turn it into something athletes can use."',
    person: "Product team member",
  },
  {
    quote:
      '"Support is close to the product here. When we hear the same question from athletes again and again, that signal can become a fix, a workflow, or a better explanation."',
    person: "Customer support team member",
  },
  {
    quote:
      '"Campaigns move quickly because the story is already in the sport. We are not inventing momentum from scratch, we are listening for it and giving it a clean shape."',
    person: "Marketing team member",
  },
];

const jobs = [
  {
    id: "climbing-product-marketing-lead",
    title: "Climbing Product Marketing Lead",
    team: "Marketing",
    location: "Colorado / California / Washington, United States",
    locationGroup: "United States",
    type: "Full-time",
    mode: "Hybrid",
    salary: "$80,000 - $100,000",
    postedDate: "2026-05-20",
    email: "careers@coros.com",
    reportsTo: "Lewis Wu, CEO",
    summary:
      "Shape how COROS products are built, positioned, and adopted within the climbing community across product, athletes, marketing, and community.",
    about:
      "This role sits at the intersection of product, athletes, marketing, and community. You will work closely with climbers, creators, ambassadors, engineers, and marketing teams to ensure COROS products solve problems climbers care about and are communicated in a way that feels authentic to the sport.",
    responsibilities: [
      "Lead climbing focused product marketing initiatives across COROS platforms and campaigns.",
      "Define positioning, messaging, and launch strategy for climbing related features and products.",
      "Build feedback loops between climbers, testers, athletes, and engineering teams.",
      "Recruit and manage climbing athletes, ambassadors, and testers.",
      "Support field testing, launch planning, events, and climbing related marketing activations.",
    ],
    requirements: [
      "Deep involvement in climbing through trad climbing, alpine climbing, sport climbing, or related disciplines.",
      "Strong product instincts and the ability to explain what works, what does not, and what is missing.",
      "Clear communication across marketing, product, and engineering teams.",
      "Experience with product marketing, sports marketing, athlete management, content production, or wearables is a strong plus.",
    ],
    compensation: ["Full-time with benefits.", "Medical insurance, paid time off, and 401(k) contributions."],
    materials: ["Resume", "Cover letter"],
    languages: ["English"],
  },
  {
    id: "senior-brand-designer",
    title: "Senior Brand Designer",
    team: "Design",
    location: "London, United Kingdom",
    locationGroup: "United Kingdom",
    type: "Full-time",
    mode: "Remote",
    salary: "Competitive salary",
    postedDate: "2026-05-25",
    email: "careers@coros.com",
    reportsTo: "Head of Brand Marketing",
    summary:
      "Shape visual creative for COROS across brand campaigns, editorial, retail, product marketing, and digital experiences.",
    about:
      "The Senior Brand Designer will help shape the visual creative for COROS, working across brand campaigns, editorial, retail, and product marketing. The right candidate is comfortable conceptualizing responses to briefs and executing across consumer touchpoints.",
    responsibilities: [
      "Lead design work across campaigns, packaging, activations, digital media, landing pages, social media, and editorial stories.",
      "Translate marketing and product strategy into visual systems that scale across regions and channels.",
      "Refine, evolve, and maintain the COROS brand across all touchpoints.",
      "Partner with digital design and development teams to create high-performing product pages.",
      "Develop original creative that brings COROS products, campaigns, and editorial stories to life.",
    ],
    requirements: [
      "5+ years of experience in brand design, either in-house or at a creative agency.",
      "A strong portfolio demonstrating concept-led thinking, refined execution, and cohesive brand systems.",
      "Ability to clearly communicate product stories, including hardware, software, and technical features.",
      "Comfort collaborating across regions, disciplines, and time zones.",
      "Enthusiasm for endurance sports and the intersection of sport, brand, and culture.",
    ],
    compensation: [
      "Full-time permanent employment with 25 days paid holiday.",
      "Employer pension contributions and statutory benefits.",
      "Equipment allowance and flexible work hours.",
    ],
    materials: ["Resume", "Portfolio"],
    languages: ["English"],
  },
  {
    id: "fishing-product-marketing-manager",
    title: "Fishing Product Marketing Manager",
    team: "Marketing",
    location: "Colorado, United States",
    locationGroup: "United States",
    type: "Full-time",
    mode: "Hybrid",
    salary: "Benefits package",
    postedDate: "2026-04-15",
    email: "careers@coros.com",
    reportsTo: "Head of Sports Marketing",
    summary:
      "Enhance product and software for anglers while translating consumer insights into COROS Fishing Solution marketing.",
    about:
      "COROS is building a better experience for anglers at every level. This role is for someone passionate about fishing and consumer electronics who can connect product feedback, campaign work, and market insight.",
    responsibilities: [
      "Learn the COROS Fishing Solution and market it through consumer insights.",
      "Track product use cases for continued development.",
      "Identify, develop, and coordinate fishing partners for product enhancement.",
      "Work with go-to-market teams on new features and hardware.",
      "Lead messaging to press and media around COROS Fishing Technology.",
    ],
    requirements: [
      "Bachelor's degree or above.",
      "Strong understanding of fishing as a sport.",
      "2+ years of experience in product feedback or marketing.",
      "Excellent communication, collaboration, and project management skills.",
    ],
    compensation: ["Medical insurance.", "Paid time off.", "401(k) contributions."],
    materials: ["Resume", "Cover letter"],
    languages: ["English"],
  },
  {
    id: "canada-country-manager",
    title: "Canada Country Manager",
    team: "Sales",
    location: "Canada",
    locationGroup: "Canada",
    type: "Full-time",
    mode: "Remote",
    salary: "Competitive salary",
    postedDate: "2026-03-10",
    email: "careers@coros.com",
    reportsTo: "Director of Retail Experience",
    summary:
      "Lead and scale the COROS business in Canada with ownership of sales, marketing, market strategy, and partner relationships.",
    about:
      "This role is both strategic and hands-on, balancing long-term brand and channel development with day-to-day execution across wholesale, retail, events, athletes, and marketing programs.",
    responsibilities: [
      "Own Canadian market performance, including revenue growth and brand presence.",
      "Develop and execute annual go-to-market plans aligned with global priorities.",
      "Lead wholesale and specialty retail strategy across Canada.",
      "Build relationships with retail partners, buying groups, and strategic accounts.",
      "Represent COROS at key Canadian races, events, and industry moments.",
    ],
    requirements: [
      "5+ years of experience in sales, marketing, or market management within outdoor, run, or sports industries.",
      "Deep understanding of the Canadian outdoor and running landscape.",
      "Strong sales acumen, including account management and forecasting.",
      "Willingness to travel regularly within Canada and occasionally internationally.",
    ],
    compensation: ["Competitive salary based on experience.", "Paid time off aligned with local standards.", "Flexible work structure."],
    materials: ["Resume", "Supporting documents"],
    languages: ["English"],
  },
  {
    id: "operation-specialist-us",
    title: "Operation Specialist (US)",
    team: "Operations",
    location: "Irvine, CA, United States",
    locationGroup: "United States",
    type: "Full-time",
    mode: "Onsite",
    salary: "Benefits package",
    postedDate: "2026-04-20",
    email: "careers@coros.com",
    reportsTo: "Operations Leadership",
    summary:
      "Ensure smooth operations across the global team, including 2B order processing, 3PL partnerships, and US warehouse operations.",
    about:
      "This role helps COROS keep operations moving as the company grows. The ideal candidate is organized, communicative, and comfortable collaborating with international teams.",
    responsibilities: [
      "Manage 2B order processing from creation to fulfillment.",
      "Serve as the in-house contact point for 2B customers.",
      "Manage implementation of third-party logistics partnerships for US warehouses.",
      "Oversee inbound and outbound shipments and inventory management.",
      "Provide data insights and reports on US logistics and warehouse performance.",
    ],
    requirements: [
      "Bachelor's degree required.",
      "Ability to multitask in a fast-paced, high-growth environment.",
      "Strong time management and independent work habits.",
      "At least 1 year of administrative or office support experience.",
    ],
    compensation: ["Full-time employment with benefits.", "Bonus potential.", "Health insurance, PTO, and 401(k)."],
    materials: ["Resume", "Supporting documents"],
    languages: ["English"],
  },
  {
    id: "operations-specialist-uk",
    title: "Operations Specialist (UK)",
    team: "Operations",
    location: "United Kingdom",
    locationGroup: "United Kingdom",
    type: "Full-time",
    mode: "Hybrid",
    salary: "Benefits package",
    postedDate: "2026-04-01",
    email: "careers@coros.com",
    reportsTo: "Operations Leadership",
    summary:
      "Manage UK logistics, third-party partnerships, and warehouse operations while supporting the global COROS team.",
    about:
      "The ideal candidate has project management expertise, hands-on UK logistics experience, and the ability to collaborate across international teams.",
    responsibilities: [
      "Manage 2B order processing from creation to fulfillment.",
      "Support implementation of third-party logistics partnerships within the UK.",
      "Monitor logistics operations to improve efficiency and reduce costs.",
      "Analyze operational data to identify areas for improvement.",
      "Collaborate with sales, customer service, and supply chain teams.",
    ],
    requirements: [
      "Degree in logistics, supply chain, international trade, finance, or a related field preferred.",
      "1-3+ years of experience in operations, order fulfillment, or supply chain.",
      "Excellent problem-solving and multitasking ability.",
      "Detail-oriented, proactive, and collaborative working style.",
    ],
    compensation: ["Full-time employment.", "Paid time off aligned with local standards.", "Health benefits and statutory protections."],
    materials: ["Resume", "Supporting documents"],
    languages: ["English"],
  },
  {
    id: "customer-support-specialist",
    title: "Customer Support Specialist",
    team: "Support",
    location: "United States",
    locationGroup: "United States",
    type: "Full-time",
    mode: "Remote",
    salary: "$40,000 - $55,000",
    postedDate: "2026-03-28",
    email: "careers@coros.com",
    reportsTo: "Support Leadership",
    summary:
      "Provide product support to COROS users and athletes via phone, email, chat, and social media with clear and thoughtful communication.",
    about:
      "Core to our mission is world-class product support that matches the quality of our products. This role helps users resolve issues efficiently while contributing to a positive team environment.",
    responsibilities: [
      "Resolve issues via phone, email, and chat.",
      "Learn and maintain up-to-date knowledge of all COROS products.",
      "Monitor and respond to inquiries across social media platforms.",
      "Maintain clear communication with leadership and apply feedback.",
      "Contribute to a productive and team-oriented work environment.",
    ],
    requirements: [
      "4-5 years of high level customer service experience.",
      "Excellent written communication and judgment for public-facing support.",
      "Experience with support tools such as Zendesk or similar systems.",
      "Resident of Colorado, Utah, or California required for this role.",
    ],
    compensation: ["$40,000 - $55,000 per year.", "Medical, dental, vision, and 401(k).", "Generous paid days off."],
    materials: ["Resume", "Supporting documents"],
    languages: ["English"],
  },
  {
    id: "french-customer-support-specialist",
    title: "French Customer Support Specialist",
    team: "Support",
    location: "Almeria, Spain",
    locationGroup: "Spain",
    type: "Full-time",
    mode: "Onsite",
    salary: "Benefits package",
    postedDate: "2026-04-05",
    email: "recrutement@coros.com",
    reportsTo: "Support Leadership",
    summary:
      "Provide French-speaking support to COROS users via phone, email, and chat while maintaining a positive and detail-oriented approach.",
    about:
      "This role is for people who are passionate about sports and technology and eager to contribute to the daily training experience of COROS users.",
    responsibilities: [
      "Resolve customer issues via phone, email, and chat.",
      "Learn, master, and maintain knowledge of COROS products.",
      "Follow attendance standards and stay in clear communication with leadership.",
      "Contribute to a positive, productive, and team-oriented environment.",
    ],
    requirements: [
      "3-4 years of customer service experience preferred.",
      "Willingness to work 9am to 6pm CEST, with a weekend option available.",
      "Excellent verbal and written communication skills.",
      "Professional French speaking ability and fluency in English.",
    ],
    compensation: ["Generous paid holidays.", "Work that stays at work.", "Career development and training."],
    materials: ["Resume", "Supporting documents"],
    languages: ["French", "English"],
  },
  {
    id: "us-country-manager",
    title: "US Country Manager",
    team: "Sales",
    location: "United States",
    locationGroup: "United States",
    type: "Full-time",
    mode: "Hybrid",
    salary: "Competitive salary",
    postedDate: "2026-02-15",
    email: "careers@coros.com",
    reportsTo: "Director of Retail Experience",
    summary:
      "Lead and scale the COROS business in the United States with ownership of sales, marketing, market strategy, and retail growth.",
    about:
      "This role balances long-term brand and channel development with day-to-day execution across wholesale, retail, events, athletes, and marketing programs.",
    responsibilities: [
      "Own US market performance, including revenue growth and long-term market development.",
      "Develop annual go-to-market plans aligned with global priorities and local opportunities.",
      "Lead wholesale and specialty retail strategy across the United States.",
      "Manage local athlete, creator, and ambassador relationships.",
      "Represent COROS at key US races, events, and industry moments.",
    ],
    requirements: [
      "5+ years of experience in sales, marketing, or market management within outdoor, run, or sports industries.",
      "Deep understanding of the US outdoor and running landscape.",
      "Strong account management, forecasting, and performance analysis skills.",
      "Willingness to travel regularly within the US and occasionally internationally.",
    ],
    compensation: ["Competitive salary based on experience.", "Paid time off aligned with local standards.", "Flexible work structure."],
    materials: ["Resume", "Supporting documents"],
    languages: ["English"],
  },
];

const emailRoutes = {
  careers: "careers@coros.com",
  recrutement: "recrutement@coros.com",
};

const jobFieldsById = {
  "climbing-product-marketing-lead": {
    slug: "climbing-product-marketing-lead",
    role: "Climbing",
    locLabel: "CO / CA / WA, United States",
    locations: [
      { city: "Colorado", region: "United States", label: "Colorado, United States" },
      { city: "California", region: "United States", label: "California, United States" },
      { city: "Washington", region: "United States", label: "Washington, United States" },
    ],
    email_target: "careers",
    requires_portfolio: false,
    requires_cover_letter: true,
    is_active: true,
  },
  "senior-brand-designer": {
    slug: "senior-brand-designer",
    role: null,
    locLabel: "London, United Kingdom",
    locations: [{ city: "London", region: "United Kingdom", label: "London, United Kingdom" }],
    email_target: "careers",
    requires_portfolio: true,
    requires_cover_letter: false,
    is_active: true,
  },
  "fishing-product-marketing-manager": {
    slug: "fishing-product-marketing-manager",
    role: "Fishing",
    locLabel: "Colorado, United States",
    locations: [{ city: "Colorado", region: "United States", label: "Colorado, United States" }],
    email_target: "careers",
    requires_portfolio: false,
    requires_cover_letter: true,
    is_active: true,
  },
  "canada-country-manager": {
    slug: "canada-country-manager",
    role: null,
    locLabel: "Remote Canada",
    locations: [{ city: "Remote Canada", region: "Canada", label: "Remote Canada" }],
    email_target: "careers",
    requires_portfolio: false,
    requires_cover_letter: true,
    is_active: true,
  },
  "operation-specialist-us": {
    slug: "operation-specialist-us",
    role: null,
    locLabel: "Irvine, CA, United States",
    locations: [{ city: "Irvine", region: "CA, United States", label: "Irvine, CA, United States" }],
    email_target: "careers",
    requires_portfolio: false,
    requires_cover_letter: false,
    is_active: true,
  },
  "operations-specialist-uk": {
    slug: "operations-specialist-uk",
    role: null,
    locLabel: "United Kingdom",
    locations: [{ city: "United Kingdom", region: "United Kingdom", label: "United Kingdom" }],
    email_target: "careers",
    requires_portfolio: false,
    requires_cover_letter: false,
    is_active: true,
  },
  "customer-support-specialist": {
    slug: "customer-support-specialist",
    role: null,
    locLabel: "Remote United States",
    locations: [{ city: "Remote US", region: "United States", label: "Remote US" }],
    email_target: "careers",
    requires_portfolio: false,
    requires_cover_letter: false,
    is_active: true,
  },
  "french-customer-support-specialist": {
    slug: "french-customer-support-specialist",
    role: "French-speaking",
    locLabel: "Almeria, Spain",
    locations: [{ city: "Almeria", region: "Spain", label: "Almeria, Spain" }],
    email_target: "recrutement",
    requires_portfolio: false,
    requires_cover_letter: false,
    is_active: true,
  },
  "us-country-manager": {
    slug: "us-country-manager",
    role: null,
    locLabel: "United States",
    locations: [{ city: "United States", region: "United States", label: "United States" }],
    email_target: "careers",
    requires_portfolio: false,
    requires_cover_letter: false,
    is_active: true,
  },
};

const applyState = {
  name: "",
};

const state = {
  query: "",
  team: "All",
  location: "All",
  mode: "All",
  sort: "newest",
};

const els = {
  header: document.querySelector(".site-header"),
  menuToggle: document.querySelector(".menu-toggle"),
  search: document.querySelector("#search-input"),
  team: document.querySelector("#department-filter"),
  location: document.querySelector("#location-filter"),
  mode: document.querySelector("#mode-filter"),
  sort: document.querySelector("#sort-select"),
  clear: document.querySelector("#clear-filters"),
  list: document.querySelector("#jobs-list"),
  count: document.querySelector("#result-count"),
  activeFilters: document.querySelector("#active-filters"),
  drawer: document.querySelector("#job-drawer"),
  drawerPanel: document.querySelector(".drawer-panel"),
  drawerContent: document.querySelector("#drawer-content"),
  testimonialTabs: document.querySelector(".testimonial-tabs"),
  testimonialQuote: document.querySelector("#testimonial-quote"),
  testimonialPerson: document.querySelector("#testimonial-person"),
};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getJobFields(job) {
  const fields = jobFieldsById[job.id] || {};
  return {
    slug: fields.slug || job.id,
    role: fields.role || null,
    locLabel: fields.locLabel || job.location,
    locations: fields.locations || [{ city: job.location, region: job.locationGroup, label: job.location }],
    email_target: fields.email_target || "careers",
    requires_portfolio: Boolean(fields.requires_portfolio),
    requires_cover_letter: Boolean(fields.requires_cover_letter),
    is_active: fields.is_active !== false,
    posted_date: job.postedDate,
    salary_range: job.salary,
    reporting_to: job.reportsTo || "",
    desc: job.about,
    bullets: job.responsibilities,
  };
}

function getActiveJobs() {
  return jobs.filter((job) => getJobFields(job).is_active);
}

function getJobEmail(job) {
  const fields = getJobFields(job);
  return emailRoutes[fields.email_target] || emailRoutes.careers;
}

function getJobUrl(job) {
  const fields = getJobFields(job);
  return `https://coros.com/careers/${fields.slug}`;
}

function composeSubject(job, name, city) {
  const applicant = name.trim() || "[Your Name]";
  const location = city.trim() || "[Your Location]";
  return `Application for ${job.title} - ${applicant} - ${location}`;
}

function parsePostedDate(dateString) {
  return new Date(dateString.includes("T") ? dateString : `${dateString}T00:00:00`);
}

function formatDate(dateString) {
  const date = parsePostedDate(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function isNew(dateString) {
  const posted = parsePostedDate(dateString).getTime();
  const now = new Date("2026-06-17T00:00:00").getTime();
  return now - posted < 1000 * 60 * 60 * 24 * 28;
}

function unique(values) {
  return ["All", ...Array.from(new Set(values)).sort((a, b) => a.localeCompare(b))];
}

function populateSelect(select, options) {
  select.innerHTML = options.map((option) => `<option value="${option}">${option}</option>`).join("");
}

function tag(label, icon, className) {
  return `<span class="tag ${className}">${icons[icon]}${escapeHtml(label)}</span>`;
}

function getFilteredJobs() {
  const query = state.query.trim().toLowerCase();
  let visible = getActiveJobs().filter((job) => {
    const fields = getJobFields(job);
    const haystack = [job.title, job.team, fields.role, fields.locLabel, job.location, job.mode, job.summary, job.languages.join(" ")]
      .join(" ")
      .toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesTeam = state.team === "All" || job.team === state.team;
    const matchesLocation = state.location === "All" || job.locationGroup === state.location;
    const matchesMode = state.mode === "All" || job.mode === state.mode;
    return matchesQuery && matchesTeam && matchesLocation && matchesMode;
  });

  visible = visible.sort((a, b) => {
    if (state.sort === "title") return a.title.localeCompare(b.title);
    if (state.sort === "team") return a.team.localeCompare(b.team) || a.title.localeCompare(b.title);
    return parsePostedDate(b.postedDate) - parsePostedDate(a.postedDate);
  });

  return visible;
}

function renderActiveFilters() {
  const filters = [];
  if (state.query.trim()) filters.push(`Search: ${state.query.trim()}`);
  if (state.team !== "All") filters.push(`Team: ${state.team}`);
  if (state.location !== "All") filters.push(`Location: ${state.location}`);
  if (state.mode !== "All") filters.push(`Work setup: ${state.mode}`);

  els.activeFilters.innerHTML = filters.map((filter) => `<span>${filter}</span>`).join("");
  els.clear.disabled = filters.length === 0;
}

function renderJobs() {
  const visible = getFilteredJobs();
  const allJobs = getActiveJobs();
  els.count.textContent = `${visible.length} of ${allJobs.length} roles`;

  if (!visible.length) {
    els.list.innerHTML = `
      <div class="empty-state">
        <h3>No roles match your filters</h3>
        <p>Try adjusting your search, team, location, or work setup.</p>
      </div>
    `;
    renderActiveFilters();
    return;
  }

  els.list.innerHTML = visible
    .map((job) => {
      const fields = getJobFields(job);
      const teamColor = teamClass[job.team] || "team-marketing";
      const languageTag = job.languages.length ? tag(job.languages.join(" / "), "language", "meta-location") : "";
      return `
        <button class="job-card" type="button" data-job-id="${job.id}" aria-label="View ${job.title}">
          <div>
            <div class="job-title-row">
              <h3>${escapeHtml(job.title)}</h3>
              ${isNew(job.postedDate) ? '<span class="new-chip">NEW</span>' : ""}
            </div>
            <p>${escapeHtml(job.summary)}</p>
            ${fields.salary_range ? `<p class="job-salary">${escapeHtml(fields.salary_range)}</p>` : ""}
            <div class="tag-row">
              ${tag(job.team, "briefcase", teamColor)}
              ${tag(fields.locLabel, "pin", "meta-location")}
              ${tag(job.type, "briefcase", "meta-type")}
              ${tag(job.mode, "mode", "meta-mode")}
              ${languageTag}
            </div>
          </div>
          <span class="job-date">Posted <time datetime="${escapeHtml(job.postedDate)}">${formatDate(job.postedDate)}</time></span>
        </button>
      `;
    })
    .join("");

  renderActiveFilters();
}

function renderTestimonial(index) {
  const item = testimonials[index] || testimonials[0];
  if (!els.testimonialQuote || !els.testimonialPerson || !els.testimonialTabs) return;

  els.testimonialQuote.textContent = item.quote;
  els.testimonialPerson.textContent = item.person;
  const selectedTabId = `testimonial-tab-${index}`;
  document.querySelector("#testimonial-panel")?.setAttribute("aria-labelledby", selectedTabId);
  els.testimonialTabs.querySelectorAll("button").forEach((button) => {
    const selected = Number(button.dataset.testimonial) === index;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", String(selected));
    button.setAttribute("tabindex", selected ? "0" : "-1");
  });
}

function renderLocationPicker(job, fields) {
  if (fields.locations.length <= 1) return "";

  if (fields.locations.length > 5) {
    return `
      <label class="apply-field location-select">
        <span>Apply location</span>
        <select data-apply-location-select>
          ${fields.locations
            .map((location, index) => `<option value="${index}">${escapeHtml(location.label)}</option>`)
            .join("")}
        </select>
      </label>
    `;
  }

  return `
    <div class="location-picker">
      <span>Apply location</span>
      <div class="location-options">
        ${fields.locations
          .map(
            (location, index) => `
              <label class="location-card">
                <input type="radio" name="apply-location-${escapeHtml(job.id)}" value="${index}" data-apply-location-radio ${index === 0 ? "checked" : ""} />
                <span>${escapeHtml(location.label)}</span>
              </label>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderApplyBox(job, fields) {
  const defaultCity = fields.locations[0]?.label || "";
  const subject = composeSubject(job, applyState.name, defaultCity);
  const alerts = [
    fields.requires_portfolio
      ? '<div class="apply-alert portfolio">Please attach your portfolio to the email.</div>'
      : "",
    fields.requires_cover_letter
      ? '<div class="apply-alert cover-letter">Please include a cover letter.</div>'
      : "",
  ].join("");

  return `
    <div class="apply-box" data-apply-box data-job-id="${escapeHtml(job.id)}">
      <div class="apply-box-head">
        <div>
          <h3>Apply for this role</h3>
          <p>We will prepare a clean subject line for the recruiting team.</p>
        </div>
        <span>${escapeHtml(getJobEmail(job))}</span>
      </div>
      ${alerts}
      ${renderLocationPicker(job, fields)}
      <div class="apply-fields">
        <label class="apply-field">
          <span>Full name</span>
          <input type="text" value="${escapeHtml(applyState.name)}" placeholder="Your name" autocomplete="name" data-apply-name />
        </label>
        <label class="apply-field">
          <span>City, Country</span>
          <input type="text" value="${escapeHtml(defaultCity)}" placeholder="Your location" autocomplete="address-level2" data-apply-city />
        </label>
      </div>
      <div class="subject-block">
        <span>Subject preview</span>
        <div class="subject-preview" tabindex="0" data-subject-preview>${escapeHtml(subject)}</div>
      </div>
      <p class="apply-feedback" data-apply-feedback aria-live="polite"></p>
      <div class="apply-actions">
        <button class="primary-action" type="button" data-open-mail>Open in Mail</button>
        <button class="secondary-action" type="button" data-copy-subject>Copy subject line</button>
      </div>
    </div>
  `;
}

function renderDrawer(job) {
  const fields = getJobFields(job);
  const teamColor = teamClass[job.team] || "team-marketing";
  const languageTag = job.languages.length ? tag(job.languages.join(" / "), "language", "meta-location") : "";
  const roleDetails = [
    fields.salary_range ? `<span>Salary: ${escapeHtml(fields.salary_range)}</span>` : "",
    fields.reporting_to ? `<span>Reports to: ${escapeHtml(fields.reporting_to)}</span>` : "",
    `<span>Posted: <time datetime="${escapeHtml(fields.posted_date)}">${formatDate(fields.posted_date)}</time></span>`,
  ]
    .filter(Boolean)
    .join("");

  els.drawerContent.innerHTML = `
    <p class="drawer-kicker">${escapeHtml(job.team)}</p>
    <div class="drawer-title-row">
      <h2 id="drawer-title">${escapeHtml(job.title)}</h2>
      <button class="share-button" type="button" data-share-role>Share role</button>
    </div>
    <div class="drawer-tags">
      ${tag(job.team, "briefcase", teamColor)}
      ${tag(fields.locLabel, "pin", "meta-location")}
      ${tag(job.type, "briefcase", "meta-type")}
      ${tag(job.mode, "mode", "meta-mode")}
      ${languageTag}
    </div>
    <div class="detail-meta">${roleDetails}</div>
    <div class="drawer-section">
      <h3>The role</h3>
      <p>${escapeHtml(fields.desc)}</p>
    </div>
    <div class="drawer-section">
      <h3>What you will do</h3>
      <ul>${fields.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
    <div class="drawer-section">
      <h3>Requirements</h3>
      <ul>${job.requirements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
    <div class="drawer-section">
      <h3>Compensation and benefits</h3>
      <ul>${job.compensation.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
    ${renderApplyBox(job, fields)}
  `;
}

function getApplyBoxJob(applyBox) {
  if (!applyBox) return null;
  return jobs.find((item) => item.id === applyBox.dataset.jobId);
}

function getApplySubject(applyBox) {
  const job = getApplyBoxJob(applyBox);
  if (!job) return "";
  const name = applyBox.querySelector("[data-apply-name]")?.value || "";
  const city = applyBox.querySelector("[data-apply-city]")?.value || "";
  return composeSubject(job, name, city);
}

function updateApplyPreview(applyBox) {
  if (!applyBox) return;
  const preview = applyBox.querySelector("[data-subject-preview]");
  if (preview) preview.textContent = getApplySubject(applyBox);
}

function setApplyFeedback(applyBox, message) {
  if (!applyBox) return;
  const feedback = applyBox.querySelector("[data-apply-feedback]");
  if (feedback) feedback.textContent = message;
}

function selectSubjectPreview(applyBox) {
  if (!applyBox) return;
  const preview = applyBox.querySelector("[data-subject-preview]");
  if (!preview) return;
  const range = document.createRange();
  range.selectNodeContents(preview);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  preview.focus();
}

function updateLocationFromPicker(control) {
  const applyBox = control.closest("[data-apply-box]");
  const job = getApplyBoxJob(applyBox);
  if (!job) return;
  const fields = getJobFields(job);
  const cityInput = applyBox.querySelector("[data-apply-city]");
  const index = Number(control.value);
  const location = fields.locations[index] || fields.locations[0];
  if (cityInput && location) cityInput.value = location.label;
  updateApplyPreview(applyBox);
}

function openMailFromApply(applyBox) {
  const job = getApplyBoxJob(applyBox);
  if (!job) return;
  const subject = getApplySubject(applyBox);
  window.location.href = `mailto:${getJobEmail(job)}?subject=${encodeURIComponent(subject)}`;
}

async function copySubject(applyBox, button) {
  const subject = getApplySubject(applyBox);
  const originalText = button.textContent;
  button.disabled = true;
  setApplyFeedback(applyBox, "");

  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      throw new Error("Clipboard API unavailable");
    }
    await navigator.clipboard.writeText(subject);
    button.textContent = "✓ Copied";
  } catch (error) {
    selectSubjectPreview(applyBox);
    button.textContent = "Copy manually";
    setApplyFeedback(applyBox, "Subject selected. Press Cmd+C / Ctrl+C to copy.");
  }

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 1500);
}

async function shareRole(job, button) {
  const url = getJobUrl(job);
  const originalText = button.textContent;

  try {
    if (navigator.share) {
      await navigator.share({ title: job.title, text: job.summary, url });
      return;
    }
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      throw new Error("Clipboard API unavailable");
    }
    await navigator.clipboard.writeText(url);
    button.textContent = "Link copied";
  } catch (error) {
    window.prompt("Copy this role link:", url);
    button.textContent = "Copy link";
  }

  setTimeout(() => {
    button.textContent = originalText;
  }, 1500);
}

function openDrawer(jobId) {
  const job = jobs.find((item) => item.id === jobId);
  if (!job) return;
  renderDrawer(job);
  els.drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  els.drawerPanel.focus();
}

function closeDrawer() {
  els.drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

function clearFilters() {
  state.query = "";
  state.team = "All";
  state.location = "All";
  state.mode = "All";
  els.search.value = "";
  els.team.value = "All";
  els.location.value = "All";
  els.mode.value = "All";
  renderJobs();
}

function init() {
  const activeJobs = getActiveJobs();
  populateSelect(els.team, unique(activeJobs.map((job) => job.team)));
  populateSelect(els.location, unique(activeJobs.map((job) => job.locationGroup)));
  populateSelect(els.mode, unique(activeJobs.map((job) => job.mode)));

  els.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderJobs();
  });

  els.team.addEventListener("change", (event) => {
    state.team = event.target.value;
    renderJobs();
  });

  els.location.addEventListener("change", (event) => {
    state.location = event.target.value;
    renderJobs();
  });

  els.mode.addEventListener("change", (event) => {
    state.mode = event.target.value;
    renderJobs();
  });

  els.sort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderJobs();
  });

  els.clear.addEventListener("click", clearFilters);

  if (els.testimonialTabs) {
    els.testimonialTabs.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-testimonial]");
      if (!tab) return;
      renderTestimonial(Number(tab.dataset.testimonial));
    });

    els.testimonialTabs.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      const tabs = Array.from(els.testimonialTabs.querySelectorAll("[data-testimonial]"));
      const currentIndex = tabs.findIndex((tab) => tab === document.activeElement);
      if (currentIndex < 0) return;
      event.preventDefault();

      let nextIndex = currentIndex;
      if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;

      tabs[nextIndex].focus();
      renderTestimonial(Number(tabs[nextIndex].dataset.testimonial));
    });
  }

  els.list.addEventListener("click", (event) => {
    const card = event.target.closest(".job-card");
    if (card) openDrawer(card.dataset.jobId);
  });

  els.drawer.addEventListener("input", (event) => {
    const applyBox = event.target.closest("[data-apply-box]");
    if (!applyBox) return;

    if (event.target.matches("[data-apply-name]")) {
      applyState.name = event.target.value;
    }

    if (event.target.matches("[data-apply-name], [data-apply-city]")) {
      updateApplyPreview(applyBox);
    }
  });

  els.drawer.addEventListener("change", (event) => {
    if (event.target.matches("[data-apply-location-radio], [data-apply-location-select]")) {
      updateLocationFromPicker(event.target);
    }
  });

  els.drawer.addEventListener("click", async (event) => {
    if (event.target.closest("[data-close-drawer]")) closeDrawer();

    const shareButton = event.target.closest("[data-share-role]");
    if (shareButton) {
      const jobId = els.drawerContent.querySelector("[data-apply-box]")?.dataset.jobId;
      const job = jobs.find((item) => item.id === jobId);
      if (job) await shareRole(job, shareButton);
    }

    const openMailButton = event.target.closest("[data-open-mail]");
    if (openMailButton) {
      const applyBox = openMailButton.closest("[data-apply-box]");
      openMailFromApply(applyBox);
    }

    const copyButton = event.target.closest("[data-copy-subject]");
    if (copyButton) {
      const applyBox = copyButton.closest("[data-apply-box]");
      await copySubject(applyBox, copyButton);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });

  els.menuToggle.addEventListener("click", () => {
    const open = els.header.classList.toggle("menu-open");
    els.menuToggle.setAttribute("aria-expanded", String(open));
    els.menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  renderJobs();

  const initialJob = new URLSearchParams(window.location.search).get("job");
  if (initialJob) {
    openDrawer(initialJob);
  }
}

init();
