// https://www.typescriptlang.org/docs/handbook/2/classes.html

import Sneaker from "./sneaker";

const MAX_NUMBER_OF_SNEAKERS = 100;

class Customer {
  name: string;
  email: string;
  phoneNumber: string;
  sneakers: Sneaker[];

  constructor(name: string, email: string, phoneNumber: string) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.sneakers = [];
  }

  add(sneaker: Sneaker) {
    if (this.sneakers.length < MAX_NUMBER_OF_SNEAKERS) {
      this.sneakers.push(sneaker);
    }
  }
}

export default Customer;
