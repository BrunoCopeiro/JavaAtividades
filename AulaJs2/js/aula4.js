let idade, categoria;

idade = parseFloat(prompt("Digite a idade do Nadador:"));

if(idade>=5 && idade<=7){
    categoria = "Infantial A";
 } else if(idade>=8 && idade<=10){
        categoria = "Infantial B";
} else if(idade>=11 && idade<=13){
    categoria = "Juvenil A";
} else if(idade>=14 && idade<=17){
    categoria = "Juvenil B";
} else if(idade>=18){
    categoria = "Adulto"
} else{
    categoria= "Idade fora das categoristas";
}

alert(" idade do nadador: " + idade + " anos "/n + " Categoria: " + categoria);