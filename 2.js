var nota = prompt("Informe sua nota (0 a 100):");

switch (true) {
  case nota <= 10:
    prompt("F");
    break;
  case nota <= 30:
    prompt("D");
    break;
  case nota <= 50:
    prompt("C");
    break;
  case nota <= 70:
    prompt("B");
    break;
  case nota <= 90:
    prompt("A");
    break;
  case nota = 100:
    prompt("Nota Máxima");
    break;
  default:
    prompt("Nota inválida");
}
