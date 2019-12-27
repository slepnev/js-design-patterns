// Снимок - помогает сохранять предыдущее состояние объекта если он изменился и возможность отменить последние изменения
class Memento {
  constructor(value) {
    this.value = value;
  }
}

const creator = {
  save: val => new Memento(val),
  restore: memento => memento.value,
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}


/* INIT */
const careTaker = new Caretaker();

careTaker.addMemento(creator.save('Hello'));
careTaker.addMemento(creator.save('Hello world'));
careTaker.addMemento(creator.save('Hello world!!!'));


console.log(creator.restore(careTaker.getMemento(1)));
// Hello world
