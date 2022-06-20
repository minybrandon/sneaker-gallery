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

  const createSneaker = () => {
    const model = "Sketchers";
    const size = 8;
    const sneaker = new Sneaker(model, size);
    return sneaker;
  };

  it("should create a customer", () => {
    // precondition
    // this is declared in the const

    // action
    // this is in beforeEach

    // postcondition
    expect(customer).toBeDefined();
  });

  it("should get my customer info", () => {
    // precondition
    // this is declared in the const
    // someone with name, email, phone number wants to be my customer

    // action
    // I creqted a new customer

    // postcondition
    expect(customer.name).toEqual(name);
    expect(customer.phoneNumber).toEqual(phoneNumber);
    expect(customer.email).toEqual(email);
  });

  it("should add a sneaker to customer's gallery", () => {
    // precondition
    // customer is created in beforeEach

    // action
    const sneaker = createSneaker();
    customer.add(sneaker);

    // postcondition
    expect(customer.sneakers).toHaveLength(1);
    expect(customer.sneakers[0]).toEqual(sneaker);
  });

  it("should not have more than 100 sneakers in gallery", () => {
    // precondtion
    // customr with 100 sneaker

    for (let i = 0; i < 100; i++) {
      const sneaker = createSneaker();
      customer.add(sneaker);
    }
    expect(customer.sneakers).toHaveLength(100);

    // action
    // adding 101st sneaker
    const sneaker = createSneaker();
    customer.add(sneaker);

    // postcondition
    expect(customer.sneakers.length).toEqual(100);
  });

  it("requires valid Google mail account", () => {
    expect(customer.email).toContain("gmail.com");
  });
});
