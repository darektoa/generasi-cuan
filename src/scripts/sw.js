/* eslint-disable no-restricted-globals */
import CacheHelper from './utilities/cache-helper';

const { assets } = self.serviceWorkerOption;



// EVENT HANDLE INSTALL
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  self.skipWaiting();
  event.waitUntil(CacheHelper.precaching(['/', ...assets]));
});



// EVENT HANDLE ACTIVATE
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  self.clients.claim();
  event.waitUntil(CacheHelper.deleteOldCache());
});



// EVENT HANDLE FETCH
self.addEventListener('fetch', (event) => {
  const { url } = event.request;
  const protocol = new RegExp('^https?://');

  if (url.match(protocol)) {
    event.respondWith(CacheHelper.revalidateCache(event.request));
  }
});