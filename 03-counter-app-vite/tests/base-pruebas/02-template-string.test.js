import getSaludo from "../../src/base-pruebas/02-template-string";

describe('Prueba del archivo 02-template-string.js', () => { 
    test('getSaludo debe retornar "Hola Julio"', () => { 

        const name = "Julio";
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});