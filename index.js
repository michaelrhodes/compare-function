module.exports = function (sign, fn) {
  if (typeof sign == 'function') fn = sign, sign = 1
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
