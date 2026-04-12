// importando as function
import {mostrarIdade} from "./exe1.js";
import { somaDavid } from "./exe2.js";
import { senha } from "./exe3.js";
import { media } from "./exe4.js";
import { menorMaior } from "./exe5.js";
import { Cardapio } from "./exe6.js";
import { Tabuada } from "./exe7.js";
import { vetor } from "./exe8.js";
import express from "express";

//criando a constante (servidor) para startar a function express
const app=express()

//criando a rota para todos abaixo

//params
// exe1 declaração variavel
app.get('/one/:n1',(req, res)=> { //app.get cria rota (o caminho e os parametros q vamos passar) req pede e res manda
let {n1} = req.params //passando valor url
let idade = mostrarIdade(n1) //chamando function e executando
res.send(idade)   //enviando a reposta
}) 


// exe2 aritiméticos
app.get('/two/:n1/:n2',(req, res)=> { 
let {n1, n2} = req.params
let somadiv = somaDavid( n1, n2 )
res.send(somadiv) 
})


//exe3 operadores relacionais
app.get('/three/:n1',(req, res)=> {
let {n1} = req.params
let passaword = senha(n1)
res.send(passaword)
})


// exe4. operadores de codigos
app.get('/four/:n1/:n2/:n3', (req, res)=>{
let {n1, n2, n3} = req.params
let resMedia = media (n1, n2, n3)
res.send(resMedia)
})

//querystring
//exe5 estrutura if/else
app.get('/five',(req, res)=>{  //criando rota e passando parametros
let {n1, n2} = req.query 
let defi = menorMaior (n1,n2)
res.send(defi)
})

//exe6 estrutura case
app.get('/six',(req, res)=>{
let {humano, picanha, frango} = req.query
let valor = Cardapio(humano, picanha, frango)
res.send(valor)
})
 

//exe7 laço repetição
app.get('/seven',(req, res)=>{
let {n} = req.query
let resultado = Tabuada(n)
res.send(resultado)
})


//exe8 vetor
app.get('/eight',(req,res)=>{
  let {n1,n2,n3} = req.query
  let numeros = vetor(n1,n2,n3)
  res.send(numeros)
})


app.listen(3000, () => { //app.listen liga o servidor e 3000 é o numero dele
  console.log('Server is running on http://localhost:3000') //uma mensagem pra saber que o servidor iniciou
})