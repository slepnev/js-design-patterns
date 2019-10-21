class Counter {

  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increaseCount();
counter1.increaseCount();
counter2.increaseCount();
counter2.increaseCount();

console.log(counter1.getCount());
console.log(counter2.getCount());

