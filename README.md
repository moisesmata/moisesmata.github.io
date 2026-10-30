# Moises Mata — academic website

Personal research website built with Jekyll. The current layout follows [Andy Zeng’s academic template](https://github.com/andyzeng/andyzeng.github.io), with an original responsive implementation and a Canyon River Blue-inspired palette. The repository originally used Gradfolio.

## Local preview

Use Ruby compatible with the locked dependencies, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000. For a production build, run `JEKYLL_ENV=production bundle exec jekyll build`; generated files go to `_site/`.

## Editing

- Biography and homepage sections: `index.md`.
- Contact details, social handles, canonical URL: `_config.yml`.
- Publication display: `_data/publications.yml`. Keep `assets/bib/publications.bib` synchronized.
- Project descriptions and detail pages: `_projects/*.md`.
- Appearance: `assets/css/academic.css`.
- Shared page shell: `_layouts/default.html`.
- Portrait: `assets/images/profile.jpg`.
- Personal posts: `_fun/*.md`; see [the Fun page editing guide](docs/personal-content.md).
- External blog links: `_data/personal.yml`.
- AI-use disclosure: `_includes/ai-disclosure.html`.

The homepage opens on Research. Lightweight JavaScript switches between Research, Projects, and Blog without reloading. Categories have shareable hash URLs and support browser Back/Forward. Without JavaScript, all sections remain visible and navigation works as anchor links. Existing project, blog, and /fun/ routes are preserved. Music and Misc are disabled for now.

## Hosting

Recommendation: keep GitHub Pages and the existing custom domain. Read [the hosting and design study](docs/hosting-study.md) for alternatives, sources, trade-offs, and launch checks.

The existing GitHub workflow builds on pushes to `master` and publishes to `gh-pages`. Confirm Pages settings before deploying. No DNS or hosting changes are needed to preview locally.

## Before publishing

Confirm the publication venue in both data files, add a verified CV link, expand project details where useful, and review the inherited sample blog posts. No unverified news or accomplishments have been added.
