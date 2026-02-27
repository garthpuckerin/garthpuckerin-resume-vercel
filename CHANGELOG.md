# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-02-27

### Added

- Interactive Project Modals: Detailed project views with overview, capabilities, and enterprise value.
- Project details for Prompt Observatory, Connex, Curriculum Builder, and Self-Healing Docs.
- `ProjectModal` component with interactive triggers and keyboard accessibility.

### Changed

- Ported modal aesthetic and functionality from Walmart project.
- Updated `Project` interface and data schema to support detailed modal content.
- Refactored `ProjectCard` from direct links to modal triggers.

## [1.0.2] - 2025-02-18

### Added

- Git workflows: release (tag → GitHub Release), Dependabot, PR template
- docs/WORKFLOWS.md — Branching, PRs, releases
- Expanded test suite: themes, ProjectCard, Homepage (26 tests total)
- .nvmrc — Node 20
- CI: test coverage step

### Changed

- Vitest: add @vitejs/plugin-react for component tests

## [1.0.1] - 2025-02-18

### Security

- Upgrade Next.js 14 → 15.5.12 (fixes DoS vulnerabilities)
- Upgrade Vitest 1.x → 2.x, add esbuild override
- Add overrides for lodash, tmp (Commitizen), esbuild (Vitest)
- Resolved all high-severity vulnerabilities
- 10 moderate remain (ajv in ESLint — dev-only, requires `$data` option)

## [1.0.0] - 2025-02-18

### Added

- Next.js 14 App Router with TypeScript
- Resume homepage with projects, experience, skills
- Light/dark theme and 6 accent color options
- Theme and accent persistence via localStorage
- Project documentation in `docs/`
- CHANGELOG.md
- OpenAPI 3.0 spec at `/api/openapi`
- Swagger UI at `/docs`
- Health check at `/api/health`
- ESLint, Prettier, Commitlint, Commitizen
- Husky pre-commit and commit-msg hooks
- lint-staged for staged-file linting/formatting
- Vitest unit tests for data modules
- TypeDoc for code documentation (`npm run docs`)
- CI workflow (typecheck, lint, format, test, build)
- Security audit script
- EditorConfig for consistent formatting

### Fixed

- Experience order: Success Academy before Boehringer (chronological)
- .gitignore: `/docs` → `/api-docs` so `app/docs/` (Swagger UI) is tracked
