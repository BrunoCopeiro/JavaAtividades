var gasolina, valor, litros;
gasolina = 5.86;
valor=  parseFloat(prompt(" Valor que voce quer colocar "));
litros = valor/gasolina;
alert("  Voçe abasteceu: " + litros.toFixed(2) + " L de gasolina");
