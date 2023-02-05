

import PropTypes from 'prop-types';
const propValue = 20;

const CounterApp2 = ({ value }) => {

    return (
        <>
            <div>Hola mundo</div>
            <div>
                <span>Counter : </span>
                <code> { value }</code>
            </div>
        </>
    )
}

export {
    CounterApp2,
    propValue
}

CounterApp2.propTypes = {
    value: PropTypes.number
}

CounterApp2.defaultProps = {
    value: 8
}