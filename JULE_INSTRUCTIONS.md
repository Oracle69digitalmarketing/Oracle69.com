# 🚀 Jule Instructions — Oracle69.com Deployment

Refine the deployment setup using the files in this repo.  
⚠️ Do not delete any existing files.  

## Frontend (Vercel)
- Refine `vercel.json` as specified.
- Deploy frontend to Vercel with domain: **oracle69.com**.
- Ensure `/docs` folder is deployed separately to: **docs.oracle69.com**.

## Backend (Railway)
- Refine `railway.json` and `.env.example`.
- Deploy backend services to Railway with domain: **api.oracle69.com**.

## Database (Neon + Drizzle)
- Sync Drizzle schema with Neon PostgreSQL.
- Run migrations to ensure schema is live.

## Post-Deployment Checks
- ✅ oracle69.com → loads frontend
- ✅ api.oracle69.com → responds to API
- ✅ docs.oracle69.com → serves developer docs
- ✅ Database schema synced + functional

---

📘 **Documentation Setup**
- Developer docs live under `/docs` (MDX/Markdown format).
- Ensure docs are auto-included in the Vercel deployment (`docs.oracle69.com`).
- Do not overwrite existing files — refine and scaffold missing docs pages as needed.
- Use `/docs/README.md` as entrypoint for all developer documentation.📄 vercel.json
(Frontend config — refine only if file already exists)
{
  "version": 2,
  "builds": [
    { "src": "package.json", "use": "@vercel/node" },
    { "src": "public/**/*", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1.js" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}


📄 railway.json
(Backend config — refine only if file already exists)
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "pnpm install && pnpm run build"
  },
  "deploy": {
    "startCommand": "pnpm run start",
    "healthcheckPath": "/health",
    "restartPolicyType": "ON_FAILURE"
  }
}
