<img src="/public/cover.jpg" alt="Cover image representing Nim, a personal website template" width="100%" />

This portfolio is based on the Nim template and uses Next.js 16.3, React 19.3, Tailwind CSS 4.3, and MDX. Development and production builds use Turbopack.

Live demo: [https://nim-fawn.vercel.app](https://nim-fawn.vercel.app)

## Features

- Minimal one-page portfolio layout.
- Blog support with MDX.
- Responsive and accessible design.
- Easy to use
- Project galleries with list and grid views.

## Local toolchain

Use Node.js 24 (`nvm use` reads `.nvmrc`), then `npm ci`.

- `npm run dev`: development server at http://localhost:3001.
- `npm run lint`: ESLint checks.
- `npm run typecheck`: TypeScript checks.
- `npm run build`: production build.
- `npm start`: serve the production build.

Dependency update notes (September 2026):

- TypeScript stays on 6.0.x because the Next.js ESLint toolchain does not support TypeScript 7 yet.
- ESLint stays on 9.39.5 because Next.js's React, import, and accessibility plugins do not declare support for ESLint 10. ESLint 9 is deprecated upstream; revisit this when those plugins support version 10.
- The lodash-es override pins 4.18.1 to replace vulnerable versions pinned by Mermaid's indirect dependencies.
- The existing PostCSS override tracks the direct dependency; Sharp is pinned to 0.35.4.

## Getting Started

For detailed setup instructions, refer to the [Installation Guide](./INSTALLATION.md).

```bash
git clone https://github.com/doncarlo5/projulienthomas.git
cd projulienthomas
nvm use
npm ci
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve Nim.

## Deployment

You can deploy your site to any hosting platform that supports Next.js. For the easiest deployment experience, consider using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fibelick%2Fnim&env=NEXT_PUBLIC_SITE_URL&project-name=nim&repository-name=nim&redirect-url=https%3A%2F%2Ftwitter.com%2Fibelick&demo-title=Nim&demo-description=Nim%20is%20a%20free%20and%20open-source%20minimal%20personal%20website%20template%20built%20with%20Next.js%2015%2C%20React%2019%2C%20and%20Motion-Primitives.&demo-url=https%3A%2F%2Fnim.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fibelick%2Fnim%2Frefs%2Fheads%2Fmain%2F.github%2Fassets%2Freadme.png&teamSlug=ibelick)

## About

Nim is designed to make personal branding effortless and beautiful. If you enjoy it, consider sharing it and exploring [Motion-Primitives Pro](https://pro.motion-primitives.com/).

## COMING SOON: Deep dives into:

- ** Sanity webhooks → Next.js content updates**
- ** “Slices” in Sanity** → Manage content easily with slices
- ** AI assistant architecture:** assistant → agents → context documents
- ** Multi-language strategy:** Sanity translations + OpenAI-powered translation tool
- ** Sentry Replays** Understand user behavior by watching replays from Sentry.
