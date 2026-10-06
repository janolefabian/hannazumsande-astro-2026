export function setupVideoPlayers() {
  document.querySelectorAll<HTMLAnchorElement>('.video-poster[data-video-id]').forEach(link => {
    const id = link.dataset.videoId;
    if (!id || !/^[a-zA-Z0-9_-]{11}$/.test(id)) return;
    const close = link.closest('.video-card')?.querySelector<HTMLButtonElement>('[data-video-close]');
    let activeFrame: HTMLIFrameElement | undefined;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = link.className;
    button.setAttribute('aria-label', 'Video laden: ' + link.dataset.videoTitle);
    button.setAttribute('aria-controls', link.parentElement!.id);
    button.append(...Array.from(link.childNodes));
    const caption = button.querySelector('.video-play');
    if (caption) {
      const icon = document.createElement('span');
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '▶';
      caption.replaceChildren(icon, document.createTextNode(' Video laden'));
    }
    button.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
      frame.title = link.dataset.videoTitle || 'YouTube-Video';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.tabIndex = 0;
      button.replaceWith(frame);
      activeFrame = frame;
      if (close) close.hidden = false;
      frame.focus();
    });
    close?.addEventListener('click', () => {
      activeFrame?.replaceWith(button);
      activeFrame = undefined;
      close.hidden = true;
      button.focus();
    });
    link.replaceWith(button);
  });
}
