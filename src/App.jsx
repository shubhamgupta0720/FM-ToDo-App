import './App.css'
import ToDo from './components/ToDo'
import ToggleContextProvider from './assets/context/ToggleContextProvider'
import ThemeContextProvider from './assets/context/ThemeContextProvider'

function App() {

  return (
    <ThemeContextProvider>
      <ToggleContextProvider>
        <ToDo />
      </ToggleContextProvider>
    </ThemeContextProvider>
  )
}

export default App
