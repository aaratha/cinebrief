(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[191],{981:function(e,t){"use strict";function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},unstable_getImgProps:function(){return l}});let n=r(1024),i=r(2301),u=r(7873),a=r(3222),o=n._(r(5033)),l=e=>{(0,u.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=a.Image},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),i=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,l={},s=null,c=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,n)&&!o.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:i,type:e,key:s,ref:c,props:l,_owner:a.current}}t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(1295)},4033:function(e,t,r){e.exports=r(8165)},1853:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=n.useState,a=n.useEffect,o=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=u({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return o(function(){i.value=r,i.getSnapshot=t,s(i)&&c({inst:i})},[e,r,t]),a(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},6272:function(e,t,r){"use strict";e.exports=r(1853)},9382:function(e,t,r){"use strict";r.d(t,{R:function(){return ef}});var n,i,u=r(2265),a=r(6272);let o=new WeakMap,l={},s={},c=()=>{},f=c(),d=Object,g=e=>e===f,p=e=>"function"==typeof e,y=(e,t)=>({...e,...t}),h="undefined",v=typeof window!=h,E=typeof document!=h,b=()=>v&&typeof window.requestAnimationFrame!=h,_=(e,t)=>{let r=o.get(e);return[()=>!g(t)&&e.get(t)||l,n=>{if(!g(t)){let i=e.get(t);t in s||(s[t]=i),r[5](t,y(i,n),i||l)}},r[6],()=>!g(t)&&t in s?s[t]:!g(t)&&e.get(t)||l]},m=new WeakMap,w=0,O=e=>{let t,r;let n=typeof e,i=e&&e.constructor,u=i==Date;if(d(e)!==e||u||i==RegExp)t=u?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=m.get(e))return t;if(t=++w+"~",m.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=O(e[r])+",";m.set(e,t)}if(i==d){t="#";let n=d.keys(e).sort();for(;!g(r=n.pop());)g(e[r])||(t+=r+":"+O(e[r])+",");m.set(e,t)}}return t},R=!0,[S,T]=v&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[c,c],k={initFocus:e=>(E&&document.addEventListener("visibilitychange",e),S("focus",e),()=>{E&&document.removeEventListener("visibilitychange",e),T("focus",e)}),initReconnect:e=>{let t=()=>{R=!0,e()},r=()=>{R=!1};return S("online",t),S("offline",r),()=>{T("online",t),T("offline",r)}}},C=!u.useId,V=!v||"Deno"in window,L=e=>b()?window.requestAnimationFrame(e):setTimeout(e,1),P=V?u.useEffect:u.useLayoutEffect,x="undefined"!=typeof navigator&&navigator.connection,D=!V&&x&&(["slow-2g","2g"].includes(x.effectiveType)||x.saveData),M=e=>{if(p(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?O(e):"",t]},N=0,I=()=>++N;var A={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function j(...e){let[t,r,n,i]=e,u=y({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),a=u.populateCache,l=u.rollbackOnError,s=u.optimisticData,c=!1!==u.revalidate,d=e=>"function"==typeof l?l(e):!1!==l,h=u.throwOnError;if(p(r)){let e=[],n=t.keys();for(let i=n.next();!i.done;i=n.next()){let n=i.value;!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n)}return Promise.all(e.map(v))}return v(r);async function v(r){let i;let[u]=M(r);if(!u)return;let[l,y]=_(t,u),[v,E,b]=o.get(t),m=v[u],w=()=>c&&(delete b[u],m&&m[0])?m[0](2).then(()=>l().data):l().data;if(e.length<3)return w();let O=n,R=I();E[u]=[R,0];let S=!g(s),T=l(),k=T.data,C=T._c,V=g(C)?k:C;if(S&&y({data:s=p(s)?s(V):s,_c:V}),p(O))try{O=O(V)}catch(e){i=e}if(O&&p(O.then)){if(O=await O.catch(e=>{i=e}),R!==E[u][0]){if(i)throw i;return O}i&&S&&d(i)&&(a=!0,y({data:O=V,_c:f}))}a&&!i&&(p(a)&&(O=a(O,V)),y({data:O,_c:f})),E[u][1]=I();let L=await w();if(y({_c:f}),i){if(h)throw i;return}return a?L:O}}let F=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},U=(e,t)=>{if(!o.has(e)){let r=y(k,t),n={},i=j.bind(f,e),u=c,a={},l=(e,t)=>{let r=a[e]||[];return a[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},s=(t,r,n)=>{e.set(t,r);let i=a[t];if(i)for(let e of i)e(r,n)},d=()=>{if(!o.has(e)&&(o.set(e,[n,{},{},{},i,s,l]),!V)){let t=r.initFocus(setTimeout.bind(f,F.bind(f,n,0))),i=r.initReconnect(setTimeout.bind(f,F.bind(f,n,1)));u=()=>{t&&t(),i&&i(),o.delete(e)}}};return d(),[e,i,d,u]}return[e,o.get(e)[4]]},[W,J]=U(new Map),q=y({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:(e,t,r,n,i)=>{let u=r.errorRetryCount,a=i.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;(g(u)||!(a>u))&&setTimeout(n,o,i)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:(e,t)=>O(e)==O(t),isPaused:()=>!1,cache:W,mutate:J,fallback:{}},{isOnline:()=>R,isVisible:()=>{let e=E&&document.visibilityState;return g(e)||"hidden"!==e}}),z=(e,t)=>{let r=y(e,t);if(t){let{use:n,fallback:i}=e,{use:u,fallback:a}=t;n&&u&&(r.use=n.concat(u)),i&&a&&(r.fallback=y(i,a))}return r},$=(0,u.createContext)({}),B=v&&window.__SWR_DEVTOOLS_USE__,G=B?window.__SWR_DEVTOOLS_USE__:[],Y=e=>p(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=()=>y(q,(0,u.useContext)($)),K=G.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=M(t),[,,,i]=o.get(W),u=i[n];return u?(delete i[n],u):r(...e)});return e(t,i,n)}),Q=e=>{let t=(0,u.useState)({})[1],r=(0,u.useRef)(!1),n=(0,u.useRef)(e),i=(0,u.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,u.useCallback)(e=>{let a=!1,o=n.current;for(let t in e)o[t]!==e[t]&&(o[t]=e[t],i.current[t]&&(a=!0));a&&!r.current&&(C?t({}):u.startTransition(()=>t({})))},[]);return P(()=>(r.current=!1,()=>{r.current=!0})),[n,i.current,a]},X=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};B&&(window.__SWR_DEVTOOLS_REACT__=u);let Z={dedupe:!0};d.defineProperty(e=>{let{value:t}=e,r=(0,u.useContext)($),n=p(t),i=(0,u.useMemo)(()=>n?t(r):t,[n,r,t]),a=(0,u.useMemo)(()=>n?i:z(r,i),[n,r,i]),o=i&&i.provider,l=(0,u.useRef)(f);o&&!l.current&&(l.current=U(o(a.cache||W),i));let s=l.current;return s&&(a.cache=s[0],a.mutate=s[1]),P(()=>{if(s)return s[2]&&s[2](),s[3]},[]),(0,u.createElement)($.Provider,y(e,{value:a}))},"defaultValue",{value:q});let ee=(n=(e,t,r)=>{let{cache:n,compare:i,suspense:l,fallbackData:s,revalidateOnMount:c,revalidateIfStale:d,refreshInterval:h,refreshWhenHidden:v,refreshWhenOffline:E,keepPreviousData:b}=r,[m,w,O]=o.get(n),[R,S]=M(e),T=(0,u.useRef)(!1),k=(0,u.useRef)(!1),x=(0,u.useRef)(R),D=(0,u.useRef)(t),N=(0,u.useRef)(r),F=()=>N.current,U=()=>F().isVisible()&&F().isOnline(),[W,J,q,z]=_(n,R),$=(0,u.useRef)({}).current,B=g(s)?r.fallback[R]:s,G=(e,t)=>{for(let r in $)if("data"===r){if(!i(e[r],t[r])&&(!g(e[r])||!i(ei,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},Y=(0,u.useMemo)(()=>{let e=!!R&&!!t&&(g(c)?!F().isPaused()&&!l&&(!!g(d)||d):c),r=t=>{let r=y(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=W(),i=z(),u=r(n),a=n===i?u:r(i),o=u;return[()=>{let e=r(W()),t=G(e,o);return t?(o.data=e.data,o.isLoading=e.isLoading,o.isValidating=e.isValidating,o.error=e.error,o):(o=e,e)},()=>a]},[n,R]),H=(0,a.useSyncExternalStore)((0,u.useCallback)(e=>q(R,(t,r)=>{G(r,t)||e()}),[n,R]),Y[0],Y[1]),K=!T.current,Q=m[R]&&m[R].length>0,ee=H.data,et=g(ee)?B:ee,er=H.error,en=(0,u.useRef)(et),ei=b?g(ee)?en.current:ee:et,eu=(!Q||!!g(er))&&(K&&!g(c)?c:!F().isPaused()&&(l?!g(et)&&d:g(et)||d)),ea=!!(R&&t&&K&&eu),eo=g(H.isValidating)?ea:H.isValidating,el=g(H.isLoading)?ea:H.isLoading,es=(0,u.useCallback)(async e=>{let t,n;let u=D.current;if(!R||!u||k.current||F().isPaused())return!1;let a=!0,o=e||{},l=!O[R]||!o.dedupe,s=()=>C?!k.current&&R===x.current&&T.current:R===x.current,c={isValidating:!1,isLoading:!1},d=()=>{J(c)},y=()=>{let e=O[R];e&&e[1]===n&&delete O[R]},h={isValidating:!0};g(W().data)&&(h.isLoading=!0);try{if(l&&(J(h),r.loadingTimeout&&g(W().data)&&setTimeout(()=>{a&&s()&&F().onLoadingSlow(R,r)},r.loadingTimeout),O[R]=[u(S),I()]),[t,n]=O[R],t=await t,l&&setTimeout(y,r.dedupingInterval),!O[R]||O[R][1]!==n)return l&&s()&&F().onDiscarded(R),!1;c.error=f;let e=w[R];if(!g(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return d(),l&&s()&&F().onDiscarded(R),!1;let o=W().data;c.data=i(o,t)?o:t,l&&s()&&F().onSuccess(t,R,r)}catch(r){y();let e=F(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=r,l&&s()&&(e.onError(r,R,e),(!0===t||p(t)&&t(r))&&U()&&e.onErrorRetry(r,R,e,e=>{let t=m[R];t&&t[0]&&t[0](A.ERROR_REVALIDATE_EVENT,e)},{retryCount:(o.retryCount||0)+1,dedupe:!0})))}return a=!1,d(),!0},[R,n]),ec=(0,u.useCallback)((...e)=>j(n,x.current,...e),[]);if(P(()=>{D.current=t,N.current=r,g(ee)||(en.current=ee)}),P(()=>{if(!R)return;let e=es.bind(f,Z),t=0,r=X(R,m,(r,n={})=>{if(r==A.FOCUS_EVENT){let r=Date.now();F().revalidateOnFocus&&r>t&&U()&&(t=r+F().focusThrottleInterval,e())}else if(r==A.RECONNECT_EVENT)F().revalidateOnReconnect&&U()&&e();else if(r==A.MUTATE_EVENT)return es();else if(r==A.ERROR_REVALIDATE_EVENT)return es(n)});return k.current=!1,x.current=R,T.current=!0,J({_k:S}),eu&&(g(et)||V?e():L(e)),()=>{k.current=!0,r()}},[R]),P(()=>{let e;function t(){let t=p(h)?h(W().data):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!W().error&&(v||F().isVisible())&&(E||F().isOnline())?es(Z).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[h,v,E,R]),(0,u.useDebugValue)(ei),l&&g(et)&&R){if(!C&&V)throw Error("Fallback data is required when using suspense in SSR.");throw D.current=t,N.current=r,k.current=!1,g(er)?es(Z):er}return{mutate:ec,get data(){return $.data=!0,ei},get error(){return $.error=!0,er},get isValidating(){return $.isValidating=!0,eo},get isLoading(){return $.isLoading=!0,el}}},function(...e){let t=H(),[r,i,u]=Y(e),a=z(t,u),o=n,{use:l}=a,s=(l||[]).concat(K);for(let e=s.length;e--;)o=s[e](o);return o(r,i||a.fetcher||null,a)}),et=(i=()=>(e,t,r={})=>{let{mutate:n}=H(),i=(0,u.useRef)(e),a=(0,u.useRef)(t),o=(0,u.useRef)(r),l=(0,u.useRef)(0),[s,c,d]=Q({data:f,error:f,isMutating:!1}),g=s.current,p=(0,u.useCallback)(async(e,t)=>{let[r,u]=M(i.current);if(!a.current)throw Error("Can’t trigger the mutation: missing fetcher.");if(!r)throw Error("Can’t trigger the mutation: missing key.");let s=y(y({populateCache:!1,throwOnError:!0},o.current),t),c=I();l.current=c,d({isMutating:!0});try{let t=await n(r,a.current(u,{arg:e}),y(s,{throwOnError:!0}));return l.current<=c&&(d({data:t,isMutating:!1,error:void 0}),null==s.onSuccess||s.onSuccess(t,r,s)),t}catch(e){if(l.current<=c&&(d({error:e,isMutating:!1}),null==s.onError||s.onError(e,r,s),s.throwOnError))throw e}},[]),h=(0,u.useCallback)(()=>{l.current=I(),d({data:f,error:f,isMutating:!1})},[]);return P(()=>{i.current=e,a.current=t,o.current=r}),{trigger:p,reset:h,get data(){return c.data=!0,g.data},get error(){return c.error=!0,g.error},get isMutating(){return c.isMutating=!0,g.isMutating}}},(...e)=>{let[t,r,n]=Y(e),u=(n.use||[]).concat(i);return ee(t,r,{...n,use:u})});var er=Object.defineProperty,en=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,eu=Object.prototype.propertyIsEnumerable,ea=(e,t,r)=>t in e?er(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eo=(e,t)=>{for(var r in t||(t={}))ei.call(t,r)&&ea(e,r,t[r]);if(en)for(var r of en(t))eu.call(t,r)&&ea(e,r,t[r]);return e},el=(e,t,r)=>new Promise((n,i)=>{var u=e=>{try{o(r.next(e))}catch(e){i(e)}},a=e=>{try{o(r.throw(e))}catch(e){i(e)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(u,a);o((r=r.apply(e,t)).next())}),es=((e,t=21)=>(r=t)=>{let n="",i=r;for(;i--;)n+=e[Math.random()*e.length|0];return n})("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7),ec=(e,t,r,n,i,u,a,o,l)=>el(void 0,null,function*(){var s,c;let f=i.current;r(t.messages,!1);let d=yield fetch(e,eo({method:"POST",body:JSON.stringify(eo(eo(eo(eo({messages:l?t.messages:t.messages.map(({role:e,content:t,name:r,function_call:n})=>eo(eo({role:e,content:t},void 0!==r&&{name:r}),void 0!==n&&{function_call:n}))},n.current.body),null==(s=t.options)?void 0:s.body),void 0!==t.functions&&{functions:t.functions}),void 0!==t.function_call&&{function_call:t.function_call})),credentials:n.current.credentials,headers:eo(eo({},n.current.headers),null==(c=t.options)?void 0:c.headers)},null!==u.current&&{signal:u.current.signal})).catch(e=>{throw r(f,!1),e});if(o)try{yield o(d)}catch(e){throw e}if(!d.ok)throw r(f,!1),Error((yield d.text())||"Failed to fetch the chat response.");if(!d.body)throw Error("The response body is empty.");let g="",p=new Date,y=es(),h=d.body.getReader(),v=function(){let e=new TextDecoder;return function(t){return t?e.decode(t,{stream:!0}):""}}(),E={id:y,createdAt:p,content:"",role:"assistant"};for(;;){let{done:e,value:n}=yield h.read();if(e)break;if((g+=v(n)).startsWith('{"function_call":')?E.function_call=g:E.content=g,r([...t.messages,eo({},E)],!1),null===u.current){h.cancel();break}}if(g.startsWith('{"function_call":')){let e=JSON.parse(g).function_call;E.function_call=e,r([...t.messages,eo({},E)])}return a&&a(E),E});function ef({api:e="/api/chat",id:t,initialMessages:r=[],initialInput:n="",sendExtraMessageFields:i,experimental_onFunctionCall:a,onResponse:o,onFinish:l,onError:s,credentials:c,headers:f,body:d}={}){let g=(0,u.useId)(),p=t||g,{data:y,mutate:h}=ee([e,p],null,{fallbackData:r}),v=(0,u.useRef)(y);(0,u.useEffect)(()=>{v.current=y},[y]);let E=(0,u.useRef)(null),b=(0,u.useRef)({credentials:c,headers:f,body:d});(0,u.useEffect)(()=>{b.current={credentials:c,headers:f,body:d}},[c,f,d]);let{error:_,trigger:m,isMutating:w}=et([e,p],(t,r)=>el(this,[t,r],function*(t,{arg:r}){try{let t=new AbortController;E.current=t;let n=r;for(;;){let t=yield ec(e,n,h,b,v,E,l,o,i);if(void 0===t.function_call||"string"==typeof t.function_call)break;if(a){let e=t.function_call,r=yield a(v.current,e);if(void 0===r)break;n=r}}return E.current=null,null}catch(e){if("AbortError"===e.name)return E.current=null,null;throw s&&e instanceof Error&&s(e),e}}),{populateCache:!1,revalidate:!1}),O=(0,u.useCallback)((e,...t)=>el(this,[e,...t],function*(e,{options:t,functions:r,function_call:n}={}){e.id||(e.id=es());let i=eo(eo({messages:v.current.concat(e),options:t},void 0!==r&&{functions:r}),void 0!==n&&{function_call:n});return m(i)}),[m]),R=(0,u.useCallback)((...e)=>el(this,[...e],function*({options:e,functions:t,function_call:r}={}){if(0===v.current.length)return null;let n=v.current[v.current.length-1];if("assistant"===n.role){let n=eo(eo({messages:v.current.slice(0,-1),options:e},void 0!==t&&{functions:t}),void 0!==r&&{function_call:r});return m(n)}let i=eo(eo({messages:v.current,options:e},void 0!==t&&{functions:t}),void 0!==r&&{function_call:r});return m(i)}),[m]),S=(0,u.useCallback)(()=>{E.current&&(E.current.abort(),E.current=null)},[]),T=(0,u.useCallback)(e=>{h(e,!1),v.current=e},[h]),[k,C]=(0,u.useState)(n),V=(0,u.useCallback)((e,{options:t,functions:r,function_call:n}={},i)=>{i&&(b.current=eo(eo({},b.current),i)),e.preventDefault(),k&&(O({content:k,role:"user",createdAt:new Date},{options:t,functions:r,function_call:n}),C(""))},[k,O]);return{messages:y,error:_,append:O,reload:R,stop:S,setMessages:T,input:k,setInput:C,handleInputChange:e=>{C(e.target.value)},handleSubmit:V,isLoading:w}}}}]);