# Garth Puckerin — Resume & Portfolio

Professional resume and portfolio site built with Next.js 14, TypeScript, and modern development tooling.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start development server           |
| `npm run build`     | Production build                   |
| `npm run start`     | Start production server            |
| `npm run lint`      | Run ESLint                         |
| `npm run format`    | Format code with Prettier          |
| `npm run test`      | Run Vitest tests                   |
| `npm run typecheck` | TypeScript check                   |
| `npm run docs`      | Generate TypeDoc documentation     |
| `npm run commit`    | Interactive commit with Commitizen |

## Development Standards

### Quality Gates

- **ESLint** — Code linting (Next.js + Prettier config)
- **Prettier** — Consistent formatting
- **TypeScript** — Strict type checking
- **Vitest** — Unit and component tests
- **Commitlint** — Conventional commit messages

### Pre-commit Hooks (Husky)

- `lint-staged` — Lint and format staged files
- `commit-msg` — Validate commit message format

### Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
npm run commit   # Interactive prompt via Commitizen
```

Examples: `feat: add project filter`, `fix: correct theme persistence`, `docs: update README`

### API Documentation

- **OpenAPI** — Spec at `/api/openapi`
- **Swagger UI** — Interactive docs at `/docs`
- **Health check** — `/api/health`

### Security

```bash
npm run security:audit   # npm audit
```

### Generated Docs

```bash
npm run docs         # Generate TypeDoc → ./docs
npm run docs:serve   # Serve docs locally
```

## Project Structure

```
├── app/              # Next.js App Router
│   ├── api/          # API routes (OpenAPI, health)
│   ├── docs/         # Swagger UI page
│   └── page.tsx      # Homepage
├── components/       # React components
├── lib/              # Data, types, themes
├── .github/workflows/ # CI pipeline
└── .husky/           # Git hooks
```

## Deployment

Optimized for [Vercel](https://vercel.com). Push to `main` to deploy.

## License

Private — Garth Puckerin
