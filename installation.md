# Installation

## Install core package

```bash
npm install @apicase/core
```

## Install adapters

All official adapters are named as `@apicase/adapter-name`

For example:

```bash
npm install @apicase/adapter-fetch
```

## Usage

```javascript
import { apicase } from '@apicase/core'
import fetch from '@apicase/adapter-fetch'

const doFetchRequest = apicase(fetch)

doFetchRequest({ url: '/posts' })
```

## Additional packages

* [**@apicase/services**](https://github.com/apicase/services) - powerful services to create smart and flexible API layer
* [**@apicase/spawner**](https://github.com/apicase/spawner) - painless control of your API requests flow

## Official adapters

* [**fetch**](https://github.com/apicase/adapter-fetch "fetch")
* [**XMLHttpRequest**](https://github.com/apicase/adapter-xhr "XMLHttpRequest")



