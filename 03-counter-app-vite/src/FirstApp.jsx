import { PropTypes } from "prop-types";

const newMessage = {
    message: 'Julio !!!',
    titulo: 'Julio'
}

const getMessage = () => newMessage.message;


const FirstApp = ( { title, subTitle,name } ) => {
    return (
        <>
            <h1 data-testid="test-name">{ name }</h1>
            <p data-testid="subtitle">{ subTitle }</p>
            <span>{ title }</span>
        </>
    )
}

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'Nombre por defecto',
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo'
}

export default FirstApp;