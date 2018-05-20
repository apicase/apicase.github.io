# Requests+

::: danger Deprecated
**Requests+** are removed in **0.15**  
Use [**Spawner API**](/anatomy/spawner.html) instead
:::

Here you can find info that I decided to talk about later

## Manually start requests

#### How to use

Apicase has option to create request but start it manually.

```javascript
const req = doRequest({
  url: '/api/posts',
  options: { immediate: false }
})

/* Then start it */
req.start()
```

Also, you can pass `payload` to `.start()` method to change payload:

```javascript
const req = doRequest({
  url: '/api/posts',
  method: 'POST'
  options: { immediate: false }
})

/* Change url */
req.start({ url: '/api/another' })
```

::: warning Note
Note that `.start()` method will **fully replace** payload, **not merge**  
Also, it replaces **payload only**, not meta/hooks/options/etc
:::

You still can add event listeners to request that hasn't started yet:

```javascript
const req = doRequest({
  url: '/api/posts',
  options: { immediate: false }
}).on('done', console.log)
```

But you can't use `async/await` because request promise is not created yet.

```javascript
/* No error thrown, but this one will never be resolved */
await doRequest({ 
  url: '/api/posts', 
  options: { immediate: false } 
})

/* Instead, await request after .start() */
await request.start()
```

## Requests delay/debounce/timeout

#### Debounced request

Imagine that we have some search field with autocomplete from server. And we want to add delay for that request. Also we want to abort request on input change. We can create debounced request using `options.debounce`

```javascript
const search = doRequest({
  url: '/search',
  method: 'POST',
  options: { immediate: false, debounce: 500 }
})
```

Then,  you have to start request:

```javascript
/* .start() resets timer and starts again */
search.start({ body: { text: 'Search text 1' } })
search.start({ body: { text: 'Search text 2' } })
search.start({ body: { text: 'Search text 3' } })
search.start({ body: { text: 'Search text 4' } })
search.start({ body: { text: 'Search text 5' } })
```

#### Delayed request

If you need to use delay only \(without debounce\), use `options.delay` instead

```javascript
const delayed = doRequest({
  url: '/delayed',
  options: { immediate: false, delay: 500 }
})
```

Then you have to start request:

```javascript
/* All requests will be started after 500ms */
delayed.start()
delayed.start()
delayed.start()
delayed.start()
delayed.start()
```

#### Request timeout

When you need to define time limitations for requests, you can use `options.timeout` option

```javascript
/* If request lasts more than 500ms, it will be .cancel()'ed */
const request = doRequest({
  url: '/foo/bar',
  options: { timeout: 500 }
})
```

If time is out, `request.cancel()` is called \(`cancel` event is fired too\)

#### Start event

```javascript
request.on('start', state => { console.log(state) })
```

Condition of `start` emitting:

* If `immediate` is `true`, it's not fired
* If `delay` is defined, fires event after delay
* If `debounce` is defined, fires event after delay



