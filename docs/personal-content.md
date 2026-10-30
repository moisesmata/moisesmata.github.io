# Editing personal posts and links

The homepage opens on Research, with Andy Zeng-style category navigation beneath the bio: Research, Projects, Blog, Music, and Misc. Personal categories are intentionally empty until there is real content; the inherited sample blog posts are not used. The old /fun/ address remains a personal-content index.

## External links

Add entries to the `links` list in `_data/personal.yml`. Each needs `category` (blog, music, or misc), `title`, and `url`. Optional fields are `description` and `date`. For example, replace `links: []` with:

```yaml
links:
  - category: music
    title: Your playlist title
    url: https://example.com/your-playlist
    description: Your own note about the playlist.
```

Replace the example with your real link. Entries appear in list order. There are no third-party embeds or autoplay. Blog links can point to posts hosted anywhere.

## Local posts

To add an entry, create a Markdown file under `_fun/`, for example `_fun/my-post.md`:

```yaml
---
layout: personal
category: blog
title: A title in your own words
date: 2026-10-04
description: A short description of this post.
image: /assets/images/your-photo.jpg
image_alt: A description of the photograph.
---
```

Write the post below the front matter. The image is optional; remove that field if there is no image. Use descriptive alt text for photographs included inside the post. Posts appear newest first. Set `published: false` while drafting.

Possible formats include a photo diary, a list of favorite books, a hobby project, or a short personal note. These are suggestions, not claims about Moises's interests.

## Editorial direction

- State the research topic, affiliation, work, or result directly.
- Avoid slogans, broad claims of impact, repeated summaries, and invented milestones.
- Use concrete project descriptions rather than generic category cards.
- Keep personal content separate from the academic landing page.
- The footer discloses AI assistance with website design, code, and text. It does not claim that the owner has reviewed all generated text or make claims about AI usage in research.

The palette is a screen approximation inspired by Honda's Canyon River Blue Metallic, not an official paint-to-hex match: slate blue `#355773`, cool paper `#f5f7f9`, and deep blue `#17232f` for dark mode.

References reviewed: [Julia Di](https://www.juliadi.com/) for a separate Fun destination and explicit AI disclosure, [Nathan Chun](https://nathan-chun.github.io/) for a concise academic introduction, [Keenan Albee](https://albee.github.io/) for research-focused content, and [Honda](https://automobiles.honda.com/) for the color direction.

The latest layout follows [Andy Zeng’s older academic website](https://andyzeng.github.io/old/): compact sans-serif typography, a small portrait beside the bio, category navigation, and unboxed lists. The repository README permits personal reuse and requests attribution; the footer links back. This implementation does not import his analytics, biography, media, jQuery, or Isotope. Publications and projects accept optional `image` and `image_alt` fields for thumbnail rows without adding placeholder artwork.
