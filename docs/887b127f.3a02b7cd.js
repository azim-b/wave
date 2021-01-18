(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{183:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return f}));var r=t(2),a=t(6),o=(t(0),t(302)),i=t(304),s={title:"Table / Filter / Backend",keywords:["table"]},c={unversionedId:"examples/table-filter-backend",id:"examples/table-filter-backend",isDocsHomePage:!1,title:"Table / Filter / Backend",description:"Filter table using Python.",source:"@site/docs/examples/table-filter-backend.md",slug:"/examples/table-filter-backend",permalink:"/wave/docs/examples/table-filter-backend",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/table-filter-backend.md",version:"current",sidebar:"someSidebar",previous:{title:"Table / Filter",permalink:"/wave/docs/examples/table-filter"},next:{title:"Table / Download",permalink:"/wave/docs/examples/table-download"}},l=[],u={rightToc:l};function f(e){var n=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,s,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Filter table using Python."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+t(408).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import pandas as pd\nfrom faker import Faker\nfrom h2o_wave import main, app, Q, ui\n\nfake = Faker()\n\nN = 50  # number of rows\n\n# Make a synthetic data frame\naddresses = pd.DataFrame(dict(\n    ID=[i + 1 for i in range(N)],\n    Name=[fake.name() for _ in range(N)],\n    Language=[fake.language_name() for _ in range(N)],\n    Job=[fake.job() for _ in range(N)],\n    Address=[fake.address() for _ in range(N)],\n    City=[fake.city() for _ in range(N)],\n))\n\ncolumn_names = ['ID', 'Name', 'Language', 'Job', 'Address', 'City']\n\n\ndef df_to_rows(df: pd.DataFrame):\n    return [ui.table_row(row['ID'], [row[name] for name in column_names]) for i, row in df.iterrows()]\n\n\ndef search_df(df: pd.DataFrame, term: str):\n    str_cols = df.select_dtypes(include=[object])\n    return df[str_cols.apply(lambda column: column.str.contains(term, case=False, na=False)).any(axis=1)]\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if not q.client.initialized:\n        q.page['form'] = ui.form_card(box='1 1 -1 11', items=[\n            ui.textbox(name='search', label='Search', placeholder='Enter a keyword...', trigger=True),\n            ui.table(\n                name='issues',\n                columns=[ui.table_column(name=name, label=name) for name in column_names],\n                rows=df_to_rows(addresses)\n            )\n        ])\n        q.client.initialized = True\n    else:\n        items = q.page['form'].items\n        search_box = items[0].textbox\n        table = items[1].table\n        term: str = q.args.search\n        term = term.strip() if term else ''\n        search_box.value = term\n        table.rows = df_to_rows(search_df(addresses, term) if len(term) else addresses)\n\n    await q.page.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#table")},"table")))}f.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=r,p=f["".concat(i,".").concat(m)]||f[m]||d[m]||o;return t?a.a.createElement(p,s(s({ref:n},l),{},{components:t})):a.a.createElement(p,s({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},303:function(e,n,t){"use strict";var r=t(0),a=t(19);n.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var r=t(303),a=t(305);function o(){var e=Object(r.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(s)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+u:u}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},305:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},408:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/table-filter-backend-e69a57efeee01d99d32a542a71466995.png"}}]);