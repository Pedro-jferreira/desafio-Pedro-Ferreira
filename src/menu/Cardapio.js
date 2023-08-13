class Cardapio {
  constructor() {
    this.items = {
      cafe: { description: "Café", value: 3.0 },
      chantily: { description: "Chantily (extra do Café)", value: 1.5 },
      suco: { description: "Suco Natural", value: 6.2 },
      sanduiche: { description: "Sanduíche", value: 6.5 },
      queijo: { description: "Queijo (extra do Sanduíche)", value: 2.0 },
      salgado: { description: "Salgado", value: 7.25 },
      combo1: { description: "1 Suco e 1 Sanduíche", value: 9.5 },
      combo2: { description: "1 Café e 1 Sanduíche", value: 7.5 },
    };
  }

  getItem(code) {
    return this.items[code];
  }
}
export { Cardapio };
