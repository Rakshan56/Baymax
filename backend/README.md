# Baymax API

This service is the server-side foundation for Baymax. It uses FastAPI, SQLAlchemy, PostgreSQL, signed HTTP-only session cookies, and Alembic migrations.

## Local development

1. Copy `.env.example` to `.env` and set a private `SESSION_SECRET`.
2. Start PostgreSQL and the API with `docker compose up --build`.
3. Apply migrations from `backend` with `alembic upgrade head`.
4. Open the API health endpoint at `http://localhost:8000/health`.

## Local admin access

Admin accounts must be provisioned explicitly and are never created during API startup. In PowerShell, run this from the `backend` directory after PostgreSQL is available:


Use a long, unique password for any shared or deployed environment, and do not commit the values to source control.

The frontend is in the sibling `frontend` directory:

```powershell
cd ..\frontend
npm install
npm run dev
```

No secrets belong in frontend code or source control.
