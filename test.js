var test = require('tape')
var compare = require('./index')

test('it works with primitive values', function (assert) {
  var numbers = [3, 5, 0, 1, 2, 5]

  function value (val) {
    return val
  }

  assert.deepEqual(
    numbers.sort(compare(value)),
    [0, 1, 2, 3, 5, 5],
    'ascending by default'
  )

  assert.deepEqual(
    numbers.sort(compare(-1, value)),
    [5, 5, 3, 2, 1, 0],
    'can be made descending'
  )

  assert.end()
})

test('it works with objects', function (assert) {
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

  assert.deepEqual(
    songs.sort(compare(artist)).map(artist),
    ['Freebass', 'Joy Division', 'New Order'],
    'ascending by default'
  )

  assert.deepEqual(
    songs.sort(compare(-1, artist)).map(artist),
    ['New Order', 'Joy Division', 'Freebass'],
    'can be made descending'
  )

  assert.end()
})
