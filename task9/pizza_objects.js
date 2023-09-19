// class Pizza {
//     name;
//     toppings = [];
//     basePrice = 0;
//     size = 'S';
    
//     getPrice() {
        
//     }

// }

class Pizza {
    constructor(name, toppings) {
      this.name = name;
      this.toppings = toppings;
      this.basePrice = 7.5;
    }
  
    getPrice() {
      let totalPrice = this.basePrice;
      const freeToppings = 4;
      const additionalToppings = Math.max(0, this.toppings.length - freeToppings);

      for (let i = 0; i < additionalToppings; i++) {
        totalPrice += 0.5;
      }
      return totalPrice;
    }
  }
  
  const myPizza = new Pizza("Pepperoni Pizza", [
    "pepperoni",
    "mushrooms",
    "greenPeppers",
    "onions",
    "olives",
  ]);
  
  const totalPrice = myPizza.getPrice();
  console.log(`The price of ${myPizza.name} is €${totalPrice.toFixed(2)}`);
  