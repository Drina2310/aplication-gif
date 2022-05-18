import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');//si no paso nada al parametro() de useState es undefine es necesario colocar un string vacio para evitar este error

    const handleInputChange = e => {
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            {/* el input value siempre sera el ultimo valor actualizado de lo q se escribio */}
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>


    )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired,
}