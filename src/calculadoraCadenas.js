function calcularCadena(texto){
    if(texto==="")
    {
        return 0;
    }/*
    if(texto.length==1)
    {
        return parseInt(texto);
    }*/
    let numeros=texto.split(",");
    let sumador=0;
    for(var i=0;i<numeros.length;i++)
    {
        sumador=sumador+parseInt(numeros[i]);
    }
    return sumador;
}
export default calcularCadena;