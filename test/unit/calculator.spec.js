const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
    let calculator = null;

    beforeEach(() => {
        calculator = new Calculator();
    });
    //Add

    it('should have an add function', () => {
        expect(calculator.add).to.exist;
    });

    it('should add 2 + 2 together correctly', () => {
        expect(calculator.add(2, 2)).to.equal(4);
    });
    //Subtract
    it('should have an add function', () => {
        expect(calculator.add).to.exist;
    });

    it('should add 2 - 2 together correctly', () => {
        expect(calculator.subtract(2, 2)).to.equal(0);
    });
    //Divide
    it('should have an add function', () => {
        expect(calculator.add).to.exist;
    });

    it('should add 2 / 2 together correctly', () => {
        expect(calculator.divide(2, 2)).to.equal(1);
    });
    //Multiply
    it('should have an add function', () => {
        expect(calculator.add).to.exist;
    });

    it('should add 2 * 2 together correctly', () => {
        expect(calculator.add(2, 2)).to.equal(4);
    });
});