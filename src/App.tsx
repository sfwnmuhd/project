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
        </Routes>
      </div>
    </Router>
  )
}

export default App
