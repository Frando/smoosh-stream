module.exports = flatten

function flatten (write) {
  return function (batch, cb) {
    var flattened = []
    for (var i = 0; i < batch.length; i++) {
      var content = batch[i]
      if (Array.isArray(content)) {
        for (var j = 0; j < content.length; j++) {
          flattened.push(content[j])
        }
      } else {
        flattened.push(content)
      }
    }
    write(flattened, cb)
  }
}
