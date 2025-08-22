import fs from "fs";
import fetch from "node-fetch";

const ORG = "oracle69";
const OUT_FILE = "public/all-apps.json";

const CATEGORY_MAP = {
  health: "HealthTech",
  med: "HealthTech",
  edu: "EdTech",
  school: "EdTech",
  farm: "AgriTech",
  market: "Marketplace",
  wallet: "FinTech",
  pay: "FinTech",
  token: "Blockchain",
  nft: "Blockchain",
  auto: "Automation",
  ai: "AI",
  event: "Events",
};

function detectCategory(desc = "") {
  const explicit = desc.match(/category:(\w+)/i);
  if (explicit) return explicit[1];

  for (const [keyword, category] of Object.entries(CATEGORY_MAP)) {
    if (desc.toLowerCase().includes(keyword)) return category;
  }
  return "Uncategorized";
}

async function main() {
  const res = await fetch(`https://api.github.com/users/${ORG}/repos?per_page=100`);
  const repos = await res.json();

  const apps = repos.map((repo) => {
    const category = detectCategory(repo.description || "");
    return {
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      docs: `/docs/apps/${repo.name}.mdx`,
      category,
    };
  });

  fs.writeFileSync(OUT_FILE, JSON.stringify(apps, null, 2));
  console.log(`✅ Synced ${apps.length} apps to ${OUT_FILE}`);
}

main().catch(console.error);
