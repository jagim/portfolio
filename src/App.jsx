import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Techs from "./components/Techs"

function App() {
  return (
    <div className="container mx-auto max-w-screen-xl h-screen text-white">
      <Header />
      <Projects />
      <Techs />
      <Footer />
    </div>
  )
}

export default App
