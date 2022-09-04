// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие (Пусть совершеннолетним считается пользователь, которому исполнилось 18 лет):

// const isAdult = function (num) {
//     if (isNaN(num) || num > 100) return null;
//     if (num >= 18) {
//         return !!num;
//     } else {
//         return !num;
//     }
// }
// console.log(isAdult(20));

// const isAdult = function (num) {
//     let result;
//     result = isNaN(num) || num > 100 ? null
//     : result = num >= 18 ? true : false;
//     return result ;
// }
// console.log(isAdult(120));

// 2.  Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:

// const checkMultiplicity = function (num1,num2) {
//     if (isNaN(num1) || isNaN(num2)) return null;
//     if (num1 % num2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkMultiplicity(12,3));

// const checkMultiplicity = function (num1,num2) {
//     let result;
//     result = isNaN(num1) || isNaN(num2) ? null :
//     result = num1 % num2 === 0 ? true : false ;
//     return result;
// }
// console.log(checkMultiplicity(12,8));

// 3. Проверка возможности треугольника. Создать функцию которая принимает длины сторон треугольника; функция возвращает true если треугольник возможен и false если нет

// const trianglePossibility = function (a,b,c) {
//     if (isNaN(a) || isNaN(b) || isNaN(c)) return null;
//     if( a + b > c && a + c > b && b + c > a) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(trianglePossibility(5,6,3));

// const trianglePossibility = function (a, b, c) {
//     let result;
//     result = isNaN(a) || isNaN(b) || isNaN(c) ? null :
//     result = a + b > c && a + c > b && b + c > a ? true : false;
//   return result;
// };
// console.log(trianglePossibility(5,4,3));

// 4. написть функцию, которая принимает число и возвращает сумму нечетных чисел от 1 до указанного числа

// const returnSumNams = function (num) {
//     if (isNaN(num)) return null;
//     let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (i % 2 !== 0) sum += i;
//   }
//   if (sum === 0) return null;
//   return sum;
// };
// console.log(returnSumNams(12));

// const returnSumNams = function (num) {
//     if (isNaN(num)) return null;
//   let sum = 0;
//   let i = 1;
//   while (i < num) {
//     if (i % 2 !== 0) sum += i;
//      i++;
//   }
//   if (sum === 0) return null;
//   return sum;
// };
// console.log(returnSumNams(9));

// const returnSumNams = function (num) {
//     if (isNaN(num)) return null;
//     let sum = 0;
//     let i = 1;
//     do {
//         if (i % 2 !== 0) sum += i;
//       i++;
//     } while (i < num);
//     if (sum === 0) return null;
//     return sum;
//   }
//   console.log(returnSumNams(14));

// 5. Создать функцию, которая будет проверять, является ли число простым. Простым является неотрицательное число, которое делится нацело только на самого себя или на 1.

// const simpleСheckNum = function (num) {
//   if (isNaN(num) || num <= 0) return null;
//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) sum += i;
//   }
//   if (sum === num) return num + " простое число";
//   else return "число не простое !";
// };
// console.log(simpleСheckNum(5));

// const simpleСheckNum = function (num) {
//   if (isNaN(num) || num <= 0) return null;
//   let sum = 0;
//   let i = 1;
//   while (i <= num) {
//     if (num % i === 0) sum += i;
//     i++;
//   }
//   if (sum - 1 === num) return num + " простое число";
//   else return "число не простое !";
// };
// console.log(simpleСheckNum(3));

// const simpleСheckNum = function (num) {
//   if (isNaN(num) || num <= 0 ) return null;
//   let sum = 0;
//   let i = 1;
//   do {
//     if (num % i === 0) sum += i;
//     i++;
//   } while (i <= num);
//   if (sum - 1 === num) return num + " простое число";
//   else return "число не простое !";
// };
// console.log(simpleСheckNum(3));
