import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm';
import { PlacesResultApp } from './PlacesResultApp';

export const PlaceApp = ( { setPlace } ) => {

    const { value, setValue, handleInputChange } = useForm('');

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setPlace( value )
        setValue('');
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    placeholder="Place..."
                    autoComplete="off"
                    value={ value }
                    onChange={ handleInputChange }
                    className="form-control"/>
            </form>

        </>
    );
};
