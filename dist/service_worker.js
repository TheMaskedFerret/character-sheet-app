(()=>{var n="4.3.2";var r={cacheName:n,staticCacheItems:["/index.html","/index.js","/styles.css","/"]};self.addEventListener("install",e=>{function t(){return caches.open(r.cacheName).then(s=>s.addAll(r.staticCacheItems))}e.waitUntil(t(e).then(()=>self.skipWaiting()))});self.addEventListener("activate",function(e){let t=[r.cacheName];e.waitUntil(caches.keys().then(function(s){return Promise.all(s.map(function(i){if(t.indexOf(i)===-1)return caches.delete(i)}))}).then(()=>self.clients.claim()))});self.addEventListener("fetch",e=>{if(e.request.method==="POST"){fetch(e.request);return}e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request).then(function(s){return caches.open(r.cacheName).then(function(i){return i.put(e.request,s.clone()),s})})}).catch(function(t){console.log("Service worker fetch failed.")}))});})();
//# sourceMappingURL=service_worker.js.map
