

const getImagen = async() => {

    try {

        const apiKey = 'vmaHVar0H1IIZaHo3oBVrSJpGDZT06Ea';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {

        // manejo del error
        return 'No encontro la imagen';
    }
    
    
    
}

export default getImagen;


