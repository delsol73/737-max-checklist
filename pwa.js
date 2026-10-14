// PWA install/offline is supported on HTTPS (and localhost), not file://.
(() => {
  if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(err => console.warn('Offline cache could not be enabled:', err)));
})();
