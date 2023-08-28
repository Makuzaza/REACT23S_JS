// const number1 = parseFloat(prompt('Please, write first number'));
// const number2 = parseFloat(prompt('Please, write second number'));
// const number3 = parseFloat(prompt('Please, write third number'));

// if (number1 >= 0 && number2 >= 0 && number3 >= 0) {
//     console.log(number1 + number2 + number3);
//     console.log(number1 * number2 * number3);
// } else if (number1 < 0 || number2 < 0 || number3 < 0) {
//     console.log(number1 + number2 + number3);
// } else if (number1 < 0 && number2 < 0 && number3 < 0) {
//     console.log('only negatives');
// } else {
//     console.log('Write correct numbers');
// }

const randomNumbers = () => {

    const num1 = Number(prompt('Please, give me the first number'));
    const num2 = Number(prompt('Please, give me the second number'));
    const num3 = Number(prompt('Please, give me the third number'));

const mult = num1 * num2 * num3;
const sum = num1 + num2 + num3;

if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    console.log('sum is: ', sum, ' and multiplication is: ', mult)
} else if (num1 < 0 || num2 < 0 || num3 < 0) {
    console.log(`sum is ${sum}`)
} else {
    console.log('all negative')
}
}
randomNumbers()

// function randomNumbers(){
// }
