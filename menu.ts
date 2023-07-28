import PromptSync from "prompt-sync";

// import { umAdez } from "./ex1.ts";
// import { tabuada } from "./ex4.ts";
// import { fibonacci } from "./ex5.ts";
// import { pares20 } from "./ex6.ts";
// import { soma } from "./ex7.ts";
// import { maioridade } from "./ex8.ts";



import { umAdez, tabuada, fibonacci, pares20, soma, maioridade} from "./funcoes";


const prompt = PromptSync();

let exe:number;
let continuar:string;






do {
    exe = parseInt(prompt("Digite um número que represente um exercício de 1 a 10: "));
    // exe = 1;

    switch (exe) {
        case 1:
            umAdez();
            break;

        case 2:
            tabuada();
            break;

        case 3:
            fibonacci();
            break;

        case 4:
            pares20();
            break;

        case 5:
            soma();
            break;

        case 6:
            maioridade();
            break;

        default:
            console.log("Digite uma opção valida!");
            break;
    }

    continuar = prompt("Deseja Continuar ver outros exercícios? Digite (S) para sim e (N) para não: ")

} while (continuar.toLocaleUpperCase() === "S");