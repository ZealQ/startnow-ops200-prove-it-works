module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
    
    get monthlyPayment() {
      // this getter should return the result of your monthly payment calculation
      // used in a previous assignment.
        const P = this.principal;
        const r = ((this.interest) / 100 / this.period);
        const t = this.term * this.period;
        const M = P * (r * Math.pow((1 + r), t)) / (Math.pow((1 + r), t) - 1);
        return M;
      
    }
  }
  