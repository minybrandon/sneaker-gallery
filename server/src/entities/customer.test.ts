// Jest has two main functions
// describe -- use this to describe a group of related test cases
// it -- use this to write a single test
// beforeEach -- is executed before running each test

// https://jestjs.io/docs/expect

import Customer from "./customer";
import Sneaker from "./sneaker";

describe("Customer", () => {
  const name = "Sang Yum";
  const email = "sangyum@gmail.com";
  const phoneNumber = "8585551212";

  let customer: Customer;

  beforeEach(() => {
    customer = new Customer(name, email, phoneNumber);
  });

  it("should create a customer", () => {
    expect(customer).toBeDefined();
  });

  it("should require name, email and phone number", () => {
    expect(customer.name).toEqual(name);
    expect(customer.phoneNumber).toEqual(phoneNumber);
    expect(customer.email).toEqual(email);
  });

  it("should own at least one sneaker", () => {
    const model = "Sketchers";
    const size = 8;
    const sneaker = new Sneaker(model, size);

    customer.add(sneaker);

    expect(customer.sneakers).toHaveLength(1);
    expect(customer.sneakers[0]).toEqual(sneaker);
  });
});
