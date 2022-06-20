const refrigerante = 11.99
const macarrao = 6.99
const ervilha = 6.99
const arroz = 22.99
const feijao = 11.89
const vinho = 70.00

const totalCompra = (3 * refrigerante + 4 * macarrao + 3 * ervilha + 3 * arroz + 2 * feijao + 3 * vinho)
const totalCompraMinha = (3 * refrigerante + 4 * macarrao + 3 * ervilha + 3 * arroz + 2 * feijao) 
console.log(`O total da compra foi de R$ ${totalCompra}!`)

let compra = (totalCompraMinha / 2)
let compra1 = (3 * vinho)
let compra2 = ((3 * vinho) / 2)

if (totalCompra % 2 == 0) {
    console.log(`Deu par! Eu pago a ${compra} e você ${compra1}`)
} else {
    console.log(`Deu Impar! A gente divide ${compra2}`)
}

let precoRefrigerante = parseFloat(prompt("Digite o valor do refrigerante"))
let quatidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))

let total1 = precoRefrigerante * quatidadeRefrigerante

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))

let total2 = precoMacarrao * quantidadeMacarrao

let precoErvilha = parseFloat(prompt("Digite o valor do ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))

let total3 = precoErvilha * quantidadeErvilha

let precoArroz = parseFloat(prompt("Digite o valor do arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))

let total4 = precoArroz * quantidadeArroz

let precoFeijao = parseFloat(prompt("Digite o valor do feijão"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))

let total5 = precoFeijao * quantidadeFeijao

let precoVinho = parseFloat(prompt("Digite o valor do vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))

let total6 = precoVinho * quantidadeVinho

let valorTotal = (total1 + total2 + total3 + total4 + total5 + total6)
let valorTotal2 = (total1 + total2 + total3 + total4 + total5)
alert(`Valor total de ${valorTotal}`)

let compra_1 = (valorTotal2 / 2)
let compra_2 = (3 * total6)
let compra_3 = ((3 * total6) / 2)

if (valorTotal % 2 == 0) {
    alert(`Deu par! Eu pago a ${compra_1} e você ${compra_2}`)
} else {
    alert(`Deu impar! A gente divide ${compra_3}`)
}








