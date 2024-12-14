import { createContext, useContext, useEffect, useState } from "react";

const Themecontext = createContext();

export const usetheme = () => {
    return useContext(Themecontext);
}

export const Themeprovider = ({children}) =>{
    const[isDarkMode, setIsDarkMode] = useState(true);

    const Toggletheme = () =>{
        setIsDarkMode((prevState) => !prevState);
    }

    const theme = isDarkMode ? "Dark" : "Light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    },[isDarkMode])

    return(
        <Themecontext.Provider value = {{theme, Toggletheme}}>
            {children}
        </Themecontext.Provider>
    )
}

