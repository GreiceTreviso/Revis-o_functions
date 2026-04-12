function Tabuada (n) {
    let res = ""
    for (let i=1; i<=10; i++) {
    res += n + "x" +i+ "=" + (n * i)  +  "\n"
    }
    return res;
}
export {Tabuada}
// let res = "" cria string vazia q vai guardar as linhas da tabuada
// for é o inicio,condição
// let i cria a variavel i que vai controlar repetiçoes. =1 manda começar em um
// i<=10 é a condicao, repete emqaunto i for menor ou igual a 10, nao passa desse limite.
//  i++ é para aumenatr de um em um, aumenta 1 em cada repetiçao

// res += é para adicionar resultado a variavel 
// + "x" +i+ "=" + é montando como ele vai apresentar print,nesse caso variavel x result
// "\n" quebra a linha,print um encima do outro
