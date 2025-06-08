import React from "react";
import ThemeToggler from "./ThemeToggler"
import { ThemeProvider } from "./ThemeContext";
// import { ThemeProvider } from "./Components/ThemeContext";
import { AuthProvider } from "./Components/AuthContext";
import Dashboard from "./Components/Dashboard";
function App(){
  //task 1
  return(
  <ThemeProvider>
    <div>
      <ThemeToggler/>
    </div>
    </ThemeProvider>
  );
 
//  return(
//   <AuthProvider>
//     <ThemeProvider>
//     <div>
//       <Dashboard/>
//     </div>
//     </ThemeProvider>
//   </AuthProvider>
  
//  )
}
export default App;