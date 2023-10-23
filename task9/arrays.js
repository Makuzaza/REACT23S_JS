// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.
const names = ['David', 'Ann', 'Leia', 'Mathew', 'Mark']
document.getElementById('task1').textContent = names;

// Task 2
// Print the second item of the array from the task 1.

document.getElementById('task2').textContent = names[1];

// Task 3
// Print the length of the array.

document.getElementById('task3').textContent = names.length;

// Task 4
// Print the last item of the array

document.getElementById('task4').textContent = names[names.length - 1];

// Task 5
// Add Peter as the last item to the array and print the whole array

names.push('Peter')
document.getElementById('task5').textContent = names;

// Task 6
// Print the array with spaces, not commas

document.getElementById('task6').textContent = names.join(' ')

// Task 7
// Replace Mathew in the array with Lisa and Abraham 

names.splice(3,1,'Lisa', 'Abraham');
document.getElementById('task7').textContent = names;
// Task 8
// Sort the array in the alphabetical order and print it

names.sort();
document.getElementById('task8').textContent = names;

// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.

const numbers = [1, 7, 45, 32, 27, 86]
document.getElementById('task9').textContent = numbers.sort((a,b) => a - b);

// Task 10
// Randomize the numbers array.

document.getElementById('task10').textContent = numbers.sort((a,b) => 0.5 - Math.random());

// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.

numbers.sort((a,b) => a - b);
document.getElementById('task11').textContent = numbers[0];

numbers.sort((a,b) => a - b);
document.getElementById('task12').textContent = numbers[numbers.length - 1];

// let scores = [40, 100, 1, 5, 25, 10]
// scores.sort((a,b) => 0.5 - Math.random());

// const players = [
//     {
//         name: 'Joe',
//         team: 'Hoks',
//         score: 45
//     },
//     {
//         name: 'Mike',
//         team: 'Hoks',
//         score: 50
//     },
//     {
//         name: 'Lisa',
//         team: 'Luks',
//         score: 30
//     },
//     {
//         name: 'Huk',
//         team: 'Hoks',
//         score: 43
//     },
//     {
//         name: 'Ann',
//         team: 'Luks',
//         score: 55
//     }
// ];

// document.querySelector('#task5').textContent = players;
// players.sort((a,b) => {
//     if (a.score < b.score) {
//         return -1;
//     } else {
//         return 1;
//     }
// });
// console.log(players)

