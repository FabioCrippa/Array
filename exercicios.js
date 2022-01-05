//estrutura da array
let pessoa = ["Vinicius", 22, 1.80, false, ["Musica", "cafe"]];
  console.log(pessoa[4]); //imprime a posicao 4//
  console.log(pessoa.length); //para descobrir o tamanho da array//
  
//metodos array
  pessoa.push("Graziela", "Maria"); //adiciona dados ao final da array//
  console.log(pessoa); //imprime a lista completa de array//

  pessoa.pop() //elimina o ultimo dado da array//
  console.log(pessoa);

  pessoa.shift() //elimina o primeiro dado da array//
  console.log(pessoa);

  pessoa.unshift("Margarete"); //adiciona dados no inicio da array//
  console.log(pessoa); 

  console.log(pessoa.indexOf("Graziela")); //procura um dado dentro da array, caso nao encontre, retornara -1//

  pessoa.lastIndexOf("Margarete"); //procura um dado dentro da array da ultima posicao para o inicio//
  
  pessoa.join(); //unifica todos os elementos da array//
  console.log(pessoa);

  pessoa.includes("Fabio"); //procura um dado dentro da array e retorna um booleano//
  console.log(pessoa);
  
