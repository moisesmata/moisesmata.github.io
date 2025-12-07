// Simple BibTeX parser for publications
async function loadPublications() {
  const container = document.getElementById('publications-list');
  if (!container) return;

  try {
    const baseUrl = document.querySelector('link[rel="stylesheet"]').href.split('/assets/')[0];
    const response = await fetch(baseUrl + '/assets/bib/publications.bib');
    const bibtext = await response.text();
    const publications = parseBibTeX(bibtext);
    renderPublications(publications, container);
  } catch (error) {
    console.error('Error loading publications:', error);
    container.innerHTML = '<p><em>Error loading publications.</em></p>';
  }
}

function parseBibTeX(bibtext) {
  const entries = [];
  const entryRegex = /@(\w+)\s*\{\s*([^,]+)\s*,([^@]*)/g;
  let match;

  while ((match = entryRegex.exec(bibtext)) !== null) {
    const type = match[1];
    const key = match[2].trim();
    const content = match[3];
    
    const entry = { type, key };
    
    // Parse fields
    const fieldRegex = /(\w+)\s*=\s*\{([^}]*)\}/g;
    let fieldMatch;
    
    while ((fieldMatch = fieldRegex.exec(content)) !== null) {
      let value = fieldMatch[2].trim();
      // Clean up LaTeX formatting
      value = value.replace(/\\textbf\{([^}]*)\}/g, '$1');
      value = value.replace(/\\\&/g, '&');
      value = value.replace(/\s+/g, ' ');
      entry[fieldMatch[1].toLowerCase()] = value;
    }
    
    entries.push(entry);
  }
  
  return entries;
}

function renderPublications(publications, container) {
  if (publications.length === 0) {
    container.innerHTML = '<p><em>No publications found.</em></p>';
    return;
  }

  // Sort by year descending
  publications.sort((a, b) => (b.year || 0) - (a.year || 0));

  let html = '';
  
  for (const pub of publications) {
    // Format authors, bolding "Moises Mata"
    let authors = pub.author || '';
    authors = authors.replace(/Moises Mata/g, '<strong>Moises Mata</strong>');
    authors = authors.replace(/ and /g, ', ');
    
    html += '<div class="publication">';
    html += `<p><strong>${pub.title || 'Untitled'}</strong><br>`;
    html += `${authors}<br>`;
    
    if (pub.note) {
      html += `<em>${pub.note}</em>, `;
    }
    if (pub.year) {
      html += `${pub.year}`;
    }
    
    // Links
    const links = [];
    if (pub.url) {
      links.push(`<a href="${pub.url}" target="_blank">[arXiv]</a>`);
    }
    if (pub.doi) {
      links.push(`<a href="https://doi.org/${pub.doi}" target="_blank">[DOI]</a>`);
    }
    
    if (links.length > 0) {
      html += '<br>' + links.join(' ');
    }
    
    html += '</p></div>';
  }
  
  container.innerHTML = html;
}

// Load publications when DOM is ready
document.addEventListener('DOMContentLoaded', loadPublications);

