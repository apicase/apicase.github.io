# Introduction

## What is Apicase

Apicase is **2 KB** library to organize your APIs in a smart way.

There are so many questions about how to good organize work with API in frontend applications

Some people just don't care about and use native _fetch_, but it's not so flexible and extensible

Some people create their own wrappers \(some classes or just functions, or json objects, no matter\), but it often becomes unusable in another projects because it was made for specific APIs

In addition, work API usually is not separated from application to isolated layer. It means that you can't use your APIs with different projects or with different frameworks

Here is apicase - unified and full-featured way to create a separated API layer.

## General features

* **events-based** requests handling
* **middlewares** to update/change-on-fly/undo/redo API calls
* **services** with unlimited inheritance
* **adapters** instead of concrete tools \(fetch/xhr\)
* **SSR-ready** - fetch adapter uses `node-fetch` for Node and `whatwg-fetch` for native apps

## Roadmap

* Create debugger plugin
* Improve errors logging
* Add basic types for TS/Flow

If you want to support the projects, PRs are welcome :\)

## Links

Github: [**here**](https://github.com/apicase/core)
