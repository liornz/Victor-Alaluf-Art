define("./workbox-6185e0cf.js",["exports"],(function(t){"use strict";try{self["workbox:core:6.2.4"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.2.4"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class i{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=n(t)}}class r extends i{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class a{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=r&&r.handler;const o=t.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:t,event:e,params:i})}catch(t){c=Promise.reject(t)}const h=r&&r.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:i})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:t,sameOrigin:e,request:s,event:n});if(a)return i=a,(Array.isArray(i)&&0===i.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,n(t))}setCatchHandler(t){this.o=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let o;const c=()=>(o||(o=new a,o.addFetchListener(),o.addCacheListener()),o);function h(t,e,n){let a;if("string"==typeof t){const s=new URL(t,location.href);a=new i((({url:t})=>t.href===s.href),e,n)}else if(t instanceof RegExp)a=new r(t,e,n);else if("function"==typeof t)a=new i(t,e,n);else{if(!(t instanceof i))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return c().registerRoute(a),a}try{self["workbox:strategies:6.2.4"]&&_()}catch(t){}const u={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null},l={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},f=t=>[l.prefix,t,l.suffix].filter((t=>t&&t.length>0)).join("-"),w=t=>t||f(l.precache),d=t=>t||f(l.runtime);function y(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class p{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const m=new Set;function g(t){return new Promise((e=>setTimeout(e,t)))}function R(t){return"string"==typeof t?new Request(t):t}class v{constructor(t,e){this.h={},Object.assign(this,e),this.event=e.event,this.u=t,this.l=new p,this.p=[],this.m=[...t.plugins],this.g=new Map;for(const t of this.m)this.g.set(t,{});this.event.waitUntil(this.l.promise)}async fetch(t){const{event:e}=this;let n=R(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(t){if(t instanceof Error)throw new s("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.u.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:r,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:i.clone(),request:r.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=R(t);let s;const{cacheName:n,matchOptions:i}=this.u,r=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,e){const n=R(t);await g(0);const i=await this.getCacheKey(n,"write");if(!e)throw new s("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const a=await this.R(e);if(!a)return!1;const{cacheName:o,matchOptions:c}=this.u,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(t,e,s,n){const i=y(e.url,s);if(e.url===i)return t.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await t.keys(e,r);for(const e of a)if(i===y(e.url,s))return t.match(e,n)}(h,i.clone(),["__WB_REVISION__"],c):null;try{await h.put(i,u?a.clone():a)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of m)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:o,oldResponse:l,newResponse:a.clone(),request:i,event:this.event});return!0}async getCacheKey(t,e){if(!this.h[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=R(await t({mode:e,request:s,event:this.event,params:this.params}));this.h[e]=s}return this.h[e]}hasCallback(t){for(const e of this.u.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.u.plugins)if("function"==typeof e[t]){const s=this.g.get(e),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return e[t](i)};yield n}}waitUntil(t){return this.p.push(t),t}async doneWaiting(){let t;for(;t=this.p.shift();)await t}destroy(){this.l.resolve(null)}async R(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class q{constructor(t={}){this.cacheName=d(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new v(this,{event:e,request:s,params:n}),r=this.v(i,s,e);return[r,this.q(r,i,s,e)]}async v(t,e,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(i=await this.D(e,t),!i||"error"===i.type)throw new s("no-response",{url:e.url})}catch(s){if(s instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(i=await r({error:s,event:n,request:e}),i)break;if(!i)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))i=await s({event:n,request:e,response:i});return i}async q(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){t instanceof Error&&(r=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}function b(t){t.then((()=>{}))}function D(){return(D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}let E,x;const U=new WeakMap,I=new WeakMap,N=new WeakMap,L=new WeakMap,k=new WeakMap;let B={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return I.get(t);if("objectStoreNames"===e)return t.objectStoreNames||N.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return T(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function C(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(P(this),e),T(U.get(this))}:function(...e){return T(t.apply(P(this),e))}:function(e,...s){const n=t.call(P(this),e,...s);return N.set(n,e.sort?e.sort():[e]),T(n)}}function O(t){return"function"==typeof t?C(t):(t instanceof IDBTransaction&&function(t){if(I.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),n()},r=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));I.set(t,e)}(t),e=t,(E||(E=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,B):t);var e}function T(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(T(t.result)),n()},r=()=>{s(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&U.set(e,t)})).catch((()=>{})),k.set(e,t),e}(t);if(L.has(t))return L.get(t);const e=O(t);return e!==t&&(L.set(t,e),k.set(e,t)),e}const P=t=>k.get(t);function j(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),o=T(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(T(a.result),t.oldVersion,t.newVersion,T(a.transaction))})),s&&a.addEventListener("blocked",(()=>s())),o.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),o}const M=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],W=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(W.get(e))return W.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=S.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!M.includes(s))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let a=r.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[s](...e),i&&r.done]))[0]};return W.set(e,r),r}B=(t=>D({},t,{get:(e,s,n)=>A(e,s)||t.get(e,s,n),has:(e,s)=>!!A(e,s)||t.has(e,s)}))(B);try{self["workbox:expiration:6.2.4"]&&_()}catch(t){}const K="cache-entries",$=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class F{constructor(t){this._=null,this.U=t}I(t){const e=t.createObjectStore(K,{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1})}N(t){this.I(t),this.U&&function(t,{blocked:e}={}){const s=indexedDB.deleteDatabase(t);e&&s.addEventListener("blocked",(()=>e())),T(s).then((()=>{}))}(this.U)}async setTimestamp(t,e){const s={url:t=$(t),timestamp:e,cacheName:this.U,id:this.L(t)},n=await this.getDb();await n.put(K,s)}async getTimestamp(t){const e=await this.getDb(),s=await e.get(K,this.L(t));return null==s?void 0:s.timestamp}async expireEntries(t,e){const s=await this.getDb();let n=await s.transaction(K).store.index("timestamp").openCursor(null,"prev");const i=[];let r=0;for(;n;){const s=n.value;s.cacheName===this.U&&(t&&s.timestamp<t||e&&r>=e?i.push(n.value):r++),n=await n.continue()}const a=[];for(const t of i)await s.delete(K,t.id),a.push(t.url);return a}L(t){return this.U+"|"+$(t)}async getDb(){return this._||(this._=await j("workbox-expiration",1,{upgrade:this.N.bind(this)})),this._}}class H{constructor(t,e={}){this.k=!1,this.B=!1,this.C=e.maxEntries,this.O=e.maxAgeSeconds,this.T=e.matchOptions,this.U=t,this.P=new F(t)}async expireEntries(){if(this.k)return void(this.B=!0);this.k=!0;const t=this.O?Date.now()-1e3*this.O:0,e=await this.P.expireEntries(t,this.C),s=await self.caches.open(this.U);for(const t of e)await s.delete(t,this.T);this.k=!1,this.B&&(this.B=!1,b(this.expireEntries()))}async updateTimestamp(t){await this.P.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.O){const e=await this.P.getTimestamp(t),s=Date.now()-1e3*this.O;return void 0===e||e<s}return!1}async delete(){this.B=!1,await this.P.expireEntries(1/0)}}try{self["workbox:range-requests:6.2.4"]&&_()}catch(t){}async function z(t,e){try{if(206===e.status)return e;const n=t.headers.get("range");if(!n)throw new s("no-range-header");const i=function(t){const e=t.trim().toLowerCase();if(!e.startsWith("bytes="))throw new s("unit-must-be-bytes",{normalizedRangeHeader:e});if(e.includes(","))throw new s("single-range-only",{normalizedRangeHeader:e});const n=/(\d*)-(\d*)/.exec(e);if(!n||!n[1]&&!n[2])throw new s("invalid-range-values",{normalizedRangeHeader:e});return{start:""===n[1]?void 0:Number(n[1]),end:""===n[2]?void 0:Number(n[2])}}(n),r=await e.blob(),a=function(t,e,n){const i=t.size;if(n&&n>i||e&&e<0)throw new s("range-not-satisfiable",{size:i,end:n,start:e});let r,a;return void 0!==e&&void 0!==n?(r=e,a=n+1):void 0!==e&&void 0===n?(r=e,a=i):void 0!==n&&void 0===e&&(r=i-n,a=i),{start:r,end:a}}(r,i.start,i.end),o=r.slice(a.start,a.end),c=o.size,h=new Response(o,{status:206,statusText:"Partial Content",headers:e.headers});return h.headers.set("Content-Length",String(c)),h.headers.set("Content-Range",`bytes ${a.start}-${a.end-1}/${r.size}`),h}catch(t){return new Response("",{status:416,statusText:"Range Not Satisfiable"})}}try{self["workbox:background-sync:6.2.4"]&&_()}catch(t){}const Q="requests",G="queueName";class V{constructor(){this._=null}async addEntry(t){const e=await this.getDb();await e.add(Q,t)}async getFirstEntryId(){const t=await this.getDb(),e=await t.transaction(Q).store.openCursor();return null==e?void 0:e.value.id}async getAllEntriesByQueueName(t){const e=await this.getDb(),s=await e.getAllFromIndex(Q,G,IDBKeyRange.only(t));return s||new Array}async deleteEntry(t){const e=await this.getDb();await e.delete(Q,t)}async getFirstEntryByQueueName(t){return await this.getEndEntryFromIndex(IDBKeyRange.only(t),"next")}async getLastEntryByQueueName(t){return await this.getEndEntryFromIndex(IDBKeyRange.only(t),"prev")}async getEndEntryFromIndex(t,e){const s=await this.getDb(),n=await s.transaction(Q).store.index(G).openCursor(t,e);return null==n?void 0:n.value}async getDb(){return this._||(this._=await j("workbox-background-sync",3,{upgrade:this.I})),this._}I(t,e){e>0&&e<3&&t.objectStoreNames.contains(Q)&&t.deleteObjectStore(Q);t.createObjectStore(Q,{autoIncrement:!0,keyPath:"id"}).createIndex(G,G,{unique:!1})}}class J{constructor(t){this.j=t,this.M=new V}async pushEntry(t){delete t.id,t.queueName=this.j,await this.M.addEntry(t)}async unshiftEntry(t){const e=await this.M.getFirstEntryId();e?t.id=e-1:delete t.id,t.queueName=this.j,await this.M.addEntry(t)}async popEntry(){return this.S(await this.M.getLastEntryByQueueName(this.j))}async shiftEntry(){return this.S(await this.M.getFirstEntryByQueueName(this.j))}async getAll(){return await this.M.getAllEntriesByQueueName(this.j)}async deleteEntry(t){await this.M.deleteEntry(t)}async S(t){return t&&await this.deleteEntry(t.id),t}}const X=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class Y{constructor(t){"navigate"===t.mode&&(t.mode="same-origin"),this.W=t}static async fromRequest(t){const e={url:t.url,headers:{}};"GET"!==t.method&&(e.body=await t.clone().arrayBuffer());for(const[s,n]of t.headers.entries())e.headers[s]=n;for(const s of X)void 0!==t[s]&&(e[s]=t[s]);return new Y(e)}toObject(){const t=Object.assign({},this.W);return t.headers=Object.assign({},this.W.headers),t.body&&(t.body=t.body.slice(0)),t}toRequest(){return new Request(this.W.url,this.W)}clone(){return new Y(this.toObject())}}const Z="workbox-background-sync",tt=new Set,et=t=>{const e={request:new Y(t.requestData).toRequest(),timestamp:t.timestamp};return t.metadata&&(e.metadata=t.metadata),e};class st{constructor(t,{onSync:e,maxRetentionTime:n}={}){if(this.A=!1,this.K=!1,tt.has(t))throw new s("duplicate-queue-name",{name:t});tt.add(t),this.$=t,this.F=e||this.replayRequests,this.H=n||10080,this.G=new J(this.$),this.V()}get name(){return this.$}async pushRequest(t){await this.J(t,"push")}async unshiftRequest(t){await this.J(t,"unshift")}async popRequest(){return this.X("pop")}async shiftRequest(){return this.X("shift")}async getAll(){const t=await this.G.getAll(),e=Date.now(),s=[];for(const n of t){const t=60*this.H*1e3;e-n.timestamp>t?await this.G.deleteEntry(n.id):s.push(et(n))}return s}async J({request:t,metadata:e,timestamp:s=Date.now()},n){const i={requestData:(await Y.fromRequest(t.clone())).toObject(),timestamp:s};e&&(i.metadata=e),await this.G[`${n}Entry`](i),this.A?this.K=!0:await this.registerSync()}async X(t){const e=Date.now(),s=await this.G[`${t}Entry`]();if(s){const n=60*this.H*1e3;return e-s.timestamp>n?this.X(t):et(s)}}async replayRequests(){let t;for(;t=await this.shiftRequest();)try{await fetch(t.request.clone())}catch(e){throw await this.unshiftRequest(t),new s("queue-replay-failed",{name:this.$})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register(`${Z}:${this.$}`)}catch(t){}}V(){"sync"in self.registration?self.addEventListener("sync",(t=>{if(t.tag===`${Z}:${this.$}`){const e=async()=>{let e;this.A=!0;try{await this.F({queue:this})}catch(t){if(t instanceof Error)throw e=t,e}finally{!this.K||e&&!t.lastChance||await this.registerSync(),this.A=!1,this.K=!1}};t.waitUntil(e())}})):this.F({queue:this})}static get Y(){return tt}}function nt(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.2.4"]&&_()}catch(t){}function it(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",e),{cacheKey:i.href,url:r.href}}class rt{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class at{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=e&&e.cacheKey||this.Z.getCacheKeyForURL(t.url);return s?new Request(s):t},this.Z=t}}let ot,ct;async function ht(t,e){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const i=t.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=e?e(r):r,o=function(){if(void 0===ot){const t=new Response("");if("body"in t)try{new Response(t.body),ot=!0}catch(t){ot=!1}ot=!1}return ot}()?i.body:await i.blob();return new Response(o,a)}class ut extends q{constructor(t={}){t.cacheName=w(t.cacheName),super(t),this.tt=!1!==t.fallbackToNetwork,this.plugins.push(ut.copyRedirectedCacheableResponsesPlugin)}async D(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.et(t,e):await this.st(t,e))}async st(t,e){let n;if(!this.tt)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return n=await e.fetch(t),n}async et(t,e){this.nt();const n=await e.fetch(t);if(!await e.cachePut(t,n.clone()))throw new s("bad-precaching-response",{url:t.url,status:n.status});return n}nt(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==ut.copyRedirectedCacheableResponsesPlugin&&(n===ut.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(ut.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}ut.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},ut.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await ht(t):t};class lt{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.it=new Map,this.rt=new Map,this.ot=new Map,this.u=new ut({cacheName:w(t),plugins:[...e,new at({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.u}precache(t){this.addToCacheList(t),this.ct||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.ct=!0)}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:i}=it(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.it.has(i)&&this.it.get(i)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.it.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.ot.has(t)&&this.ot.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:i});this.ot.set(t,n.integrity)}if(this.it.set(i,t),this.rt.set(i,r),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return nt(t,(async()=>{const e=new rt;this.strategy.plugins.push(e);for(const[e,s]of this.it){const n=this.ot.get(s),i=this.rt.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return nt(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.it.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.it}getCachedURLs(){return[...this.it.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.it.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=Object.assign({cacheKey:e},s.params),this.strategy.handle(s))}}const ft=()=>(ct||(ct=new lt),ct);class wt extends i{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const t of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(t);if(e)return{cacheKey:e}}}),t.strategy)}}t.BackgroundSyncPlugin=class{constructor(t,e){this.fetchDidFail=async({request:t})=>{await this.ht.pushRequest({request:t})},this.ht=new st(t,e)}},t.CacheFirst=class extends q{async D(t,e){let n,i=await e.cacheMatch(t);if(!i)try{i=await e.fetchAndCachePut(t)}catch(t){t instanceof Error&&(n=t)}if(!i)throw new s("no-response",{url:t.url,error:n});return i}},t.ExpirationPlugin=class{constructor(t={}){this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.ut(n),r=this.lt(s);b(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.lt(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.ft=t,this.O=t.maxAgeSeconds,this.wt=new Map,t.purgeOnQuotaError&&function(t){m.add(t)}((()=>this.deleteCacheAndMetadata()))}lt(t){if(t===d())throw new s("expire-custom-caches-only");let e=this.wt.get(t);return e||(e=new H(t,this.ft),this.wt.set(t,e)),e}ut(t){if(!this.O)return!0;const e=this.dt(t);if(null===e)return!0;return e>=Date.now()-1e3*this.O}dt(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.wt)await self.caches.delete(t),await e.delete();this.wt=new Map}},t.NetworkFirst=class extends q{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(u),this.yt=t.networkTimeoutSeconds||0}async D(t,e){const n=[],i=[];let r;if(this.yt){const{id:s,promise:a}=this.gt({request:t,logs:n,handler:e});r=s,i.push(a)}const a=this.Rt({timeoutId:r,request:t,logs:n,handler:e});i.push(a);const o=await e.waitUntil((async()=>await e.waitUntil(Promise.race(i))||await a)());if(!o)throw new s("no-response",{url:t.url});return o}gt({request:t,logs:e,handler:s}){let n;return{promise:new Promise((e=>{n=setTimeout((async()=>{e(await s.cacheMatch(t))}),1e3*this.yt)})),id:n}}async Rt({timeoutId:t,request:e,logs:s,handler:n}){let i,r;try{r=await n.fetchAndCachePut(e)}catch(t){t instanceof Error&&(i=t)}return t&&clearTimeout(t),!i&&r||(r=await n.cacheMatch(e)),r}},t.NetworkOnly=class extends q{constructor(t={}){super(t),this.yt=t.networkTimeoutSeconds||0}async D(t,e){let n,i;try{const s=[e.fetch(t)];if(this.yt){const t=g(1e3*this.yt);s.push(t)}if(i=await Promise.race(s),!i)throw new Error(`Timed out the network response after ${this.yt} seconds.`)}catch(t){t instanceof Error&&(n=t)}if(!i)throw new s("no-response",{url:t.url,error:n});return i}},t.RangeRequestsPlugin=class{constructor(){this.cachedResponseWillBeUsed=async({request:t,cachedResponse:e})=>e&&t.headers.has("range")?await z(t,e):e}},t.StaleWhileRevalidate=class extends q{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(u)}async D(t,e){const n=e.fetchAndCachePut(t).catch((()=>{}));let i,r=await e.cacheMatch(t);if(r);else try{r=await n}catch(t){t instanceof Error&&(i=t)}if(!r)throw new s("no-response",{url:t.url,error:i});return r}},t.cleanupOutdatedCaches=function(){self.addEventListener("activate",(t=>{const e=w();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t));return await Promise.all(s.map((t=>self.caches.delete(t)))),s})(e).then((t=>{})))}))},t.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},t.precacheAndRoute=function(t,e){!function(t){ft().precache(t)}(t),function(t){const e=ft();h(new wt(e,t))}(e)},t.registerRoute=h}));