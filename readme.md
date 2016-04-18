# compare-function

Effortlessly compose compare functions for `Array.prototype.sort`. You provide a value accessor function, it handles the `a < b ? -1 : a > b ? 1 : 0` dance.

[![Build status](https://travis-ci.org/michaelrhodes/compare-function.svg?branch=master)](https://travis-ci.org/michaelrhodes/compare-function)

## Install
```sh
$ npm install compare-function
```

### Example
``` js
var compare = require('compare-function')

var songs = [{
  artist: 'Joy Division',
  track: 'Warsaw'
},{
  artist: 'New Order',
  track: 'Blue Monday'
},{
  artist: 'Freebass',
  track: 'Plan B'
}]

function artist (song) {
  return song.artist
}

songs.sort(compare(artist)).map(artist)
> ['Freebass', 'Joy Division', 'New Order']

songs.sort(compare(artist, -1)).map(artist)
> ['New Order', 'Joy Division', 'Freebass']
```

### License
[MIT](http://opensource.org/licenses/MIT)
