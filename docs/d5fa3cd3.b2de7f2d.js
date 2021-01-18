(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(302)),i=n(304),c={title:"Meta / Dialog",keywords:["dialog","meta"]},u={unversionedId:"examples/meta-dialog",id:"examples/meta-dialog",isDocsHomePage:!1,title:"Meta / Dialog",description:"Display a dialog.",source:"@site/docs/examples/meta-dialog.md",slug:"/examples/meta-dialog",permalink:"/wave/docs/examples/meta-dialog",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/meta-dialog.md",version:"current",sidebar:"someSidebar",previous:{title:"Uploads / Download",permalink:"/wave/docs/examples/upload-download"},next:{title:"Meta / Title",permalink:"/wave/docs/examples/meta-title"}},l=[],s={rightToc:l};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Display a dialog."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(488).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if not q.client.initialized:\n        q.page['meta'] = ui.meta_card(box='')\n        q.page['example'] = ui.form_card(box='1 1 -1 -1', items=[\n            ui.button(name='show_dialog', label='Order donuts', primary=True)\n        ])\n        q.client.initialized = True\n    else:\n        if q.args.show_dialog:\n            q.page['meta'].dialog = ui.dialog(title='Order Donuts', items=[\n                ui.text('Donuts cost $1.99. Proceed?'),\n                ui.buttons([ui.button(name='next_step', label='Next', primary=True)])\n            ])\n        elif q.args.next_step:\n            q.page['meta'].dialog.items = [\n                ui.text('You will be charged $1.99. Proceed?'),\n                ui.buttons([\n                    ui.button(name='cancel', label='Back to safety'),\n                    ui.button(name='submit', label='Place order', primary=True),\n                ])\n            ]\n        elif q.args.submit:\n            q.page['example'].items = [ui.message_bar('success', 'Order placed!')]\n            q.page['meta'].dialog = None\n\n        elif q.args.cancel:\n            q.page['example'].items = [ui.message_bar('info', 'Order canceled!')]\n            q.page['meta'].dialog = None\n\n    await q.page.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#dialog")},"dialog")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#meta")},"meta")))}p.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(303),a=n(305);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},305:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},488:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/meta-dialog-6d47f9aa9e410849fcf4afb27c22cb27.png"}}]);