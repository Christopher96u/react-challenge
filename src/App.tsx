import { CountryProvider } from "./context/CountryContext"
import { Home } from "./pages/Home"

function App() {
  return (
    <>
      <div className="mx-8 md:mx-24 mt-5 md:mt-10 mb-2 md:mb-10">
        <CountryProvider>
          <Home />
        </CountryProvider>
      </div>
    </>
  )
}

export default App
