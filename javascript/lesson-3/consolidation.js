/*Dado um array de dez preços, crie com map um novo array com todos os preços aumentados em 10%.*/
let prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
let increasedPrices = prices.map((price) => price+(price * 0.1));
console.log(increasedPrices);
console.log(`
    O array original: ${prices} 
    o array copia   : ${increasedPrices}`);

/*Filtre de uma lista de produtos apenas os que têm stock maior que zero e mostre quantos são.*/
let products = [
    { name: "Arroz", stock: 10 },
    { name: "Feijão", stock: 0 },
    { name: "Massa Espaguete", stock: 20 },
    { name: "Óleo", stock: 0 }, 
    { name: "Açúcar", stock: 5 },
    { name: "Farinha", stock: 0 },
    { name: "Leite", stock: 15 },
];
let availableProducts = products.filter((product)=>product.stock>0);
console.log(`Produtos com stock maior que zero: ${availableProducts.length}`, availableProducts);


/*Use reduce para calcular o total de uma lista de compras com quantidade e preço unitário.*/
let shoppingList = [
    { name: "Arroz", quantity: 2, unitPrice: 50 },
    { name: "Feijão", quantity: 1, unitPrice: 30 },
    { name: "Massa Espaguete", quantity: 3, unitPrice: 20 },
    { name: "Óleo", quantity: 1, unitPrice: 10 },
    { name: "Açúcar", quantity: 2, unitPrice: 15 },
    { name: "Farinha", quantity: 1, unitPrice: 25 },
    { name: "Leite", quantity: 2, unitPrice: 30 },
];
let total= shoppingList.reduce((accumulator,item)=>accumulator+(item.quantity*item.unitPrice),0);
console.log(`Total da lista de compras: ${total}`);


/*Crie um objecto que descreva a sua própria cidade, com pelo menos um objecto aninhado e um método. */
let city = {
    name: "Maputo",
    country: "Moçambique",
    population: 1500000,
    location: {
        latitude: -25.9653,
        longitude: 32.5892
    },
    getCityInfo() {
        return `A minha cidade é ${this.name} está localizada em ${this.country} com uma população de ${this.population}.`;
    }
}
//console.log(city.getCityInfo());


/*Reescreva três acessos a propriedades aninhadas usando destructuring, optional chaining e nullish coalescing.*/
let { name, country, population } = city;
let { latitude, longitude } = city.location || {};
let cityInfo = city?.getCityInfo?.();

console.log(`Destructuring: ${name}, ${country}, ${population}`);
console.log(`Destructuring: Latitude: ${latitude}, Longitude: ${longitude}`);
console.log(`Optional Chaining: ${cityInfo}`);// significa que se cityInfo for null ou undefined, não será exibida nenhuma mensagem de erro, apenas undefined.
console.log(`Nullish Coalescing: ${cityInfo ?? "Informação não disponível"}`);// significa que se cityInfo for null ou undefined, será exibida a mensagem "Informação não disponível".  
