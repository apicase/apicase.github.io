# Requests queues

::: danger Deprecated
**Requests queues** are removed from **0.15**   
Use [**Spawner API**](/anatomy/spawner.html) instead
:::

Asynchronous let us do a lot of good things but sometimes we need to do these things consistently. So, you have tool for that

## How to create

Apicase has `ApiQueue` to create queues of requests:

```javascript
import { ApiQueue } from '@apicase/core'

const queue = new ApiQueue()
```

Then, you can push requests using `.push()` method:

```javascript
// With apicase()
queue.push(doRequest, { url: '/api/posts' })
// With services
queue.push(SomeService.doRequest, { body: { foo: 'bar' } })
```

Additional options are separated from payload and passed as the 3rd argument:

```javascript
queue.push(
  SomeService.doRequest, 
  { url: '/api/posts' }, 
  { meta: { requiresAuth: true } }
)
```

`.push()` returns request instance, so you can listen to it

```javascript
const req = queue.push(doRequest, { url: '/api/posts' })

req.on('done', console.log)
```

Also, you can remove requests from queue just by using `.remove()` method:

```javascript
queue.remove(request)
```

## Dynamic payload

You can define request payload based on previous request result. For those, you need to pass payload function:

```javascript
/* Get posts list */
queue.push(
  GetPosts.doRequest, 
  { query: { userId: 1 } }
)

/* Then remove the first one */
queue.push(
  RemovePosts.doRequest, 
  posts => ({ params: { id: posts.body[0].id } })
)
```

## Queue events

Queue has 2 events

```javascript
/* When queue is clear */
queue.on('done', console.log)

/* When one of requests has failed */
queue.on('fail', console.log)
```



