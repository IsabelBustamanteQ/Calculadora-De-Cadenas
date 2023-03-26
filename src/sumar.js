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
    let numeros=cadenaDeNumeros.split([","]);
    let total_suma=0;
    for(var i=0;i<numeros.length;i++)
    {
        total_suma=total_suma+parseInt(numeros[i]);
    }
    return total_suma;
}
export default sumar;