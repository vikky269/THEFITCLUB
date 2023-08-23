
import './App.css'
import { Join } from './components/Join/Join'
import { Hero } from './components/Herosection/Hero'
import { Plans } from './components/Plans/Plans'
import { Reason } from './components/Reasons/Reason'
import { Testimonial } from './components/Testimonials/Testimonial'
import { Program } from './components/programs/Program'
import { Footer } from './components/Footer/Footer'

function App() {
  

  return (
    <>
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>

    </>
  )
}

export default App
