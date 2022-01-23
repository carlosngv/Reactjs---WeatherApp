import React from 'react';
import { useFetch } from '../hooks/useFetch';

import '../styles/weatherInfo.css'


export const WeatherInfo = ( { placeInfo }) => {

    const { data } = useFetch('weather', placeInfo);

    console.log( data );

    const { name } = placeInfo;

    return (
        <div className='mt-3'>
            {
                data ?
                (
                    <>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <strong> Place </strong>
                                    </div>
                                    <div className='card-body'>
                                    <span> { name } </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <strong>  Main Weather </strong>
                                    </div>
                                    <div className='card-body'>
                                        <span> { data.weather.main } </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='card'>
                                    <div className='card-header'>
                                    <strong>  Description </strong>
                                    </div>
                                    <div className='card-body'>
                                        <span> { data.weather.description } </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-4'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <strong> Temperature </strong>
                                    </div>
                                    <div className='card-body'>
                                    <span> { (data.main.temp - 273.15).toFixed(2) } </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <strong>  Min. Temperature </strong>
                                    </div>
                                    <div className='card-body'>
                                        <span> { (data.main.temp_min - 273.15).toFixed(2) } </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='card'>
                                    <div className='card-header'>
                                    <strong>  Max. Temperature </strong>
                                    </div>
                                    <div className='card-body'>
                                        <span> { (data.main.temp_max - 273.15).toFixed(2) } </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </>


                )
                :
                (
                    <div className="spinner-border" role="status"></div>
                )
            }
        </div>
    );
};
