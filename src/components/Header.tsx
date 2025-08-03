import Navbar from './Navbar'
import { motion } from 'framer-motion'
import Asset from './Asset'
import Mockup from './Mockup'

const Header = () => {
  return (
    <section id="home" className='min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden flex flex-col pt-20'>
      <Navbar/>
      
      <div className='container text-center mx-auto w-full flex flex-col justify-center items-center flex-1 px-6 pt-8'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800'
        >
          Simplifying <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'>Business</span> With Intelligent Software
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mt-8 text-xl font-medium max-w-3xl text-gray-700 leading-relaxed'
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
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#contact"
            className='px-10 sm:px-12 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm transition-all duration-300 text-center border border-white/20'
          >
            Book a Demo
          </motion.a>
          
          <motion.a
            whileHover={{
              y: -2,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#services"
            className='border-2 border-gray-200 px-10 sm:px-12 py-5 rounded-2xl bg-white/60 backdrop-blur-md text-gray-800 font-bold hover:shadow-2xl transition-all duration-300 text-center'
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
