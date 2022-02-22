import React, {useState} from 'react'
import propTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
       
        setInputValue(e.target.value);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        // console.log('sumbit Hecho')
        if(inputValue.trim().length>1){

            setCategories(cats => [inputValue, ...cats ]);
            setInputValue('')
        }

    }

  return (
    
        <form onSubmit={handleSumbit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            
        />
        </form>
    
  )


  AddCategory.propTypes = {

    setCategories: propTypes.func.isRequired

  }
}
