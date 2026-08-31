//Escreva uma função que receba um número e devolva “par” ou “ímpar”, usando o operador %.
const verifyNumber = (number) => {
  if (number % 2 === 0) {
    return `O número ${number} é Par`;
  }
  return `O número ${number} é Ímpar`;
};
console.log(verifyNumber(20));
console.log(verifyNumber(21));

//Crie um ciclo for que imprima a tabuada do 7, de 1 a 10, usando template literals.

for(let i=1; i<=10;i++){
    console.log(`7 x ${i} = ${7*i}`);
}

//Escreva um switch que receba o código de uma província e devolva o nome da sua capital.
const getProvince=(provinceCode)=>{
    switch (provinceCode) {
        case "MP":
            return "Maputo Província";
        case "MC":
            return "Maputo Cidade";
        case "GZ":
            return "Xai-Xai";
        case "NP":
            return "Nampula";
        case "SF":
            return "Beira";
        case "IN":
            return "Inhambane";
        case "TT":
            return "Tete";
    
        default:
            return "O código introduzido é inválido";
    }
}

console.log(`A provinvia é ${getProvince("GZ")}`);
console.log(getProvince("CD"));

//Crie uma função conversor(meticais) que devolva o valor em dólares, assumindo 1 USD = 64 MT.

const converter=(meticals)=>{
    let convert=meticals/64;
    return convert;
}
const dolars = converter(2000);// quero converter 2000mt em dolars
console.log(`Fica ${dolars.toFixed(2)} USD`)

//Percorra um array de dez notas e use continue para ignorar as negativas, contando apenas as positivas
const grades= [10,-20,16,13,-14,18,-1,11,-10,9];
let positives=0;
 for(const grade of grades){
    if(grade<0) continue;
     positives++;
     console.log(grade);

 }
 console.log(`A Quantidade de notas positivas é ${positives}`)
 