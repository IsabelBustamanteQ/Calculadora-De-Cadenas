function sumar(cadenaDeNumeros){
    if(cadenaDeNumeros==="")
    {
        return 0;
    }
    if(cadenaDeNumeros.includes("//["))
    {
        var delimitador=cadenaDeNumeros.charAt(3);
        var cadenaSinDefinicionDeDelimitador=cadenaDeNumeros.slice(5);
        cadenaDeNumeros=cadenaSinDefinicionDeDelimitador.replaceAll(delimitador,",");
    }
    cadenaDeNumeros=cadenaDeNumeros.replaceAll('-',',');
    let ListaDeNumeros=cadenaDeNumeros.split([","]);
    let total_suma=0;
    for(var i=0;i<ListaDeNumeros.length;i++)
    {
        var numeroASumar=parseInt(ListaDeNumeros[i]);
        if(numeroASumar<=1000)
        {
            total_suma=total_suma+numeroASumar;
        }
    }
    return total_suma;
}
export default sumar;