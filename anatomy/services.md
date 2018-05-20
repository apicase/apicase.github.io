# Services

## What are services?

Services are made to reduce boilerplate code by partial passed payloads and hooks. 

It allows you to move the most of your payload outside your main code and care only about business logic. 

Also services may have global event listeners and some more good things.

## How to use

Before use, you should install `@apicase/services` package

It's quite simple:

```javascript
import fetch from '@apicase/adapter-fetch'
import { ApiService } from '@apicase/services'

const SomeService = new ApiService({
  adapter: fetch,
  url: '/api/posts'
  method: 'GET'
})
```

Then, you can call do requests using `.doRequest()` method

```javascript
// { "url": "/api/posts", "method": "GET", "query": { "userId": 1 } }
SomeService.doRequest({
  query: { userId: 1 }
})
```

## Global event listeners

It's just like default events but you apply it to services:

```javascript
const ServiceWithLogger = new ApiService({
  adapter: fetch
})
  .on('done', logSuccess)
  .on('fail', logFail)
```

Then, all requests are made using this service will have these events

## Service requests store

Apicase services store currently running requests inside. And here some useful methods to work with queue:

### Requests queue

If you need to keep correct requests order, you can do it using `.pushRequest()` method

```javascript
const Comments = new ApiService({ 
  adapter: fetch,
  url: '/api/comments' 
})

Comments.pushRequest({ body: { text: 'Hello #1' } })
Comments.pushRequest({ body: { text: 'Hello #2' } })
Comments.pushRequest({ body: { text: 'Hello #3' } })
```

`.pushRequest()` just adds a `before` hook that awaits for previous request in queue.

If requests queue is empty, it just works like `.doRequest()`

Next request starts on `finish` or `cancel` events.

### Only one request at the same time

So, imagine that we have authorization with refresh-token logic \(if we get 401 error because of outdated token, we can try to refresh it using specific API route\).

And, imagine that we have two or more parallel requests. Both of them are failed with 401 and try to refresh token.

Here we need to do only one request. So, services have `.doSingleRequest()` method

```javascript
const RefreshToken = new ApiService({
  adapter: fetch,
  url: '/api/auth/refresh',
  method: 'POST',
  hooks: {
    before ({ next }) { 
      const payload = { 
        headers: { 
          token: localStorage.getItem('refresh_token') 
        } 
      }
      next(payload)
    }
  }
}).on('done', res => { localStorage.setItem('token', res.body.token) })

RefreshToken.doSingleRequest()
RefreshToken.doSingleRequest()
RefreshToken.doSingleRequest()
RefreshToken.doSingleRequest()
RefreshToken.doSingleRequest()
```

`.doSingleRequest()` creates a new request only if service queue is empty.

Otherwise, it returns currently running request that you can listen to.

### Unique requests at the same time

And, if you need to prevent users from sending the same requests simultaneously, you can use `.doUniqueRequest()`

For example, you can block spamming some actions, if your application doesn't prevent it

```javascript
const DeletePost = new ApiService({ 
  adapter: fetch,
  url: '/api/posts/:id', 
  method: 'DELETE' 
})

DeletePost.doUniqueRequest({ params: { id: 1 } })
DeletePost.doUniqueRequest({ params: { id: 1 } })
DeletePost.doUniqueRequest({ params: { id: 1 } })
DeletePost.doUniqueRequest({ params: { id: 1 } })
DeletePost.doUniqueRequest({ params: { id: 1 } })
```

`.doUniqueRequest()` creates a new request only if service queue doesn't contain currently running request with equal payload.

Otherwise, it returns this request \(like `.doSingleRequest()`\)

> Payload equality check is provided by [`N.equals`](https://github.com/nanoutils/nanoutils/blob/master/lib/equals/index.js)

## Services inheritance

Services have `.extend()` method that creates a new service with merged payloads and hooks/events concatenated.

```javascript
const ApiRoot = new ApiService({ 
  adapter: fetch,
  url: '/api' 
})
  .on('done',  successLogger)
  .on('fail',  failLogger)
  .on('error', errorLogger)

/* This one will have fetch adapter, all events and url /api/posts */
const SomeApi = ApiService.extend({
  url: 'posts'
})
```

Also, if adapter has his own merge strategy, it will be used here.

For example, fetch and xhr adapters allows you stack paths:

```javascript
// url: /api
const Parent = new ApiService({ 
  adapter: fetch, 
  url: '/api' 
})

// url: /api/posts
const Child1 = Parent.extend({ url: 'posts' })

// url: /posts (because it starts with slash
const Child2 = Parent.extend({ url: '/posts' })
```

## Services trees

You can use `ApiTree` to define services list as JSON object:

### Basic example

```javascript
import fetch from '@apicase/adapter-fetch'
import { ApiTree } from '@apicase/services'

const api = new ApiTree(fetch, [
  { url: '/api', children: [
    { url: 'posts', children: [
      { name: 'getAllPosts',   url: '',    method: 'GET'    },
      { name: 'createPost',    url: '',    method: 'POST'   },
      { name: 'getOnePost',    url: ':id', method: 'GET'    },
      { name: 'updateOnePost', url: ':id', method: 'PUT'    },
      { name: 'removeOnePost', url: ':id', method: 'REMOVE' }
    ] },
    { url: 'profile', children: [...] }
  ] }
])

api('getAllPosts').doRequest()
api('createPost').doRequest({ body })
```

### Use service as a parent

You can also pass parent service instead of adapter. It may flatten structure

```javascript
const Root = new ApiService({
  adapter: fetch,
  url: '/api'
})

const api = new ApiTree(Root, [
  { url: 'posts', children: [
    { name: 'getAllPosts',   url: '',    method: 'GET'    },
    { name: 'createPost',    url: '',    method: 'POST'   },
    { name: 'getOnePost',    url: ':id', method: 'GET'    },
    { name: 'updateOnePost', url: ':id', method: 'PUT'    },
    { name: 'removeOnePost', url: ':id', method: 'REMOVE' }
  ] },
  { url: 'profile', children: [...] }
])
```

### Shorter notation

```javascript
api('someService', payload) === api('someService').doRequest(payload)
```



