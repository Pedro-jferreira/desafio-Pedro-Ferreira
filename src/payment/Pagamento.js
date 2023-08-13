class Pagamento {
  constructor() {
    this.formasDePagamento = ["dinheiro", "credito", "debito"];
    this.descontoDinheiro = 0.05;
    this.acrescimoCredito = 0.03;
  }

  validarFormaPagamento(metodoDePagamento) {
    return this.formasDePagamento.includes(metodoDePagamento);
  }

  calcularTotalComDescontoOuAcrescimo(total, metodoDePagamento) {
    if (metodoDePagamento === "dinheiro") {
      return total * (1 - this.descontoDinheiro);
    } else if (metodoDePagamento === "credito") {
      return total * (1 + this.acrescimoCredito);
    }
    return total;
  }
}

export { Pagamento };
