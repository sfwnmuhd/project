import Navbar from './Navbar'
import { motion } from 'framer-motion'
import Asset from './Asset'
import Mockup from './Mockup'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section id="home" className='min-h-screen w-full bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff] relative overflow-hidden flex flex-col pt-20'>
      <Navbar/>
      
      <div className='container text-center mx-auto w-full flex flex-col justify-center items-center flex-1 px-4 sm:px-6 pt-8 max-w-full'>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl font-bold leading-tight'
        >
          Simplifying <span className='text-[#0075bb] bg-gradient-to-r from-[#0075bb] to-[#005a94] bg-clip-text text-transparent'>Business</span> With Intelligent Software
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mt-8 text-lg font-light max-w-2xl text-gray-600 leading-relaxed'
        >
          Skynet Solution offers reliable ERP solutions and professional web development services tailored to your business needs in Qatar.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 px-4 sm:px-0'
        >
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#005a94" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#contact" 
            className='px-8 sm:px-10 py-4 rounded-xl bg-[#0075bb] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center'
          >
            Book a Demo
          </motion.a>
          
          <motion.a
            whileHover={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderColor: "#000000",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#services" 
            className='border-2 border-gray-800 px-8 sm:px-10 py-4 rounded-xl bg-white text-gray-800 font-semibold hover:shadow-lg transition-all duration-300 text-center'
          >
            Our Services
          </motion.a>
        </motion.div>
        
        <Asset/>
        <Mockup/>
      </div>      
    </section>
  )
}

export default Header
