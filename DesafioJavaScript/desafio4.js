// 1) Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas!');

// 2) Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = Eliane;
console.log(`Boas vindas ${nome}!`);

// 3) Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome  = Juliana;
alert(`Olá, ${nome}!`);

/* 4) Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
Em seguida, armazene a resposta em uma variável e mostre no console do navegador. */
let linguagemPreferida = prompt('Qual linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);

/* 5) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console. */
let valor1 = 4;
let valor2 = 6;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);


/* 6) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console. */
let valor1 = 20;
let valor2 = 9;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

/* 7) Peça ao usuário para inserir sua idade com prompt. 
Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console. */
let idade = prompt('Digite a sua idade: ');
if(idade > 17) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

// 8) Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
var numero = parseFloat(prompt('Digite um número: '));
if(numero > 0) {
    console.log('O número é positivo');
}
else if(numero < 0) {
        console.log('O número é negativo');
} 
else{
    console.log('O número é zero');
}            

// 9) Use um loop while para imprimir os números de 1 a 10 no console.
let numero = 1;
while (numero <= 10){
    console.log(numero);
numero++;
}

/* 10) Crie uma variável "nota" e atribua um valor numérico a ela. 
Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console. */
let nota = 22;
if(nota >= 7){
    console.log('Você foi aprovado.');
} else {
    console.log('Você foi reprovado.');
}

// 11) Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// 12) Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroInteiroAleatorio = parseInt(Math.random()* 10) + 1;
console.log(numeroInteiroAleatorio);

// 13) Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroIntAleatorio = parseInt(Math.random()* 1000) + 1;
console.log(numeroIntAleatorio);