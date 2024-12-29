import { createContext } from "react";
import { Technician } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {


    const value = {
        Technician
    } 

    return (
        <AppContext.Provider value={value}>
            {props.children} 
        </AppContext.Provider>
    )
}

export default AppContextProvider;
