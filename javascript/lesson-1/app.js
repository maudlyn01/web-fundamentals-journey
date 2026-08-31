//2- Declarar com const o nome do cliente e o nome do produto; declarar com let a quantidade e o preço unitário.
const nomeCliente="Ana";
const nomeProduto="Camiseta";
let quantidade=4;
let precoUnitario=1000;

//3- Calcular o subtotal (quantidade * preço) e o total com 17%(0.17) de IVA, guardando cada um na sua variável.
const IVA=0.17;
let subtotal = quantidade*precoUnitario;
let total = subtotal*IVA;

//4- Mostrar o recibo na consola com um template literal de várias linhas, incluindo o nome e os valores em MT.
console.log(`
    RECIBO:
    Cliente: ${nomeCliente},
    Produto: ${nomeProduto},
    Quantidade: ${quantidade},
    Preço Unitário: ${precoUnitario} Mt,
    Subtotal: ${subtotal} Mt,
    Total (com IVA): ${total} Mt
    `);


//5- Alterar a quantidade a meio do ficheiro e confirmar na consola que o total acompanha — e comentar o porquê.
quantidade= 7;
subtotal = quantidade*precoUnitario;
total = subtotal*IVA;
console.log(`
    RECIBO ACTUALIZADO:
    Cliente: ${nomeCliente},
    Produto: ${nomeProduto},
    Quantidade: ${quantidade},
    Preço Unitário: ${precoUnitario} Mt,
    Subtotal: ${subtotal} Mt,
    Total (com IVA): ${total} Mt
    `);

/*O total acompanha pois a variavel total é recalculada com base no novo subtotal, 
que por sua vez é recalculado com a nova quantidade e o preço unitário. */

