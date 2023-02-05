

import { useState } from 'react';
import PropTypes from 'prop-types';
const CounterApp  = ({ value }) => {

    const [ counter, setCounter] = useState(value);

    const suma = () => setCounter( counter + 1);

    const resta = () =>  setCounter( counter - 1);

    const restart = () => setCounter(value);

    return(
        <>
            <h1>CounterApp</h1>
            <h2 data-testid="counter"> { counter } </h2>
            <button onClick={ suma  }>+1</button>
            <button onClick={ resta }>-1</button>
            <button onClick={ restart }>reset</button>

        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 5
}


export {
    CounterApp as default
}