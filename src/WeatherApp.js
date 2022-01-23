
import React, { useState } from 'react';
import { PlaceApp } from './components/PlaceApp';
import { PlacesResultApp } from './components/PlacesResultApp';
import { WeatherInfo } from './components/WeatherInfo';

export const WeatherApp = () => {

    const [place, setPlace] = useState('');

    const [placeInfo, setPlaceInfo] = useState( null );

  return (
        <>
            <h1> WeatherApp </h1>
            <hr />
            <PlaceApp setPlace={ setPlace }/>

            {
                place  ? ( <PlacesResultApp setPlaceInfo={ setPlaceInfo }  place={ place } /> ) : ( <div className='mt-3'> <h3> Look up for a place... </h3> </div>)
            }

            {
                placeInfo && <WeatherInfo placeInfo={ placeInfo } />
            }

        </>
    );
};
