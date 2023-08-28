// let hours = prompt('Please, write how many hours did you work in the day');
// let hourly_salary = prompt('Please, write your hourly salary');
// if (hours <= 7) {
//     console.log(hours * hourly_salary);
// } else if (7 < hours <= 9) {
//     console.log((hours * hourly_salary) + ((hours - 7) * 0.5) * hourly_salary);
// } else {
//     console.log((hours * hourly_salary) + hourly_salary + ((hours - 9) * hourly_salary));
// }

const hours = parseFloat(prompt('Please, write how many hours did you work in the day'));
const hourly_salary = parseFloat(prompt('Please, write your hourly salary'));

let daySalary = 0;

if (hours <= 7) {
    daySalary = hours * hourly_salary;
} else if (7 < hours && hours <= 9) {
    daySalary = (hours * hourly_salary) + ((hours - 7) * 0.5) * hourly_salary;
} else {
    daySalary = ((hours * hourly_salary) + hourly_salary + ((hours - 9) * hourly_salary))
}

console.log(daySalary);

//console.log('Your days salary is: ${daySalary.toFixed(2)}');

// let hours = prompt('Please, write working hours in the day');
// let hourly_salary = prompt('Please, write your hourly salary');
// switch (hours) {
//    case (hours <= 7):
//        console.log(hours*hourly_salary);
//        break;
//    case (7 < hours <= 9):
//        console.log((hours * hourly_salary) + ((hours - 7) * 0,5) * hourly_salary);
//        break;
//     case (hours > 9):
//         console.log((hours + (hours - 9) * hourly_salary) + (2 * 0,5 * hourly_salary));
//         break;
//     default:
//         console.log('Are sure that you write correct?');
//         break;
// }