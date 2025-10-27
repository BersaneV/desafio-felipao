//calcula o ranking de um jogador baseado em vitórias e derrotas

function calcularRanking (wins, losses) {

let saldoWinsLosses = wins - losses;

 let rank = " ";
    if (saldoWinsLosses <= 0 ){
        rank = "Sem Rank!";
    }  
    else if (saldoWinsLosses > 0 && saldoWinsLosses <= 10){ 
        rank = "Ferro!";
    }
    else if (saldoWinsLosses > 10 && saldoWinsLosses <=20){
        rank = "Bronze!";
    }
    else if (saldoWinsLosses > 20 && saldoWinsLosses <=50){
        rank = "Prata!";
    }
    else if (saldoWinsLosses > 50 && saldoWinsLosses <= 80){
        rank = "Ouro!";
    }   
    else if (saldoWinsLosses > 80 && saldoWinsLosses <= 90){
        rank = "Diamante!";
    }
    else if (saldoWinsLosses > 90 && saldoWinsLosses <=100){
        rank = "Lendário!";
    }
    else if (saldoWinsLosses >= 101){
        rank = "Imortal!";
    }
    return (" O herói possui " + saldoWinsLosses + " de saldo entre vitórias e derrotas, e seu rank é: " + rank);
}
console.log (calcularRanking (45, 10));
