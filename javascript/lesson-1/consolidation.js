    //1- Crie um ficheiro app.js ligado a uma página HTML e escreva na consola o seu nome, a sua cidade e o ano actual.
    let firstName= "Maud";
    let city="Maputo";
    let currentYear=2016;
    console.log(`O meu nome é ${firstName},
        A minha cidade é ${city},
        ano actual é ${currentYear}
        `);

    //2- Declare uma variável para cada um dos cinco tipos de dados estudados e imprima o tipo de cada uma com typeof.
    let num=5;
    let bool=true;
    let surname=null;
    let province="Maputo";
    let summary;//total
    let price=20;
    let quantity=3;
    let total=price*quantity;
    console.log(typeof(num));
    console.log(typeof(bool));
    console.log(typeof(surname));
    console.log(typeof(province));
    console.log(typeof(summary));

    //3-Reescreva a frase "O cliente " + nome + " pagou " + total + " MT" usando um template literal.
    console.log(`O cliente ${firstName} pagou ${total} MT`)

    //4- Calcule quantas notas de 200 MT e quantos meticais sobram para um valor de 1 750 MT, usando / e %.
    let value=1750;
    let bill=200;
    let howMany;
    let howMuch;
    howMany=Math.floor(value/bill);
    howMuch=value%bill;

    console.log(`Tem ${howMany} notas de 200mt`);
    console.log(`Sobra ${howMuch} Mt`);


    //5- Escreva cinco comparações com === e || e preveja o resultado de cada uma antes de a correr na consola.
    let grade1=15;
    let grade2=17;
    console.log(5==="5" || "7"===7)//false
    console.log("cat"==="cat" || 6===6)//true
    console.log(num==value || bill===bool)//false
    console.log(grade1===15 || grade2===17)//true
    console.log(grade1===15 || grade2===15)//true 'cause the 1st one is true and i said or(||) not and(&&)

