// Цепочка ответсвтенности - пока один из элементов цепочки не сможем обработать задачу она будет передаваться на ступень ниже
class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice)
    } else {
      console.log('Unfortunately, not enough money');
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.incomer = account;
  }

  show() {
    console.log(this);
  }
}

class Master extends Account {
  constructor(balance) {
    super();
    this.name = 'Master Card';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = 'Qiwi';
    this.balance = balance;
  }
}

/* INIT */
const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

// Задаем цепочку ответсвенности
master.setNext(paypal);
paypal.setNext(qiwi);

// Запускаем оплату
master.pay(444);
/*
Cannot pay using Master Card
Cannot pay using Paypal
Paid 444 using Qiwi
*/

master.show();
