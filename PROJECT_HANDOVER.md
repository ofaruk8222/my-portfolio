# Project Handover Guide

## 1. Project Overview

This repository contains a personal portfolio website built with Next.js and React. The project focuses on a polished single-page experience with a hero section, a skills section, a shared header/footer, reusable UI components, and a light/dark theme. The repository URL is:

- GitHub: https://github.com/ofaruk8222/my-portfolio

## 2. Environment & Prerequisites

### Required environment
- Node.js: v24.18.0
- Package manager: npm (primary)
- Note: pnpm was used during shadcn-related setup in some workflows, but npm is the primary package manager for this project.

### Recommended VS Code extensions
- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- JavaScript and TypeScript Nightly
- TypeScript Vue Plugin (not required for this project, but useful in general)
- Bracket Pair Colorizer or built-in bracket matching support
- Auto Rename Tag
- GitLens
- GitHub Copilot
- GitHub Copilot Chat

### Recommended workspace settings
- Format on save: enabled
- Default formatter: Prettier
- Tailwind CSS class suggestions: enabled

## 3. Tech Stack & Dependencies

### Framework
- Next.js: 16.2.10

### UI & styling
- React: 19.2.4
- React DOM: 19.2.4
- Tailwind CSS: ^4
- shadcn/ui: ^4.13.0
- Tailwind Merge: ^3.6.0
- tw-animate-css: ^1.4.0
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1

### Icons & UI libraries
- react-icons: ^5.7.0
- devicon: ^2.17.0
- lucide-react: ^1.24.0
- @tabler/icons-react: ^3.44.0
- @base-ui/react: ^1.6.0

### Dependencies (exact from package.json)
- @base-ui/react: ^1.6.0
- @tabler/icons-react: ^3.44.0
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- devicon: ^2.17.0
- lucide-react: ^1.24.0
- next: 16.2.10
- react: 19.2.4
- react-dom: 19.2.4
- react-icons: ^5.7.0
- shadcn: ^4.13.0
- tailwind-merge: ^3.6.0
- tw-animate-css: ^1.4.0

### Dev dependencies (exact from package.json)
- @tailwindcss/postcss: ^4
- @types/node: ^20
- @types/react: ^19
- @types/react-dom: ^19
- eslint: ^9
- eslint-config-next: 16.2.10
- eslint-config-prettier: ^10.1.8
- eslint-plugin-import: ^2.32.0
- eslint-plugin-react-hooks: ^7.0.1
- prettier: ^3.6.2
- stylelint: ^16.25.0
- stylelint-use-logical-spec: ^5.0.1
- tailwindcss: ^4
- typescript: ^5

## 4. Project Rules & Conventions

### Core repository instructions
- Always modify files directly.
- Never output code in chat.
- Follow the existing design system and component structure.
- Keep changes organized and modular.
- Prefer reusable components over duplicated markup.

### Commit message rules
This project requires conventional commit messages. The format is:

- <type>(<scope>): <subject>

Allowed types:
- feat
- fix
- docs
- style
- refactor
- test
- chore
- perf
- ci
- revert
- build
- wip
- release
- hotfix
- config
- security
- db
- api

Rules:
- Type must be lowercase.
- Scope must be lowercase.
- Subject must be lowercase.
- Subject must be 72 characters or fewer.
- Subject must not be empty.

Examples of valid commit messages:
- feat(ui): add hero section
- fix(header): resolve sticky navigation issue
- style(footer): improve social icon spacing
- docs(readme): update handover guide

## 5. File Structure & Architecture

The project uses a highly organized component-based structure that mirrors the UI sections and their subcomponents.

### Main folders
- app/: Next.js App Router pages and layout
- components/: reusable UI and section components
- components/shared/: shared layout pieces such as header, footer, and container
- components/ui/: shared base UI primitives such as buttons
- components/sections/: page sections such as hero and skills
- public/: static assets
- lib/: helper utilities

### Section component pattern
The project favors a modular section organization such as:

- components/sections/skills/
  - index.tsx
  - container.tsx
  - cards/
    - c-cpp/
      - index.tsx
      - title.tsx
      - subtitle.tsx
      - icon.tsx

This pattern keeps each skill card self-contained and makes it easy to maintain or extend the UI.

### Separation of concerns
- index.tsx: main section or feature wrapper
- container.tsx: page-level card container or layout shell
- title.tsx: presentation component for the heading
- subtitle.tsx: presentation component for supporting text
- icon.tsx: icon rendering component for the card

This structure should be preserved when adding or updating UI modules.

## 6. Step-by-Step Recreation Guide

### A. Clone the repository
```bash
git clone https://github.com/ofaruk8222/my-portfolio.git
cd my-portfolio
```

### B. Install dependencies
```bash
npm install
```

### C. Initialize shadcn/ui if needed
If the project is being recreated from scratch and shadcn/ui components are required, initialize it using:

```bash
npx shadcn@latest init
```

If a specific component is needed, add it with:

```bash
npx shadcn@latest add button
```

### D. Run the development server
```bash
npm run dev
```

Then open:

- http://localhost:3000

### E. Build and verify
```bash
npm run build
```

### F. Commit and push using the required format
Use a conventional commit message that matches the repository rules.

Example:

```bash
git add .
git commit -m "feat(ui): add hero section"
git push origin master
```

If the repository branch is different, replace master with the correct branch name.

## 7. Important Notes

- This project uses the App Router architecture from Next.js.
- The app is designed around modular sections and shared layout wrappers.
- Image assets should be placed in the public directory.
- Styling is primarily handled with Tailwind CSS classes and component-level utility composition.
- Keep the UI consistent with the established design language: rounded cards, soft shadows, subtle motion, and dark-mode support.
