'use strict'

module.exports = function Readable (observable) {
  return function listen (fn) {
    return observable(fn)
  }
}
