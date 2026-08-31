    //1- Crie um ficheiro app.js ligado a uma página HTML e escreva na consola o seu nome, a sua cidade e o ano actual.
    const FIRST_NAME= "Maud";
    const CITY="Maputo";
    const CURRENT_YEAR=2026;
    console.log(`
        O meu nome é ${FIRST_NAME},
        A minha cidade é ${CITY},
        o ano actual é ${CURRENT_YEAR}
        `);

    //2- Declare uma variável para cada um dos cinco tipos de dados estudados e imprima o tipo de cada uma com typeof.
    let age=26;
    let student=true;
    let lastName="Uate";
    let province=null;
    let mobile;
   
    console.log(typeof(age));
    console.log(typeof(student));
    console.log(typeof(lastName));
    console.log(typeof(province));
    console.log(typeof(mobile));

    //3-Reescreva a frase "O cliente " + nome + " pagou " + total + " MT" usando um template literal.
    
    let total=1000;
    console.log(`O cliente ${FIRST_NAME} pagou ${total} MT`)

    //4- Calcule quantas notas de 200 MT e quantos meticais sobram para um valor de 1 750 MT, usando / e %.
    let value=1750;
    let bill=200;
    let howManyBills=Math.floor(value/bill);
    let howMuchLeft=value%bill;

    console.log(`Tem ${howManyBills} notas de 200mt`);
    console.log(`Sobra ${howMuchLeft} Mt`);


    //5- Escreva cinco comparações com === e || e preveja o resultado de cada uma antes de a correr na consola.
    let grade1=15;
    let grade2=17;
    console.log(5==="5" || "7"===7)//false
    console.log("cat"==="cat" || 6===6)//true
    console.log(num==value || bill===bool)//false
    console.log(grade1===15 || grade2===17)//true
    console.log(grade1===15 || grade2===15)//true 'cause the 1st one is true and i said or(||) not and(&&)

