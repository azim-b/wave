(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(302)),i=r(304),c={title:"Plot / Form",keywords:["form","plot"]},u={unversionedId:"examples/plot-form",id:"examples/plot-form",isDocsHomePage:!1,title:"Plot / Form",description:"Display a plot inside a form.",source:"@site/docs/examples/plot-form.md",slug:"/examples/plot-form",permalink:"/wave/docs/examples/plot-form",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-form.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Axis Titles",permalink:"/wave/docs/examples/plot-axis-title"},next:{title:"Plot / App",permalink:"/wave/docs/examples/plot-app"}},p=[],l={rightToc:p};function s(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Display a plot inside a form."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(374).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 20\nf = FakeCategoricalSeries()\nv = page.add('example', ui.form_card(\n    box='1 1 4 5',\n    items=[\n        ui.text_xl('Example 1'),\n        ui.visualization(\n            plot=ui.plot([ui.mark(type='interval', x='=product', y='=price', y_min=0)]),\n            data=data(fields='product price', rows=[(c, x) for c, x, _ in [f.next() for _ in range(n)]], pack=True),\n        ),\n        ui.text_xl('Example 2'),\n        ui.visualization(\n            plot=ui.plot([ui.mark(type='interval', x='=product', y='=price', y_min=0)]),\n            data=data(fields='product price', rows=[(c, x) for c, x, _ in [f.next() for _ in range(n)]], pack=True),\n        ),\n    ],\n))\n\npage.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#form")},"form")," \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")))}s.isMDXComponent=!0},302:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?o.a.createElement(d,c(c({ref:t},p),{},{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},303:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(303),o=r(305);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,p=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+l:l}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},305:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},374:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-form-7b7c198bf0e0f55d1d9389b4f4dcff1a.png"}}]);