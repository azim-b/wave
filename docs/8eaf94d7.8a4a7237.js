(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(302)),i=n(304),l={title:"Plot / Interval / Labels",keywords:["interval","plot"]},c={unversionedId:"examples/plot-interval-labels",id:"examples/plot-interval-labels",isDocsHomePage:!1,title:"Plot / Interval / Labels",description:"Make a column plot with labels on each bar.",source:"@site/docs/examples/plot-interval-labels.md",slug:"/examples/plot-interval-labels",permalink:"/wave/docs/examples/plot-interval-labels",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-interval-labels.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Interval / Groups / Transpose",permalink:"/wave/docs/examples/plot-interval-groups-transpose"},next:{title:"Plot / Interval / Range",permalink:"/wave/docs/examples/plot-interval-range"}},s=[],u={rightToc:s};function p(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a column plot with labels on each bar."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(414).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 20\nf = FakeCategoricalSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Label Customization',\n    data=data('product price', n),\n    plot=ui.plot([\n        ui.mark(type='interval', x='=product',\n                y='=${{intl price minimum_fraction_digits=2 maximum_fraction_digits=2}}', y_min=0,\n                color='#333333',\n                label='=${{intl price minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n                label_offset=0, label_position='middle', label_rotation='-90', label_fill_color='#fff',\n                label_font_weight='bold')])\n))\nv.data = [(c, x) for c, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#interval")},"interval")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")))}p.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(303),a=n(305);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},305:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},414:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-interval-labels-bc80dada33a6a5f1a61854ef21caf76e.png"}}]);