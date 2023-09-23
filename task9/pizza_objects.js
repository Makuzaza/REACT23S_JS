// 1.
const extraToppingPrice = 50;
class Pizza {
    name;
    toppings = [];
    basePrice = 0;
    size = 'S';

    constructor(name, toppings, basePrice) {
        this.name = name;
        this.toppings = toppings;
        if (basePrice < 1000) {
            this.basePrice = 1000; 
        } else {
            this.basePrice = basePrice;
        }
    }

    getPrice() {
        let extraToppings = this.toppings.length - 4;
        if (extraToppings < 0) {
            extraToppings = 0;
        }
        return this.basePrice + extraToppings * extraToppingPrice;
    }
}

//   getPrice() {
//     const basePrice = this.basePrice || 0;
//     const freeToppings = 4; 
//     const extraToppings = Math.max(0, this.toppings.length - freeToppings);
//     this.basePrice = extraToppings * extraToppingPrice;
//     return this.basePrice + extraToppings * extraToppingPrice;
// }
// }

const americano2 = new Pizza('americano', ['ham', 'tomato', 'cheese'], 1000);
americano2.basePrice = 1100;

const americano1 = new Pizza();
americano1.name = 'americano';
americano1.toppings = ['ham', 'tomato', 'cheese']

console.log(americano1.getPrice());


// 2.
class PizzaOrder {
    customerName = ''; 
    deliveryType = 'eat_in'; 
    pizzas = [];

    constructor(customerName, deliveryType) {
        this.customerName = customerName;
        this.deliveryType = deliveryType;
        this.pizzas = [];
    }

    addPizza(pizza) {
        this.pizzas.push(pizza);
    }
    getPrice() {
        let totalPrice = 0;
        if (this.deliveryType === 'delivery') {
            totalPrice += 500;
        }

        for (const pizza of this.pizzas) {
            totalPrice += pizza.getPrice();
        }

        return totalPrice;
    }
}  

let newPizza = new Pizza('hawaii', ['jalapeno', 'parmesan', 'tomato'], 1200);
let secondPizza = new Pizza('margarita', ['tomato', 'cheese', 'onion'], 900);

let order = new PizzaOrder('Maria', 'delivery'); // Example 

order.addPizza(newPizza);
order.addPizza(secondPizza);

console.log(order.getPrice());