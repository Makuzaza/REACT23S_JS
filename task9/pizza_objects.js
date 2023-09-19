// class Pizza {
//     name;
//     toppings = [];
//     basePrice = 0;
//     size = 'S';
    
//     getPrice() {
        
//     }

// }

class Pizza {
  constructor(name, size, toppings) {
      this.name = name;
      this.size = size;
      this.toppings = toppings;
      this.basePrices = {
          2: 7.5,
          4: 10.5,
          6: 12.5,
          8: 15.5
      };
      this.toppingsPrice = 0;
  }

  getPrice() {
    const sizePrice = this.basePrices[this.size] || 0;
    const freeToppings = 4; 
    const additionalToppings = Math.max(0, this.toppings.length - freeToppings);
    this.toppingsPrice = additionalToppings * 0.5;
    return sizePrice + this.toppingsPrice;
}
}

class Order {
    constructor(customerName, deliveryType) {
        this.customerName = customerName;
        this.deliveryType = deliveryType;
        this.pizzas = [];
    }

    addPizza(pizza) {
        this.pizzas.push(pizza);
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (const pizza of this.pizzas) {
            totalPrice += pizza.calculatePrice();
        }
        return totalPrice;
    }
}

const order = new Order("John Doe", "Delivery home");
const pizza1 = new Pizza("Pepperoni Pizza", 4, ["pepperoni", "mushrooms", "greenPeppers"]);
const pizza2 = new Pizza("Hawaiian Pizza", 2, ["ham", "pineapple"]);

order.addPizza(pizza1);
order.addPizza(pizza2);

const totalPrice = order.calculateTotalPrice();
console.log(`Customer Name: ${order.customerName}`);
console.log(`Delivery Type: ${order.deliveryType}`);
console.log(`Total Price: €${totalPrice.toFixed(2)}`);

console.log("Pizzas in Order:");
for (const pizza of order.pizzas) {
    console.log(`${pizza.name} (Size: ${pizza.size}, Toppings: ${pizza.toppings.join(", ")}) - €${pizza.calculatePrice().toFixed(2)}`);
}
