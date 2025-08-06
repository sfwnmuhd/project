import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
// import Clients from './components/Clients'
import Services from './components/Services'
import About from './components/About'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ERPSolutions from './pages/ERPSolutions'
import WebDevelopment from './pages/WebDevelopment'
import MobileApps from './pages/MobileApps'
import EcommerceSolutions from './pages/EcommerceSolutions'
import ITConsulting from './pages/ITConsulting'
import ItSupportSolution from './pages/ItSupportSolution'
import ContactPage from './pages/ContactPage'
import BookDemo from './pages/BookDemo'
import AboutPage from './pages/AboutPage'

// Industry pages
import {
  Garage,
  Gym,
  Laundry,
  Tailoring,
  Manufacturing,
  Grocery,
  Retail,
  Wholesale,
  Restaurant,
  Hypermarket,
  SMEs,
  Cafes
} from './pages/industries'

const App = () => {
  return (
    <Router>
      <div className='w-full min-h-screen overflow-x-hidden'>
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <About/>
              {/* <Clients/> */}
              <Services/>
              <Industries/>
              <Contact/>
              <Footer/>
            </>
          } />
          <Route path="/services/erp-solutions" element={<ERPSolutions />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/services/it-support-solutions" element={<ItSupportSolution />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-demo" element={<BookDemo />} />

          {/* Industry Routes */}
          <Route path="/industries/garage" element={<Garage />} />
          <Route path="/industries/gym" element={<Gym />} />
          <Route path="/industries/laundry" element={<Laundry />} />
          <Route path="/industries/tailoring" element={<Tailoring />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/grocery" element={<Grocery />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/wholesale" element={<Wholesale />} />
          <Route path="/industries/restaurant" element={<Restaurant />} />
          <Route path="/industries/hypermarket" element={<Hypermarket />} />
          <Route path="/industries/smes" element={<SMEs />} />
          <Route path="/industries/cafes" element={<Cafes />} />
        </Routes>
        <FloatingWhatsApp/>
      </div>
    </Router>
  )
}

export default App
