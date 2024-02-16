var pedidos = prompt("Bem-vindo a Casa della Pasta! Abaixo está nosso menu:\n 1 - Margherita (R$ 60,00)\n 2 - Marinara (R$ 50,00)\n 3 - Prosciutto e funghi (R$ 75,00)\n 4 - Quattro stagioni (R$ 70,00)\n 5 - Capricciosa (R$ 95,00)\n 6 - Quattro formaggi (R$ 87,50)\n\nPor favor, digite o número correspondente ao prato que deseja:");


switch (pedidos) {
  case "1":
    alert("Você escolheu a Pizza de Margherita.\nSubtotal: R$ 60,00");
    break;
  case "2":
    alert("Você escolheu a Pizza Marinara.\nSubtotal: R$ 50,00");
    break;
  case "3":
    alert("Você escolheu a Pizza Prosciutto e Funghi.\nSubtotal: R$ 75,00");
    break;
  case "4":
    alert("Você escolheu a Pizza Quattro Stagioni.\nSubtotal: R$ 70,00");
    break;
  case "5":
    alert("Você escolheu a Pizza Capricciosa.\nSubtotal: R$ 95,00");
    break;
  case "6":
    alert("Você escolheu a Pizza Quattro Formaggi.\nSubtotal: R$ 87,50");
    break;
  default:
    alert("Opção inválida. Por favor, selecione uma opção válida.");
}



