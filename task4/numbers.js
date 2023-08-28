// 1. let number = 1;
// while (number <= 100) {
//     console.log(number);
//     number = number + 2;
// }

// let number = 0;
// while (number <= 100) {
//     console.log(number);
//     number = number + 2;
// }

// let foo = 'bar';
// console.log(foo);
// for (let foo = 0; foo <= 10; foo++) {
//     console.log(foo)
// }
// console.log(foo)

// for (let i = 1; i < 100; i +=2) {
//     console.log(i)
//     }

// for (let i = 0; i < 100; i++) {
//     if (i % 2 != 0) {
//         console.log(i)
//     }
// }

// 2. var s = "";
// for(var i = 2; i < 100; i += 2) {
//   s += i + " ";
// }
// console.log(s);

// let result2 = "";
// for (let i = 2; i <= 50; i += 2) {
//     result2 += i + " ";
//     if (i != 50) {
//         result2 += (100 - i) + " ";
//     }
// }
// console.log(result2);

// function task2 () {
//     let result2 = "";
//     for (let i = 2; i <= 50; i += 2) {
//         result2 += i + " ";
//         if (i != 50) {
//             result2 += (100 - i) + " ";
//         }
//     }
//     return result2;
// }

// console.log(task2());

// let number = 0;
// let number1 = 98;
// do {
//     while (number < 100) {
//         number = number + 2;
//         number1 = 100 - number;
//         console.log(number, number1);
//     }
//     if (number >= 100) {
//         break;
//     }
// } while (true);

// let distance;
// let time;

// 3. do {
//     distance = prompt("Please, write the distance in km");
    
//     if (distance == 0) {
//         console.log('distance 0 - game over')
//         break;
//     }
//     time = prompt("Please, time in hours");
//     average_speed = distance / time;
//     alert("Your average speed is " + average_speed + "km/h");
  
// } while (true);

// 4. let even = 0;
// for (let counter = 0; counter < 20; counter++) {
//     let input = Number(prompt('enter a number'));
//     if (input % 2 == 0) {
//         even++
//     }
// }
// console.log('There was', even, 'even numbers');

// 5. let input;
// let sum = 0;
// let count = 0;

// while (input !=0) {
//     input = Number(prompt('enter a number'));
//     sum += input;
//     count++;
// }
// average = sum/(count-1)

// console.log('There is sum ' + average);

// 6. let input;
// let average = 0;
// let sum = 0;

// for (let counter = 0; counter <= 25; counter++) {
//     input = Number(prompt('enter a number'));
//     sum += input;
//     average = sum/counter
// }

// average = sum/25

// console.log('There was an average number', average);

// 7. let input;
// let average = 0;
// let sum = 0;
// let counter = 0; 
// let answer

// do {
//     do {
//     input = Number(prompt('Enter a number'));
//     sum += input;
//     counter++;
//     answer = prompt('Do you want to continue giving numbers?(y/n)')
//     if (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n') {
//         console.log('Please enter "y" or "n"');
//     }
// } while (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n'); 
//     if (answer.toLowerCase() == 'y') {
//         continue;
//     } else {
//         break;
//     }
// } while (true);

// average = sum / counter;
// console.log('The average of the numbers is', average);

// 8. 
// let countNumbers;
// let number;
// let smallest;

// do {
//     countNumbers = Number(prompt('Enter, how many numbers do you want to input'));
// } while (countNumbers < 0);

// smallest = Number(prompt('Enter 1st number'));

// for (let i = 1; i < countNumbers; i++) {
//     let x = Number(prompt('Enter next number '));
//     if (x < smallest) {
//         smallest = x;
//     }
//     console.log(`on step ${i} the smallest number is ${smallest}`);
// }
// console.log('The smallest number is', smallest);

// 9.
// let biggest1;
// let biggest2;

// biggest1 = Number(prompt('Enter number 1'));
// biggest2 = Number(prompt('Enter number 2'));
// if (biggest2 > biggest1) {
//     let temp = biggest1;
//     biggest1 = biggest2;
//     biggest2 = temp;
// }
// for (let i = 2; i < 10; i++) {
//     let x = Number(prompt(`Enter number ${i+1}`));
//     if (x > biggest2 && x < biggest1) {
//         biggest2 = x;
//     } else if (x > biggest2 && x > biggest1) {
//         biggest2 = biggest1;
//         biggest1 = x;
//     }

// console.log(`on step ${i} the biggest numbers are ${biggest1} and ${biggest2}`);
// }
// console.log('The biggest number are', biggest1, biggest2);

// 10.
let number;
let biggest;
let smallest;
let sum = 0;
let summa = 0;
let average;

biggest = Number(prompt('Enter number 1'));
smallest = Number(prompt('Enter number 2'));
if (smallest > biggest) {
    let temp = biggest;
    biggest = smallest;
    smallest = temp;
}
sum = biggest + smallest;

for (let i = 2; i < 10; i++) {
    let x = Number(prompt(`Enter number ${i+1}`));
    sum = sum + x;
    if (x > biggest) {
        biggest = x;
    }
    if (x < smallest) {
        smallest = x;
    }
    console.log(`on step ${i} the biggest number is ${biggest}`);
    console.log(`on step ${i} the smallest number is ${smallest}`);
}

average = sum / 10;

console.log('The biggest number is', biggest);
console.log('The smallest number is', smallest);
console.log('The sum of numbers is', sum);
console.log('The average number is', average);