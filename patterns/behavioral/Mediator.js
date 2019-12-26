// Класс mediator (посредник) - нужен для уменьшения связанности классов между собой
class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();
    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }

  addToCustomersList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info)
  }
}

/* INIT */
const mediator = new OfficialDealer();

const igor = new Customer('Igor', mediator);
const valera = new Customer('Valera', mediator);

igor.makeOrder('Tesla', 'Autopilot');
valera.makeOrder('Audi', 'Parctronik');

console.log(mediator.getCustomerList());
