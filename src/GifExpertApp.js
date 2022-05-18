import React, { useState } from 'react';
import PropTypes from "prop-types";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch']);

    /*  const handleAdd = () => {
         setCategories([...categories, 'HunterXHunter']);
 
         //el setCategories puede tener un callback, en el cual el 1er argumento es el valor del estado anterior
         //luego devuelve un nuevo estado q sera la copia del arreglo mas el nuevo elemento
         //setCategories( cats => [...cats, 'HunterXHunter']);
 
     } */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {
    categories: PropTypes.arrayOf(PropTypes),
};