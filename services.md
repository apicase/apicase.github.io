# Services

### What is this?

Do you like boilerplate code? I don't. So, services are made to _partial_ apply payload, meta and hooks.

Unlike the most of API libraries, Apicase has _unlimited_ services _inheritance_, allowing you to produce high-ordered services.

### Creating service

Simple fetch service with base url:

```javascript
import { ApiService } from 'apicase-core'
import fetch from 'apicase-adapter-fetch'

const service = new ApiService(fetch, {
  url: '/api',
  hooks: {
    resolve: ({ payload, next }) => next(payload.body)
  }
})

// GET /api/posts
service.call({ 
  url: 'posts' 
})
```

### Extending services

Service has `.extend()` method so you can stack services payload:

```javascript
const apiBase = {
  url: '/api'
}

const loggerPlugin = {
  hooks: { 
    before ({ payload, next }) {
      console.log('[apicase.call]', payload)
      return next(payload)
    }
  }
}

const service = new ApiService(fetch)
  .extend(apiBase)
  .extend(loggerPlugin)
```

### Merging payloads

If adapter has `merge` callback it will be applied to merge payloads.

Official `apicase-fetch-adapter` use it to path stacking:

```javascript
const adapter = {
  /* ... */
  merge: (from, to) => ({ 
    ...to, 
    ...from, 
    ...to, 
    url: to.url.startsWith('/') ? to.url : [from.url, to.url].join('/') 
  })
}

const service = new ApiService(adapter, { url: '/api' })

const service2 = service.extend({ url: '/posts' })

// GET /api/posts/all
service2.call({ url: 'all' })
```

### Dynamic services

Service options can be passed as a **function** that will be invoked on `.call()`

Nice use case is passing auth token dynamically:

```javascript
const api = new ApiService(fetch, () => ({
  url: '/api',
  headers: {
    token: localStorage.getItem('token')
  }
})

// It will get token for each call 
// So you can change it and don't care about service
api.call({ 
  url: '/posts/create', 
  method: 'POST', 
  body: /* ... */ 
})
```



