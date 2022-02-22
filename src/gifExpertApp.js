import React, { useState } from 'react';
import propTypes from "prop-types";
import { AddCategory } from './components/AddCategory';
import { GifGrind } from './components/GifGrind';

const GifExpertApp = () => {

    // const categories = ['Juan', 'Pedro', 'Marcos']

    const [categories, setCategories] = useState(['Juan'])

    // const handelAdd = () =>{

    //     // setCategories([...categories, 'Santiago']);
    //     setCategories(cats => [...cats, 'Santiago']);

    // }

    return(

        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>        
        <ol>
            {
                categories.map(category => (
                    // <li key={category}>{category}</li>
                    <GifGrind 
                        key={category}
                        category={category}
                    />
                ))
            }
        </ol>
        </>
    );

}

export default GifExpertApp 