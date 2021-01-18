(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(302)),o=r(304),c={title:"Stat / Series / Wide / Area",keywords:["series","stat_card"]},s={unversionedId:"examples/stat-wide-series-area",id:"examples/stat-wide-series-area",isDocsHomePage:!1,title:"Stat / Series / Wide / Area",description:"Create a wide stat card displaying a primary value, an auxiliary value and a series plot.",source:"@site/docs/examples/stat-wide-series-area.md",slug:"/examples/stat-wide-series-area",permalink:"/wave/docs/examples/stat-wide-series-area",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/stat-wide-series-area.md",version:"current",sidebar:"someSidebar",previous:{title:"Stat / Series / Small / Interval",permalink:"/wave/docs/examples/stat-small-series-interval"},next:{title:"Stat / Series / Wide / Interval",permalink:"/wave/docs/examples/stat-wide-series-interval"}},u=[],l={rightToc:u};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Create a wide stat card displaying a primary value, an auxiliary value and a series plot."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+r(398).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import time\n\nfrom faker import Faker\n\nfrom synth import FakeCategoricalSeries\nfrom h2o_wave import site, ui, data\n\npage = site['/demo']\n\ncolors = '$red $pink $blue $azure $cyan $teal $mint $green $lime $yellow $amber $orange $tangerine'.split()\ncurves = 'linear smooth step step-after step-before'.split()\nfake = Faker()\ncards = []\nfor i in range(len(curves)):\n    f = FakeCategoricalSeries()\n    cat, val, pc = f.next()\n    c = page.add(f'example{i}', ui.wide_series_stat_card(\n        box=f'1 {i + 1} 2 1',\n        title=fake.cryptocurrency_name(),\n        value='=${{intl qux minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n        aux_value='={{intl quux style=\"percent\" minimum_fraction_digits=1 maximum_fraction_digits=1}}',\n        data=dict(qux=val, quux=pc / 100),\n        plot_category='foo',\n        plot_type='area',\n        plot_value='qux',\n        plot_color=colors[i],\n        plot_data=data('foo qux', -15),\n        plot_zero_value=0,\n        plot_curve=curves[i],\n    ))\n    cards.append((f, c))\npage.save()\n\nwhile True:\n    time.sleep(1)\n    for f, c in cards:\n        cat, val, pc = f.next()\n        c.data.qux = val\n        c.data.quux = pc / 100\n        c.plot_data[-1] = [cat, val]\n    page.save()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(i.b)("a",{href:Object(o.a)("docs/examples/tags#series")},"series")," \u2002",Object(i.b)("a",{href:Object(o.a)("docs/examples/tags#stat_card")},"stat_card")))}p.isMDXComponent=!0},302:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||f[d]||i;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},303:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(303),a=r(305);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},305:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},398:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);