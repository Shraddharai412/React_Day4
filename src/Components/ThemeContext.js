import React,{createContext, useContext,useState} from "react";
//Create Context
export const ThemeContext=createContext();
//Create Provider
export const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState('light');
    const toggleTheme=()=>{
        setTheme((prev)=> (prev==='light'?'dark':'light'));
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme=()=> useContext(ThemeContext);