// https://www.typescriptlang.org/docs/handbook/2/classes.html

import Sneaker from "./sneaker";

const MAX_NUMBER_OF_SNEAKERS = 100;

class Customer {
  name: string;
  email: string;
  phoneNumber: string;
  sneakers: Sneaker[];

  isValidEmail = (email: string): boolean => {
    return email.endsWith("@gmail.com");
  };

  constructor(name: string, email: string, phoneNumber: string) {
    if (this.isValidEmail(email)) {
      this.name = name;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.sneakers = [];
    } else {
      throw new Error("customer requires valid Google email");
    }
  }

  add(sneaker: Sneaker) {
    if (this.sneakers.length < MAX_NUMBER_OF_SNEAKERS) {
      this.sneakers.push(sneaker);
    }
  }
}

export default Customer;
