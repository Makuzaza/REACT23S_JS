// connect to html file
let size = 0;
let delivery;
let toppings;

const pizzaPrice = () => {
    let toppings = '';
    // define question and answer
    const size1 = document.querySelector('#size1');
    const size2 = document.querySelector('#size2');
    const size3 = document.querySelector('#size3');
    const size4 = document.querySelector('#size4');

    const topping1 = document.querySelector('#topping1');
    const topping2 = document.querySelector('#topping2');
    const topping3 = document.querySelector('#topping3');
    const topping4 = document.querySelector('#topping4');
    const topping5 = document.querySelector('#topping5');
    const topping6 = document.querySelector('#topping6');
    const topping7 = document.querySelector('#topping7');
    const topping8 = document.querySelector('#topping8');
    const topping9 = document.querySelector('#topping9');
    const topping10 = document.querySelector('#topping10');
    const topping11 = document.querySelector('#topping11');
    const topping12 = document.querySelector('#topping12');
    const topping13 = document.querySelector('#topping13');
    const topping14 = document.querySelector('#topping14');
    const topping15 = document.querySelector('#topping15');

    const delivery_way = document.querySelector('#delivery').value;

    const name = document.querySelector('#name').value;

    const answer = document.querySelector('#answers');

// console.log(name)
// console.log(size1)
// console.log(size2)
// console.log(size3)
// console.log(size4)
// console.log(topping1)
// console.log(delivery)

if (size1.checked) {
    size = Number(size1.value);
    console.log(size);
} else if (size2.checked) {
    size = Number(size2.value);
    console.log(size);
} else if (size3.checked) {
    size = Number(size3.value);
    console.log(size);
} else {
    size = Number(size4.value);
    console.log(size)
}

if (delivery_way == "delivery home") {
    delivery = 5;
    console.log(delivery);
} else {
    delivery = 0;
    console.log(delivery)
}

let toppingCount = 0;
let addPrice = 0;

if (topping1.checked) {
    toppingCount = toppingCount + 1;
    toppings = topping1.value;
    console.log(toppings);
} 
if (topping2.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + '' + topping2.value;
    console.log(toppings);
} 
if (topping3.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping3.value;
    console.log(toppings);
} 
if (topping4.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping4.value;
    console.log(toppings);
} 
if (topping5.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping5.value;
    console.log(toppings);
} 
if (topping6.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping6.value;
    console.log(toppings);
} 
if (topping7.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping7.value;
    console.log(toppings);
} 
if (topping8.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping8.value;
    console.log(toppings);
} 
if (topping9.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping9.value;
    console.log(toppings);
} 
if (topping10.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping10.value;
    console.log(toppings);
} 
if (topping11.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping11.value;
    console.log(toppings);
} 
if (topping12.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping12.value;
    console.log(toppings);
}
if (topping13.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping13.value;
    console.log(toppings);
}
if (topping14.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping14.value;
    console.log(toppings);
}
if (topping15.checked) {
    toppingCount = toppingCount + 1;
    toppings = toppings + ', ' + topping15.value;
    console.log(toppings);
}
console.log(toppingCount)
 
let sum = 0;
toppingCount = Number(toppingCount);

if (toppingCount > 4) { 
    sum = size + delivery + (toppingCount-4)*0.5;
    answer.innerHTML = `Order for ${name} <br> Toppings: ${toppings} <br> Delivery: ${delivery_way} <br> Price: ${sum}€`;
} else if (toppingCount <= 4) {
    sum = size + delivery;
    answer.innerHTML = `Order for ${name} <br> Toppings: ${toppings} <br> Delivery: ${delivery_way} <br> Price: ${sum}€`;
} else {
        answer.textContent = 'Please, choose options';
    }
}
