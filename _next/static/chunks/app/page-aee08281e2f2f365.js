(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4430:function(e,t,r){Promise.resolve().then(r.bind(r,5003))},981:function(e,t){"use strict";function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5003:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var o=r(7437),l=r(2265),s=r(4033),a=r(981),n=r.n(a);function i(){let e=(0,s.useRouter)(),[t,r]=(0,l.useState)([]),[a,i]=(0,l.useState)([]),[c,u]=(0,l.useState)([]),[d,f]=(0,l.useState)(""),[p,m]=(0,l.useState)(""),h=async()=>{try{let e=await fetch("https://api.themoviedb.org/3/search/movie?query=".concat(g,"&api_key=87816556a329f30685772bb450222859&language=en-US")),t=await e.json(),o=t.results.map(e=>e.title),l=t.results.map(e=>e.id),s=t.results.map(e=>"https://image.tmdb.org/t/p/w500".concat(e.poster_path)),a=t.results.map(e=>e.original_language),n=t.results.map(e=>e.release_date);r(o),i(l),u(s),f(a[0]),m(n[0].slice(0,4))}catch(e){console.log(e)}},[b,x]=(0,l.useState)(!1),[g,y]=(0,l.useState)(""),w=r=>{let o=a.indexOf(r),l=t[o];console.log('Button for movie "'.concat(l,'" clicked with ID ').concat(r)),e.push("/dashboard?id=".concat(r))};return(0,l.useEffect)(()=>{h()},[g]),(0,o.jsxs)("div",{className:"h-screen w-screen flex",children:[(0,o.jsx)(n(),{children:(0,o.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7106001278051966",crossOrigin:"anonymous"})}),(0,o.jsxs)("div",{className:"flex flex-col w-[90vw] md:w-[40vw] m-auto mt-28 align-middle justify-center mt-30 relative",children:[(0,o.jsxs)("div",{className:"overflow-hidden m-4",children:[(0,o.jsx)("img",{src:"../app/logo.png",alt:"Cinebrief",className:"m-auto"}),(0,o.jsx)("p",{className:"text-center mt-1 text-xl italic  font-serif",children:"- Movies in a Minute -"})]}),(0,o.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,o.jsx)("input",{className:"bg-primary text-white border border-white border-opacity-25 mr-3 p-1 rounded-full w-full pl-3",onFocus:()=>{x(!0)},onBlur:()=>{x(!1)},onChange:e=>{y(e.target.value),console.log(g)},placeholder:"Enter title here..."}),b&&(0,o.jsx)("div",{onMouseDown:e=>e.preventDefault(),className:"absolute border z-20 border-white border-opacity-25  rounded-md h-60 mt-4 bg-primary overflow-scroll flex flex-col  pt-2 pb-2 overflow-x-hidden scrollbar-thin scrollbar-track-primary scrollbar-thumb-gray-500 md:left-auto left-0 w-[90vw] md:w-[40vw] text-white",children:t.map((e,t)=>(0,o.jsxs)("button",{onClick:()=>w(a[t]),className:"flex flex-row z-20 border border-white border-opacity-25 rounded-md max-w-full m-1 p-2 ml-3 mr-3 bg-gray-800 hover:bg-primary transition-all",children:[(0,o.jsx)("img",{src:c[t],alt:"no image",width:50,height:75}),(0,o.jsxs)("div",{className:"flex flex-col m-auto text-white",children:[(0,o.jsx)("h1",{children:e}),(0,o.jsxs)("p",{children:[p," ",d]})]})]},a[t]))})]})]})]})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(2265),l=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var o,i={},c=null,u=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,o)&&!n.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:l,type:e,key:c,ref:u,props:i,_owner:a.current}}t.jsx=i,t.jsxs=i},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(8165)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=4430)}),_N_E=e.O()}]);