function calcularCadena(texto){
    if(texto==="")
    {
        return 0;
    }
    texto=texto.replace('-',',');
    let numeros=texto.split(",");
    let sumador=0;
    for(var i=0;i<numeros.length;i++)
    {
        sumador=sumador+parseInt(numeros[i]);
    }
    return sumador;
}
export default calcularCadena;