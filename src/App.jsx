import './App.css'
import ToDo from './components/ToDo'
import ToggleContextProvider from './assets/context/ToggleContextProvider'

function App() {

  return (
      <ToggleContextProvider>
        <ToDo />
      </ToggleContextProvider>
  )
}

export default App
