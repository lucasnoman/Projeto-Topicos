// Define o nome do cache atual, considerando a sua versão.
var cacheName = 'minhaLista-v1.0';
var urlsToCache = [
  './pages',
  './pages/index.html',
  './pages/itensComprados.html',
  './pages/listaCadastrada.html',
  './styles',
  './styles/style.css',
  './scripts',
  './scripts/index.js',
  './scripts/createElement.js',
  '../public/appicons/favicon.ico',
  '../public/appicons/android/hdpi.png',
  '../public/appicons/android/mdpi.png',
  '../public/appicons/android/xhdpi.png',
  '../public/appicons/android/xxhdpi.png',
  '../public/appicons/android/xxxhdpi.png',
  '../public/appicons/ios/Icon-120.png',
  '../public/appicons/ios/Icon-57.png',
  '../public/appicons/ios/Icon-72.png',
  '../public/appicons/ios/Icon-76.png',
];

// Armazena todos os arquivos no cache atual
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(urlsToCache);
    })
  );
});

// Recupera todos os nomes de cache e apaga aqueles
// que forem diferentes do cache atual
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Tenta servir o arquivo do cache atual. Se não for possível,
// baixa o recurso da web e o armazena localmente, antes de entregar
// uma cópia para o usuário.
self.addEventListener('fetch', function (event) {
  let resposta = caches.open(cacheName).then(cache => {
    return cache.match(event.request).then(recurso => {
      if (recurso) return recurso;
      return fetch(event.request).then(recurso => {
        cache.put(event.request, recurso.clone());
        return recurso;
      });
    });
  });
  event.respondWith(resposta);
});
