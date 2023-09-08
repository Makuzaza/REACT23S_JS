// connect to html file
let age;
let current;

const insuranceRisk = () => {
    let score = 500;
    let habits = '';
    // define question and answer
    const age1 = document.querySelector('#age1');
    const age2 = document.querySelector('#age2');
    const age3 = document.querySelector('#age3');
    const age4 = document.querySelector('#age4');
    const age5 = document.querySelector('#age5');
    const age6 = document.querySelector('#age6');
    const age7 = document.querySelector('#age7');

    const current1 = document.querySelector('#current1');
    const current2 = document.querySelector('#current2');
    const current3 = document.querySelector('#current3');

    const name = document.querySelector('#name').value;

    const answer = document.querySelector('#answers');

console.log(name)

let score_age;

if (age1.checked) {
    score_age = score;
    console.log(score_age);
} else if (age2.checked) {
    score_age = score + (score*0.1);
    console.log(score_age);
} else if (age3.checked) {
    score_age = score + (score*0.3);
    console.log(score_age);
} else if (age4.checked) {
    score_age = score + (score*0.6);
    console.log(score_age);
} else if (age5.checked) {
    score_age = score + (score*1);
    console.log(score_age);
} else if (age6.checked) {
    score_age = score + (score*1.5);
    console.log(score_age);
} else if (age7.checked){
    score_age = score + (score*2.1);
    console.log(score_age)
}

let score_current = score_age;

// if (current1.checked) {
//     score_current = score_current + (score_age*0.01);
//     current = current1.value
//     console.log(score_current);
// }
// if (current2.checked) {
//     score_current = score_current + (score_age*0.01);
//     current = current + '' + current2.value
//     console.log(score_current);
// }
// if (current3.checked) {
//     score_current = score_current + (score_age*0.01);
//     current = current + ', ' + current3.value
//     console.log(score_current);
// }

let checkboxes = document.querySelectorAll('input[name="current"]');
let values = [];
for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
        values.push(checkboxes[i].value);
        score_current = score_current + (score_age*0.01);
    }
}
console.log(values)
console.log(score_current)

// let toppingCount = 0;
// let addPrice = 0;

// if (topping1.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = topping1.value;
//     console.log(toppings);
// } 
// if (topping2.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + '' + topping2.value;
//     console.log(toppings);
// } 
// if (topping3.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping3.value;
//     console.log(toppings);
// } 
// if (topping4.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping4.value;
//     console.log(toppings);
// } 
// if (topping5.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping5.value;
//     console.log(toppings);
// } 
// if (topping6.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping6.value;
//     console.log(toppings);
// } 
// if (topping7.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping7.value;
//     console.log(toppings);
// } 
// if (topping8.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping8.value;
//     console.log(toppings);
// } 
// if (topping9.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping9.value;
//     console.log(toppings);
// } 
// if (topping10.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping10.value;
//     console.log(toppings);
// } 
// if (topping11.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping11.value;
//     console.log(toppings);
// } 
// if (topping12.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping12.value;
//     console.log(toppings);
// }
// if (topping13.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping13.value;
//     console.log(toppings);
// }
// if (topping14.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping14.value;
//     console.log(toppings);
// }
// if (topping15.checked) {
//     toppingCount = toppingCount + 1;
//     toppings = toppings + ', ' + topping15.value;
//     console.log(toppings);
// }
// console.log(toppingCount)
 
// let sum = 0;
// toppingCount = Number(toppingCount);

// if (toppingCount > 4) { 
//     sum = size + delivery + (toppingCount-4)*0.5;
//     answer.innerHTML = `Order for ${name} <br> Toppings: ${toppings} <br> Delivery: ${delivery_way} <br> Price: ${sum}€`;
// } else if (toppingCount <= 4) {
//     sum = size + delivery;
//     answer.innerHTML = `Order for ${name} <br> Toppings: ${toppings} <br> Delivery: ${delivery_way} <br> Price: ${sum}€`;
// } else {
//         answer.textContent = 'Please, choose options';
//     }
}
