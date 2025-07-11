import { SearchProvider } from "./hooks/SearchContext"
import WeatherApp from "./page/WeatherApp"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
    <SearchProvider>
      <Toaster />
      <WeatherApp />
    </SearchProvider>
    </>
  )
}

export default App
