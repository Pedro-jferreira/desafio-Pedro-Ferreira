
import { Cardapio } from "../menu/Cardapio";
import { Pagamento } from "../payment/Pagamento";

class CaixaDaLanchonete {
  constructor() {
    this.menu = new Cardapio();
    this.payment = new Pagamento();
  }

  calcularValorDaCompra(PaymentMethod, items) {
    if (!this.validatePaymentMethod(PaymentMethod)) {
      return "Forma de pagamento inválida!";
    }

    if (items.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    const total = this.calculateTotal(items);

    if (isNaN(total)) {
      return "Item inválido!";
    }

    const hasInvalidItemCombination = this.hasInvalidItemCombination(items);
    if (hasInvalidItemCombination) {
      return "Item extra não pode ser pedido sem o principal";
    }

    if (total <= 0) {
      return "Quantidade inválida!";
    }

    const totalWithDiscount = this.calculateTotalWithDiscount(
      total,
      PaymentMethod
    );

    return `R$ ${totalWithDiscount.toFixed(2).replace(".", ",")}`;
  }

  validatePaymentMethod(PaymentMethod) {
    return this.payment.validatePaymentMethod(PaymentMethod);
  }

  calculateTotal(items) {
    let total = 0;

    for (const itemInfo of items) {
      const [code, quantity] = itemInfo.split(",");
      const item = this.menu.getItem(code);

      if (!item) {
        return NaN;
      }

      total += item.value * parseInt(quantity);
    }

    return total;
  }

  hasInvalidItemCombination(items) {
    const hasCafe = items.some((itemInfo) => itemInfo.includes("cafe"));
    const hasSanduiche = items.some((itemInfo) =>
      itemInfo.includes("sanduiche")
    );

    return (
      items.some((itemInfo) => itemInfo.includes("chantily") && !hasCafe) ||
      items.some((itemInfo) => itemInfo.includes("queijo") && !hasSanduiche) ||
      !items.some(
        (itemInfo) =>
          !itemInfo.includes("chantily") && !itemInfo.includes("queijo")
      )
    );
  }

  calculateTotalWithDiscount(total, PaymentMethod) {
    return this.payment.calculateModifiedTotal(total, PaymentMethod);
  }
}

export { CaixaDaLanchonete };
