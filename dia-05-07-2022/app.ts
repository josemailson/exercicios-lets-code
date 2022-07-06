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