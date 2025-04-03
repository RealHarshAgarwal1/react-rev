import { createContext,useState } from "react";



export const GlobalContext= createContext(null);


function GlobalState({children}){

    const [theme,SetTheme]=useState('light');

    return <GlobalContext.Provider value={{theme,SetTheme}}>{children}</GlobalContext.Provider>
}

export default GlobalState;