"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[6128],{6128:function(e,n,t){t.r(n);var a=t(4041),o=t(7154),l=t(2380),s=t(7105),i=t(642),c=t(6448);n.default=e=>{const{slides:n,options:t}=e,[r,d]=(0,o.A)(t,[(0,l.A)()]),{selectedIndex:p,scrollSnaps:g,onDotButtonClick:u}=(0,i.R)(d),{prevBtnDisabled:f,nextBtnDisabled:m,onPrevButtonClick:b,onNextButtonClick:E}=(0,s.Hd)(d);return a.createElement("div",{className:"embla"},a.createElement("div",{className:"embla__viewport",ref:r},a.createElement("div",{className:"embla__container"},n.map((e=>a.createElement("div",{className:"embla__slide",key:e},a.createElement("img",{className:"embla__slide__img",src:(0,c.u)(e),alt:"Your alt text"})))))),a.createElement("div",{className:"embla__controls"},a.createElement("div",{className:"embla__buttons"},a.createElement(s.U1,{onClick:b,disabled:f}),a.createElement(s.WE,{onClick:E,disabled:m})),a.createElement("div",{className:"embla__dots"},g.map(((e,n)=>a.createElement(i.c,{key:n,onClick:()=>u(n),className:"embla__dot".concat(n===p?" embla__dot--selected":"")}))))))}},642:function(e,n,t){t.d(n,{R:function(){return o},c:function(){return l}});var a=t(4041);const o=(e,n)=>{const{0:t,1:o}=(0,a.useState)(0),{0:l,1:s}=(0,a.useState)([]),i=(0,a.useCallback)((t=>{e&&(e.scrollTo(t),n&&n(e))}),[e,n]),c=(0,a.useCallback)((e=>{s(e.scrollSnapList())}),[]),r=(0,a.useCallback)((e=>{o(e.selectedScrollSnap())}),[]);return(0,a.useEffect)((()=>{e&&(c(e),r(e),e.on("reInit",c).on("reInit",r).on("select",r))}),[e,c,r]),{selectedIndex:t,scrollSnaps:l,onDotButtonClick:i}},l=e=>{const{children:n,...t}=e;return a.createElement("button",Object.assign({type:"button"},t),n)}},6448:function(e,n,t){t.d(n,{u:function(){return o}});const a=[t.p+"static/slide-1-47ed6052f4455272d8f76db16447d760.jpg",t.p+"static/slide-2-dc15cfe63eb4aeb8c9c09823179ee64c.jpg",t.p+"static/slide-3-6362505742d23d7cd240880140151a95.jpg",t.p+"static/slide-4-ebad84cfea5ff9481504ded363c22003.jpg",t.p+"static/slide-5-2d88e98502aa565d6269834d7a7be406.jpg"],o=e=>a[e%a.length]},2380:function(e,n,t){t.d(n,{A:function(){return c}});var a=t(107);const o={active:!0,breakpoints:{},snapped:"is-snapped",inView:"is-in-view",draggable:"is-draggable",dragging:"is-dragging",loop:"is-loop"};function l(e){return(Array.isArray(e)?e:[e]).filter(Boolean)}function s(e,n){var t;e&&n.length&&(t=e.classList).remove.apply(t,(0,a.A)(n))}function i(e,n){var t;e&&n.length&&(t=e.classList).add.apply(t,(0,a.A)(n))}function c(e){let n,t,a,r;void 0===e&&(e={});let d=[],p=[];const g=["select"],u=["pointerDown","pointerUp"],f=["slidesInView"],m={snapped:[],inView:[],draggable:[],dragging:[],loop:[]};function b(e,n){("pointerDown"===n?i:s)(a,m.dragging)}function E(e,n,t){void 0===e&&(e=[]),void 0===n&&(n=[]);const a=n.map((e=>r[e])),o=e.map((e=>r[e]));return a.forEach((e=>s(e,t))),o.forEach((e=>i(e,t))),e}function _(){const{slideRegistry:e}=t.internalEngine(),n=e[t.selectedScrollSnap()];d=E(n,d,m.snapped)}function v(){const e=t.slidesInView();p=E(e,p,m.inView)}return{name:"classNames",options:e,init:function(s,d){t=s;const{mergeOptions:p,optionsAtMedia:E}=d,k=p(o,c.globalOptions),h=p(k,e);n=E(h),a=t.rootNode(),r=t.slideNodes();const{watchDrag:w,loop:N}=t.internalEngine().options,C=!!w;n.loop&&N&&(m.loop=l(n.loop),i(a,m.loop)),n.draggable&&C&&(m.draggable=l(n.draggable),i(a,m.draggable)),n.dragging&&(m.dragging=l(n.dragging),u.forEach((e=>t.on(e,b)))),n.snapped&&(m.snapped=l(n.snapped),g.forEach((e=>t.on(e,_))),_()),n.inView&&(m.inView=l(n.inView),f.forEach((e=>t.on(e,v))),v())},destroy:function(){u.forEach((e=>t.off(e,b))),g.forEach((e=>t.off(e,_))),f.forEach((e=>t.off(e,v))),s(a,m.loop),s(a,m.draggable),s(a,m.dragging),E([],d,m.snapped),E([],p,m.inView)}}}c.globalOptions=void 0}}]);
//# sourceMappingURL=6128-c5fc044a884df4651b47.js.map