(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(302)),i=n(304),u={title:"Form / Template",keywords:["form","html","template"]},s={unversionedId:"examples/form-template",id:"examples/form-template",isDocsHomePage:!1,title:"Form / Template",description:"Use a template component to render dynamic content using a HTML template.",source:"@site/docs/examples/form-template.md",slug:"/examples/form-template",permalink:"/wave/docs/examples/form-template",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/form-template.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Menu",permalink:"/wave/docs/examples/form-menu"},next:{title:"Form / Markup",permalink:"/wave/docs/examples/form-markup"}},c=[],l={rightToc:c};function p(e){var t=e.components,u=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,u,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use a template component to render dynamic content using a HTML template."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(430).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, pack, ui\n\npage = site['/demo']\npage.drop()\n\nmenu = '''\n<ol>\n{{#each dishes}}\n<li><strong>{{name}}</strong> costs {{price}}</li>\n{{/each}}\n</ol\n'''\n\nc = page.add('template_example', ui.form_card(\n    box='1 1 2 2',\n    items=[\n        ui.template(\n            content=menu,\n            data=pack(dict(dishes=[\n                dict(name='Spam', price='$2.00'),\n                dict(name='Ham', price='$3.45'),\n                dict(name='Eggs', price='$1.75'),\n            ]))\n        )\n    ]))\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#form")},"form")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#html")},"html")," \u2002",Object(o.b)("a",{href:Object(i.a)("docs/examples/tags#template")},"template")))}p.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(f,u(u({ref:t},c),{},{components:n})):a.a.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},304:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(303),a=n(305);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,u=void 0!==i&&i,s=o.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},305:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},430:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAABVCAYAAAAR3pWYAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAtdEVYdENyZWF0aW9uIFRpbWUATW9uIDI4IFNlcCAyMDIwIDAxOjE2OjI0IFBNIFBEVOXz3wAAACAASURBVHic7Z15XE3pH8ffFZWKUDJTkq3G2FuQpRJhGDszyDKya1dm7GshlWW0h2RnxhJZhsZShsaS8RuyZCxpkyKl4rbd3x/lTLdNKrN136/XfdFzvs9zzrn3c899znO+n+eREYvFYqRIqQXI/t0HIEXKX4VU7FJqDVKxS6k1SMUupdYgFbuUWoNU7FJqDVKxS6k1SMUupdYgFbuUWoNU7FIkyMrK4uDBg3/3YXwUpGKXIkFmZiaHDv74dx/GR6HGxS4SiVjv6YmRoQEbN2744Pq///47zk5z6dfXHOPu3Rg2dAjrPT1JT0+v6UOVUoy0tDTc3NYyeNAXxMTEMHTIl2z+/nuys7Ik4nJzc/H18WHwoEH0MDZm4gRLLl6MeG/7+fn5+Pv7MXjQIEx692LWrJncvXu3ynFVoUbFHh0djeX4cUREhFO/fv0Prn/+/DmmTbXiwoULvHr1itzcXBISEti7dw/fTJ5EhlTwEuzdu4f+/S2q3c6bN2+YNtWKS7/8wqTJkwEY89VXHDt2FBsbawoKCoRYV1cX9u/fx7Tp01jr5kbrNm1wmjuXK7/+WuE+1qx25cD+/VhZWeG6eg2KiorMmjmDx48fVymuSohrkKlWVuLVrq7i7Oxs8bChQ8QbNqz/oPpDvhwsNtDvIh465EvxlStXxPHx8eKQkCPibl2NxAb6XcRbt26pycP917Nnz26xhUW/ardz5MgRcc8exuKXL1+Knz17Jh439muxWCwW3751S2yg30X8a2SkWCwWi1NSUsSGBvris2d/lqg/z9lZbGdrU277Dx7EiA0N9MW/XLwolOXl5Yktx48XfzvP+YPjqkqd6n9d/mTpsmW0aNGiSnVzc3NJTEwEwMKiP926dQNAS0uL/Px8EuIT0NbWBsBr82aCg7fTrFkzVqxciYeHB7FPntC6dWvs7R0w6tpVaPfu3bv4+fnyv5s3yc/PR0enBePHj2fI0KEA5OTk0MO4OwAenp6EnQnj4sUIGjRowMyZs+hjbo7b2rVcuvQL9evXx9JyAhMnTarwXK5evYq/ny/3799HSVmZAf37Y2Nrh5KSkmSMvx/3791DWVmZfv0ssLOzQ0lZWYiJiorCx9uLu3fvoaKiTD8LC5ycnJGXl2fmjOlERUUBYGigT+cuXQgK2v7eemWRkZ6OvIICDRs25Pnz50J5+w4dCAv7GWUVFQAKCgqYPWcO3bsbS9TXaqbFjaJjKYvz586jqalJr969hTI5OTnGjBmDh4c7ubm51K1bt9JxVaVGuzFVFTpA3bp1BTEfOnSQ/fv2CeIfNWo0dvb2DBgwUKJORkYGjg4OvEpLIz8/n+joaGxsrLl/7x4Ajx49En6e69atS+PGaty7d5fly5dx5PDhUsfg7eXFhQvnEYlEJCcns3q1K/b2doSHh/P27VuSk5PZuHEDly5dKvc8rly5go31HJrr6OC5fj12dnacPXuWRQsXCjFXr17FxnoOLVu2xHP9euwdHLl8+RLW1nOELkNCQjy2Nta0bNUKf39/5s9fwKVffsHdfR0Aq1xcGT16TOH7dfgIa9asrVS9sujRsydZmZm4uqziVVqaxLbGamooKCgAoKGhwfTpM1Au9oUsKCjg18hI2rb9vNz27927y+ft2pUq79CxIyKRSOiiVDauqtTolb26LF6yhHnOzmRmZuLh4Y6HhzvNmzenn4UF33wzpdR9QEZGBgsXLWbMmDHExcUxwXI8WVlZBAcHs9bNjQcPHmDUtSsK8gqsXrMGeXl55jk7c/78OX788QdGjhol0Z6amhr7D/zAkydPmDjBkvz8fORkZbkQHs6LFy8YO/ZrsrOy+DUykl69epV5Dt9/vwkLi/6sWLFSKNNproO/vx/p6emoqqqyadNGLCz6s3TpMiFGX78Lo0aO5Mzp03wxaBC3fr9FXl4eCxcuok6dwo+pdZs25OTkAPDJJ5/QomULGqupSVxk3levLHR1dfHwXM86NzdCQkIACN6+nS8GDeKTTz6p8DPbuXMHsbFPcffwLDfm1at0dPV0S5U3bty4aPurD4qrKv+ooceuXbtx6PAR5syxpl27dsjJyfH06VO2BwXx1ZjREj+xAPLyCowqEqy2tja9i37+bt78DYCBAweyebMXzvPmERV1nYMHDxITEwPA69evS+3fon9/5OXl0dPTEz5k4x49UFBQQFNTk9atWgHlv+lpaWncv3eP4cOHS5R37tIFP/8AVFVVhZihw4ZJxGhpNUNf34DIXyOBwi6EnJwcCxcs4Nq1q+Tk5NCyZUs+++yzCt/DqtYzMzPj+IkTrFy5CoADB/YzYvgwgoO3l1vnl4sX8fH2Zv6CBTRv3rzcODFixGUY4mRkZIr+/bC4qvKPEjuAuro602fMYNfuPZw9d55vv5uPvLwCKSkpBPj7ScQ2aaKOrOyfp9C0SKDvhikTEhKYPGkiXw4ehK2NDW5r15CeXijUst5UBXkF4f/v3mA5OTmhTLbo/2LKdjKmFXUB1Juol3t+72I0NJqU2ta0qYawXVtbG18/f7LfZGNna4uZqSnffTuPhISEctuuTj0AWVlZunbrhp6eHidOnmKukxPeXl5ERl4uFXv79i0WLJjPpEmTGTFiRIXtNlRVJe3ly1Ll7861QQPVD4qrKv8YsV+/do3hw4YyfNhQ4uLiAKhfvz7jxo2ja7fCG853V+V3JCcnk5ubK/z99OlTAFRVC9+UZUuXEh0dTfv27dkWFERExMVSXZeapGHDhgCkpqSWG9OoUSMAUlJSSm1LSUmhUVEbAAYGBvj4+BJx8Re+37yZ+IQE5s51fO9xfGi9R48eCfdH75CVlWXs2HFoa2tz87ebEttiY2NxsLenb9++2Nnbv/d4dPX0iI6OLnWBuRMdjby8Ai1btvyguKryl4q9uDBLotOiBUlJScTHx7Ns6RKioqKIffKEQ4cOcv3aNQCaNdOWqJOXl0dgYAAFBQVEXb9ORHg4AJ07dwHgaVyh+PtZWNCliz6ycnLvHQ+uDo0bN6ZNG11CQ49JlN+4cYM5s2eRnp5Oo0aN0NPT43hoqERMQkICN27cwNi4BwC3bt0i5MgRAOTl5enWrRuW4y15+Mcfwvsogwx5eXkS7VSmXkl8fLyxt7Mt1VZiYiLPnj3j008/FcpSU1OxtbGmQ8eOLF+xUvgFLEnxewRzc3OePXtG+IULQllBQQE//HCAXr16CaNElY2rKn/ZDeryZUu5cOECBw8dpkmT0j/hTZo0wcpqKlu3buH3339n5ozpEtuVlJSwmjpVokxFRYXDhw4RvH27MIpRp04drKysAGjfrj0XL0bg6+ND+IULJCQklNl9qUkc5zpib2dHXXl5Bg4cyPPnz/Hz9UVXV1f4xXF0nIutrQ31lJTo168fL1++ZEtgIJ991pYBAwtHnFJTU1i92pXUF6l0NerKs+RkAgMD6G5sLAy/NdfRISM9nYAAf4y7G9O5S5dK1SvJVKupTJ8+DUvL8fTu1ZuYmBj8/f04fOgQn2pqCseUlZWFna0NmZmZDPpiEBcjJJ+cmpqZISsry7FjR3FZtYr1GzZgampG27afM3jwl6xYsZwZiQloaTXjaEgIjx8/ZvmKFUL9ysZVlb9M7MrKKqioqFQ4TjrH2po2um348ccfeRATQ3Z2No0bN8bQyIjp02eUGtpUUlJinbsH69zcePz4UeE4u4MDn7VtC8CSpUtZs9qVq1evEhsbS/8BA2jWrBkbN3x4GkNl6dGjJ15e3vj7++Hs5ISSkhL9LCywt3cQYrobG+Pj64e/ny+nTp5EWVmZvv36YWdnL9wjmJv3ZcnSpezetYttW7eiUr8+fc3NsbX7s9vQq1cv5syx5sCB/USER7Bn795K1StJ+w4d2LotiC2BgezYEQxA6LFj9OtnwazZs4XnAzduRAldycWLF5Vq5+Ivl1BSUkJRURElJSWU6v35XGHZ8uX4+/uxZ/duMjIy+Pzzz/HzD6BNG8nRl8rGVQUZ8ce+1H0E3j1U0tDQ4NRPp//uw/lPkZycjKODPfv2H/i7D6XG+cfcoEr5Z6CiosLoMV/93YfxUZCKXYoEysrKjBkz5u8+jI/Cv7IbI0VKVZBe2aXUGqRil1JrkIq9lhEeHs6TJ0/+7sP4W5CKvZYREX6BJzXh+vkXUiNir6ovsSRdjQwxNNAneHvpTDuvzZsxNNCnr3mfGjji2se5c2eZajWFkJAQnJ2dmD1rFteuXS0VFxcXx4L58zE370PPHsZMtZoipGtUliu//oqhgX6pp+AAu3buxNBAv9Rr4YIFVT63ylIjT1BdXV04f+4cDo6OqKmpc/78OZzmzsXb24fuxsbvb0BKmZiZmmBn71DtocAjhw/j6urCsGHDiYmJwdTUFJFIhPWcOWzYuBETE1OgMBFtyjeT0dTUxNl5HoqKioSGHsPW1oadu3ajp6f33n2JRCJWr15d7vbExETatNHFwVEyMU1dvfxM0Zqi2mJPTU3lxPHjuHt40LdvPwD69OlDdlY2e/bslor9H8CWLYFMmjwZR8e5yMrKYGJiSh9zc+ztbNkeFCSI/adTp1BQUGRb0HYh6apv376MGjmCY8eOMm/et+/dV4C/P3JysgwZOpSkEpmUAElJSbTRbUPPnj1r9iQrQbW7MRX5EqvrLHkfeXl5bN2yhZEjhmPcvRtfDBzA8uXLePbsmRDzzeTJGBro4+vjQ2BAABb9+mJmaoKH+zpycnLw8fGmv0U/zPuYsWrlSt6+fVvhPuPj4/l23jzM+5hhYtIbZ6e5xMfHS8QkJPwZY2ZqgtNcR2JL3BQmJSXx3bfzMDXpjalJbxwc7IU026jr1zE00CczM5O1a1ZjaKDPlStX3luvPNLT02mq0bRUuds6d9Zv2Cj8PWnyZE6eOiWRXSgrK4uioiIyvN85ERMTw549u1m0eLGEN6A4iUmJQhZl8VkL/gqqLfaq+hJrApdVK/Hz8yU+Ph5tbW0yMzM5HhqK9ZzZvHnzRiL255/D2LIlkKysLDIzM9m/fz+zZs4gePt2MjOzyMjI4OjRELYEBpa7v5cvXmA15RtevEhl2fLluLi48vLlS2ZMn0ZmZqYQM2XKFNLS0li+fAWrXFx58+YNU6Z8Q3Jy4ZewoKAAGxtrXrx4ibu7B+7uHuSIRNjb2VJQUED7Dh04dLgwTXe8pSWHDh+hc+fO761XHr1NTAjaHsTly5cp/ghRSUlJyK8vSU5ODvHx8WxYv564uDiGlXBflaSgoABXVxcGDR5M167dyo1LSkrizp07DB82lG5djRg2dIhgBfzYfJSsx8r4EivCy2szXl6bK4zJyckhJycXQyMjxo8fj7l5X2JiYhg/biyxsbFcuXKFPn36CPHp6emEHj+BsrIykyZOIC4ujocPH3Is9DiNGzdm5owZ3L59i8jIy+UaEoKDg1FUVMTPP0AwIRsZGbFg/nzu3r1D167dCA4ORkFeHl8/P+EK2atXL8Z+/RVbtmxhyZKlvHjxgtgnT1jgv1CYRaFd+/bCZECKioq0aNECFRUVWrRoKWR7pqSkVFivPJYsWYr7unU42NtRUFDA+fPnkJWTpXdvEwmnV3HezbigpKyMh+d6dHUrzjo8sH8/iQkJeHl5lxsjEonQ1dWljpwcs2fPoVGjRoT9HIbLqpXk5+cJBvKPRY2L/Z0vcfGSpRX6EquLvLw8a93cEIlEPHz4kLCwM1y/fl3YnlnCY2poaCj4SvX1DYiLi6Nt27bCT6pRVyNu375VYdcrMvIyA7/4QhA6FCZOefv4SMYM/EKiK1CnTh0GDRpMSEjh1VpNTQ1tbW02bdyA1dSpdO/WnQaqqnTv3r3Cc65qvfr16+Pi6oqDoyMDB/QnIyMDZycnWrZqhZeXF02bljZVB+/YSWbma86fO4+z01zc1rljZmZWZvvJyc/w9fVh4aJFQs5+WSgoKAjTfbzDuEcPxAViAvz9GTlyVLlfvpqgRsX+Ib7Eipg5axaWlhMkygIDAti7d49E2fagIIK2BwlTtDVo0EDYVjLlR76YQGVlS/tL5WTlyqxXnLS0NNTVSxtPSsY00dAoVa5RzF8qKyuLf0Agvj7euLq4kJ2dTcdOnZgzZ06FXYCq1nuHuro6I0aMwMTEFF09PeZ/9y3zv/uO4B07S8V27NgRKMzPl5GVYb2nZ7lid1vrhp7eZ5iYmApG9tevXwuvevXqCTMdlMXgwYM5ejSEpKQktLS03nseVaXGvkYf6kusCAV5BerXry/xKmnJunbtKt7eXmRnZeHk7Myx0OOcOHGyWvt9Hw0bNiQ1tbR3tDiNGjUiJeV5qfKUlBTBowqFU2GscnHl/IVwdu/ewydNm2JvZ09ycnKF7X9ovdevX3Pnzp1SljwtLS0mTpzErVu3yM/PBwo/w+I39+8wMDAkISG+zOk4MjMziYgI5+bN3+hjZiq8zpw5TUxMDH3MTDl79iwAb9++5cmTJ8L+3iHzEa/mxamRvVTWl1iRB/VDiY0t9JeqqKgwduw4tLS0CC/yoH4sunfvzpnTZyQ+9Iz0dGxsrIUHNN2NjQk7IxmTl5fHT6dOYdyj0F/67NkzgrZtIz8/H1lZWT5r2xY7ewdyckQSTzdlZCQ9ppWtV5ykpCQmTZxAWNiZUttu3LiBhoaG8Avn4+2Fg719KTFeu3aVpk0/ES44+fn5wg1xvXr1CAzcUuqlU3SfERi4ha5FM7SlpKQwetRIzp8/L9H+saMhaGhoSHhdPwbV7sZU1pf4Pg/qh9KuaOaozMxMhg8birp6E+LiniIvr0BOjqja7ZeF1dRpnD59mtmzZjJp8mTEYjG7du4kISGBzz8vPJ6pVlM5/dNP2FjPYcKEicjIynJg/z5SU1OZMWMmUNgd2bZtKw8f/sGoUaN5KxKxe9dOGjVqRPsOHYT9NdfRIeTIYRo3boRxd+NK1yuOnp4efczNWbF8Obdv3ebUqVMkJz/n+PHjnD9/jiVLlgqxEydNZuaM6UyfNpWRo0ahqtqQn8PCOHnyBCtXuQCFoy4jR4ygYUNVdu7ajZycHIZGRqX2a2RohLqamsQ2bW1tzM374uqyiqTERHRa6BB+4QLHjx/HxdX1o/bXoQbEXllfYmU8qB9Cu3btWLpsOUHbtpKSkopqw4as37ABZyenjyZ2dXV1tgfvYNOmjaxcsYL8/HwMDA1ZsXIVKkXzITZWUyN4xw42bdzEihXLEYvFGBgYEhy8Q7hB1tDQwNfXD29vLxwdHZCRkcHAwJDALVuFdgBcXFxZsXwZy5ctZ+3atfQxN69UvZKsXevGzh07OHXqJCKRiMjIy+jrG+C5fj3m5n2FuE6dOhG4ZSsBAf6s9/QkLy8PXV1d1m/YKDGypaKiXOGNaEWsXrOGAH9/9u7dw6tX6bRq1QoPT0/hgeTHRGreqGW4rFopPEGtbfyj5nqU8vExNeuDjo7O330YfwvSK7uUWoM0n11KrUEqdim1BqnYpdQapGKvxTx48IDLl0tPR/1fRSr2WsyDBzFcvlz+kjn/NWpkNCY7K4uAgADCwsJ4+fIFWlpajB9vyZivPmwata5GhuXmZTdr1oyjx0LL3Cblw4iJiSHA348LRVND6+npMXr0GEaPGSOR6iESifD28mLfvr1MmDiRuXOdSrV18+ZvTCsxu3JxtgUF0aWLPgC9e/Us5TOAwjWhqrMeV2Wp9ji7WCzGzs6Op3FPmWo1Fa1mWly7eg03t8IFrT5U8FLKxtlpLvLyCqx1c6tWO/fv32eq1RTat2+PoaEhiYmJdO3aDXf3dSQmJmLvUDjbcHR0NMuWLiEvL6/CNW1btWzF+vWlZ0WO/DWSQwcPClmir1694s2bN9g7OKCrK+llbdq0tIvqY1Btsd+JjubOnWiCd+wU1u0xNTUjKyuLQ4cOVknsZaX4yv1FmXH/dXbv2kWbNrr4BwTy00+nuHPnDk7Ozqipq+Hr48PMWbNQVFRkw/r1GBoaMdfJiXFjvy63vQaqqmU+jQ0MDKBfv340a9YMKExIg8KpuD+mz6Eiqi329h06EPnrlVLl9ZTqlZv9+D7epfiWR0ZGBp4e7oSHhwtZjzm5Ofj5+qKqqsq58xeAwqSloG3bOHToIG9FIvqY9WHgwIHY2FgD8MMPP9K6TRtevHiBr483v/zyC+np6airq9PH3JxZs2ZXeBxv377Fx9ubsLAzpKdnoKuni42NrYSZ4u3bt/j6+HDmzGlev35Nmza6zJw1S2K1PZFIhI+3N6dP/8Tr169p1aoVDo6OQo66oYG+EHvmzGmmTZuOtY3Ne+uVRXpGOuol1qICsLScwJAhQ4XMxuqsaRsREc79+/dZXmzFwMTERGRkZPjkk08Ez0BV9VFVajRdIDc3l4yMDCLCwzly+DDfza/5uUDEYjFzHR2FFfGysrL4/vtNZdrG/Px8Cdq2DSh8Y48dO8rdu3ckYgoKCpgzZzYP//iDunXr0qp1a57GxrJv717+ePAH/gEB5R6Hg4M9cU+fMnuONU2banD69GnsbG3YFrSdjh07IhaLcXRwIC7uKdY2Nmg00SAiIgJHB3thVQoAd/d1XL50CSfneWhoNOHnsDDs7ew4eOgwWlpaHDp8BCenuSjIy7PWbZ2QF/++emVh0tsEDw939u/bh2K9ekJ53bp1UVNTE/6uTh9629ZtmJqaSazQl5SYiKKiIksWL+LSpUsUFBTQq1dv5i9YUCNZsJWhRsVuYz1HWHXZ2samym6lsjyojo5zmTR5MteuXROEPnHSJOzs7AsX+7WeIxGfnZ3N7l27ATA0MsLTw5O3IhG2RVf1dyQkJPDwjz8AcF29BgsLC2JjY/H0cEcsLnQelWVKjoiI4EZUFPsP/EDr1q2BQlePfF15fv/9f3Ts2JGIiAiioq5LxBj36IFI9JaNxcR+IyqKYcOGM7BoORd9fQN69OgpLCbWokULWrZogby8goQI31evLMZ89RUZrzPw8fEmOzsbgDZtdBnQv7/E6tpV5dfISG7fvsXOnbskyusp1aO5jg6tWrdmxMhRpKamEBgQwIzp09i3/wD1in3xPhY1KvYFCxeRlpbG/27eZHvwdrKzs7GrYHmTqhAVVegzlZWVxdrahjp16tC5c2fM+vThp1OnhLjo6NtCqq+VlRUNVFVpAIwfb4mrq4sQp6amRr169Xjz5g2+vj48eviQ9h06sM7dQ2L59ZJERl6mQ4cOgojfsWjxYomYdu3al4oZMnQoISEhJCYmoqmpSZcu+hw6dJDGao0xMTFFU1OT3iYm730vqlJPRkaGadOmY2k5gYULFnDxYgTrPT3w2vw9a9asrfY8P1u3bsW4R49S+fWjR48pZag2MDBk9KiRHA8N5auvy78vqClqVOytihbFNTQ0RLu5NosWLmT06DFoamp+UDtl3aC+Mzm/M0SrFVtmHBBuhN5R3DitpfXntmbaknFKSkqsXrOW1a4uxD55QkCAP1Bo6La0nFCuxbCyflSNsvyoRXO4pKWloampyYKFC1FTV2Pnjh24r1uHjo4O48aP5+uvx1bYflXrQaHDaMDAATTTboa1tQ3r3NYyb54zx0+crHKuelRUFL/9doNtQUGVim/WrBmdOnXi9u1bf4nYqz3EkZKSwqNHj0qVGxgUjpk/jY394DYr8qCqKBeaFF6+fClhWUt5LukNVVb+08zwvJg/s+Qq2VC4uvNPp8+wc+cu5i9YgKGRETk5OQQHby9zwVuonh81tWgN1Hd9bwUFBWxt7Thx8hShx08w+MsvcV+3TvBulseH1isoKODOnTvCosjvUFJSwtbOnuzsbO7fv1/hPiti65ZADI2MhHH14jx79owXL16UKv+r/KdQA2I/d+4s48eNLWX4vXa10JPZTPvPtUsr60EV5Ygk3OmvX78mq2gGgXbt2wOFPsgff/gBKJyM8+zZnyXaaNu2rTDi8OOPP5Cfn49IJGL/vn0ScTdv/sb4cWOZOMES1YYN+frrsSxc+Kfj6t2MACXp3r07t2/fLvVFd1m1kj17Cu8VjLsbEx0dzeMS/tDQ46Foa2ujpaVFTk4Oe/bsFmYV09TUZPr0GXz66afcu1dsPpgSftRK16N4EzLY2Fiz+ftNpbbduHEDQHBTvY+Sn+WtW7e4evUq06fPKDPe29sLWxtriYeGjx8/5vf//Y9OnTtXap/VpdrdmMGDv2RH8A6mfDOZyZO/QVtbmzt37rBt21aGDx8hdC8+xIMaGBBAYIlRkE8//ZTjJ05iampK69atefjwIZ6eHmzfHkRGRgaNGzcWZuWCwgV4hw0fTsiRI/z8889cvdqXvPx86pewr7Vr1568vDwePXrEqJEjaNGypTAmrK6uLsyDWJI+fczp3LkLtjbWzJw1myZNmhAWdoYTx4+zdVvhz7ipmRn6BgbY2dowc9YsYTTmaEgInkUPYuTl5TkeGsqpkyeLlmFU5uewMJ49eyYxH6JOcx0OHTpISEgI+l26oNOiRaXqFUdGRoaZM2bi6enBy5dpZGVn8SAmhvy8fEJCjjBo8OBKjYGX9Vlu2RJIp06dhMmbSmJpOYGpVlNwdHRg+PARZGa+JsA/gOY6OgwZMvS9+6wJ5FasqN5qqgoKClj0709iUiLHQo9xPDSU5OfPmTxpMja2tsLV9drVayQlJfLV11+jqKhYZltbAgPLnbelfv36WE6YgJycHH3MzUlKSiT5+XPq1KnD6NGj6dSxE9evX0dJSYnJ33wDQM+ePRHliIiPjyc3Nxfj7sZYWVlx5kzhcpJfjx2Huro6/fpZ8ObtG16+eEFSUhIqysr0s7DAdfUaieG44sjIyGDRvz8pKc/54cABQkOPIQMsWbpMcNPLyMjQv/8AUlJS2L9vH6Ghx8jLz2fJ4iWYmP75JTI1NSM6Opo9u3dz7Ogx8vPzWLhokbDaNUDHTp148vgx+w/sRywW06Nnz0rVK0nHjh3Raa7D9evXuHnzJiKRiLciEROK7k/K5WwLCwAAAYdJREFUMj3v37ePFi1b0qNodoSSn+W9e3fZtHEjixcvKffL0qRJEwyNDLl86TI//nCAqKgoTEx6s2b1GompEz8m/zqnUkZGBtevXyMxIZFhw4fToEEDxGIxTnPnEhERzueff87uPXspKCggMjKS+Pg49PUNhOmWd+3cyaZNG5GVleX8hfAKjcr/dU6ePMGdO3cqNTvvf4F/nQdVLBazdu1aXr54QUBgAC10dEhNTeX58+fIyMjwzZQpQOHQ5O5dO7l69SpycnK0bt2a3Nxcof88esyYWi10AF1dPRo2LHti0/8i/7orOxQ+eg7w9+PKlSu8fPkSZRUV2rdrz6RJkyTGid++fcvWrVs4d/YsiYmJ1KlTh1atWjF06DBGjxnz0ecpkfLP4l8pdilSqoL00ial1iAVu5Rag1TsUmoNUrFLqTVIxS6l1iAVu5Rag1TsUmoNUrFLqTVIxS6l1iAVu5Rag1TsUmoNUrFLqTVIxS6l1iAVu5Rag1TsUmoNUrFLqTVIxS6l1vB/qwcRG+Pps0UAAAAASUVORK5CYII="}}]);