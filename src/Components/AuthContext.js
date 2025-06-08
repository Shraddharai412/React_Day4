import React,{createContext, useContext, useState,} from "react";
const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const Login=(name)=> setUser({name})
    const Logout=()=>setUser(null);
    return(
        <AuthContext.Provider value={{user,Login,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=> useContext(AuthContext);