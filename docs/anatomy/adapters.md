# Adapters

Adapters tell Apicase how to work with some API.

## Why adapters?

The problem of the most of libraries - they are restricted by only one API. Apicase uses adapters and it allows you to use any API.

Wanna get all Apicase features using Facebook API? Just wrap it into adapter and use it as well.

Wanna use Apicase in your native applications or with SSR? You can use isomorphic or platform-specific APIs as well.

Wanna cross-platform support? Feel free to switch between platform-specific adapters \(e.g. fetch, node-fetch, whatwg-fetch\).

## Adapter structure

```javascript
const adapter = {
  createState: () => ({ /* ... */ }),
  callback: ctx => { /* ... */ },
  convert?: payload => ({ /* ... */ }),
  merge?: (from, to) => ({ /* ... */ })
}
```

### createState - define default request result

If your `callback` won't change result, there will be result from `createState` method.

### callback - all request logic is here

`ctx` structure:

* **payload** - request payload
* **resolve\(result\)** - resolve request and call `done` hooks
* **reject\(result\)** - reject request and call `fail` hooks
* **emit\(eventName, ...args\)** - emit custom event. You can listen to it using `req.on(eventName, cb)` or `Service.on(eventName, cb)`
* **setCancelCallback\(cb\)** - callback that will be called on `req.cancel()`. It may return Promise so you can `await req.cancel()` to wait for request termination.

### convert - prepare your payload before using in request

This is just a helper method that converts payload for `callback`.  You can define default options here, for example.

::: warning Note
`convert` method doesn't change payload for hooks to not to cause unexpected behaviour.
:::

### merge - custom merge strategy for payloads

For now, request options are merged in 2 cases:

* Using `Service.extend(opts)` will merge service options and newest ones.
* Using `Service.doRequest(opts)` will merge service options and options passed in argument.

`merge` callback defines custom merge strategy for payload. For example, `@apicase/adapter-fetch` uses this feature for path-stacking:

```javascript
const Service = new ApiService({
  adapter: fetch,
  url: '/api'
})

// { url: '/api/posts' }
Service.doRequest({ url: 'posts' })

// { url: '/another_url' }
Service.doRequest({ url: '/another_url' })
```

## Ready for More?

To see adapters in details, have a look at:

* [@apicase/adapter-fetch](/adapters/fetch.html)
* [@apicase/adapter-xhr](/adapters/xmlhttprequest.html)
