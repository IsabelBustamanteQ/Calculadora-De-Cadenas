import calcularCadena from "./calculadoraCadenas.js"
describe("Calculadora de Cadenas", () => {
    it("deberia sumar una cadena vacía", () => {
      expect(calcularCadena("")).toEqual(0);
    });
    it("convertir un caracter en numero ",()=>{
        expect(calcularCadena("1")).toEqual(1);
    })
  });