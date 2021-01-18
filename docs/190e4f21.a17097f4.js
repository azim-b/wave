(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{302:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,d=l["".concat(i,".").concat(m)]||l[m]||f[m]||a;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(303),o=n(305);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},305:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},334:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-point-custom-2a5eefc8951352109b57a03aa44baeb8.png"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(302)),i=n(304),c={title:"Plot / Point / Custom",keywords:["plot"]},u={unversionedId:"examples/plot-point-custom",id:"examples/plot-point-custom",isDocsHomePage:!1,title:"Plot / Point / Custom",description:"Customize a plot's fill/stroke color, size and opacity.",source:"@site/docs/examples/plot-point-custom.md",slug:"/examples/plot-point-custom",permalink:"/wave/docs/examples/plot-point-custom",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-point-custom.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Point / Annotation",permalink:"/wave/docs/examples/plot-point-annotation"},next:{title:"Plot / Interval",permalink:"/wave/docs/examples/plot-interval"}},s=[],p={rightToc:s};function l(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Customize a plot's fill/stroke color, size and opacity."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+n(334).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import random\n\nfrom synth import FakeScatter\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 40\nf = FakeScatter()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Point, custom',\n    data=data('price performance discount', n),\n    plot=ui.plot([ui.mark(type='point', x='=price', y='=performance', size='=discount', size_range='4 30',\n                          fill_color='#eb4559', stroke_color='#eb4559', stroke_size=1, fill_opacity=0.3,\n                          stroke_opacity=1)])\n))\nv.data = [(x, y, random.randint(1, 10)) for x, y in [f.next() for _ in range(n)]]\n\npage.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")))}l.isMDXComponent=!0}}]);