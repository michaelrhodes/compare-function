module.exports = function (fn, sign) {
  sign = isNaN(sign) || sign >= 0 ? 1 : -1
  return function (a, b) {
    var ra = fn(a)
    var rb = fn(b)
    return sign * (
      ra < rb ? -1 :
      ra > rb ? 1 :
      0
    )
  }
}
