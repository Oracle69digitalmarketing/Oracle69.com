📄 JULE_INSTRUCTIONS.md
# Oracle69.com – Jule Deployment Instructions

## Objective
Deploy Oracle69.com live with the domain `oracle69.com`.  
- Frontend → Vercel  
- Backend → Railway  
- Database → Neon PostgreSQL  
- Auth/Env → managed via `.env`

---

## Steps for Jule

### 1. Dependencies
```bash
pnpm install


2. Frontend Deployment (Vercel)
Keep all existing frontend files.
Ensure vercel.json is present and refined:
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

Deploy:
vercel --prod

Set domain → oracle69.com.

3. Backend Deployment (Railway)
Keep existing backend logic.
Ensure railway.json is present and refined:
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

Deploy:
railway up

Set domain → api.oracle69.com.

4. Environment Variables
Keep .env.example and ensure it contains:
DATABASE_URL=your-neon-postgres-url
NEXT_PUBLIC_API_URL=https://api.oracle69.com
PORT=3000

Jule should never overwrite .env — only refine or add missing keys.

5. Database Setup
Run migrations to sync schema:
pnpm drizzle-kit push

Confirm Neon PostgreSQL connection.

6. Post-Deployment Checks
Frontend: https://oracle69.com should serve React frontend.
Backend: https://api.oracle69.com/health should return OK.
Database: Drizzle ORM should read/write successfully.

Notes for Jule
Never delete existing files, only refine configurations.
Always cache dependencies for faster builds.
If configs conflict, extend rather than replace.

---

## 📄 `.env.example`  
(Place in repo root if not already present)  

```env
DATABASE_URL=your-neon-postgres-url
NEXT_PUBLIC_API_URL=https://api.oracle69.com
PORT=3000


📄 vercel.json
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
