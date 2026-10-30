---
layout: default
permalink: /
home: true
---

<section class="intro" aria-labelledby="intro-title">
  <div class="intro-text">
    <h1 id="intro-title">Moises Mata</h1>
    <p>I’m a PhD student in Aerospace Engineering at USC, advised by <a href="https://albee.github.io/" target="_blank" rel="noopener noreferrer">Dr. Keenan Albee</a> in the <a href="https://usclaser.github.io/" target="_blank" rel="noopener noreferrer">LASER Lab</a>.</p>
    <p>My research interests broadly lie in increasing autonomy for robotic space exploration systems, allowing them to explore deep space. I also have experience in flight software.</p>
    <div class="profile-links" aria-label="Academic and social profiles">
      <a href="https://github.com/{{ site.github }}" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://orcid.org/{{ site.orcid }}" target="_blank" rel="noopener noreferrer">ORCID</a>
      <a href="https://www.linkedin.com/in/{{ site.linkedin }}/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <p class="email"><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
  </div>
  <figure class="portrait">
    <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Moises Mata wearing a Columbia graduation gown" width="1972" height="1873" fetchpriority="high">
  </figure>
</section>

<nav class="section-menu" aria-label="Browse sections" data-section-menu>
  <a href="#research" data-section-link>Research</a>
  <a href="#projects" data-section-link>Projects</a>
  <a href="#blog" data-section-link>Blog</a>
</nav>

<div class="section-content">
  <section id="research" class="content-panel" aria-labelledby="publications-title" data-section>
    <div class="section-heading"><h2 id="publications-title">Publications</h2></div>
    {% assign publications = site.data.publications | sort: 'year' | reverse %}
    {% for publication in publications %}
    <article class="research-entry{% if publication.image %} has-image{% endif %}">
      {% if publication.image %}
      <img class="entry-image" src="{{ publication.image | relative_url }}" alt="{{ publication.image_alt | escape }}" loading="lazy">
      {% endif %}
      <div>
        <h3><a href="{{ publication.url }}" target="_blank" rel="noopener noreferrer">{{ publication.title }}</a></h3>
        <p class="authors">{{ publication.authors | escape | replace: 'Moises Mata', '<strong>Moises Mata</strong>' }}</p>
        <p class="entry-meta">{{ publication.venue }}, {{ publication.year }}</p>
        {% if publication.description %}<p class="entry-description">{{ publication.description | escape }}</p>{% endif %}
      </div>
    </article>
    {% endfor %}
  </section>

  <section id="projects" class="content-panel" aria-labelledby="projects-title" data-section>
    <h2 id="projects-title">Projects</h2>
    {% for project in site.projects %}
    <article class="research-entry{% if project.image %} has-image{% endif %}">
      {% if project.image %}
      <img class="entry-image" src="{{ project.image | relative_url }}" alt="{{ project.image_alt | escape }}" loading="lazy">
      {% endif %}
      <div>
        <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        <p>{{ project.description }}</p>
      </div>
    </article>
    {% endfor %}
  </section>

  {% for category in site.data.personal.categories %}
  <section id="{{ category.id }}" class="content-panel" aria-labelledby="{{ category.id }}-title" data-section>
    <h2 id="{{ category.id }}-title">{{ category.title }}</h2>
    {% include personal-entries.html category=category.id empty=category.empty %}
  </section>
  {% endfor %}
</div>
