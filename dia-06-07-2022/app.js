"use strict";
// 🧠 EXERCÍCIO DO DIA 💭
// 3️⃣ Uma loja tem tem uma política de descontos de acordo com o valor da compra do cliente. Os descontos começam acima dos R$500. A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%.
// Por exemplo: R$500 = 1% || R$600,00 = 2% … etc…
// Faça um programa que exiba essa tabela de descontos no seguinte formato:
// Valordacompra – porcentagem de desconto – valor final
// Vocês podem solucionar dúvidas, conversar entre si e testar resoluções no tópico 🧠EXERCÍCIO DO DIA💭
let valores = [];
let desconto = [];
let valorFinal = [];
for (let i = 0; i < 25; i++) {
    valores[i] = 500 + (100 * i);
    desconto[i] = i + 1;
    valorFinal[i] = valores[i] - (valores[i] * (desconto[i] / 100));
}
console.log(`Valor da compra - porcentagem de desconto(%) - valor final`);
for (let i = 0; i < 25; i++) {
    console.log(`R$ ${valores[i].toString().padEnd(25)} ${desconto[i].toString().padEnd(20)} R$ ${valorFinal[i].toString().padEnd(5)}`);
}
