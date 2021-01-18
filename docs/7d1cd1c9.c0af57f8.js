(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{174:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),c=(r(0),r(302)),i=r(304),o={title:"Form / Checklist",keywords:["checklist","form"]},s={unversionedId:"examples/checklist",id:"examples/checklist",isDocsHomePage:!1,title:"Form / Checklist",description:"Use a checklist to group a set of related checkboxes.",source:"@site/docs/examples/checklist.md",slug:"/examples/checklist",permalink:"/wave/docs/examples/checklist",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/checklist.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Checkbox",permalink:"/wave/docs/examples/checkbox"},next:{title:"Form / Picker",permalink:"/wave/docs/examples/picker"}},u=[],p={rightToc:u};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use a checklist to group a set of related checkboxes."),Object(c.b)("div",{className:"cover",style:{backgroundImage:"url("+r(401).default+")"}}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'selected={q.args.checklist}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.checklist(name='checklist', label='Choices',\n                         choices=[ui.choice(name=x, label=x) for x in ['Egg', 'Bacon', 'Spam']]),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(c.b)("a",{href:Object(i.a)("docs/examples/tags#checklist")},"checklist")," \u2002",Object(c.b)("a",{href:Object(i.a)("docs/examples/tags#form")},"form")))}l.isMDXComponent=!0},302:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,d=l["".concat(i,".").concat(m)]||l[m]||f[m]||c;return r?a.a.createElement(d,o(o({ref:t},u),{},{components:r})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},303:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i}));var n=r(303),a=r(305);function c(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,o=void 0!==i&&i,s=c.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(o)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+p:p}(c,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},305:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},401:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);