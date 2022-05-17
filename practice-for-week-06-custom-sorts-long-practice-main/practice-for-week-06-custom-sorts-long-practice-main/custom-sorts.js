function ageSort(users) {
  // Your code here
  return users.sort((a, b) => {
    return a.age - b.age
  })
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 1) return 1
    if (a % 2 === 1 && b % 2 === 0) return -1
    return a - b
  })
}

function validAnagrams(s, t) {

  // let val1 = (s.split('').sort().join(''))
  // let val2 = (t.split('').sort().join(''))

  return (s.split('').sort().join('')) === (t.split('').sort().join(''))

}

function reverseBaseSort(arr) {
  // Your code here

  return arr.sort((a, b) => {
    if (a.toString().length === b.toString().length) return a - b
    else if (a.toString().length < b.toString().length) return 1
    else if (a.toString().length > b.toString().length) return -1
  })
}

function frequencySort(arr) {
  // Your code here

  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i]
    if (obj[key] === undefined) {
      obj[key] = 1
    } else {
      obj[key]++
    }
  }


  return arr.sort((a, b) => {
    //console.log('A', a, 'objA', obj[a], '***', "B", b, 'objB', obj[b])
    return obj[a] - obj[b] || a - b
  })

  // return keys.sort((a, b) => {
  //   return
}

const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1];

console.log(frequencySort(arr2))

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
