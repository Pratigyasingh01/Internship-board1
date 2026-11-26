const internships = [
  {id:1,title:"Frontend Developer Intern",company:"Northstar Labs",domain:"Technology",type:"Remote",location:"Remote · India",duration:"3 months",stipend:"₹12,000 / mo",initials:"N"},
  {id:2,title:"Product Design Intern",company:"Morrow Studio",domain:"Design",type:"Hybrid",location:"Bengaluru, India",duration:"4 months",stipend:"₹15,000 / mo",initials:"M"},
  {id:3,title:"Social Media Intern",company:"Goodfolk Collective",domain:"Marketing",type:"On-site",location:"Delhi, India",duration:"3 months",stipend:"₹8,000 / mo",initials:"G"},
  {id:4,title:"Data Analyst Intern",company:"Metric & Co.",domain:"Technology",type:"Hybrid",location:"Pune, India",duration:"6 months",stipend:"₹18,000 / mo",initials:"M"},
  {id:5,title:"Content Writing Intern",company:"Paperplane Media",domain:"Writing",type:"Remote",location:"Remote · India",duration:"3 months",stipend:"₹7,500 / mo",initials:"P"},
  {id:6,title:"Business Development Intern",company:"Common Ground",domain:"Business",type:"On-site",location:"Mumbai, India",duration:"2 months",stipend:"₹10,000 / mo",initials:"C"},
  {id:7,title:"UI Engineer Intern",company:"Brightside Digital",domain:"Technology",type:"Remote",location:"Remote · India",duration:"6 months",stipend:"₹20,000 / mo",initials:"B"},
  {id:8,title:"Visual Design Intern",company:"Sunday Supply",domain:"Design",type:"Hybrid",location:"Jaipur, India",duration:"3 months",stipend:"₹9,000 / mo",initials:"S"},
  {id:9,title:"People Operations Intern",company:"Kindred Works",domain:"Human Resources",type:"On-site",location:"Gurugram, India",duration:"3 months",stipend:"₹8,500 / mo",initials:"K"}
];

const grid = document.querySelector("#internshipGrid");
const searchInput = document.querySelector("#searchInput");
const domainFilter = document.querySelector("#domainFilter");
const resultsCount = document.querySelector("#resultsCount");
const emptyState = document.querySelector("#emptyState");
const errorState = document.querySelector("#errorState");

function populateDomains() {
  [...new Set(internships.map(job => job.domain))].sort().forEach(domain => {
    const option = document.createElement("option");
    option.value = domain;
    option.textContent = domain;
    domainFilter.append(option);
  });
}

function createCard(job) {
  const article = document.createElement("article");
  article.className = "job-card";
  const top = document.createElement("div");
  top.className = "job-top";
  const mark = document.createElement("span");
  mark.className = "company-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = job.initials;
  const type = document.createElement("span");
  type.className = "job-type";
  type.textContent = job.type;
  top.append(mark, type);

  const title = document.createElement("h3");
  title.textContent = job.title;
  const company = document.createElement("p");
  company.className = "company";
  company.textContent = job.company;
  const meta = document.createElement("div");
  meta.className = "job-meta";
  [job.location, job.duration, job.stipend].forEach(value => {
    const chip = document.createElement("span");
    chip.textContent = value;
    meta.append(chip);
  });
  const foot = document.createElement("div");
  foot.className = "job-foot";
  const label = document.createElement("small");
  label.textContent = job.domain;
  const apply = document.createElement("a");
  apply.className = "apply-link";
  apply.href = `mailto:careers@example.com?subject=${encodeURIComponent("Internship enquiry: " + job.title)}`;
  apply.setAttribute("aria-label", `Enquire about ${job.title} at ${job.company}`);
  apply.textContent = "View role ↗";
  foot.append(label, apply);
  article.append(top, title, company, meta, foot);
  return article;
}

function renderInternships() {
  try {
    errorState.hidden = true;
    const query = searchInput.value.trim().toLowerCase();
    const domain = domainFilter.value;
    const filtered = internships.filter(job => {
      const searchable = [job.title, job.company, job.domain, job.type, job.location].join(" ").toLowerCase();
      return searchable.includes(query) && (domain === "all" || job.domain === domain);
    });
    grid.replaceChildren(...filtered.map(createCard));
    const count = filtered.length;
    resultsCount.textContent = `Showing ${count} ${count === 1 ? "opportunity" : "opportunities"}`;
    emptyState.hidden = count !== 0;
  } catch (error) {
    console.error("Unable to render internship cards:", error);
    grid.replaceChildren();
    emptyState.hidden = true;
    errorState.hidden = false;
    resultsCount.textContent = "Unable to load opportunities";
  }
}

function clearFilters() {
  searchInput.value = "";
  domainFilter.value = "all";
  renderInternships();
}

searchInput.addEventListener("input", renderInternships);
domainFilter.addEventListener("change", renderInternships);
document.querySelector("#clearFilters").addEventListener("click", clearFilters);
document.querySelector("#resetFromEmpty").addEventListener("click", clearFilters);

// Keyboard shortcut: "/" focuses search unless the user is already typing in a field.
document.addEventListener("keydown", event => {
  const target = event.target;
  const typing = target instanceof HTMLElement &&
    (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.isContentEditable);
  if (event.key === "/" && !typing && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }
});

populateDomains();
renderInternships();
