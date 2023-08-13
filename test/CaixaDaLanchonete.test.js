import { CaixaDaLanchonete } from "../src/cashier/caixa-da-lanchonete.js";

describe("CaixaDaLanchonete - Testes Adicionais", () => {
  const caixa = new CaixaDaLanchonete();

  it("Deve calcular o valor com um item extra", () => {
    const formaDePagamento = "credito";
    const resultadoEsperado = "Item extra não pode ser pedido sem o principal";
    const itens = ["chantily,1", "queijo,1"];

    const resultado = caixa.calcularValorDaCompra(formaDePagamento, itens);
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("Deve calcular o valor com um combo", () => {
    const formaDePagamento = "debito";
    const resultadoEsperado = "R$ 9,50";
    const itens = ["combo1,1"];

    const resultado = caixa.calcularValorDaCompra(formaDePagamento, itens);
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("Deve calcular o valor com um código inexistente", () => {
    const formaDePagamento = "dinheiro";
    const resultadoEsperado = "Item inválido!";
    const itens = ["sorvete,1"];

    const resultado = caixa.calcularValorDaCompra(formaDePagamento, itens);
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("Deve calcular o valor com quantidade negativa", () => {
    const formaDePagamento = "credito";
    const resultadoEsperado = "Quantidade inválida!";
    const itens = ["cafe,-1"];

    const resultado = caixa.calcularValorDaCompra(formaDePagamento, itens);
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("Deve calcular o valor com forma de pagamento inválida", () => {
    const formaDePagamento = "paypal";
    const resultadoEsperado = "Forma de pagamento inválida!";
    const itens = ["cafe,1"];

    const resultado = caixa.calcularValorDaCompra(formaDePagamento, itens);
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("Deve calcular o valor com um item e desconto para pagamento em dinheiro", () => {
    const formaDePagamento = "dinheiro";
    const resultadoEsperado = "R$ 2,85";
    const itens = ["cafe,1"];

    const resultado = caixa.calcularValorDaCompra(formaDePagamento, itens);
    expect(resultado).toEqual(resultadoEsperado);
  });
});
