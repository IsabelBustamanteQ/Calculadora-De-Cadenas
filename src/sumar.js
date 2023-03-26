function sumar(cadenaDeNumeros){
    if(cadenaDeNumeros==="")
    {
        return 0;
    }
    let delimitadores=ObtenerDelimitadoresDefinidos(cadenaDeNumeros);
    if(delimitadores.length>0)
    {
        cadenaDeNumeros=QuitarDefinicionDeDelimitadores(cadenaDeNumeros);
        cadenaDeNumeros=cambiarDelimitadores(cadenaDeNumeros,delimitadores);
    }
    cadenaDeNumeros=cadenaDeNumeros.replaceAll('-',',');
    let ListaDeNumeros=cadenaDeNumeros.split([","]);
    let total_suma=sumarListaDeNumeros(ListaDeNumeros);
    return total_suma;
}
function ObtenerDelimitadoresDefinidos(cadenaDeNumeros){
    if(cadenaDeNumeros.includes("//["))
    {
        var definicionDeDelimitadores=cadenaDeNumeros.slice(cadenaDeNumeros.indexOf("[")+1,cadenaDeNumeros.lastIndexOf("] "));
        let delimitadores=definicionDeDelimitadores.split("][");
        return delimitadores;
    } 
    return [];
}
function QuitarDefinicionDeDelimitadores(cadenaDeNumeros){
    cadenaDeNumeros=cadenaDeNumeros.slice(cadenaDeNumeros.indexOf("] ")+2);
    return cadenaDeNumeros;

}
function cambiarDelimitadores(cadenaDeNumeros,listaDeDelimitadores){
    
    for(var i=0;i<listaDeDelimitadores.length;i++)
    {
        cadenaDeNumeros=cadenaDeNumeros.replaceAll(listaDeDelimitadores[i],",");
    }
    return cadenaDeNumeros;
}
function sumarListaDeNumeros(ListaDeNumeros){
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