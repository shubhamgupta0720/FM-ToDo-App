import react , {useState} from 'react'
import ThemeContext from './ThemeContext';

const ThemeContextProvider = ({children}) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <ThemeContext.Provider value = {{isDarkTheme, setIsDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider