class TeslaCar {

  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

/* INIT */
// Use Prototype for produce base car
const prototype = new TeslaCar('S', 8000, 'black', false);

// Cloning of base car
const car1 = prototype.produce();
const car2 = prototype.produce();
const car3 = prototype.produce();

// Change auto
car1.interior = 'white';
car1.autopilot = true;

console.log(car1);
