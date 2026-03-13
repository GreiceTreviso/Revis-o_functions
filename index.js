// importando as function
import {mostrarIdade} from "./exe1.js";
import { somaDavid } from "./exe2.js";
import { senha } from "./exe3.js";
import { media } from "./exe4.js";
import { menorMaior } from "./exe5.js";
import { Cardapio } from "./exe7.js";
import { Tabuada } from "./exe8.js";
import { vetor } from "./exe9.js";

// exe1 declaração variavel
let idade = mostrarIdade(18)
console.log(idade)

// exe2 aritiméticos
let soma = somaDavid( 12, 23 )
console.log(soma)

//exe3 operadores relacionais
let passaword = senha(346)
console.log(passaword)

// exe4. operadores de codigos
let resMedia = media (7,8)
console.log(resMedia)

//exe5 estrutura if/else
let Maior = menorMaior (39445,4334)
console.log(Maior)

//exe7 estrutura case
let valor = Cardapio("carneHumana")
console.log(valor)

//exe8 laço repetição
let resultado = Tabuada(5)
console.log(resultado)

//exe9 vetor
let numeros = vetor()
console.log(numeros)

