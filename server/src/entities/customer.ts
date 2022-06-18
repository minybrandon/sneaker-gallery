// https://www.typescriptlang.org/docs/handbook/2/classes.html

class Customer {
    name: string;
    email: string;
    phoneNumber: string;

    constructor(name: string, email: string, phoneNumber: string) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

};

export default Customer;