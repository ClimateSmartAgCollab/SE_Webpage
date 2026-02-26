import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent browser from restoring scroll position (can override our scroll)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    scrollToTop();
    // Defer scroll until after React has painted and laid out the new page
    const rafId = requestAnimationFrame(scrollToTop);
    const timeoutId = setTimeout(scrollToTop, 100);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
