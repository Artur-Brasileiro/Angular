"use strict";
// VARIAVEIS
// TIPOS PRIMITIVOS.
// boolean , number, string.
let ligado = false;
let nome = "Artur";
let idade = 30; // também serve para números com casas decimais.
// TIPOS ESPECIAIS.
// null, undefined.
let nulo = null;
let indefinido = undefined;
// TIPOS ABRANGENTES.
// any, void.
let retorno;
let retornoView = "Artur"; // aceita qualquer tipo primitivo.
// OBJETO - SEM PREVISIBILIDADE.
let produto = {
    name: "Artur",
    cidade: "mg",
    idade: 30
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 54
};
// ARRAYS.
let dados = ["Artur", "Maria", "Felipe"];
let dados2 = ["Artur", "Maria", "Felipe"];
// ARRAY DE VARIOS TIPOS.
let infos = ["Artur", 20, "Maria", 24];
// TUPLAS.
let boleto = ["conta de agua", 199.90, 1294124];
// DATAS.
let aniversario = new Date("2025-02-13 05:00");
console.log(aniversario.toString());
// FUNÇÕES.
function addNumber(x, y) {
    return x + y;
}
;
let soma = addNumber(3, 5);
console.log(soma);
