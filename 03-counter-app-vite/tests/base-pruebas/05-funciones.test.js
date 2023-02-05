import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Prueba en 05-funciones',() => {

    test('getUser debe de retornar un objecto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo debe de retornar un objecto', () => {

        const name = 'Julio';
        const testUser = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo(name);

        expect(user).toEqual(testUser);

    })
});
