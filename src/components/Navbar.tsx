import { motion } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import logo from '../assets/logo1.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < 50) {
        setShowNavbar(true)
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { name: 'Home', href: '/', onClick: scrollToTop },
    { name: 'About', href: '#about' },
    // { name: 'Clients', href: '#clients' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg'
    >
      <div className='container mx-auto flex justify-between items-center py-5 px-6'>
        <div 
          className='flex items-center space-x-2 cursor-pointer'
          onClick={scrollToTop}
        >
          {/* <Zap className='w-8 h-8 text-[#0075bb]' /> */}
          {/* <span className='text-2xl font-bold text-gray-800'>Skynet Solution</span>/ */}
          <Link to="/">
            <img src={logo} alt=""  />
          </Link>
          

        </div>
        
        <div>
          <ul className='hidden md:flex gap-8 items-center'>
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={item.onClick}
                  className='text-gray-800 hover:text-blue-600 font-semibold transition-all duration-300 cursor-pointer hover:scale-105'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className='hidden md:flex items-center space-x-4'>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+97444445555"
              className='flex items-center space-x-2 px-4 py-2 text-gray-800 hover:text-blue-600 transition-all duration-300 hover:scale-105'
            >
              <Phone className='w-4 h-4' />
              <span className='font-medium'>+974 4431 1525</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/9747651525"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-green-500/25 backdrop-blur-sm transition-all duration-300 border border-white/20'
            >
              <MessageCircle className='w-4 h-4' />
              <span>WhatsApp</span>
            </motion.a>
          </div>
          
          <Menu 
            onClick={() => setShowMobileMenu(true)} 
            className='md:hidden w-7 h-7 cursor-pointer text-gray-700'
          />
        </div>
        
        {/* Mobile menu */}
        {showMobileMenu && (
          <div className='md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-50 transition-all duration-300 h-1/2'>
            <div className='flex justify-between items-center p-6 border-b border-gray-200'>
              <div className='flex items-center space-x-2'>
                <img src={logo} alt="" />
              </div>
              <X 
                onClick={() => setShowMobileMenu(false)} 
                className='w-6 h-6 cursor-pointer text-gray-700'
              />
            </div>
            
            <div className='flex flex-col h-full bg-transparent'>
              <ul className='flex flex-col gap-6 p-6 flex-1'>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        if (item.onClick) {
                          e.preventDefault();
                          item.onClick();
                        }
                        setShowMobileMenu(false);
                      }}
                      className='text-xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 block py-2 hover:scale-105'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* <div className='p-6 border-t border-gray-200 space-y-4 '>
                <a
                  href="tel:+97444445555"
                  onClick={() => setShowMobileMenu(false)}
                  className='flex items-center justify-center space-x-2 w-full px-6 py-3 border-2 border-[#0075bb] text-[#0075bb] font-semibold rounded-xl hover:bg-[#0075bb] hover:text-white transition-all duration-300'
                >
                  <Phone className='w-4 h-4' />
                  <span>+974 4431 1525</span>
                </a>
                <a
                  href="https://wa.me/+9747651525"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowMobileMenu(false)}
                  className='flex items-center justify-center space-x-2 w-full px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1DA851] transition-all duration-300'
                >
                  <MessageCircle className='w-4 h-4' />
                  <span>WhatsApp Chat</span>
                </a>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Navbar
