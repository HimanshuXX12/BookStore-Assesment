import React, { useState } from "react";
import { createContext } from "react";


export const  RateContext= createContext(null);
const RateContextProvider=({children})=>{
    const [rating,setrating]= useState(0);
    const RateValue={rating,setrating};
    return (
      <RateContext.Provider value={RateValue}>
        {children}</RateContext.Provider>
    )
}



export default RateContextProvider;