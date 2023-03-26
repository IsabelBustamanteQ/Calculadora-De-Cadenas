import sumar from "./sumar.js"
describe("Calculadora de Cadenas", () => {
    it("deberia sumar una cadena vacía", () => {
      expect(sumar("")).toEqual(0);
    });
    it("convertir una cadena en numero ",()=>{
        expect(sumar("1")).toEqual(1);
    });
    it("sumar una cadena de dos numeros por coma",()=>
    {
        expect(sumar("1,2")).toEqual(3);
    });
    it("sumar 4 numeros separados por coma",()=>{
        expect(sumar("1,2,3,4")).toEqual(10);
    });
    it("sumar 2 numeros separados por guion",()=>{
        expect(sumar("1-2")).toEqual(3);
    });
    it("sumar varios numeros separados por coma y guion",()=>{
        expect(sumar("1,2,1-2-3")).toEqual(9);
    });
    it("sumar varios numeros con delimitador especificado", ()=>{
        expect(sumar("//[;] 6;7;4")).toEqual(17);
    })

  });