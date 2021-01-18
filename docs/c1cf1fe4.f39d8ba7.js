(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{241:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(302)),i=r(304),c={title:"Plot / Interval / Groups",keywords:["interval","plot"]},u={unversionedId:"examples/plot-interval-groups",id:"examples/plot-interval-groups",isDocsHomePage:!1,title:"Plot / Interval / Groups",description:"Make a grouped column plot.",source:"@site/docs/examples/plot-interval-groups.md",slug:"/examples/plot-interval-groups",permalink:"/wave/docs/examples/plot-interval-groups",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-interval-groups.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Interval / Transpose",permalink:"/wave/docs/examples/plot-interval-transpose"},next:{title:"Plot / Interval / Groups / Transpose",permalink:"/wave/docs/examples/plot-interval-groups-transpose"}},l=[],p={rightToc:l};function s(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Make a grouped column plot."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(470).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeMultiCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 10\nk = 3\nf = FakeMultiCategoricalSeries(groups=k)\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Intervals, groups',\n    data=data('country product price', n * k),\n    plot=ui.plot([ui.mark(type='interval', x='=product', y='=price', color='=country', dodge='auto', y_min=0)])\n))\n\nv.data = [(g, t, x) for x in [f.next() for _ in range(n)] for g, t, x, dx in x]\n\npage.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#interval")},"interval")," \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")))}s.isMDXComponent=!0},302:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,b=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},303:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(303),o=r(305);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+p:p}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},305:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},470:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-interval-groups-b096660ab331215122bb6771cda619ac.png"}}]);