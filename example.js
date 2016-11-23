// Challenge area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    } else {
      reject('Not numbers')
    }
  })
}

addPromise(2, 2).then(function (num) {
  console.log('promise success', num)
}, function (err) {
  console.log('promise error', err)
})

addPromise(2, 'str').then(function (num) {
  console.log('promise success', num)
}, function (err) {
  console.log('promise error', err)
})
