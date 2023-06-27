"use strict";
//string
let nome = 'Izaque';
console.log(nome);
//nome = 28
//numbers
let idade = 27;
//idade = 'ana'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos 
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
console.log(typeof minhaIdade);
// array
let hobies = ['cozinha', 'sala', 'banheiro', 'quarto'];
console.log(hobies[1]);
console.log(typeof hobies);
hobies = [100];
// tuplas
let endereco = ['Avenima principal', 99, 'Chamar por Eurico'];
console.log(endereco);
endereco = ['Travessa Zaid', 5, 'Fundos'];
console.log(endereco);
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// Any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//Funcoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('OI');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 67));
//tipo funcao
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
//Objetos
let usuario = {
    nome: 'Joao',
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
//Desafio
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal!';
        }
        else {
            return 'Fora do horario!!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ['Brenda', 'Douglas'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal!';
        }
        else {
            return 'Fora do horario!!';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(9));
console.log(funcionario2.baterPonto(8));
//Union types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//nota = true
// checando tipos manual
let valor = 22;
if (typeof valor === 'number') {
    console.log('É um Nomber');
}
else {
    console.log(typeof valor);
}
// Tipo Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabao',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco invalido!');
        }
    }
};
produto.validarProduto();
//Valores opcionais com tipo Null
let altura = 12;
//altura = null -> nesse caso haverá um erro
let alturaOpicional = 12;
alturaOpicional = null; // Nesse caso nao haverá erros porque usamos o Union types
const contato3 = {
    nome: 'Fulano',
    tell1: '992349567',
    tell2: null
};
console.log(contato3.nome);
console.log(contato3.tell1);
console.log(contato3.tell2);
