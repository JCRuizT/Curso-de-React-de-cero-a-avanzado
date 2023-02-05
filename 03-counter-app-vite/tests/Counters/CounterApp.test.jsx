import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/Counters";

describe('Pruebas en el componente <CounterApp>', () => {

    const value = 100;

    test('Realiza match con el snapshot', () => {

        const {container} = render(<CounterApp value={ 40 } />);
        expect(container).toMatchSnapshot();

    });


    test('Debe de mostrar el valor inicial de 100', () => {

        render(<CounterApp value={ value }/>);
        expect(Number(screen.getByTestId('counter').innerHTML)).toBe(value);

    });


    test('Debe de incrementar con el boton +1', () => {

        render(<CounterApp value={ value }/>);
        const initialValue = Number(screen.getByTestId('counter').innerHTML);
        fireEvent.click( screen.getByText('+1'));
        expect(screen.getByText(initialValue+1)).toBeTruthy();

    });


    test('Debe de decrementar con el boton -1', () => {

        render(<CounterApp value={ value }/>);
        const initialValue = Number(screen.getByTestId('counter').innerHTML);
        fireEvent.click( screen.getByText('-1'));
        expect(screen.getByText(initialValue-1)).toBeTruthy();

    });


    
    test('Debe de funcionar el boton de reset', () => {

        render(<CounterApp value={ value }/>);
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('reset'));
        
        expect(screen.getByText(value)).toBeTruthy();

    });
});