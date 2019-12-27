class Auto {
  constructor(model) {
    this.model = model;
  }
}

// Flyweight - легковес (Необходим для кеширования одинаковых данных)
class AutoFactory {
  constructor() {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    console.count('model');
    this.models[name] = new Auto(name);
    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
}


/* INIT */
const factory = new AutoFactory();

const bmw = factory.create('BMW');
const bmw2 = factory.create('BMW');
const bmw3 = factory.create('BMW');
const tesla = factory.create('Tesla');

factory.getModels();
