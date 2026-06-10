// This service worker unregisters itself and clears all caches.
// The previous version intercepted all navigation requests and served the React
// index.html, which broke direct access to /cursos/* static pages.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => {
  caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
  self.registration.unregister().then(() => {
    self.clients.matchAll({ type: "window" }).then(clients => {
      clients.forEach(client => client.navigate(client.url));
    });
  });
});
