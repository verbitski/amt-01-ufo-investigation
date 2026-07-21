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
  let galleryReturnFocus = null;

  function showGalleryPreview(event) {
    if (!galleryDialog || typeof galleryDialog.showModal !== 'function') return;

    event.preventDefault();
    const trigger = event.currentTarget;
    const figure = trigger.closest('figure');
    const sourceImage = trigger.querySelector('img');
    const heading = figure?.querySelector('h4');
    const caption = figure?.querySelector('figcaption > p');

    if (!galleryImage || !trigger.href) return;

    galleryReturnFocus = trigger;
    galleryImage.src = trigger.href;
    galleryImage.alt = sourceImage?.alt ?? '';
    if (galleryTitle) galleryTitle.textContent = heading?.textContent ?? 'Reconstruction preview';
    if (galleryCaption) galleryCaption.textContent = caption?.textContent ?? '';
    galleryDialog.showModal();
    galleryClose?.focus();
  }

  function hideGalleryPreview() {
    if (galleryDialog?.open) galleryDialog.close();
  }

  document.querySelectorAll('[data-gallery-open]').forEach((trigger) => {
    trigger.addEventListener('click', showGalleryPreview);
  });

  galleryClose?.addEventListener('click', hideGalleryPreview);
  galleryDialog?.addEventListener('click', (event) => {
    const bounds = galleryDialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) hideGalleryPreview();
  });
  galleryDialog?.addEventListener('close', () => {
    galleryReturnFocus?.focus();
    if (galleryImage) galleryImage.src = '';
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

  const communityStatusTitle = document.querySelector('[data-community-status-title]');
  const communityStatusText = document.querySelector('[data-community-status-text]');
  const communityHelpCopy = document.querySelector('[data-community-help-copy]');
  const communityHelpLabel = document.querySelector('[data-community-help-label]');
  const communityPublicWarning = document.querySelector('[data-community-public-warning]');
  const discussionsAreOpen = Boolean(linkAvailability.discussions);
  const contributionsAreOpen = Boolean(linkAvailability.repository);
  const privateIntakeIsOpen = Boolean(linkAvailability.privateIntake);
  const anyPublicRouteIsOpen = discussionsAreOpen || contributionsAreOpen;
  const anyParticipationIsOpen = discussionsAreOpen || contributionsAreOpen || privateIntakeIsOpen;

  if (communityPublicWarning) communityPublicWarning.hidden = !anyPublicRouteIsOpen;

  if (anyParticipationIsOpen && communityStatusTitle && communityStatusText) {
    if (privateIntakeIsOpen && anyPublicRouteIsOpen) {
      if (discussionsAreOpen && contributionsAreOpen) {
        communityStatusTitle.textContent = 'Public discussion, research contributions, and private witness intake are open.';
      } else if (discussionsAreOpen) {
        communityStatusTitle.textContent = 'Public discussion and private witness intake are open.';
      } else {
        communityStatusTitle.textContent = 'Research contributions and private witness intake are open.';
      }
    } else if (discussionsAreOpen && contributionsAreOpen) {
      communityStatusTitle.textContent = 'Public discussion and research contributions are open.';
    } else if (discussionsAreOpen) {
      communityStatusTitle.textContent = 'Public discussion is open.';
    } else if (contributionsAreOpen) {
      communityStatusTitle.textContent = 'Structured research contributions are open.';
    } else {
      communityStatusTitle.textContent = 'Private witness intake is open.';
    }

    communityStatusText.textContent = privateIntakeIsOpen
      ? 'Use public channels for discussion and checkable research. Use the private form for witness reports or sensitive details. Reports are reviewed privately and are never published automatically.'
      : 'The private witness form is temporarily unavailable. Please do not send personal reports or media through public channels.';

    if (communityHelpCopy) {
      communityHelpCopy.textContent = anyPublicRouteIsOpen && privateIntakeIsOpen
        ? 'Ready to join a public discussion, contribute something checkable, or use the separate private route?'
        : anyPublicRouteIsOpen
          ? 'Ready to join an available public discussion or contribute something checkable?'
          : 'A separate private route is available for witness reports.';
    }
    if (communityHelpLabel) communityHelpLabel.textContent = 'Choose how to take part';
  }

  if (privateIntakeIsOpen) {
    const privateIntakeLabel = document.querySelector('[data-private-intake-label]');
    const privateIntakeTitle = document.querySelector('[data-private-intake-title]');
    const privateIntakeCopy = document.querySelector('[data-private-intake-copy]');
    if (privateIntakeLabel) privateIntakeLabel.textContent = 'Private, consent-based intake';
    if (privateIntakeTitle) privateIntakeTitle.textContent = 'Share an observation privately';
    if (privateIntakeCopy) privateIntakeCopy.textContent = 'Use this route for a witness report, sensitive details, or an access, copy, correction, consent-withdrawal, deletion, or other privacy request. Submissions are reviewed privately and are not published automatically. You may submit a new report without a name or follow-up contact.';
  }
})();
