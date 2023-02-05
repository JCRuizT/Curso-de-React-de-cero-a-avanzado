import { render,screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {

    const name = "Julio Ruiz";
    const subTitle = "Subtitle existe";

    test('Debe de hacer un match con el snapshot', () => {

        const { container } = render(<FirstApp name={name}/>);
        expect(container).toMatchSnapshot();
    });


    
    test('Debe de mostrar el nombre Julio Ruiz', () => {

        render(<FirstApp name={ name }/>);

        expect(screen.getByText(name)).toBeTruthy();
        // Valida que se encuentre el texto de la constante name
        //expect( getByText(name) ).toBeTruthy();

    });


    test('Debe de mostrar el nombre en un h1', () => {


        render(<FirstApp name={ name }/>);
        expect(screen.getByRole('heading', { level: 1}).innerHTML).toContain(name);
        
    })


    test('Debe de mostrar el subtitulo enviado props', () => {

        render(<FirstApp subTitle={subTitle}/>);
        expect(screen.getByTestId('subtitle')).toBeTruthy();
    })

});