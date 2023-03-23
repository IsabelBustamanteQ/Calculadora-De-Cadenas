import calcularCadena from "./calculadoraCadenas.js"
describe("Calculadora de Cadenas", () => {
    it("deberia sumar una cadena vacía", () => {
      expect(calcularCadena("")).toEqual(0);
    });
    it("convertir un caracter en numero ",()=>{
        expect(calcularCadena("1")).toEqual(1);
    });
    it("sumar una cadena de dos numeros por coma",()=>
    {
        expect(calcularCadena("1,2")).toEqual(3);
    });
    it("sumar 4 numeros separados por coma",()=>{
        expect(calcularCadena("1,2,3,4")).toEqual(10);
    });
    it("sumar 2 numeros separados por guion",()=>{
        expect(calcularCadena("1-2")).toEqual(3);
    })
  });