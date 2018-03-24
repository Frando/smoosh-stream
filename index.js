module.exports = flatten

function flatten (write) {
  return function (batch, cb) {
    var flattened = []
    for (var i = 0; i < batch.length; i++) {
      var content = batch[i]
      if (Array.isArray(content)) {
        Array.prototype.push.apply(flattened, content)
      } else {
        flattened.push(content)
      }
    }
    write(flattened, cb)
  }
}
