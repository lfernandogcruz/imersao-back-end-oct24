// 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Boas vindas!');

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, 
//    utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = 'Luis';
console.log(`Olá, ${nome}!`);

// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert 
//    para exibir a mensagem "Olá, [seu nome]!" .

alert(`Olá, ${nome}!`);

// 4. Utilize o prompt e faça a seguinte pergunta: 
//    Qual a linguagem de programação que você mais gosta?. 
//    Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let favLang = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`Sua linguagem preferida é ${favLang}`);

// 5. Crie uma variável chamada "valor1" e outra chamada "valor2", 
//    atribuindo a elas valores numéricos de sua escolha. 
//    Em seguida, realize a soma desses dois valores e armazene o resultado em uma 
//    terceira variável chamada "resultado". Utilize o console.log para mostrar a 
//    mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 9;
let valor2 = 56;

let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores 
//    numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e 
//    armazene o resultado em uma terceira variável chamada "resultado". 
//    Utilize o console.log para mostrar a mensagem 
//    "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let resultadoSub = valor1 > valor2 ? valor1 - valor2 : valor2 - valor1;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultadoSub}`);

// 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize 
//    um if para verificar se a pessoa é maior ou menor de idade, 
//    exibindo uma mensagem apropriada no console.

let idade = prompt('Digite sua idade');
let definidor = idade >= 18 ? 'maior' : 'menor';
console.log(`Você é ${definidor} de idade!`);

// 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, 
//    negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Digite um número');
if (numero > 0) {
  console.log(`O numero ${numero} é POSITIVO`);
} else if (numero < 0) {
  console.log(`O numero ${numero} é NEGATIVO`);
} else {
  console.log(`O numero ${numero} é NEUTRO/ZERO`);
}

// 9. Use um loop while para imprimir os números de 1 a 10 no console.

let contador = 1;
while (contador <= 10) {
  console.log(`Contando... ${contador}`);
  contador++
}

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. 
//     Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 8;
if (nota >= 7) {
  console.log('APROVADO');
} else {
  console.log('REPROVADO');
}

// 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let randomNumber1 = Math.random();
console.log(randomNumber1);

// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let inteiro10 = parseInt(randomNumber1 * 10) + 1;
console.log(inteiro10);

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let inteiro1000 = parseInt(randomNumber1 * 1000) + 1;
console.log(inteiro1000);
