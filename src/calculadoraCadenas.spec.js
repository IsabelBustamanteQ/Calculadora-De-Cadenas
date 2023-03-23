import calcularCadena from "./calculadoraCadenas.js"
describe("Calciuladora de Cadenas", () => {
    it("deberia sumar una cadena vacía", () => {
      expect(calcularCadena("")).toEqual(0);
    });
  });