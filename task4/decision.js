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

let userName = prompt('Please, write your name?');
if (userName) {
    console.log(`Hello, ${userName}`);
} else {
    console.log('Hello')
}

let userQuestion;
do {
    userQuestion = prompt('Please, write your question?');
        if (userQuestion !== '') {
           console.log(userName + " asked: " + userQuestion);
           break;
        } else {
            console.log('Write your question correctly')
        }
    }
while (true);

let randomNumber = Math.floor(Math.random() * 10) + 1;

let decisionStatements = randomNumber;

switch (decisionStatements) {
        case 1:
            console.log('The stars say yes, go for it!')
            break;
        case 2:
            console.log('Trust your instincts and take the leap')
            break;
        case 3:
            console.log('Hmm, better try again later')
            break;
        case 4:
            console.log('Consider all options before making a move??')
            break;
        case 5:
            console.log('Outlook is bright, proceed with confidence')
            break;
        case 6:
            console.log('Seek advice from a trusted friend before deciding')
            break;
        case 7:
            console.log('Signs point to unexpected opportunities')
            break;
        case 8:
            console.log("It's a toss-up, make a choice and see what happens")
            break;
        case 9:
                console.log('Take a step back and reassess before moving forward')
                break;
        case 10:
                console.log("Not the right time, patience will bring better results")
                break;
    }
