import getImagen from '../../src/base-pruebas/11-async-await'
describe('Pruebas en 11-async-await ', () => { 

    test('getImagen debe de retornar un url de imagen ', async() => {

        const url = await getImagen();

        expect(typeof url).toBe('string');

        console.log(url);

    });
});