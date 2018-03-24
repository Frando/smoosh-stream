# smoosh-stream

A function to flatten an array and call a passed-in callback. Useful e.g. with [bulk-write-stream](https://github.com/mafintosh/bulk-write-stream) to accept arrays and single objects likewise and always get a flattened array in the write callback.

# Installation

`npm install smoosh-stream`

## Usage

``` js
var smoosh = require('smoosh-stream')
var bulk = require('bulk-write-stream')

var stream = bulk.obj(smoosh(write))

function write (batch, cb) {
  batch.forEach(function (obj) {
    console.log(obj)
  })
  cb(null)
}

stream.write('first')
stream.write(['second', 'third'])
stream.write(['forth'])
stream.write('last')

// Prints:
// first
// second
// third
// forth
// last

```

## License

MIT