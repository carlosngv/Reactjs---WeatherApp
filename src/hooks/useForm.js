import { useState } from "react";

export const useForm = ( initialValue = '' ) => {

    const [ value, setValue ] = useState( initialValue );

    const handleInputChange = ( { target } ) => {
        setValue( target.value );
    }



    return {
        value,
        setValue,
        handleInputChange,
    }

};
