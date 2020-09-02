!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}let l;function d(t){l=t}const $=[],h=Promise.resolve();let p=!1;const m=[],g=[],y=[];function b(t){g.push(t)}function v(){const t=new Set;do{for(;$.length;){const t=$.shift();d(t),w(t.$$)}for(;m.length;)m.shift()();for(;g.length;){const n=g.pop();t.has(n)||(n(),t.add(n))}}while($.length);for(;y.length;)y.pop()();p=!1}function w(t){t.fragment&&(t.update(t.dirty),o(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(b))}function x(t,e,c){const{fragment:s,on_mount:i,on_destroy:u,after_render:a}=t.$$;s.m(e,c),b(()=>{const e=i.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(b)}function _(t,n){t.$$.dirty||($.push(t),p||(p=!0,h.then(v)),t.$$.dirty=e()),t.$$.dirty[n]=!0}function k(n,r,c,s,i,u){const a=l;d(n);const f=r.props||{},$=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:null};let h=!1;var p;$.ctx=c?c(n,f,(t,e)=>{$.ctx&&i($.ctx[t],$.ctx[t]=e)&&($.bound[t]&&$.bound[t](e),h&&_(n,t))}):f,$.update(),h=!0,o($.before_render),$.fragment=s($.ctx),r.target&&(r.hydrate?$.fragment.l((p=r.target,Array.from(p.childNodes))):$.fragment.c(),r.intro&&n.$$.fragment.i&&n.$$.fragment.i(),x(n,r.target,r.anchor),v()),d(a)}class E{$destroy(){var n,e;e=!0,(n=this).$$&&(o(n.$$.on_destroy),n.$$.fragment.d(e),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={}),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function N(){}const j=function(t,n=N){let e;const o=[];function r(n){if(c=n,(r=t)!=r?c==c:r!==c||r&&"object"==typeof r||"function"==typeof r){if(t=n,!e)return;o.forEach(t=>t[1]()),o.forEach(n=>n[0](t))}var r,c}return{set:r,update:function(n){r(n(t))},subscribe:function(c,s=N){const i=[c,s];return o.push(i),1===o.length&&(e=n(r)||N),c(t),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&e()}}}}(0);function C(n){var e,o,r,c,l;return{c(){var t,s,i,u;e=a("div"),o=a("button"),r=f("Count is now "),c=f(n.$count),o.className="button svelte-o5s95t",e.className="flex items-center justify-center h-screen bg-gray-200",t=o,s="click",i=n.click_handler,t.addEventListener(s,i,u),l=(()=>t.removeEventListener(s,i,u))},m(t,n){i(t,e,n),s(e,o),s(o,r),s(o,c)},p(t,n){var e,o;t.$count&&(e=c,o=""+(o=n.$count),e.data!==o&&(e.data=o))},i:t,o:t,d(t){t&&u(e),l()}}}function O(t,n,e){let o;function r(){j.set(o+1)}return function(t,n,e){const o=n.subscribe(e);t.$$.on_destroy.push(o.unsubscribe?()=>o.unsubscribe():o)}(t,j,t=>{e("$count",o=t)}),{incrementCount:r,$count:o,click_handler:function(){return r()}}}class L extends E{constructor(t){super(),k(this,t,O,C,c,[])}}function P(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function W(t){return window.onload=function(){if(window.location.search.length>0){window.location.search.substr(1).split("&").forEach(t=>{const n=t.split("=")[0],e=parseFloat(t.split("=")[1]);console.log(`Parameter of ${n} is ${e}`)})}},window.onpopstate=function(t){t.state},{}}class q extends E{constructor(t){super(),k(this,t,W,P,c,[])}}function A(n){var e,o,r,c=new q({}),l=new L({});return{c(){e=a("main"),c.$$.fragment.c(),o=f(" "),l.$$.fragment.c(),e.className="overflow-hidden"},m(t,n){i(t,e,n),x(c,e,null),s(e,o),x(l,e,null),r=!0},p:t,i(t){r||(c.$$.fragment.i(t),l.$$.fragment.i(t),r=!0)},o(t){c.$$.fragment.o(t),l.$$.fragment.o(t),r=!1},d(t){t&&u(e),c.$destroy(),l.$destroy()}}}function B(t){return"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js"),{}}new class extends E{constructor(t){super(),k(this,t,B,A,c,[])}}({target:document.body})}();
//# sourceMappingURL=main.js.map
