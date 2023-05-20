import { createContext, useState } from "react";

const Moviecards = createContext ();

const MovieContext =({children}) =>{
    const [seats,setSeats] = useState([]);
    return(
        <Moviecards.Provider value={{seats,setSeats}}>
            {children}
        </Moviecards.Provider>
    )
}
export {Moviecards,MovieContext};