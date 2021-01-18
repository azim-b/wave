(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(302)),i=n(304),l={title:"Uploads / Download",keywords:["download","upload"]},s={unversionedId:"examples/upload-download",id:"examples/upload-download",isDocsHomePage:!1,title:"Uploads / Download",description:"Accept files from the user and downloads them locally.",source:"@site/docs/examples/upload-download.md",slug:"/examples/upload-download",permalink:"/wave/docs/examples/upload-download",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/upload-download.md",version:"current",sidebar:"someSidebar",previous:{title:"Uploads / UI",permalink:"/wave/docs/examples/upload-ui"},next:{title:"Meta / Dialog",permalink:"/wave/docs/examples/meta-dialog"}},c=[],u={rightToc:c};function p(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Accept files from the user and downloads them locally."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(487).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import os\nimport os.path\nfrom h2o_wave import main, app, Q, ui\n\n\n@app('/demo')\nasync def serve(q: Q):\n    links = q.args.user_files\n    if links:\n        items = [ui.text_xl('Files uploaded!')]\n        for link in links:\n            local_path = await q.site.download(link, '.')\n            #\n            # The file is now available locally; process the file.\n            # To keep this example simple, we just read the file size.\n            #\n            size = os.path.getsize(local_path)\n\n            items.append(ui.link(label=f'{os.path.basename(link)} ({size} bytes)', download=True, path=link))\n            # Clean up\n            os.remove(local_path)\n\n        items.append(ui.button(name='back', label='Back', primary=True))\n        q.page['example'].items = items\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.text_xl('Upload some files'),\n            ui.file_upload(name='user_files', label='Upload', multiple=True),\n        ])\n    await q.page.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#download")},"download")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#upload")},"upload")))}p.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(303),a=n(305);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,s=o.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},305:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},487:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/upload-download-ce3af4e53ce2d7a546aa933667f7758a.png"}}]);