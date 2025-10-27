// Funções para as operações matemáticas
let continuar = true;
while (continuar) {
// pedir os números para o usuário
let n1 = parseFloat(prompt("Digite o primeiro número:  "));
let n2 = parseFloat(prompt("Digite o segundo número:  "));
// Escolha da operação
let operacao = prompt("Escolha a operação: (+, -, *, /): ");
let resultado;  
// Realizar a operação escolhida com switch case
switch (operacao) {
    case "+":
        resultado = n1 + n2;
        break;
        case "-":
        resultado = n1 - n2;
        break;
        case "*":
        resultado = n1 * n2;
        break;
        case "/":
            if (n2 !== 0) {
                resultado = n1 / n2;    
            } else { 
                resultado = "Erro: Divisão por zero não é permitida.";
            }
        break;
        default:
        resultado = "Operação inválida.";
}
// Exibir o resultado
console.log ("o resultado de " + n1 + " " + operacao + " " + n2 + " é: " + resultado);
// Perguntar se quer continuar
let continuar = prompt ("Deseja realizar outra operação? (sim/nao): ");
if (continuar.toLowerCase() !== "sim") {
    continuar = false;
console.log ("Calculadora encerrada.");
     }
}