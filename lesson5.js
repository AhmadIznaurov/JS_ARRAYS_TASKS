// Задания (массивы и стрелочные ф-ии)

// Задача 1

// Допиши код так, чтобы в переменной `positive` остались только положительные числа из массива


    // const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    // const positive = [];
    // for (let i = 0; i < array.length; i++) {
    //    if(array[i] > 0) {
    //     positive.push(array[i])
    // }
    // }

    // console.log(positive)

const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
const positive = array.filter((num) => num > 0)
console.log(positive); 



// Задача 2

// Напиши фильтр, который пропустит только те элементы (объекты), у которых свойство error равно false. 
// Выведи полученный результат в консоль.


    const messages = [
      {message: 'hello', error: true},  
      {message: 'javascript', error: false},  
      {message: 'lincode', error: true},  
      {message: 'react', error: true},  
      {message: 'angular', error: false}, 
      {message: 'es6', error: false}, 
    ];
    
    const falseNum = messages.filter((neiro) => neiro.error === false)
    console.log(falseNum);

// Задача 3*

// Есть следующий массив:
// Используя метод `.map` создай новый массив, где слова короче пяти символов заменены на звездочку.
    
const words= ['lincode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
    const newWords = words.map((what) => what.length <= 5 ? '*' : what)
    console.log(newWords);

    // const words = ['lincode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
    // const newWords = words.map((word) => {
//   if (word.length <= 5) {
//     return '*';
//   } else {
//     return word;
//   }
// });
// console.log(newWords);


// Задача 4

// Измени следующие функцию на стрелочные
 const sendMessage = (message) => {

   const half = (number) => {
      return number / 2;
    }

   const showConsole = (show) => {
      console.log('lincode');
    }

   const concatWords = (first, second) => {
      return first + second;
    }

    console.log(message);
    console.log(half(4));
    showConsole('lincode');
    console.log(concatWords(4,9));

    }

    sendMessage( 'Hello world');
 


// Задача 5

// Измени следующие функции из стрелочных в обычные
    function justText () {
      return  'lincode';
    } 
   function logging (text) {
     console.log(text);
   }
    
    function add (x,y) {
      const  z = 3;
      return z * x * y;
    }
    
    function onlyPositive (number) {
      if(number < 0) {
        return false;
      }
      return true;
    }
