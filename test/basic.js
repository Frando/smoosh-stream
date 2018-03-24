var smoosh = require('..')
var bulk = require('bulk-write-stream')
var tape = require('tape')

tape('smoosh with bulk-write-stream', function (t) {
  var stream = bulk.obj(smoosh(write))

  t.plan(5)

  var i = 0
  function write (batch, cb) {
    batch.forEach(function (obj) {
      i++
      t.same(obj, i, 'result matches')
    })
    cb(null)
  }

  stream.write(1)
  stream.write([2, 3])
  stream.write([4])
  stream.write(5)
})
