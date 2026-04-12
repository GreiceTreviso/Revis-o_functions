function media (n1, n2, n3) {
    n1=parseInt(n1) 
    n2=parseInt(n2) 
    n3=parseInt(n3) 

    let res = (n1 + n2 + n3 ) / 3;
    if (res >= 6) {
        res = "aprovado"
    } else if (res <=5 ) {
        res = "reprovado"
    } 
    return res; 
}
export {media}