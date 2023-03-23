function calcularCadena(texto){
    if(texto==="")
    {
        return 0;
    }
    if(texto.length==1)
    {
        return parseInt(texto);
    }
    let numeros=texto.split(",");
    let sumador=parseInt(numeros[0])+parseInt(numeros[1]);
    return sumador;
}
export default calcularCadena;