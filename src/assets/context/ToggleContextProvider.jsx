import react , {useState} from 'react'
import ToggleContext from './ToggleContext';

const ToggleContextProvider = ({children}) => {

    const [todoFilter, setToDoFilter] = useState("All");

    return (
        <ToggleContext.Provider value = {{todoFilter, setToDoFilter}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider