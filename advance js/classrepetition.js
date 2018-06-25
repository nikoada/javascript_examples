// 1. bank account
// 2. game
// 3. good

// let person = {
//   firstname: 'nemer',
//   lastname: 'sahli'
// }
//
// let bankAccount = {
//   iban: '13325345',
//   bic: 'ADH44645',
//   currency: 'EUR',
//   type: 'giro',
//   balance: 1000000,
//   onlinebanking: false,
//   credit: 2500,
//   owner: person
// };
//
// class BankAccount {
//   constructor(iban, bic, currency, owner) {
//     this.iban = iban;
//     this.bic = bic;
//     this.currency = currency;
//     //this.type = type;
//     // this.balance = balance;
//     // this.onlinebanking = onlinebanking;
//     // this.credit = credit;
//     this.owner = owner;
//   }
// }
//
// class SavingsAccount extends BankAccount {
//   constructor(iban, bic, currency, owner, withdrawalPeriod) {
//     super(iban, bic, currency, type);
//     this.withdrawalPeriod = withdrawalPeriod;
//   }
//
//   withdraw() {
//     if (this.withdrawalPeriod > 6) {
//       //...
//     }
//   }
// }
//
// class CreditAccount extends BankAccount {
//   constructor(iban, bic, currency, owner, maxAmount, cardType, carsValid) {
//     super(iban, bic, currency, owner);
//     this.maxAmount;
//     this.cardType;
//     this.carsValid;
//   }
//   takeCredit() {
//     if (maxAmount > 2500) {
//       //...
//     }
//   }
// }
//
// class Giro extends BankAccount {
//   constructor(iban, bic, currency, owner, type, balance) {
//     super(iban, bic, currency, owner);
//     this.type;
//     this.balance;
//   }
//
//   if (this.balance < 200) {
//     //sendNotification();
//   }
// }
//
// class Offshour extends BankAccount {
//   constructor(iban, bic, currency, owner, invisibility) {
//     super(iban, bic, currency, owner);
//     this.invisibiility;
//   }
//
//   securInvisible() {
//     if (this.invisibiility === 'paid') {
//       //...
//     }
//   }
// }

// let jan = {name: 'jan', lastname: 'schulz'};
// let jansAccount = new BankAccount(
//   '12345234',
//   'XGS345',
//   'EUR',
//   'giro',
//   24534,
//   true,
//   800,
//   jan
// );
//
// class AIBankAccount extends BankAccount {
//   constructor(iban, bic, currency, type, balance, onlinebanking, credit, owner, behaviour) {
//     super(iban, bic, currency, type, balance, onlinebanking, credit, owner);
//
//     this.behaviour = behaviour;
//   }
//
//   analyze() {
//     if (this.behaviour === 'spendall') {
//       // ...
//     }
//     else if (this.behaviour === 'saveall') {
//       // ..
//     }
//     else {
//       // ...
//     }
//   }
// }

class Animal {
  constructor(name) {
    this.name = name;
  }
  sleep() {}
  eat() {}
  die() {}
}

class Mammal extends Animal {
  constructor(name) {
    super(name);
  }

  breathe() {}
  sweam() {}
}

class Tiger extends Mammal {
  constructor(name) {
    super(name);
  }
  kill(otherAnimal) {
    otherAnimal.die();
  }
}

class Horse extends Mammal {
  constructor(name) {
    super(name);
  }
}

class Bird extends Animal {
  constructor(name) {
    super(name);
  }
  breathe() {}
  fly() {}
}

class Woodpecker extends Bird {
  constructor(name) {
    super(name);
  }
}

class Hummingbird extends Bird {
  constructor(name) {
    super(name);
  }
}

class Fish extends Animal {
  constructor(name) {
    super(name);
  }
  sweam() {}
}

class Tuna extends Fish {
  constructor(name) {
    super(name);
  }
}

class Shark extends Fish {
  constructor(name) {
    super(name);
  }
  kill(otherAnimal) {
    otherAnimal.die();
  }
}

var Vitaly = new Tiger('Vitaly');
var Nemo = new Shark('Nemo');
var Fury = new Horse('Fury');

Nemo.kill(Fury);
Nemo.kill(Vitaly);
Nemo.eat();
Nemo.die();

console.log('Let\'s start')
