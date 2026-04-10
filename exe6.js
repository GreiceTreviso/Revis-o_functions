function Cardapio (carnes) {
    let valor
   switch (carnes) {

    case "carneHumana": valor = 120000
    break
 
    case "picanha": valor = 250
    break

    case "frango": valor = 50
    break
     
    default: valor = "não tem"
 }
 return valor
} 
export {Cardapio}