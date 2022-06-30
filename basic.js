// 1. QUOTIENT AND REMAINDER.
// ANSWER.
// function findQuoRem (num1, num2){
//     let quo = Math.floor(num2/num1);
//     let rem = num2%num1;
//     return (quo+" "+rem);
// }
// console.log(findQuoRem(5,20))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2.CUBE OF NUMBER.
// ANSWER.
// function cubeOfNumb (num){
//     let cub = Math.pow(num, 3);
//     return cub;
// }
// console.log(cubeOfNumb(-3))


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3.CELSIUS TO FAHRENHEIT.
// ANSWER.

// function celsiusToFahrenheit (celsi){
//     let fahre = (9/5)*celsi+32;
//     return fahre
// }
// console.log(celsiusToFahrenheit(32))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 4.FAHREHEIT TO CELSIUS.
// ANSWER.

// function fahrenheitToCelsius (fari){
//     let far = ((fari-32)*(5/9))
//     return far
// }
// console.log(fahrenheitToCelsius(89.6))


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 5. SWAP TWO NUMBRS.
// ANSWER.

// function swapTwoNum (num,num1){
//     return (num+","+num1)
// }
// console.log(swapTwoNum(10,30))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 6.AVERAGE OF SALARY
// ANSWER.

// function averageSalary (a,b,c,d,e){
//     let avr =(a+b+c+d+e)/5
//     return avr 
// }
// console.log(averageSalary(10,20,30,40,50))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 7.FIND THE PROFIT.
// ANSWER

// function profit (sell, buy){
//     let pro = (sell-buy)
//     return pro
// }
// console.log(profit(120,100))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8.FIND THE FIRST DIGIT
// ANSWER.
 
// function firstDigit (num){
//     if(num>=100 && num<=999){
//         let digit = Math.floor(num/100)
//         return digit
//     }else{
//         return "tring numbers between 100 to 999."
//     }
// }
// console.log(firstDigit(75))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 9.SUM OF LAST DIGITS.
// ANSWER.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>all digit number..

// function lastDigit (num){
//     let n = num;
//     let sum = 0;
//     while(n>0){
//         rem = n%10;
//         sum = sum+rem;
//         n = Math.floor(n/10);
//     }
//     return sum;
// }
// console.log(lastDigit(47))

// >>>>>>>>>>>>>>>>>>>>>>>first and last digit numbers.

// function lastDigit (num){
//     let n = num;
//     let sum = 0;
//     while(n>99){
//         rem = n%10;
//         div = Math.floor(n/100);
//         sum = rem+div;
//         return sum;
//     }
// }
// console.log(lastDigit(474))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 10.REVERSE NUMBER.
// ANSWER.

// function reverseNumb (num){
//     let n = num;
//     let rev = 0;
//     while(n>0){
//         rem = n%10;
//         rev = ((rev*10)+(rem))
//         n = Math.floor(n/10)
//     }
//     return rev;
// }
// console.log(reverseNumb(234))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

