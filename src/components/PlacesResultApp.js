import React from 'react';
import { useFetch } from '../hooks/useFetch';

import '../styles/placesResult.css'

export const PlacesResultApp = ( { place, setPlaceInfo } ) => {

    let urlParams = { place }
    const { data, loading } = useFetch( 'place', urlParams );

    const handleClick = ( idx ) => {

        let [ lon, lat ] = data[idx].center;

        setPlaceInfo( pi => setPlaceInfo({
            name: data[idx].place_name,
            lon,
            lat
        }));
    }

    return (
        <div className='places-container'>
            <h3> "{ place }" results: </h3>

        {
            loading ?

            (
                <div className="spinner-border" role="status">

                </div>
            )
            :
            (
                <ul className='list-group'>
                    {
                        data && data.map( (p, idx) => <li
                            className='list-group-item'
                            onClick={ () => handleClick(idx) }
                            key={ idx }> { p.place_name } </li>)
                    }
                </ul>
            )
        }


        </div>
    );
};
