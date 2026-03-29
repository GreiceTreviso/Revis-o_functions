// importando as function
import {mostrarIdade} from "./exe1.js";
import { somaDavid } from "./exe2.js";
import { senha } from "./exe3.js";
import { media } from "./exe4.js";
import { menorMaior } from "./exe5.js";
import { Cardapio } from "./exe7.js";
import { Tabuada } from "./exe8.js";
import { vetor } from "./exe9.js";
import express from "express";

//criando a constante (servidor) para startar a function express
const app=express()

//criando a rota para todos abaixo

// exe1 declaração variavel
app.get('/one',(req, res)=> { //app.get cria rota para executar function quando acessar link pelo nav
let idade = mostrarIdade(18)  //"/one" o caminho. req requisição oq o va envia pro servidor e res a resposta 
res.send(idade)   //res.send diz pro servidor envia pro nav
})


// exe2 aritiméticos
app.get('/two',(req, res)=> { 
let soma = somaDavid( 12, 23 )
res.send(soma)
})


//exe3 operadores relacionais
app.get('/three',(req, res)=> {
let passaword = senha(346)
res.send(passaword)
})


// exe4. operadores de codigos
app.get('/four', (req, res)=>{
let resMedia = media (7,8)
res.send(resMedia)
})


//exe5 estrutura if/else
app.get('/five',(req, res)=>{
let Maior = menorMaior (39445,4334)
res.send(Maior)
})

//exe7 estrutura case
app.get('/six',(req, res)=>{
let valor = Cardapio("carneHumana")
res.send(valor)
})


//exe8 laço repetição
app.get('/seven',(req, res)=>{
let resultado = Tabuada(5)
res.send(resultado)
})


//exe9 vetor
app.get('/eight',(req,res)=>{
    let numeros = vetor()
res.send(numeros)
})


app.listen(3000, () => { //app.listen liga o servidor e 3000 é o numero dele
  console.log('Server is running on http://localhost:3000') //uma mensagem pra saber que o servidor iniciou
})