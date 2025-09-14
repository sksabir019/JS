/**
 * Input: computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()
 * Output: 125204500
 */

class CostFactory {
    constructor() {
        this.totalAmount = 0;
        this.conversionRates = {
            crore: 10000000,
            lacs: 100000,
            thousand: 1000
        };
    }

    crore(amount) {
        this.totalAmount += amount * this.conversionRates.crore;
        return this;
    }

    lacs(amount) {
        this.totalAmount += amount * this.conversionRates.lacs;
        return this;
    }

    thousand(amount) {
        this.totalAmount += amount * this.conversionRates.thousand;
        return this;
    }

    value() {
        return this.totalAmount;
    }
}

function computeAmount() {
    return new CostFactory();
}

// Example usage:
const total = computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
console.log(total); // Output: 125204500

// Methode 2:
function computeAmount() {
  let total = 0;

  const calculator = {
    crore(amount) {
      total += amount * 10000000;
      return this;
    },
    lacs(amount) {
      total += amount * 100000;
      return this;
    },
    thousand(amount) {
      total += amount * 1000;
      return this;
    },
    value() {
      return total;
    }
  };

  return calculator;
}

// Test the input
const result = computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();

console.log(result); // Output: 143545000
