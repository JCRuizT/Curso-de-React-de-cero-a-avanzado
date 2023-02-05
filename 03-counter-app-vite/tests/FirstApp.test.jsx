import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {

    /*
    test('Debe de hacer un match con el snapshot', () => {

        const { container } = render(<FirstApp name="Julio Ruiz"/>);
        
        expect(container).toMatchSnapshot();

    });

    */

    test('Debe de mostrar el titulo en un h1', () => {

        const name = 'Julio Ruiz';
        const { container,getByText, getByTestId } = render(<FirstApp name={ name }/>);
        
        // Valida que se encuentre el texto de la constante name
        expect( getByText(name) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect( h1.textContent ).toBe(name)


        expect(getByTestId('test-name').innerHTML).toContain(name);

    });


    test('Debe de mostrar el subtitulo enviado por props', () => {


        const name = 'Julio Ruiz';
        const subTitle = 'Subtitulo de ejemplo';
        const { getByText } = render(<FirstApp name={ name } subTitle={subTitle}/>);
        
        // Valida que se encuentre el texto de la constante name
        expect( getByText(subTitle) ).toBeTruthy();

    })
});