# Academic website: design and hosting study

Reviewed October 4, 2026. Recommendations assume a personal academic site with publications, projects, a portrait, and occasional updates—not a backend application. Provider terms can change. Domain registration is separate from hosting.

## Recommendation

Keep **Jekyll + GitHub Pages + moises-mata.com**. The repository already has Markdown content, project collections, a Gemfile, and a Pages deployment workflow. A redesign does not require a hosting migration. This is the lowest-maintenance path and keeps content portable.

Choose **Cloudflare Pages** instead if preview deployments become important. Consider **Netlify** for its preview workflow and additional platform features, but budget for its credit model. Choose **Vercel** if the site evolves into a web application. AWS is unnecessary operational overhead for this portfolio.

## Reference design study

- [Ishaan Mahajan](https://ishaanmahajan.com/): short biography and social links, publications grouped by year, and a distinct software section. Borrow the research-first hierarchy and direct access to papers and code.
- [Nathan Chun](https://nathan-chun.github.io/): compact academic introduction, a portrait, News/Publications/Projects controls, and concise project descriptions. Borrow the personal scale and balance between publications and hands-on engineering.
- Synthesis: one readable page with a compact navigation bar, biography beside a portrait, research interests, publications, and three project summaries. Use subtle green accents, warm neutral surfaces, serif headings, and restrained spacing rather than a corporate landing page.
- Use anchor navigation instead of hiding content in tabs: every section remains searchable, linkable, keyboard-accessible, and available without JavaScript. The prototype does not copy reference source code or images.

## Hosting comparison

| Method | Cost and limits worth knowing | Maintenance / preview trade-off | Fit |
| --- | --- | --- | --- |
| GitHub Pages | Available with GitHub Free for public repositories. Published sites are limited to 1 GB; soft bandwidth limit of 100 GB/month. | Existing workflow builds Jekyll and publishes a branch. No preview environment is configured here. Static content only. | **Best default**: least migration work. |
| Cloudflare Pages | Free plan permits 500 builds/month; 25 MiB maximum per asset. | Git integration and preview deployments; Jekyll can publish its existing `_site` output. Requires new project and domain configuration. | **Best alternative**, especially for review links. |
| Netlify | Free plan: 300 credits/month. Production deployments consume 15 credits each; traffic and other usage share the allowance. | Unlimited deploy previews are advertised. Credit consumption adds a budgeting concern even for static sites. | Good review workflow; less predictable headroom. |
| Vercel | Hobby is free but restricted to personal, non-commercial use. | Attractive if application features become necessary; no compelling reason to migrate this Jekyll site solely for a new design. | Conditional future option. |
| AWS S3 + managed CDN / Amplify | Usage-based services; no flat-cost estimate without traffic, storage, and build assumptions. | More cloud configuration and billing management. AWS recommends Amplify Hosting for static content stored on S3. | Not recommended for this scope. |

Sources: [GitHub availability and limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages), [Cloudflare limits](https://developers.cloudflare.com/pages/platform/limits/), [Cloudflare Jekyll deployment](https://developers.cloudflare.com/pages/framework-guides/deploy-a-jekyll-site/), [Netlify pricing](https://www.netlify.com/pricing/), [Vercel Hobby terms](https://vercel.com/docs/plans/hobby), [AWS static hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).

## Framework choice is separate from hosting

Jekyll generates static HTML; GitHub Pages serves it. Most static hosts can serve the same output.

- **Keep Jekyll:** reuse existing Markdown, Liquid layouts, and collections. Ruby dependency maintenance remains, but content editing is straightforward.
- **Plain HTML/CSS:** removes the generator but makes repeated navigation, publication entries, and project pages harder to maintain consistently.
- **Astro or another static generator:** a possible future component-oriented rewrite, not a prerequisite for this design. Migrating templates and dependencies offers little immediate benefit here.
- **CMS/site builder:** worthwhile only if browser-based editing outweighs portability and Git-based maintenance. No need to add a database or admin login now.

## Repository findings and implemented draft

- The old configuration used a repository subpath despite a custom domain and omitted the URL scheme. The draft uses an empty `baseurl` and `https://moises-mata.com`.
- The previous default layout put visible headings and navigation inside the HTML head. The new layout uses semantic header/main/footer regions and page-specific SEO metadata.
- Publication rendering no longer depends on fetching/parsing BibTeX in the browser. Entries render at build time from `_data/publications.yml`; the existing BibTeX remains downloadable.
- USC Aerospace and Mechanical Engineering, LASER Lab, advisor Keenan Albee, and moymata@usc.edu were supplied by the owner.
- Existing project details and portrait are reused. No invented awards, dates, project photographs, or news were added.
- The reference lists the Conic-TinyMPC paper at ICRA 2026, while the repository BibTeX still says “In review.” The draft conservatively labels it an arXiv preprint until the owner confirms the citation; update YAML and BibTeX together.
- The existing external CV link is omitted from the new homepage because this repository contains no CV file. Restore a verified CV URL before launch.
- Existing template blog posts are left untouched and are not promoted in the new navigation. Review them before publication.

## Launch plan (not executed)

1. Review the draft, publication venue/year, portrait crop, project descriptions, and missing CV.
2. Run `bundle install`, then `bundle exec jekyll build` and `bundle exec jekyll serve`.
3. Check desktop and phone widths, light/dark mode, keyboard navigation, email links, publication links, project routes, and the 404 page.
4. Review the existing workflow: it triggers on `master` and publishes to `gh-pages`. Confirm that this matches repository settings before pushing; the workflow was not changed by this redesign.
5. Keep `CNAME` as `moises-mata.com`. Verify domain ownership, DNS records, Pages source, and HTTPS in GitHub settings. Do not change DNS simply to preview a redesign.
6. Deploy only after approval. Preserve the previous deployed revision for rollback.

### If migrating to Cloudflare later

Create a preview project linked to the same repository, set the actual source branch, build with `bundle exec jekyll build`, publish `_site`, and configure a Ruby version compatible with the lockfile. Validate its temporary hostname before changing the custom domain. Keep the old host available until HTTPS, routes, and assets work on the new host.

No accounts, billing plans, DNS records, or hosted deployments were changed during this work.
