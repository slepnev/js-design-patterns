// Комманды - отделение бизнес логики и интерфейсной части друг от друга
class Driver {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}

class Engine {
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}

class OnStartCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.on();
  }
}

class onSwitchOffCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.off();
  }
}


/* INIT */
const engine = new Engine();

const startCommand = new OnStartCommand(engine);
const driver = new Driver(startCommand);

driver.execute();
console.log(engine);
