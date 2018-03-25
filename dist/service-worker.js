/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/static/css/admin.b49eafb.css","a42a458545abe3900c223479a77dd2ec"],["/static/css/app.b49eafb.css","8e8b916fd5ee167262253fb473240162"],["/static/img/element-icons.6f0a763.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/static/img/fontawesome-webfont.674f50d.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/img/fontawesome-webfont.912ec66.svg","912ec66d7572ff821749319396470bde"],["/static/img/fontawesome-webfont.af7ae50.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/img/fontawesome-webfont.b06871f.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/img/fontawesome-webfont.fee66e7.woff","fee66e712a8a08eef5805a46892932ad"],["/static/img/login_bg.d7174ef.jpg","d7174ef5f930a53ce6beae07190ddcc5"],["/static/js/0.1a63034.js","be92ef8892d7a438d124313d403de764"],["/static/js/1.e641446.js","78cfefd5491c1e61239300918d7a42e2"],["/static/js/10.6d1df5c.js","f568c6e7e291ced9fb63f22d55fdb730"],["/static/js/11.37baf40.js","81b6213385092fcead0531780c11dede"],["/static/js/12.3666494.js","549e4e8b3c239a42e3deb1b03aa1c230"],["/static/js/13.f27df9c.js","e14b872d8942778974af2065d13123ea"],["/static/js/14.2cae6ad.js","915d6e0ff9ec51688dce32a6f002bddb"],["/static/js/15.f270eaa.js","a6d203ca5765ddd5a279a22976968469"],["/static/js/16.325fdde.js","ef1a9fbea61e3ebfc40beef34898572a"],["/static/js/17.a8e1273.js","e5db8d9baa9fd9b91f0fbd61a480eba7"],["/static/js/18.c9ecd2c.js","80e827933f369993e70286cf153b92f7"],["/static/js/19.3f88775.js","ce3bdd39a8400d8a6ed0f92f806c1ff3"],["/static/js/2.908f4a1.js","e225e32ad5ad736314ec5566fce3806c"],["/static/js/20.48f7dee.js","77b5755f8a4344d5519d90e9028082e3"],["/static/js/21.31a414f.js","fc338e880ba32e478ddc530bccc9bb66"],["/static/js/22.4189d43.js","934df72f144dc19295b96a3440c66979"],["/static/js/23.fbb6662.js","d4c91b6b4c0c552ba55cd104ad5d4e3f"],["/static/js/24.0e46ceb.js","e8ed15467d9564f819dc2c3dea69fa0b"],["/static/js/25.f4c2e47.js","37a67cbaa19c5fd91c553eff3be8fcd3"],["/static/js/26.efacf0a.js","29ff9b0ff688e7c25499ba8d5da1b791"],["/static/js/27.d560524.js","7dde4a28802c750cbfb7d5afccc4f23a"],["/static/js/28.cd0e605.js","fb36ce8967452810a56a66beac42cd0a"],["/static/js/29.906e1ba.js","23a77e6bfba2e3653343a4747f73c0de"],["/static/js/3.d674042.js","c3e6e640dffe970d7be1b45fdcdb5788"],["/static/js/30.3590a27.js","5207e78a9d8e6e6e6e55f3e3a1ea86c5"],["/static/js/31.fdec394.js","a9c090655d231cc08c124815d83f2888"],["/static/js/32.b380eea.js","9b43510d7c76ec2ba980e09a450c1995"],["/static/js/33.1d5cdc9.js","3fdfdc80e2c103d4ca6b906224e08085"],["/static/js/34.082e356.js","97d4bd5a8f464de5e3038dc15ee74710"],["/static/js/35.82ee6a6.js","d90a46041d19312b2aec0648e0d1448b"],["/static/js/36.804c862.js","7006112d8cd61f505961f8819bdbcedf"],["/static/js/37.d81e60b.js","91c97f2a991192579e23a1b24fab9b6a"],["/static/js/38.c6a1e2b.js","b71f2c870e1e89a9adf4a94d7e80fa64"],["/static/js/39.083621d.js","da635db8c11f784d1507fbeaabaf4e6b"],["/static/js/4.5f6be68.js","bfcf2ffb82776b5c93cccfe452454fbe"],["/static/js/40.d123533.js","5cec31d9c70dfdf21bb84ff7f1383013"],["/static/js/41.a3b62cd.js","063679929714edcfb3118046a4a4ffd5"],["/static/js/42.b455f94.js","c3c6f4da310f5740e84d32d09e1fc4fa"],["/static/js/43.6a88ad9.js","c16dc6ca0a319a445c56b162cc7fcdc5"],["/static/js/44.af770c9.js","144eceab0bbc70d972bc1aafdf8360ef"],["/static/js/5.4edbb32.js","b4ecdd0df5da41ddae75f487fb9857ac"],["/static/js/6.aadb923.js","63fae52c8f5bfe94e0dbbb27ef4d6df1"],["/static/js/7.3a7470c.js","29beff611d383776b4b31e328380dba4"],["/static/js/8.0737a00.js","cb2690de6e4028e6fbec9a5ea7e6c59a"],["/static/js/9.5051cfc.js","cb3df000b4681cde28d624977be2ee32"],["/static/js/AdminLogin.cb5d12f.js","b421ef82ff566aea4950bd09084ba041"],["/static/js/Article.2a62d73.js","e2b39cdf82ff3adadecfa79817ac981e"],["/static/js/ArticleList.5de5ac9.js","0e77fc348f16f451618f29018751c8dd"],["/static/js/CmsCase.bd00286.js","33dc56bc36c5f89b5bcfa442c249c479"],["/static/js/SiteMap.664285b.js","e15d6f767b1910a8a8bd01824404820f"],["/static/js/UserAddContent.4f1eba9.js","af8677229ee9df937ad74fe316f3dc15"],["/static/js/UserCenter.f279238.js","97882a4ffbc8a6071043dda26cdf3978"],["/static/js/UserContents.633a709.js","dfd64efee4d1d46d0ae9c825e3c12137"],["/static/js/UserLoginForm.873b06a.js","2b9df00921162ba8c000b2d8307f5ba0"],["/static/js/UserMessage.6c6e8d5.js","3a6f81a35e31ca6a379d8ddf9a4cadb1"],["/static/js/UserPwd.4017dcf.js","ab51d5f5d57b04546a77eea79c197f3f"],["/static/js/UserRegForm.f4bb950.js","8728ac48ea3c77f30e20c41686663268"],["/static/js/UserReplies.67bdbb7.js","9a9a6a1ad047273ff1f7123dfa20de17"],["/static/js/admin.c36d2c2.js","d380800ef0f7b90e1fd3c0102cb9f2a4"],["/static/js/app.aa8c340.js","c920288c6027665e1d9543e99f2412e2"],["/static/js/manifest.21bcd19.js","eb60ce2b956d9ff4093ce0754f72abf8"],["/static/js/vendor.fad9e14.js","e224c3f7dcfee87cb8962a1e66a38653"]];
var cacheName = 'sw-precache-v3-doracms-vue2-ssr-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







