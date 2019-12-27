// Abstract
class Model {
  constructor(color) {
    this.color = color;
  }
}
// Abstract - Bridge
class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}

// Implementation
class BlackColor extends Color {
  constructor() {
    super("dark-black");
  }
}
// Implementation
class SilbrigColor extends Color {
  constructor() {
    super("Silbermetallic");
  }
}
// Implementation
class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}
// Implementation
class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}


/* INIT */
const blackBMW = new Bmw(new BlackColor());

console.log(blackBMW.paint());
