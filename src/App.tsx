import { CountryProvider } from "./context/CountryContext"
import { Home } from "./pages/Home"

function App() {
  return (
    <main className="mx-8 md:mx-24 mt-5 md:mt-10 mb-2 md:mb-10">
      <section>
        <CountryProvider>
          <Home />
        </CountryProvider>
      </section>
    </main>
  )
}

export default App
