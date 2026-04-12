function senha (n1){ //atualizei essa function, melhorei ela.
    if (n1 == 345 ) {
        n1 = "correto, liberado"
    }
     else if ( n1 != 345) { //tem que por else if para usar os ()
        n1 = "banido" }
return n1
}
export {senha}