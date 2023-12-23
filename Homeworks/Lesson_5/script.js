function logger() {
    console.log(`I output only external context: ${this.item}`);
  }
  const obj = { item: 'some value' };

  logger.call(obj)
  logger.apply(obj)
  logger.bind(obj)()

  // Требуется создать функцию createCache, которая возвращает объект для кэширования результатов выполнения других функций. Кэш должен хранить значения, которые были возвращены функцией при определенных входных параметрах.

// Функция createCache должна иметь два метода:

// cache(fn): принимает функцию fn и возвращает новую функцию, которая кэширует результаты выполнения fn. Если кэш уже содержит результат для данного набора входных параметров, то новая функция должна возвращать сохраненное значение, не вызывая fn.
// clear(): очищает весь кэш.

var myCache = createCache();

function createCache () {

  return {
       cacheData: {},
      cache(fn) {
         return (...args) => {
          
          const keyCache = JSON.stringify(args)
         if(!this.cacheData[keyCache]) {
          this.cacheData[keyCache] = fn(...args)
          console.log(`Выполнил: ${this.cacheData[keyCache]}`)
         }
         console.log(`Выполнил: ${this.cacheData[keyCache]} значение взято из кэша`)
         return this.cacheData[keyCache]
         } 
      },
      clear() {
          this.cacheData = {}
          console.log(`"Кэш очищен" ${this.cacheData}`)
      }
  }
}

function multiplyByTwo(x) {
  return x * 2;
}

var cachedMultiplyByTwo = myCache.cache(multiplyByTwo);

console.log(cachedMultiplyByTwo(5)); // Вывод: Выполнил: 10
console.log(cachedMultiplyByTwo(5)); // Вывод: Выполнил: 10 (значение взято из кэша)

console.log(cachedMultiplyByTwo(3)); // Вывод: Выполнил: 6
console.log(cachedMultiplyByTwo(3)); // Вывод: Выполнил: 6 (значение взято из кэша)

myCache.clear(); // Вывод : Кэш отчищен

console.log(cachedMultiplyByTwo(5)); // Вывод: Выполнил: 10

//////////////////////////////////////////

// Бонус
// Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

// Код здесь

// let  myBind = function (obj) {
    
// }
Function.prototype.mybind=function(obj={},...args){
  let fn=this 
  if(typeof fn !== "function"){
    throw new Error('Invalid function provided for binding.');
  }
  return function(...args2){
      fn.apply(obj,[...args,...args2])
  }
}

//