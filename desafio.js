let xpPlayer = 1343;
let nomeDoPlayer = "BaiacudeCueca";
let xpMaximo = 10001;
let rankPlayer = " ";
if (xpPlayer <= 0 ){
rankPlayer = "Sem Rank!"
}
else if (xpPlayer >= 0 && xpPlayer <= 1000){
rankPlayer = "Ferro!"
}
else if (xpPlayer > 1000 && xpPlayer <=2000){
rankPlayer = "Bronze!"
}
else if (xpPlayer > 2000 && xpPlayer <=5000){
rankPlayer = "Prata!"
}
else if (xpPlayer > 5000 && xpPlayer <= 7000){
rankPlayer = "Ouro!"
}
else if (xpPlayer > 7000 && xpPlayer <= 8000){
rankPlayer = "Platina!"
}
else if (xpPlayer > 8000 && xpPlayer <= 9000){
rankPlayer = "Ascendente!"
}
else if (xpPlayer > 9000 && xpPlayer <= 10000){
rankPlayer = "Imortal!"
}
else if (xpPlayer >= 10000){
rankPlayer = "Radiante!"
}
console.log (" O Herói " + nomeDoPlayer + " Possui " + xpPlayer + " de XP, e seu rank é: " + rankPlayer)