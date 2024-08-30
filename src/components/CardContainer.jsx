import React, { useState } from "react";
import Search from "./Search"
import { Container } from "react-bootstrap";
import PlayerCard from "./PlayerCard";
import {data} from "../helper/data"

const CardContainer = () => {
    const [search, setSearch]=useState("") //setSearch topladığımız yer
    const handleChange=(e) =>{
        setSearch(e.target.value)
    }
    return (
        
        
        <Container  >
        <Search handleChange={handleChange}/>
        <div className="CardCont row-col-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {data.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()))
        
        .map((player) => (
            <Container>
         <PlayerCard {...player}/>   
         </Container>
        ))}
      
        </div>
        </Container>
       
    )
}


export default CardContainer