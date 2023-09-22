const extraToppingPrice = 50;
class Pizza {
    name;
    toppings = [];
    basePrice = 0;
    size = 'S';

    constructor(name, toppings, basePrice) {
        this.name = name;
        this.toppings = toppings;
        this.basePrice = basePrice;
    }

    getPrice() {
        let extraToppings = this.toppings.length - 4;
        if (extraToppings < 0) {
            extraToppings = 0;
        }
        return this.basePrice + extraToppings * extraToppingPrice;
    }
}

   
const americano2 = new Pizza('americano', ['ham', 'tomato', 'cheese'], 1000);
americano2.basePrice = 1100;

const americano1 = new Pizza();
americano1.name = 'americano';
americano1.toppings = ['ham', 'tomato', 'cheese']

console.log(americano1.getPrice());


class PizzaOrder {
    customerName = ''; 
    deliveryType = 'eat_in'; 
    pizzas = [];

    addPizza(pizza) {
        this.pizzas.push(pizza);
    }
    getPrice() {
        let totalPrice = 0;
// 1) check delivery type and add delivery fee if needed
// 2) loop over the pizzas and sum up thir prices
        return totalPrice;
    }

}  
let newPizza = new Pizza('hawaii', ['jalapeno', 'parmesan', 'tomato'], 1200)
let secondPizza = new Pizza()
console.log(newPizza)

// const size = document.querySelectorAll('#size');
// const toppings = document.querySelectorAll('input[name="toppings"]');
// const delivery_way = document.querySelector('#delivery').value;
// const name = document.querySelector('#nameclient').value;
// const answer = document.querySelector('#answers');

// // console.log(name)
// // console.log(toppings)
// // console.log(delivery_way)
// // console.log(size)

// class Pizza {
//   constructor(name, size, toppings, delivery) {
//       this.name = name;
//       this.size = size;
//       this.toppings = toppings;
//       this.delivery = delivery_way
//       this.basePrices = {
//           2: 7.5,
//           4: 10.5,
//           6: 12.5,
//           8: 15.5
//       };
//       this.toppingsPrice = 0;
//   }

//   getPrice() {
//     const sizePrice = this.basePrices[this.size] || 0;
//     const freeToppings = 4; 
//     const additionalToppings = Math.max(0, this.toppings.length - freeToppings);
//     this.toppingsPrice = additionalToppings * 0.5;
//     return sizePrice + this.toppingsPrice;
// }
// }

// class Order {
//     constructor(customerName, deliveryType) {
//         this.customerName = customerName;
//         this.deliveryType = deliveryType;
//         this.pizzas = [];
//     }

//     addPizza(pizza) {
//         this.pizzas.push(pizza);
//     }

//     calculateTotalPrice() {
//         let totalPrice = 0;
//         for (const pizza of this.pizzas) {
//             totalPrice += pizza.calculatePrice();
//         }
//         return totalPrice;
//     }
// }

// // const order = new Order("John Doe", "Delivery home");
// // const pizza1 = new Pizza("Pepperoni Pizza", 4, ["pepperoni", "mushrooms", "greenPeppers"]);
// // const pizza2 = new Pizza("Hawaiian Pizza", 2, ["ham", "pineapple"]);

// // order.addPizza(pizza1);
// // order.addPizza(pizza2);

// const totalPrice = order.calculateTotalPrice();
// console.log(`Customer Name: ${order.customerName}`);
// console.log(`Delivery Type: ${order.deliveryType}`);
// console.log(`Total Price: €${totalPrice.toFixed(2)}`);

// console.log("Pizzas in Order:");
// for (const pizza of order.pizzas) {
//     console.log(`${pizza.name} (Size: ${pizza.size}, Toppings: ${pizza.toppings.join(", ")}) - €${pizza.calculatePrice().toFixed(2)}`);
// }



// // if (size1.checked) {
// //     size = Number(size1.value);
// //     console.log(size);
// // } else if (size2.checked) {
// //     size = Number(size2.value);
// //     console.log(size);
// // } else if (size3.checked) {
// //     size = Number(size3.value);
// //     console.log(size);
// // } else {
// //     size = Number(size4.value);
// //     console.log(size)
// // }

// // if (delivery_way == "delivery home") {
// //     delivery = 5;
// //     console.log(delivery);
// // } else {
// //     delivery = 0;
// //     console.log(delivery)
// // }

// // let toppingCount = 0;

// // let checkboxes = document.querySelectorAll('input[name="toppings"]');
// // let values = [];
// // for (let i = 0; i < checkboxes.length; i++) {
// //     if (checkboxes[i].checked == true) {
// //         values.push(checkboxes[i].value);
// //         toppingCount = toppingCount + 1;
// //     }
// // }
 
// // let sum = 0;
// // toppingCount = Number(toppingCount);

// // if (toppingCount > 4) { 
// //     sum = size + delivery + (toppingCount-4)*0.5;
// //     answer.innerHTML = `Order for ${name} <br> Toppings: ${values} <br> Delivery: ${delivery_way} <br> Price: ${sum}€`;
// // } else if (toppingCount <= 4) {
// //     sum = size + delivery;
// //     answer.innerHTML = `Order for ${name} <br> Toppings: ${values} <br> Delivery: ${delivery_way} <br> Price: ${sum}€`;
// // } else {
// //         answer.textContent = 'Please, choose options';
// //     }
// // }

// // const sizeInputs = document.querySelectorAll('input[name="size"]');
// // for (const i of sizeInputs) {
// //     i.addEventListener('click', pizzaPrice);
// // }

// // const toppingCheckboxes = document.querySelectorAll('input[name="toppings"]');
// // for (const i of toppingCheckboxes) {
// //     i.addEventListener('click', pizzaPrice);
// // };

// // const deliverySelect = document.querySelector('#delivery');
// // deliverySelect.addEventListener('change', pizzaPrice);

// // const nameSelect = document.querySelector('#nameclient');
// // nameSelect.addEventListener('change', pizzaPrice);

