(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{52:function(t,s,a){t.exports=a.p+"assets/img/flow.c0e1f75f.png"},62:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"requests"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requests","aria-hidden":"true"}},[t._v("#")]),t._v(" Requests")]),n("p",[t._v("Core function of Apicase is "),n("code",[t._v("apicase")]),t._v(" (ba-dum-tss). It uses adapters, creates requests and does some good things.")]),n("h2",{attrs:{id:"wrap-adapters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wrap-adapters","aria-hidden":"true"}},[t._v("#")]),t._v(" Wrap adapters")]),n("p",[t._v("Firstly, you need some adapter (e.g. "),n("code",[t._v("fetch")]),t._v("). Pass it to "),n("code",[t._v("apicase")]),t._v(" and you'll get a function that works with this adapter:")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" apicase "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"@apicase/core"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fetch "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"@apicase/adapter-fetch"')]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" doFetchRequest "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("apicase")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{attrs:{id:"request-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-structure","aria-hidden":"true"}},[t._v("#")]),t._v(" Request structure")]),n("p",[t._v("The received function takes an object with the following format:")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("doFetchRequest")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/* Just payload */")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("payload"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/* Hooks object */")]),t._v("\n  hooks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/* You can pass a single hook */")]),t._v("\n    before"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/* Or array of hooks */")]),t._v("\n    done"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fail"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/* Meta info that is passed only to hooks */")]),t._v("\n  meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"bar"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/* Specific request options (we'll talk about it later) */")]),t._v("\n  options"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("p",[t._v("Simplest example:")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("doFetchRequest")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"/api/posts"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"GET"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{attrs:{id:"response-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response-structure","aria-hidden":"true"}},[t._v("#")]),t._v(" Response structure")]),n("p",[t._v("This function returns an object with "),n("strong",[t._v("state")]),t._v(", "),n("strong",[t._v("on/off")]),t._v(" and **start/cancel **and "),n("strong",[t._v("then/catch")]),t._v(" methods")]),n("h3",{attrs:{id:"state"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[t._v("#")]),t._v(" State")]),n("p",[t._v("It's just some flags, payload and result")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("success "),n("span",{attrs:{class:"token comment"}},[t._v("// If request is finished successful")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pending "),n("span",{attrs:{class:"token comment"}},[t._v("// If request is running")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("started "),n("span",{attrs:{class:"token comment"}},[t._v("// If request was started")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelled "),n("span",{attrs:{class:"token comment"}},[t._v("// If request was cancelled")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload "),n("span",{attrs:{class:"token comment"}},[t._v("// Request payload (here: { url, method })")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result "),n("span",{attrs:{class:"token comment"}},[t._v("// Result from adapter (can have initial state, if adapter has)")]),t._v("\n")])]),n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")]),t._v(" Events")]),n("p",[t._v("You can subscribe to events using "),n("code",[t._v(".on()")]),t._v(" method and unsubscribe from 'em using "),n("code",[t._v(".off()")])]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"done"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// On request success")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"fail"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// On request fail")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"finish"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// On request finish (success doesn't matter)")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"start"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// On request start")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"cancel"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// On request cancel")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"error"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// On JavaScript error happened")]),t._v("\n\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("off")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"evt"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Unsubscribe from event")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Syntax sugar")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("onDone")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"done"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("onFail")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"fail"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("p",[t._v("You can add as much events as you want")]),n("h3",{attrs:{id:"start-and-cancel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-and-cancel","aria-hidden":"true"}},[t._v("#")]),t._v(" Start and cancel")]),n("p",[t._v("You can "),n("code",[t._v(".start()")]),t._v(" and "),n("code",[t._v(".cancel()")]),t._v(" requests:")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("start")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v('// Start request (see "Requests+" when we need to start manually)')]),t._v("\nrequest"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("cancel")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Cancel request")]),t._v("\n")])]),n("h3",{attrs:{id:"then-and-catch-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#then-and-catch-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Then and catch methods")]),n("p",[t._v("Apicase also gives you "),n("code",[t._v(".then()")]),t._v(" and "),n("code",[t._v(".catch()")]),t._v(" methods to feel like it's just a Promise:")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("doFetchRequest")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"/posts"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/* Always resolved (even when request has failed */")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/* Rejected only when JS error happened */")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("p",[t._v("Since it returns thenable object, you can also use "),n("code",[t._v("async/await")])]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" success"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("doFetchRequest")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/posts'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{attrs:{id:"request-flow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-flow","aria-hidden":"true"}},[t._v("#")]),t._v(" Request flow")]),n("p",[t._v("Apicase creates a queue of hooks and adapter call. Let's see this diagram")]),n("p",[n("img",{attrs:{src:a(52),alt:"Requests flow"}})]),n("p",[t._v("Hooks are used for request-level logic. All hooks are asynchronous and have callbacks to continue the queue. It allows you to do another requests, check something, just sleep and do whatever you want in hooks.")]),n("p",[t._v("Events are used for application-level logic.You cannot change request state from them. They are just made to listen to it. Also some adapters may emit custom events (like "),n("code",[t._v("progress")]),t._v(" in "),n("code",[t._v("xhr")]),t._v(" adapter)")]),n("h2",{attrs:{id:"detecting-state-changes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#detecting-state-changes","aria-hidden":"true"}},[t._v("#")]),t._v(" Detecting state changes")]),n("p",[t._v("Apicase has 3 additional events that are emitted on state changes.")]),n("p",[t._v("All of them have the following structure:")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("request"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"change:state"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" prev"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" diff "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prev"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Previous state")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// New state")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("diff"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Object with changed properties")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("ul",[n("li",[n("strong",[t._v("change:state")]),t._v(" - on state changes ("),n("code",[t._v("success")]),t._v(", "),n("code",[t._v("pending")]),t._v(", "),n("code",[t._v("started")]),t._v(", "),n("code",[t._v("cancelled")]),t._v(", "),n("code",[t._v("payload")]),t._v(", "),n("code",[t._v("result")]),t._v(")")]),n("li",[n("strong",[t._v("change:payload")]),t._v(" - on payload only changes ("),n("code",[t._v("payload.url")]),t._v(", "),n("code",[t._v("payload.headers")]),t._v(" etc)")]),n("li",[n("strong",[t._v("change:result")]),t._v(" - on result only changes ("),n("code",[t._v("result.body")]),t._v(" etc)")])]),n("p",[t._v("You can use it to create services and connect them with your store (e.g. Vuex)")])])}],e=a(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=o.exports}}]);