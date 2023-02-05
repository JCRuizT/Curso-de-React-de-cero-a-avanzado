import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en el archivo 08-imp-exp', () => { 

    test('getHeroeById debe de retornan un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroeById debe de retornan undefined si no existe el id ', () => {

        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();

    });

    
    // Tarea 
    // getHeroesByOwner
    // Debe de retornar un arreglo con los heroes de  DC
    // Length === 3

    test('getHeroesByOwner de validar que los heroes sean de DC ', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toEqual(3);
    });


    // Tarea 
    // getHeroesByOwner
        // Debe retornar un arreglo con los heroes de marvel
    // Length === 2

    
    test('getHeroesByOwner de validar que los heroes sean de marvel ', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toEqual(2);
    });
    


});