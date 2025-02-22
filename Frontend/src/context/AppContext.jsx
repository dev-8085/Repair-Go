import { createContext } from "react";
import { Technician } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currencySymbol = '₹500'
    const value = {
        Technician,currencySymbol
    } 

    return (
        <AppContext.Provider value={value}>
            {props.children} 
        </AppContext.Provider>
    )
}

export default AppContextProvider;
