
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

const PlayerCard =({name,img,statistics}) => {
   const[show,setShow]=useState(true)
   const handleClick=()=>setShow(!show)
   console.log(show);
        return (
            <Card className='playerCard' role='button' onClick={handleClick}>
            {show ? (    
                <Card.Img variant="top" src={img} /> 
            ) : (
                <ul>
                    {statistics.map((item)=>(
                        <li>⚽ {item}</li>
                    ))}
                </ul>
                )}
           
             
      
                <Card.Footer>
                <Card.Title>
                {name}
                </Card.Title>
            
                </Card.Footer>
                
            </Card>
          );
}



export default PlayerCard