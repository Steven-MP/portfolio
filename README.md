# Steven Pratt — Portfolio

Personal portfolio site built with Astro. Migrated from Next.js.

## Tech Stack

- **[Astro](https://astro.build/)** — Static site framework
- **[Tailwind CSS](https://tailwindcss.com/)** — Styling
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[Lucide](https://lucide.dev/)** — Icons
- **[Bun](https://bun.sh/)** — Package manager

## Getting Started

```bash
bun install
bun run dev
```

| Command | Description |
|---|---|
| `bun run dev` | Start dev server at `localhost:4321` |
| `bun run build` | Build static site to `./dist/` |
| `bun run preview` | Preview production build locally |

## Project Structure

```
src/
├── components/     # Astro UI components
├── content/        # Content collections (projects, experience, achievements)
├── data/           # Site config and personal info
├── layouts/        # Root HTML layout
├── pages/          # Entry point (index.astro)
└── styles/         # Global CSS
public/
└── fonts/          # Self-hosted Inter font
```

## Content

Site content is managed via [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/):

- **Projects** — `src/content/projects/`
- **Experience** — `src/content/experience/`
- **Achievements** — `src/content/achievements/`

Personal info and social links are configured in `src/data/site-config.ts`.

## License

[CC0 1.0 Universal](LICENSE) — public domain
