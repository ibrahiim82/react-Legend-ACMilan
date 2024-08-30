import React from "react";
import Form from 'react-bootstrap/Form';

const Search = ({handleChange}) => {
    return (
         <Form.Control className="search"
            placeholder="Search Player"
            type="search" 
            // onChancge="" ****ilk buşekilde yazıp gidip diğer adınları halledeceksin sonra gelip buraya altta yazadığım giib yazacaksın //bunu yapınca cardcontianere git ve   const handleChange=(e) =>{
                // setSearch(e.target.value) yap sonra
            onChange={handleChange}    
         />

    )
}
 

export default Search