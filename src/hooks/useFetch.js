import { useEffect, useState } from "react"

export const useFetch = ( searchType, urlParams ) => {

    const [loading, setLoading] = useState( true );
    const [data, setData] = useState( null );

    let params = {};

    const ACCESS_TOKEN_MAPBOX = 'pk.eyJ1IjoiY2FybG9zbmd2IiwiYSI6ImNrd2p5NjlsOTFtd3QybnBhd3d1azU3dnAifQ.1XEoGemrljbQ-ag5tBW-xQ';
    const ACCESS_TOKEN_OPENWEATHER = '76f12eeaefe582be6bba280915dbcb2d';

    const BASE_URL_MAPBOX = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    const BASE_URL_OPENWEATHER = 'https://api.openweathermap.org/data/2.5/weather';

    let url = '';

    useEffect(() => {

        switch (searchType) {

            case 'place':

                let { place } = urlParams;

                url = `${ BASE_URL_MAPBOX }${ place }.json?access_token=${ACCESS_TOKEN_MAPBOX}`;

                setTimeout(() => {
                    fetch( url )
                        .then( data => data.json() )
                        .then( ({ features }) => {
                            setData( features );
                        } )
                        .finally( () => {
                            setLoading( false );
                        } );
                }, 500)

                break;

            case 'weather':

                const { lat, lon } = urlParams;

                url = `${ BASE_URL_OPENWEATHER }?lat=${lat}&lon=${lon}&appid=${ ACCESS_TOKEN_OPENWEATHER }`;

                fetch( url )
                    .then( res => res.json() )
                    .then( ( { weather, main } ) => {
                        console.log(weather, main);
                        setData( { weather: weather[0], main } )
                    });



                break;

            default:
                break;
        }

        return () => {
            console.log('Demounted...');
        };
    }, [ urlParams.place, urlParams.lat, urlParams.lon ]);


    return {
        data,
        loading
    };

}
