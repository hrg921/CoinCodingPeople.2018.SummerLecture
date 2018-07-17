document.body.innerHTML = '<div><strong>hello javascript</strong></div>'

var name = '한건호'
var age = 21
var isCouple = false
const BIRTHDAY = 980921

document.body.innerHTML += '<h1>' + name + '</h1><br>'
document.body.innerHTML += age
document.body.innerHTML += '<br>'
document.body.innerHTML += isCouple
document.body.innerHTML += '<br>'
document.body.innerHTML += '<strong>' + BIRTHDAY + '<strong><br>'

var isAdult
age = 19

if (age > 20) {
  isAdult = true
} else {
  isAdult = false
}

document.body.innerHTML += '<h1>그는 어른인가?' + isAdult + '</h1><br>'

age = 30
isAdult = true

while(isAdult) {
  if (age > 20) {
    isAdult = true
  } else {
    isAdult = false
  }
  age -= 1
  document.body.innerHTML += '<strong>그는' + age + '살이고 어른인가?' + isAdult + '</strong><br>'
}

var hobby1 = 'basketball'
var hobby2 = 'singing'
var hobby3 = 'coding'

var hobbies = ['basketball', 'singing', 'coding']

for (var i = 0; i < 3; i++) {
  document.body.innerHTML += '<h1>내 ' + (i + 1) + '번째 취미는 ' + hobbies[i] + ' 야</h1>'
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
