let time1, placar, gols, gols2, time2, empate;

time1 = prompt(" Digite o nome do time 1");
time2 = prompt("Digite o nome do time 2");

gols = parseFloat(prompt(` Digite o numero de gols do ${time1}`));
gols2 = parseFloat(prompt(` Digite o numero de gols do ${time2}`));

if (gols > gols2) {
    placar = " O primeiro time digitado ganhou  de " + gols + " do "+time2 ;
} else if (gols2 > gols) {
    placar = " O segundo time digitado ganhou  de " + gols2 + " do "+time1 ;
}
else {

    placar = " O " + time1 + " empatou com o " + time2 ;
}

alert("O resultado do jogo foi: " + placar);

