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

let input;
let countNumbers = 0; 
let smallest;

countNumbers = Number(prompt('Enter, how many numbers do you want to input'));

do {
    input = Number(prompt('Enter number'));
    for (let i = 0; i < countNumbers; i++) {
            input = Number(prompt('Enter a number'));
        
         }
} while (countNumbers > 0);
smallest = Math.min(smallest, input);
console.log('The smallest number is', smallest);




