// 456,6,',' => '000,456'
export const formatDigit = (num, length, divider) => {
  let sum = '0' // in case some random input
  if (typeof num === 'string') {
    sum = num
  } else if (typeof num === 'number') {
    sum = num.toString()
  }
  const _len = sum.length
  const _fullLen = length && typeof length === 'number' ? length : _len
  if (_len >= _fullLen) {
    sum = sum.substring(_len - _fullLen, _len)
  } else {
    for (let i = 0; i < _fullLen - _len; i++) {
      sum = '0' + sum
    }
  }
  // 1000000 => 1,000,000
  if (divider !== undefined && typeof divider === 'string') {
    if (divider === '') {
      sum = sum.replace(/\B(?=(\d{3})+(?!\d))/g, 'Z')
    } else {
      sum = sum.replace(/\B(?=(\d{3})+(?!\d))/g, divider)
    }
  }
  sum = sum.split('').reverse()
  if (divider === '') {
    sum = sum.map(d => (d === 'Z' ? '' : d))
  }
  return sum
}

const _getArr = (a, b) => new Array(b - a + 1).fill(0).map((i, index) => a + index)
//'9','2'  =>  [9,0,1,2]
export const getArr = (x, y) => {
  const a = parseInt(x, 10)
  const b = parseInt(y, 10)
  if (a === b) {
    return [a]
  }
  if (a < b) {
    return _getArr(a, b)
  }
  if (a >= b) {
    return [..._getArr(a, 9), ..._getArr(0, b)]
  }
}
