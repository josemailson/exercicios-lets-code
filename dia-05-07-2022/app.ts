// 🧠 EXERCÍCIO DO DIA 💭

// 2️⃣ Escreva um programa que recebe inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.

// O tópico 🧠EXERCÍCIO DO DIA💭  está aberto para vocês trocarem resoluções e solucionarem os exercícios.

function separaImparesPares (num: number){
    let impares: number[]=[];
    let pares: number[]=[];
    for (let i=1; i<=num; i++){
        if(i%2===0){
            pares.push(i);
        } else impares.push(i);
    }
    return `Números Pares: ${pares}
    Números Ímpares: ${impares}`
}

console.log(separaImparesPares(20))