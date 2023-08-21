// switch(expression) {
//    case x:
//        break;
//    case y:
//        break;
//    default:
// }

let season = prompt('What is your favourite season?').toLocaleLowerCase()
console.log(season)
switch (season) {
    case 'spring':
        console.log('So you like a spring')
        break;
    case 'summer':
        console.log('So you like a summer')
        break;
    case 'autumn':
        console.log('So you like a autumn')
        break;
    case 'winter':
        console.log('What??')
        break;
    default:
        console.log('Are sure that you write correct name?')
        break;
}