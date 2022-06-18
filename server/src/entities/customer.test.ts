// Jest has two main functions
// describe -- use this to describe a group of related test cases
// it -- use this to write a single test

// https://jestjs.io/docs/expect

import Customer from './customer';

describe('Customer', () => {
    it('should create a customer', () => {
        const name = 'Sang Yum';
        const email = 'sangyum@gmail.com';
        const phoneNumber = '8585551212';

        const customer = new Customer(name, email, phoneNumber);
        expect(customer).toBeDefined();
    });

    it('should require name, email and phone number', () => {
        const name = 'Sang Yum';
        const email = 'sangyum@gmail.com';
        const phoneNumber = '8585551212';

        const customer = new Customer(name, email, phoneNumber);

        expect(customer.name).toEqual(name);
        expect(customer.phoneNumber).toEqual(phoneNumber);
        expect(customer.email).toEqual(email);
    });

    it('should own at least one sneaker', () => {
        const name = 'Sang Yum';
        const email = 'sangyum@gmail.com';
        const phoneNumber = '8585551212';

        const customer = new Customer(name, email, phoneNumber);

        customer.add(sneaker);

        expect(customer.sneakers).toHaveLength(1);
        expect(customer.sneakers[0]).toEqual(sneaker);
    });
});