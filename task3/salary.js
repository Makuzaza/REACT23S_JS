let hours = prompt('Please, write how many hours did you work in the day');
let hourly_salary = prompt('Please, write your hourly salary');
if (hours <= 7) {
    console.log(hours * hourly_salary)
} else if (7 < hours <= 9) {
    console.log((hours * hourly_salary) + ((hours - 7) * 0.5) * hourly_salary)
} else {
    console.log((hours * hourly_salary) + hourly_salary + ((hours - 9) * hourly_salary))
}

// let hours = prompt('Please, write working hours in the day')
// let hourly_salary = prompt('Please, write your hourly salary')
// switch (hours) {
//    case (hours <= 7):
//        console.log(hours*hourly_salary)
//        break;
//    case (7 < hours <= 9):
//        console.log((hours * hourly_salary) + ((hours - 7) * 0,5) * hourly_salary)
//        break;
//     case (hours > 9):
//         console.log((hours + (hours - 9) * hourly_salary) + (2 * 0,5 * hourly_salary))
//         break;
//     default:
//         console.log('Are sure that you write correct?')
//         break;
// }