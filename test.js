'use strict'

var test = require('tape')
var Observ = require('observ')
var Readable = require('./')

test(function (t) {
  var observable = Observ('foo')
  var readable = Readable(observable)

  t.equal(readable(), 'foo')
  t.notOk(readable.set)

  observable.set('bar')
  t.equal(readable(), 'bar')

  t.end()
})
