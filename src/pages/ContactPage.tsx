import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <div className='pt-20'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
