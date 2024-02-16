var resposta = '';
var temperatura = parseFloat(prompt("Conversor de temperatura:\nEscolha um tipo de temperatura:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius"));

switch (temperatura) {
  case 1:
    var c = parseFloat(prompt("Informe a temperatura em Celsius:"));
    var f = (c * 9/5) + 32;
    resposta = f + "°F";
    break;
  case 2:
    var f = parseFloat(prompt("Informe a temperatura em Fahrenheit:"));
    var c = (f - 32) * 5/9;
    resposta = c + "°C";
    break;
  default:
    resposta = "Opção inválida";
}

alert(resposta);
