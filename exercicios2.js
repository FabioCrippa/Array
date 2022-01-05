//metodos array

//.map altera uma array
let numerosPares = [2, 4, 6, 8, 10];
let numerosParesDobro = numerosPares.map(function (valor) {
     return valor * 2;
})
console.log(numerosParesDobro);

//.filter filtra informacoes
let numerosFiltrados = numerosPares.filter(function (valor) {
    return valor > 8;    
})
console.log(numerosFiltrados);

//.reduce converte a array em um unico valor
let somaNumeros = numerosPares.reduce(function (acumulativo, valor) {
    return acumulativo + valor;
})
console.log(somaNumeros);

//.forEach itera uma array, ou seja, passa por todos os elementos
numerosPares.forEach(function (indice, valor) {
    console.log("O indice" + " " + indice + " " + "tem o valor" + " " + valor)
})

//.find busca um elemento na array, caso nao encontre, retornara "undefined"
let encontre = numerosPares.find(function (numero) {
    return numero == 8;
})
console.log(encontre);
