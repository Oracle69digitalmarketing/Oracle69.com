"use client";

import { useEffect, useState } from "react";

export default function AppDirectory() {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("/all-apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const categories = [
    "All",
    ...new Set(
      apps.map((a) => {
        const match = a.description?.match(/category:(\w+)/i);
        return match ? match[1] : "Uncategorized";
      })
    ),
  ];

  const filtered = apps.filter((a) => {
    const matchesSearch = a.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const appCategory =
      a.description?.match(/category:(\w+)/i)?.[1] || "Uncategorized";
    const matchesCategory =
      category === "All" || appCategory === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Oracle69 Apps Directory</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No apps found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((app) => {
            const appCategory =
              app.description?.match(/category:(\w+)/i)?.[1] || "Uncategorized";
            return (
              <div
                key={app.name}
                className="p-4 border rounded-xl shadow hover:shadow-lg transition bg-white"
              >
                <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
                <p className="text-gray-600 mb-2 line-clamp-3">
                  {app.description?.replace(/category:\w+/i, "").trim() ||
                    "No description provided."}
                </p>
                <span className="inline-block text-xs px-2 py-1 mb-3 bg-gray-100 text-gray-700 rounded">
                  {appCategory}
                </span>
                <div className="flex gap-3">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href={app.docs}
                    className="text-green-600 hover:underline"
                  >
                    Docs
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
            }
