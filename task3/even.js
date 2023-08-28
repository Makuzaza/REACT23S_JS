// const number = parseFloat(prompt('Please, write  number'));
// if (number >= 0 && number % 2 == 0) {
//     console.log(`number ${number} is even`);
// } else if (number < 0) {
//     console.log('please enter a positive number')
// } else {
//     console.log(`number ${number} is odd`);
// }


// let num;
// do {
//     num = prompt("Write a number: ");
//     if (num == 0) {
//         break;
//     }
//     if (num < 0) {
//         alert('Please enter a positive number');
//     }
//     if (num % 2 == 0) {
//         alert('Number ' + num + ' is even');
//     }
//     else {
//         alert('Number ' + num + ' is odd')
//     }
// } while (true);

for (let num; num !== 0;) {
    num = Number(prompt("Give a number: "));
    if (num < 0) {
        alert('Please, enter a positive number: ');
    }
    else if (num != 0) {
        if (num % 2 == 0) {
            alert ('Number ' + num + ' is even');
        }
        else {
        alert ('Number ' + num + ' is odd');
        }
    } 
}