const CACHE_NAME = "esp-control-cache-v1";
const CACHE_FILES = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", (event) => {
  console.log("Service Worker: 正在安装...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("正在缓存资源");
      return cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
