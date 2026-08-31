/*Criar uma função calcularDesconto(total) que devolve 15% para totais acima de 5 000 MT, 5% acima de 1 000 MT, e 0% abaixo disso.
Usar if / else if / else dentro da função e devolver o valor com return — nunca imprimir lá dentro.*/

let value1 = 5000;
let value2 = 1000;
let descount;

function calcularDesconto(total) {
  if (total > value1) {
    descount = total * 0.15;
    return descount;
  } else if (total >= value2) {
    descount = total * 0.05;
    return descount;
  } else {
    descount = total;
    return descount;
  }
}

console.log(`${calcularDesconto(6000)}`);
console.log(`${calcularDesconto(1200)}`);
console.log(`${calcularDesconto(600)}`);

//Criar um array com cinco valores de compra e percorrê-lo com um ciclo for…of

const buy = [100, 200, 300, 400, 500];

/*Para cada compra, chamar a função e mostrar na consola o total, o desconto aplicado e o valor final, com template literals*/

let descountedClients=0;

for (const total of buy) {
  let descount = calcularDesconto(30);
  let finalValue = total - descount;

  //Acrescentar um contador que soma quantos clientes tiveram desconto e mostrá-lo no fim do ciclo.

  if(descount > 0){
    descountedClients++;
  }
  console.log(`
    Compra Total: ${total} Mt
    Desconto: ${descount} Mt
    Valor Final: ${finalValue} Mt
    `);
}
console.log(`Clientes com desconto ${descountedClients}`);


