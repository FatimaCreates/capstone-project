# Project Context

Capstone project for the **Frontend AI Engineering** internship track. Development uses AI-assisted coding tools.

## Tech Stack

| Layer    | Technology |
| -------- | ---------- |
| Frontend | React.js   |
| Backend  | Node.js    |

## Project Structure

Organize code by concern:

- `client/` or `frontend/` — React app (components, hooks, pages, styles)
- `server/` or `backend/` — Node.js API (routes, controllers, middleware, services)

Keep frontend and backend dependencies separate (`package.json` per package if using a monorepo layout).

## Coding Conventions

### General

- Use **JavaScript** or **TypeScript** consistently within each package; prefer TypeScript for new code when configured.
- Prefer **functional components** and **hooks** in React; avoid class components.
- Use **async/await** for asynchronous Node.js code; handle errors explicitly.
- Keep functions small and single-purpose; extract reusable logic into hooks (frontend) or utilities/services (backend).
- Do not commit secrets — use `.env` files (already gitignored) and provide `.env.example` templates.

### React (Frontend)

- One component per file; name files in PascalCase (e.g., `UserProfile.jsx`).
- Colocate component-specific styles or use a shared styling approach consistently.
- Lift state only when needed; prefer local state and context for shared UI state.
- Use meaningful prop and variable names; avoid abbreviations.

### Node.js (Backend)

- Use Express (or the chosen framework) with a clear route → controller → service layering.
- Validate request input at the boundary; return consistent JSON error responses.
- Use environment variables for configuration (port, database URL, API keys).

### Formatting & Linting

- Match existing code style in the file being edited.
- Run the project's linter and formatter before committing when available.

## Git & Commits

All commits **must** follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <short description>

[optional body]

[optional footer(s)]
```

### Types

| Type       | Use for                                      |
| ---------- | -------------------------------------------- |
| `feat`     | New feature                                  |
| `fix`      | Bug fix                                      |
| `docs`     | Documentation only                           |
| `style`    | Formatting, no logic change                  |
| `refactor` | Code change that is not a fix or feature     |
| `test`     | Adding or updating tests                     |
| `chore`    | Tooling, deps, config — no production change |

### Examples

```
feat(client): add user login form
fix(server): handle missing JWT in auth middleware
docs: update README setup instructions
chore(deps): bump react to 19.x
```

- Use imperative mood in the subject line ("add", not "added").
- Keep the subject line under 72 characters.
- Reference issue numbers in the footer when applicable: `Closes #12`.

## AI-Assisted Development

- Review all AI-generated code before committing.
- Do not commit code you do not understand or have not verified.
- Prefer minimal, focused changes over large refactors unless requested.
