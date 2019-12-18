// Abstract Factory
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

// Factories
function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

// Products
class Z4 {
  info() {
    return "Z4 is a Sport car!";
  }
}

class I3 {
  info() {
    return "i3 is a Family car!";
  }
}

/* INIT */
// Use Abstract Factory of sport car
const produce = bmwProducer('sport');
// Use Factory car produce
const myCar = produce();

console.log(myCar.info());
