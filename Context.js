import { createContext, useState } from "react";

const Moviescards = createContext ();

const MovieContext =({children}) =>{
    const [seats,setSeats] = useState([]);
    const[occupaid,setOccupaid]= useState([]);
    const [ticket,setTicket] = useState([]);
    return(
        <Moviescards.Provider value={{seats,setSeats,occupaid,setOccupaid,ticket,setTicket}}>
            {children}
        </Moviescards.Provider>
    )
}
export {Moviescards,MovieContext};