'use strict'

var pipe = require('value-pipe')
var Readable = require('./')

module.exports = ReadableStruct (data) {
  return pipe(Readable, Struct)(data)
}
