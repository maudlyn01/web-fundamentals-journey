/*Criar um array com seis objectos de venda, cada um com produto, quantidade, precoUnitario e cidade.*/
const Sales = [
  { product: "Arroz", quantity: 3, unitPrice: 100, city: "Maputo" },
  { product: "Feijão", quantity: 5, unitPrice: 200, city: "Chimoio" },
  { product: "Massa Espaguete",quantity: 20,unitPrice: 50,city: "Nampula"},
  { product: "Óleo", quantity: 4, unitPrice: 150, city: "Tete" },
  { product: "Açúcar", quantity: 2, unitPrice: 120, city: "Beira" },
  { product: "Farinha", quantity: 6, unitPrice: 80, city: "Maputo" },
];

/*Usar map para acrescentar a cada venda um campo total (quantidade * precoUnitario), sem alterar o array original.*/
const SALES_WITH_TOTAL = Sales.map((sale) => {
  return {
    ...sale,
    total: sale.quantity * sale.unitPrice,
  };
});
//console.log("Sales with Total:", SALES_WITH_TOTAL);

/*Usar filter para obter apenas as vendas de Maputo e apenas as vendas acima de 1 000 MT.*/
const SALES_FROM_MAPUTO = SALES_WITH_TOTAL.filter(
  (sale) => sale.city === "Maputo",
);
const SALES_ABOVE_1000 = SALES_WITH_TOTAL.filter((sale) => sale.total >= 1000);
console.log(`vendas de Maputo: ${SALES_FROM_MAPUTO.length}`, SALES_FROM_MAPUTO);
console.log(`Vendas acima de 1000 MT: ${SALES_ABOVE_1000.length}`,SALES_ABOVE_1000);

/*Usar reduce para calcular a receita total, e depois a média por venda.*/
const TOTAL_REVENUE = SALES_WITH_TOTAL.reduce(
  (accumulator, sale) => accumulator + sale.total, 0,
);
console.log(`Receita Total: ${TOTAL_REVENUE} MT`);
const AVERAGE_REVENUE = TOTAL_REVENUE / SALES_WITH_TOTAL.length;
console.log(`Média por Venda: ${AVERAGE_REVENUE} MT`);

/*Aplicar destructuring dentro do forEach para imprimir um relatório linha a linha com template literals.*/
const REPORT = SALES_WITH_TOTAL.forEach(
  ({ product, quantity, unitPrice, city, total }) => {
    console.log(`
  ------------------------
  Relatório de Vendas:
  Produto: ${product}, 
  Quantidade: ${quantity}, 
  Preço Unitário: ${unitPrice} MT, 
  Cidade: ${city}, '
  Total: ${total} MT
  ------------------------
  `);
  },
);
