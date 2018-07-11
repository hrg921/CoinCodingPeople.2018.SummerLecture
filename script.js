console.log('Hello JavaScript!')
var name = '한건호'
var age = 21
var isAdult = true

console.log(name, age, isAdult)
console.log(typeof name, typeof age, typeof isAdult)
console.log(age * 3, typeof (age * 3))
console.log(age + 3)
console.log(age - 3)
console.log(age / 3)
console.log(!isAdult)
console.log(!!isAdult)

age = 19

if (age > 20) {
  isAdult = true
} else {
  isAdult = false
}

console.log(age > 20)
console.log(isAdult)

age = 30
isAdult = true

while(isAdult) {
  console.log(age, isAdult)
  age = age - 1
  if (age > 20) {
    isAdult = true
  } else {
    isAdult = false
  }
}

var hobby1 = 'basketball'
var hobby2 = 'singing'
var hobby3 = 'coding'

var hobbies = ['basketball', 'singing', 'coding']
console.log(hobbies)
console.log(hobbies[1])
console.log(hobbies[0])

for (hobby of hobbies) {
  console.log(hobby)
}

function secondaryFunc(x) {
  return x * x;
}

function add(x1, x2) {
  return x1 + x2;
}

console.log(secondaryFunc(age))
console.log(add(age, age))
console.log(add(hobby1, hobby2))
console.log(add(hobbies[0], hobbies[1]))
