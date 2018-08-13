(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{62:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"apicase-adapter-xhr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apicase-adapter-xhr","aria-hidden":"true"}},[t._v("#")]),t._v(" @apicase/adapter-xhr")]),s("p",[t._v("XHR adapter for "),s("a",{attrs:{href:"https://github.com/apicase/core",target:"_blank",rel:"noopener noreferrer"}},[t._v("@apicase/core")])]),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),s("ol",[s("li",[t._v("Install via NPM")])]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install @apicase/adapter-xhr\n")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Import it")])]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" apicase "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@apicase/core'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xhr "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@apicase/adapter-xhr'")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhrAPI "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("apicase")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("We use "),s("a",{attrs:{href:"https://www.npmjs.com/package/node-fetch",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("node-fetch")])]),t._v(" as polyfill for Node.js")]),s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic usage")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" req "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("xhrAPI")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/api/posts'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  headers"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'my_secret_token'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  query"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("It will call:")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nxhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("open")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/api/posts?userId=1'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nxhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onload")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// See validators")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("isSuccess")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nxhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setRequestHeader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'token'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'my_secret_token'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nxhr"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("send")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("h2",{attrs:{id:"advanced"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced","aria-hidden":"true"}},[t._v("#")]),t._v(" Advanced")]),s("h3",{attrs:{id:"url-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-params","aria-hidden":"true"}},[t._v("#")]),t._v(" Url params")]),s("p",[t._v("Fetch adapter also has "),s("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("path-to-regexp")]),t._v(" to pass urls params smarter. Params are stored in "),s("strong",[t._v("params")]),t._v(" property")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("xhrAPI")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/api/posts/:id'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  params"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// => GET /api/posts/1")]),t._v("\n")])]),s("h3",{attrs:{id:"dynamic-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-headers","aria-hidden":"true"}},[t._v("#")]),t._v(" Dynamic headers")]),s("p",[t._v("If you want to create dynamic headers object so you can pass "),s("strong",[t._v("headers")]),t._v(" property as function that returns headers object")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("xhrAPI")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/api/posts'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  headers"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    token"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'token'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("It will be called every time you make a request so if token will be removed, header won't be sent too.")]),s("h3",{attrs:{id:"validator-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validator-function","aria-hidden":"true"}},[t._v("#")]),t._v(" Validator function")]),s("p",[t._v("I've added possibility to customizate resolve/reject apicase requests with "),s("strong",[t._v("validator")]),t._v(" callback."),s("br"),t._v("\nIt accepts xhr target and onload event")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("xhrAPI")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/api/posts'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  validateStatus"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \n    status "),s("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" status "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("299")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("Default validator function is here:")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("defaultValidator")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" status "),s("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" status "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("300")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h2",{attrs:{id:"author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[t._v("#")]),t._v(" Author")]),s("p",[s("a",{attrs:{href:"https://github.com/Kelin2025",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anton Kosykh")])]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[t._v("#")]),t._v(" License")]),s("p",[t._v("MIT")])])}],!1,null,null,null);a.default=e.exports}}]);