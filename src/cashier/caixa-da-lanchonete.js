import { Cardapio } from "../menu/Cardapio";
import { Pagamento } from "../payment/Pagamento";

class CaixaDaLanchonete {
    constructor(){
        this.Cardapio = new Cardapio;
        this.Pagamento = new Pagamento
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }

}

export { CaixaDaLanchonete };
