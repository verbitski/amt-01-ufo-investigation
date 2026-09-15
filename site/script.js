(() => {
  window.va = window.va || function queueVercelAnalytics() {
    (window.vaq = window.vaq || []).push(arguments);
  };

  const hero = document.querySelector('.hero');
  const motionToggle = document.querySelector('[data-motion-toggle]');
  const motionLabel = document.querySelector('[data-motion-label]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function setMotionState(paused, systemPreference = false) {
    hero?.classList.toggle('is-motion-paused', paused);
    motionToggle?.setAttribute('aria-pressed', String(paused));

    if (!motionToggle || !motionLabel) return;
    motionToggle.disabled = systemPreference;
    motionLabel.textContent = systemPreference
      ? 'Motion disabled by preference'
      : paused
        ? 'Resume image motion'
        : 'Pause image motion';
  }

  function syncMotionPreference() {
    if (reducedMotion.matches) {
      setMotionState(true, true);
      return;
    }
    setMotionState(hero?.classList.contains('is-motion-paused') ?? false, false);
  }

  motionToggle?.addEventListener('click', () => {
    const paused = !hero?.classList.contains('is-motion-paused');
    setMotionState(paused);
  });

  reducedMotion.addEventListener?.('change', syncMotionPreference);
  syncMotionPreference();

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');

  function closeNavigation() {
    nav?.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    const navText = navToggle?.querySelector('.sr-only');
    if (navText) navText.textContent = 'Open navigation';
  }

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    const navText = navToggle.querySelector('.sr-only');
    if (navText) navText.textContent = open ? 'Close navigation' : 'Open navigation';
    if (open) {
      window.requestAnimationFrame(() => nav?.querySelector('a[href]:not([hidden])')?.focus());
    }
  });

  nav?.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });

  // A mobile menu must not leave desktop scrolling locked after a resize.
  window.matchMedia('(max-width: 700px)').addEventListener?.('change', closeNavigation);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
      closeNavigation();
      navToggle?.focus();
      return;
    }

    if (event.key === 'Tab' && nav?.classList.contains('is-open') && navToggle) {
      const focusable = [navToggle, ...nav.querySelectorAll('a[href]:not([hidden])')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  const dialog = document.querySelector('[data-provenance-dialog]');
  const openDialog = document.querySelector('[data-provenance-open]');
  const closeDialog = document.querySelector('[data-provenance-close]');
  let returnFocus = null;

  function showProvenance() {
    if (!dialog || typeof dialog.showModal !== 'function') return;
    returnFocus = document.activeElement;
    dialog.showModal();
    closeDialog?.focus();
  }

  function hideProvenance() {
    if (!dialog) return;
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
  }

  if (dialog && typeof dialog.showModal !== 'function' && openDialog) {
    openDialog.disabled = true;
    openDialog.title = 'Image details require a browser with dialog support.';
  }

  openDialog?.addEventListener('click', showProvenance);
  closeDialog?.addEventListener('click', hideProvenance);
  dialog?.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) hideProvenance();
  });
  dialog?.addEventListener('close', () => returnFocus?.focus());

  const galleryDialog = document.querySelector('[data-gallery-dialog]');
  const galleryImage = document.querySelector('[data-gallery-image]');
  const galleryTitle = document.querySelector('[data-gallery-title]');
  const galleryCaption = document.querySelector('[data-gallery-caption]');
  const galleryClose = document.querySelector('[data-gallery-close]');
  const galleryTriggers = [...document.querySelectorAll('[data-gallery-open]')];
  const galleryPrevious = document.querySelector('[data-gallery-prev]');
  const galleryNext = document.querySelector('[data-gallery-next]');
  const galleryCount = document.querySelector('[data-gallery-count]');
  const galleryStatus = document.querySelector('[data-gallery-status]');
  const galleryMedia = document.querySelector('[data-gallery-media]');
  const galleryOriginal = document.querySelector('[data-gallery-original]');
  let galleryReturnFocus = null;
  let galleryIndex = 0;

  function finishGalleryLoad(failed = false) {
    if (!galleryDialog?.open || !galleryImage) return;
    galleryMedia?.setAttribute('aria-busy', 'false');
    galleryImage.hidden = failed;
    if (galleryStatus) {
      galleryStatus.hidden = !failed;
      galleryStatus.textContent = failed
        ? 'This image could not load. Try “Open full image” below, or choose another view.'
        : '';
    }
  }

  function loadGalleryImage(index) {
    const trigger = galleryTriggers[index];
    if (!trigger || !galleryImage) return;
    galleryIndex = index;
    const figure = trigger.closest('figure');
    const sourceImage = trigger.querySelector('img');
    galleryImage.hidden = true;
    galleryMedia?.setAttribute('aria-busy', 'true');
    if (galleryStatus) {
      galleryStatus.hidden = false;
      galleryStatus.textContent = 'Loading reconstruction…';
    }
    galleryImage.alt = sourceImage?.alt ?? '';
    if (galleryTitle) galleryTitle.textContent = figure?.querySelector('h3')?.textContent ?? 'Reconstruction preview';
    if (galleryCaption) galleryCaption.textContent = figure?.querySelector('figcaption > p')?.textContent ?? '';
    if (galleryCount) galleryCount.textContent = `${index + 1} of ${galleryTriggers.length}`;
    if (galleryOriginal) galleryOriginal.href = trigger.href;
    const focusedControl = document.activeElement;
    if (galleryPrevious) galleryPrevious.disabled = index === 0;
    if (galleryNext) galleryNext.disabled = index === galleryTriggers.length - 1;
    if (focusedControl === galleryNext && galleryNext?.disabled) galleryPrevious?.focus();
    if (focusedControl === galleryPrevious && galleryPrevious?.disabled) galleryNext?.focus();
    galleryImage.src = trigger.href;
    if (galleryImage.complete) finishGalleryLoad(galleryImage.naturalWidth === 0);
  }

  function showGalleryPreview(event) {
    if (!galleryDialog || typeof galleryDialog.showModal !== 'function') return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    const trigger = event.currentTarget;
    if (!galleryImage || !trigger.href) return;
    galleryReturnFocus = trigger;
    galleryDialog.showModal();
    loadGalleryImage(galleryTriggers.indexOf(trigger));
    galleryClose?.focus();
  }

  function hideGalleryPreview() {
    if (galleryDialog?.open) galleryDialog.close();
  }

  galleryTriggers.forEach((trigger) => {
    trigger.addEventListener('click', showGalleryPreview);
  });

  galleryImage?.addEventListener('load', () => finishGalleryLoad());
  galleryImage?.addEventListener('error', () => finishGalleryLoad(true));
  galleryPrevious?.addEventListener('click', () => loadGalleryImage(galleryIndex - 1));
  galleryNext?.addEventListener('click', () => loadGalleryImage(galleryIndex + 1));
  galleryDialog?.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      loadGalleryImage(galleryIndex + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });

  galleryClose?.addEventListener('click', hideGalleryPreview);
  galleryDialog?.addEventListener('click', (event) => {
    // A view change can resize the dialog during this click. Only backdrop
    // clicks may dismiss it; never interpret a child control as the backdrop.
    if (event.target !== galleryDialog) return;
    const bounds = galleryDialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) hideGalleryPreview();
  });
  galleryDialog?.addEventListener('close', () => {
    galleryReturnFocus?.focus();
    if (galleryImage) {
      galleryImage.hidden = true;
      galleryImage.removeAttribute('src');
    }
    galleryMedia?.setAttribute('aria-busy', 'false');
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const configuredLinks = window.AMT01_CONFIG?.links ?? {};
  const linkAvailability = {};

  function verifiedHttpsUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return null;

    try {
      const parsed = new URL(value);
      return parsed.protocol === 'https:' ? parsed.href : null;
    } catch {
      return null;
    }
  }

  document.querySelectorAll('[data-link-key]').forEach((link) => {
    const key = link.dataset.linkKey;
    const settings = configuredLinks[key] ?? {};
    const destination = settings.enabled === true ? verifiedHttpsUrl(settings.url) : null;
    const label = link.querySelector('[data-link-label]');

    linkAvailability[key] = Boolean(destination);

    if (destination) {
      link.href = destination;
      link.hidden = false;
      link.dataset.linkState = 'available';
      if (settings.newTab !== false) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      if (label && settings.label) label.textContent = settings.label;
      return;
    }

    link.hidden = true;
    link.removeAttribute('href');
    link.removeAttribute('target');
    link.removeAttribute('rel');
    link.dataset.linkState = 'unavailable';
    if (label && settings.unavailableLabel) label.textContent = settings.unavailableLabel;
  });

  document.querySelectorAll('[data-link-unavailable]').forEach((status) => {
    const key = status.dataset.linkUnavailable;
    const settings = configuredLinks[key] ?? {};
    status.hidden = Boolean(linkAvailability[key]);
    if (!linkAvailability[key] && settings.unavailableLabel) {
      status.textContent = settings.unavailableLabel;
    }
  });

  document.querySelectorAll('[data-link-note]').forEach((note) => {
    const key = note.dataset.linkNote;
    const settings = configuredLinks[key] ?? {};
    const copy = linkAvailability[key] ? settings.availableNote : settings.unavailableNote;
    if (copy) note.textContent = copy;
  });

})();
