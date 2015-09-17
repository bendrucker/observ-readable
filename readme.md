# observ-readable [![Build Status](https://travis-ci.org/bendrucker/observ-readable.svg?branch=master)](https://travis-ci.org/bendrucker/observ-readable)

> Create a read-only observable interface


## Install

```
$ npm install --save observ-readable
```


## Usage

```js
var Readable = require('observ-readable')
var Observ = require('observ')
var observable = Observ('foo')
var readable = Readable(observable)

readable()
//=> foo

readable.set('bar')
//=> TypeError: readable.set is not a function
```

## API

#### `Readable(observable)` -> `function`

##### observable

*Required*  
Type: `function`

An observable to wrap.


## License

MIT © [Ben Drucker](http://bendrucker.me)
