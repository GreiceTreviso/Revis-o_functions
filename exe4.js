function media (n1, n2) {
    let res = (n1 + n2 ) / 2;

    if (res >= 5) {
        res = "aprovado"
    } else {
        res = "reprovado"
    } 
    return res; 
}
export {media}