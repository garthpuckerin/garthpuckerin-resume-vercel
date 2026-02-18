# Git Workflows

## Setup (first time)

```bash
git remote add origin https://github.com/<org>/<repo>.git
git push -u origin main
```

## Branching

- **main** — Production-ready. Protected. All merges via PR.
- **feature/\*** — New features (e.g. `feature/add-blog`)
- **fix/\*** — Bug fixes (e.g. `fix/theme-persistence`)
- **docs/\*** — Documentation only

## Pull Requests

1. Create branch from `main`
2. Make changes, ensure tests and lint pass
3. Open PR against `main`
4. CI runs automatically (quality gates, security audit)
5. Merge when green (squash or merge commit per preference)

## Releases

1. Update version in `package.json` and `CHANGELOG.md`
2. Commit: `chore(release): v1.2.0`
3. Tag: `git tag v1.2.0`
4. Push tag: `git push origin v1.2.0`
5. Release workflow runs, creates GitHub Release

## CI Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| CI | Push/PR to main | Typecheck, lint, format, test, build |
| Release | Tag push `v*` | Quality gates + GitHub Release |

## Dependabot

- **npm**: Weekly (Mondays), grouped by dev/prod
- **GitHub Actions**: Weekly
- PRs use `chore(deps)` prefix and `dependencies` label
