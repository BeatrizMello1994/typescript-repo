import PromptSync from "prompt-sync";
const prompt = PromptSync();
export function umAdez() {
    // 1. Imprimir números de 1 a 10 utilizando o loop for

    let numeros = ["1", "2", "3", "4", "5", "6,", "7", "8", "9", "10", "11"]
    //   0   1   2   3   4   5   6    7    8    9     10


    for (let contador = 0; contador < numeros.length; contador++) {
        let cadaElemento = contador;
        cadaElemento;
    }

}

// 2. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

export function tabuada() {


    let numero = parseInt(prompt("digite o numero que deseja ver a tabuada: "));

    if (!isNaN(numero)) {
        for (let contador = 1; contador <= 10; contador++) {
            console.log(`${numero} x ${contador} = ${numero * contador}`);

        }
    } else {
        console.log("Por favor, Digite um numero valido !");
    }

}


//  3. Imprimir os primeiros 10 números da sequência de Fibonacci.

export function fibonacci() {
    let numeroAnterior = 0;
    let numeroAtual = 1

    console.log(numeroAnterior);

    console.log(numeroAtual);

    for (let contador = 0; contador < 20; contador++) {
        let proximoNumero = numeroAnterior + numeroAtual;

        console.log(proximoNumero);

        numeroAnterior = numeroAtual;
        numeroAtual = proximoNumero;


    }
}

// Imprimir números pares de 0 a 20 utilizando o loop while

export function pares20() {

    let contador = 0

    while (contador <= 20) {
        console.log(contador);
        contador += 2
    }

}

// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

export function soma() {
    let soma = 0
    let i = 0

    while (i <= 100) {
        soma = soma + i
        i++
        console.log(soma);
    }

}


// // Faça um programa que receba a idade do usuário, enquanto a
// // resposta do usuário for menor que 18 anos continue a solicitar a
// // idade e mostre uma mensagem quando a idade do usuário for
// // maior que 18.


export function maioridade() {
    let idade


    do {
        idade = parseInt(prompt(" Digite sua idade: "))
    } while (idade < 18);

    console.log("maior que 18");
}
