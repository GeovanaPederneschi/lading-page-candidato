import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuemECarlos from './components/QuemECarlos'
import Propostas from './components/Propostas'
import Timeline from './components/Timeline'
import Formulario from './components/Formulario'
import Redes from './components/Redes'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuemECarlos />
        <Propostas />
        <Timeline />
        <Formulario />
        <Redes />
      </main>
      <Footer />
    </>
  )
}
