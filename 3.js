// Implemente um programa que, dado o dia da semana como número, retorne o nome do dia usando switch.


var semana = parseInt(prompt("informe um dia da semana"));

switch (semana) {
  case 1:
    prompt("domingo")
    break;
  case 2:
    prompt("segunda");
    break;
  case 3:
    prompt("terça");
    break;
  case 4:
    prompt("quarta");
    break;
  case 5:
    prompt("quinta");
    break;
  case 6:
    prompt("sexta");
    break;
  case 7:
    prompt("sabado");
    break;
  default:
    prompt("mes invalido, informe um numero entre 1 e 12");
}

