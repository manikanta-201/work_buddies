import {AuthContext} from  "../Context/AuthContext";
import { useContext } from "react";

export const useAuthContext =()=>{

    const Context = useContext(AuthContext);
    
   if(!Context) {
    throw Error ("useAuthContext can not be used")
   }
   return Context
//  return useContext(AuthContext);
}

// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContext";

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error("useAuthContext must be used within an AuthContextProvider");
//   }

//   return context;
// };
