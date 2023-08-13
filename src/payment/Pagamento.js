class Pagamento {
  constructor() {
    this.paymentOptions = ["dinheiro", "credito", "debito"];
    this.cashDiscount = 0.05;
    this.creditIncrease = 0.03;
  }

  validatePaymentMethod(PaymentMethod) {
    return this.paymentOptions.includes(PaymentMethod);
  }

  calculateModifiedTotal(total, PaymentMethod) {
    if (PaymentMethod === "dinheiro") {
      return total * (1 - this.cashDiscount);
    } else if (PaymentMethod === "credito") {
      return total * (1 + this.creditIncrease);
    }
    return total;
  }
}

export { Pagamento };