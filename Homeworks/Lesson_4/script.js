console.log([1, 2, 3] + ' is the answer.'); // 1,2,3 is the answer - массив преведет к строек 1,2,3 и сконкатенирует с другой строкой 

console.log(false || true * 2); // 2 - первым выполниться true * 2 вернет 2 а при операции || вернет 2


console.log({ valueOf: () => 42 } * 2); // 84 - методе velueOf вернет 42, затем 42 *2 = 84


console.log(parseInt('7.5') + parseFloat('2.5')); // 9.5 - parseInt('7.5') = 7 , а parseFloat('2.5') = 2,5

console.log(!!'Hello' - 1); // ? 0 !!"Hello" = true = 1 => 1 -1 = 0

console.log(new String('hello') instanceof Object); // ? true

console.log((true ^ false) === (false ^ true)); // ? true

console.log(true && '5' + 5); // ? "55" - '5' + 5 = '55', оператор && пвернет последнее true ('55')

console.log({ valueOf: () => '10', toString: () => '20' } + 5); // ? "105"

console.log((5).toString() === '5'); // ? ture

console.log(null || false || undefined); // ? undefined

console.log(0 || 2 || NaN); // ? 2

console.log(1 && null && 2); // ? null

//-------------------------------------------------------------------------------------------------//

function xy() {}

console.log(typeof xy); //? function
console.log(xy instanceof Object); //? true

//-------------------------------------------------------------------------------------------------//

var str1 = String(123);
var str2 = new String(123);

console.log(typeof str1 === typeof str2); //? false
console.log(str1 === str2); //? false
console.log(str1 === String(123)); //? true
console.log(str2 === new String(123)); //? false
console.log(str1 === 123); //? false
console.log(str1 === '123'); //? true
console.log(str1 == str2); //? true
console.log(str1 == 123); //? true
console.log(str1 == '123'); //? true

//-------------------------------------------------------------------------------------------------//

var arr = [];
console.log(typeof arr); // object

var str3 = '123';
str3[0] = '2';
console.log(str3); // "123" - string иммутадельный тип данных

var p = 1 + 2 + 3 + '';
var z = '' + 1 + 2 + 3;

console.log(p, typeof p); //  "6" string
console.log(z, typeof z); //  "123" string

//-------------------------------------------------------------------------------------------------//

var o = '123x';
console.log(Number(o)); //  Nan
console.log(parseInt(o, 10)); // 123
console.log(+o); // Nan
console.log(typeof +o); //  number
console.log(Boolean(String(false))); // true

//-------------------------------------------------------------------------------------------------//

var h = [];
console.log(h ? 1 : 2); // 1

//-------------------------------------------------------------------------------------------------//

let a = a + 1;
console.log(a); // reference Error

//-------------------------------------------------------------------------------------------------//

var b = b + 1;
console.log(b); // NaN

//-------------------------------------------------------------------------------------------------//

function foo(c) {
  if (c > 0) {
    var c = c + 10;
    return c;
  }
  return c;
}
console.log(foo(15)); // 25

//-------------------------------------------------------------------------------------------------//

function foo() {
  console.log(d2);
  let d1 = '1';
  return function () {
    console.log(d1);
    console.log(d2);
  };
}

const d2 = '2';
const x = foo();

x(); // 2 1 2

//-------------------------------------------------------------------------------------------------//

function giveMeX(showX) {
  if (showX) {
    let x = 5;
  }
  return x;
}

console.log(giveMeX(false)); // ? referenceError
console.log(giveMeX(true)); // ? referenceError

console.log(x); // ? referenceError

//-------------------------------------------------------------------------------------------------//

var y = 1;

console.log(y); //  1

function car() {
  if (false) {
    var y = 2;
  }
  console.log(y);
}

car(); //  undefined
console.log(y); //  1

//-------------------------------------------------------------------------------------------------//

var i = 1;
var j = {};

(function () {
  i++;
  j.j = 1;
})();
console.log(i, j); //  2 {j: 1}

(function (i, j) {
  i++;
  j.k = 1;
})(i, j);
console.log(i, j); //  2 {j:1, k: 1}

//-------------------------------------------------------------------------------------------------//

const obj1 = {}; // 1

function User (userName, userAge, userSex) {
  this.name = userName,
  this.age = userAge,
  this.sex = userSex
}

const newUser = new User("Alex", 35, "man") //2

const person = new Object () //3

person.name = "Alex"
person.age = 35
person.sex = "man"

const obj2 = Object.create({}) //4

obj2.name = "Alex"

class Developer {
  constructor(name, age, title) {
    this.name = name,
    this.age = age,
    this.title = title
  }

  get firstName() {
    return this.name.split(' ')[0]
  }
}

const developer = new Developer("Joen Doe", 18, "Frontend") // 5

//-------------------------------------------------------------------------------------------------//

const deepEqual = (firstObj, secondObj) => {
    if (firstObj === secondObj) {
      return true; // вернет true если значения будут равны (1,1) (null, null)
    }
  
    if (
      (!isObject(firstObj) && !isArray(firstObj)) ||
      (!isObject(secondObj) && !isArray(secondObj))
    ) {
      return false;
    }
  
    if (
      !isSameType(firstObj, secondObj) ||
      Object.keys(firstObj).length !== Object.keys(secondObj).length
    ) {
      return false; // проверяем типы входных данных и их длинну
    }
  
    for (let key of Object.keys(firstObj)) {
      if (!secondObj.hasOwnProperty(key)) {
        return false;
      }
      if (!deepEqual(firstObj[key], secondObj[key])) {
        return false;
      }
    }
    return true;
  };
  
  function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"; // проверяем, является ли значение Object
  }
  
  function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]"; // проверяем, является ли значение Array
  }
  
  function isSameType(item1, item2) {
    return (
      Object.prototype.toString.call(item1) ===
      Object.prototype.toString.call(item2)
    ); // проверяем идентичность типов
  }
  
  console.log(
    deepEqual([1, 2, 3, 4, 5, [6, { a: 7 }]], [1, 2, 3, 4, 5, [6, { a: 7 }]])
  );