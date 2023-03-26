function sumar(cadenaDeNumeros){
    if(cadenaDeNumeros==="")
    {
        return 0;
    }
    if(cadenaDeNumeros.includes("//["))
    {
        var definicionDeDelimitadores=cadenaDeNumeros.slice(cadenaDeNumeros.indexOf("[")+1,cadenaDeNumeros.lastIndexOf("]"));
        let delimitadores=definicionDeDelimitadores.split("][");
        var cadenaDeNumeros=cadenaDeNumeros.slice(cadenaDeNumeros.indexOf("] ")+2);
        for(var i=0;i<delimitadores.length;i++)
        {
            console.log(delimitadores[i]);
            cadenaDeNumeros=cadenaDeNumeros.replaceAll(delimitadores[i],",");
        }
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