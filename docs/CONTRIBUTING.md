# Contributing

## Development Setup

```bash
npm install
npm run dev
```

## Workflow

1. Create a branch for your changes
2. Make edits
3. Run quality checks: `npm run lint`, `npm run test`, `npm run typecheck`
4. Commit with conventional format: `npm run commit`

## Commit Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation only
- `style:` — Formatting, no code change
- `refactor:` — Code change, no feature/fix
- `test:` — Adding tests
- `chore:` — Maintenance

Example: `feat: add project filter to homepage`

## Pre-commit

Husky runs automatically:

- **lint-staged** — ESLint + Prettier on staged files
- **commit-msg** — Validates commit format

## Updating Content

Edit `lib/data.ts` for:

- Projects
- Experience
- Skills
- Accent colors (in `ACCENTS`)

Edit `lib/themes.ts` for theme color tokens.
