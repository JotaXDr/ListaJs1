
var notaHistoria = parseFloat(prompt("Informe sua nota da matéria de História:"))
var notaMatematica = parseFloat(prompt("Informe sua nota da matéria de Matemática:"))
var notaPortugues = parseFloat(prompt("Informe sua nota da matéria de Português:"))


var pesoHistoria = 10
var pesoMatematica = 8.5
var pesoPortugues = 7


var somaPesos = pesoHistoria + pesoMatematica + pesoPortugues
var mediaFinal = (notaHistoria * pesoHistoria + notaMatematica * pesoMatematica + notaPortugues * pesoPortugues) / somaPesos


alert("A média final é: " + mediaFinal.toFixed(2))
