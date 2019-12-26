// Iterator - умный перебор коллекций, без доступа к внутренним данным и их изменениям
class ArrayIterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

class ObjectIterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
    this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

/* INIT */
const collection = new ArrayIterator(['Audi', 'Tesla', 'BMW']);

while (collection.hasNext()) {
  console.log(collection.next());
}
