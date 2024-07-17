import {AuthContext} from  "../Context/AuthContext";
import { useContext } from "react";

export const useAuthContext =()=>{

    const Context = useContext(AuthContext);
    
   if(!Context) {
    throw Error ("useAuthContext can not be used")
   }
   return Context;
}
