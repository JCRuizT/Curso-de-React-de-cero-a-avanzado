import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 

    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {

        const id = 1;
        const heroe = getHeroeByIdAsync(id);

        heroe.then((hero) => {

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        })

    });


    
    test('getHeroeByIdAsync debe de obtener  error si heroe no existe', (done) => {

        const id = 100;
        const heroe = getHeroeByIdAsync(id);

        heroe.
            then(hero => {
                expect(hero).toBeFalsy();
            })
            .catch((error) => {

            expect('No se pudo encontrar el héroe').toBe(error);
            done();
        })

    });


});
