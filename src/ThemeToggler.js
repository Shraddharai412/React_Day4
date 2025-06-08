import React,{useContext} from "react";
import { ThemeContext } from "./ThemeContext";
const ThemeToggler =() =>{
    const{theme,toggleTheme}=useContext(ThemeContext);
    const styles = {
        backgroundColor : theme === 'light'?'white':'black',
        color: theme === 'light'?'#000':'#fff',
        padding:'20px',
        textAlign :'center'
    };
    return(
        <div style={styles}> 
            <p>Current Theme:<strong>{theme}</strong></p>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    )
}
export default ThemeToggler;