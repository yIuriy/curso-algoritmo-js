// Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem

let nomeFuncionario = window.prompt("Nome do Funcionário: ")
let salarioFuncionario = Number(window.prompt("Salário do Funcionário: ")).toLocaleString("pt-br",{style: 'currency', currency: "BRL",})
window.alert(`O(a) funcionário(a) ${nomeFuncionario} ganha mensalmente um salario de ${salarioFuncionario}.`)