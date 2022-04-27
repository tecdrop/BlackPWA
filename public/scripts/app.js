    // When running as standalone (PWA), clear the document title using an invisible (zero-width) control character
    function clearTitle(mql) {
      if (mql.matches) document.title = '\u200E';
    }

    const mql = window.matchMedia('(display-mode: standalone)');
    clearTitle(mql);
    mql.addEventListener('change', (e) => clearTitle(e));