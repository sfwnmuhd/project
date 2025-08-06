import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import logo from '../assets/logo1.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

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

  const serviceItems = [
    { name: 'ERP Solutions', href: '/services/erp-solutions' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Applications', href: '/services/mobile-apps' },
    { name: 'E-commerce Solutions', href: '/services/ecommerce-solutions' },
    { name: 'IT Support Solutions', href: '/services/it-support-solutions' },
    { name: 'IT Consulting', href: '/services/it-consulting' },
  ]

  const industryItems = [
    { name: 'Garage', href: '/industries/garage' },
    { name: 'Gym', href: '/industries/gym' },
    { name: 'Laundry', href: '/industries/laundry' },
    { name: 'Tailoring', href: '/industries/tailoring' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Grocery', href: '/industries/grocery' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Wholesale', href: '/industries/wholesale' },
    { name: 'Restaurant', href: '/industries/restaurant' },
    { name: 'Hypermarket', href: '/industries/hypermarket' },
    { name: 'SMEs', href: '/industries/smes' },
    { name: 'Cafes', href: '/industries/cafes' },
  ]

  const navItems = [
    { name: 'Home', href: '/', onClick: scrollToTop },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services', hasDropdown: true, dropdownItems: serviceItems },
    { name: 'Industries', href: '/#industries', hasDropdown: true, dropdownItems: industryItems },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 backdrop-blur-md border-b border-white/20 shadow-lg'
    >
      <div className='container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-6'>
        <div 
          className='flex items-center space-x-2 cursor-pointer'
          onClick={scrollToTop}
        >
          {/* <Zap className='w-8 h-8 text-[#0075bb]' /> */}
          {/* <span className='text-2xl font-bold text-gray-800'>Skynet Solution</span>/ */}
          <Link to="/">
            <img src={logo} alt="Skynet Solution" className='h-8 sm:h-10 md:h-12 w-auto' />
          </Link>
          

        </div>
        
        <div>
          <ul className='hidden lg:flex gap-4 lg:gap-6 xl:gap-8 items-center'>
            {navItems.map((item) => (
              <li
                key={item.name}
                className='relative'
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <div className='relative'>
                    <button
                      className='flex items-center space-x-1 text-gray-700 hover:text-[#0075bb] font-medium transition-colors duration-300 cursor-pointer text-sm lg:text-base whitespace-nowrap'
                    >
                      <span>{item.name}</span>
                      <ChevronDown className='w-4 h-4' />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className='absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50'
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className='block px-6 py-3 text-gray-700 hover:text-[#0075bb] hover:bg-gray-50 transition-colors duration-200 text-sm font-medium'
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    onClick={item.onClick}
                    className='text-gray-700 hover:text-[#0075bb] font-medium transition-colors duration-300 cursor-pointer text-sm lg:text-base whitespace-nowrap'
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className='text-gray-700 hover:text-[#0075bb] font-medium transition-colors duration-300 cursor-pointer text-sm lg:text-base whitespace-nowrap'
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className='hidden lg:flex items-center space-x-2 lg:space-x-4'>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+97444445555"
              className='flex items-center space-x-1 lg:space-x-2 px-2 lg:px-4 py-2 text-gray-700 hover:text-[#0075bb] transition-colors duration-300'
            >
              <Phone className='w-4 h-4' />
              <span className='font-medium text-sm lg:text-base hidden lg:inline'>+974 4431 1525</span>
              <span className='font-medium text-sm lg:hidden'>Call</span>
            </motion.a>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "#005a94" }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center space-x-1 lg:space-x-2 px-3 lg:px-6 py-2 lg:py-3 bg-[#0075bb] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
              >
                <span className='text-sm lg:text-base'>Book Free Demo</span>
              </motion.div>
            </Link>
          </div>
          
          <Menu
            onClick={() => setShowMobileMenu(true)}
            className='lg:hidden w-7 h-7 cursor-pointer text-gray-700'
          />
        </div>
        
        {/* Mobile menu */}
        {showMobileMenu && (
          <div className='lg:hidden fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 z-50 transition-all duration-300'>
            <div className='flex justify-between items-center p-6 border-b border-gray-200 bg-white/90 backdrop-blur-sm'>
              <div className='flex items-center space-x-2'>
                <img src={logo} alt="Skynet Solution" className='h-8 w-auto' />
              </div>
              <X
                onClick={() => setShowMobileMenu(false)}
                className='w-6 h-6 cursor-pointer text-gray-700'
              />
            </div>

            <div className='flex flex-col h-full bg-white/95 backdrop-blur-sm'>
              <ul className='flex flex-col gap-4 p-6 flex-1'>
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveMobileDropdown(activeMobileDropdown === item.name ? null : item.name)}
                          className='flex items-center justify-between w-full text-xl font-medium text-gray-700 hover:text-[#0075bb] transition-colors duration-300 py-2'
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeMobileDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className='ml-4 mt-2 space-y-2'
                            >
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className='block text-lg text-gray-600 hover:text-[#0075bb] transition-colors duration-200 py-2'
                                  onClick={() => {
                                    setShowMobileMenu(false);
                                    setActiveMobileDropdown(null);
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        onClick={(e) => {
                          if (item.onClick) {
                            e.preventDefault();
                            item.onClick();
                          }
                          setShowMobileMenu(false);
                        }}
                        className='text-xl font-medium text-gray-700 hover:text-[#0075bb] transition-colors duration-300 block py-2'
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          if (item.onClick) {
                            e.preventDefault();
                            item.onClick();
                          }
                          setShowMobileMenu(false);
                        }}
                        className='text-xl font-medium text-gray-700 hover:text-[#0075bb] transition-colors duration-300 block py-2'
                      >
                        {item.name}
                      </a>
                    )}
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
