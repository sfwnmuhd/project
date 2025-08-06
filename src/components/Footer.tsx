import { motion } from 'framer-motion'
import { 
   
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    services: [
      { name: 'ERP Solutions', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'E-commerce', href: '#services' },
      { name: 'IT Support Solutions', href: '#services' },
      { name: 'IT Consulting', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News & Updates', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Testimonials', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Technical Support', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Training', href: '/contact' },
      { name: 'FAQ', href: '/contact' }
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/skynetsolutionqatar/', name: 'Instagram' }
  ]

  return (
    <footer className='bg-gray-900 text-white relative'>
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, backgroundColor: "#0075bb" }}
        whileTap={{ scale: 0.9 }}
        className='absolute -top-6 right-8 bg-[#005a94] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
      >
        <ArrowUp className='w-6 h-6' />
      </motion.button>

      <div className='container mx-auto px-6 pt-16 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-3 mb-6'>
              
              <span className='text-2xl font-bold'>Skynet Solution</span>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Leading provider of atACC ERP solutions and expert web development services in Qatar. Transforming businesses with smart software for over 12 years.
            </p>
            
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <Phone className='w-5 h-5 text-[#0075bb]' />
                <span className='text-gray-300'>+974 4431 1525</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='w-5 h-5 text-[#0075bb]' />
                <span className='text-gray-300'>info@skynetqatar.com</span>
              </div>
              <div className='flex items-center space-x-3'>
                <MapPin className='w-5 h-5 text-[#0075bb]' />
                <span className='text-gray-300'>Doha, Qatar</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Services</h3>
            <ul className='space-y-3'>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className='text-gray-300 hover:text-[#0075bb] transition-colors duration-300'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Company</h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className='text-gray-300 hover:text-[#0075bb] transition-colors duration-300'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Support</h3>
            <ul className='space-y-3'>
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className='text-gray-300 hover:text-[#0075bb] transition-colors duration-300'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='border-t border-gray-800 mt-12 pt-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-2xl font-bold mb-4'>Stay Updated</h3>
              <p className='text-gray-300'>
                Subscribe to our newsletter for the latest updates on technology trends and our services.
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type="email"
                placeholder="Enter your email"
                className='flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
              />
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#005a94" }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-3 bg-[#0075bb] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300'
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='text-gray-400 text-sm'>
              © 2025 Skynet Solution Qatar. All rights reserved.
            </div>
            
            <div className='flex items-center space-x-6'>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, color: "#0075bb" }}
                    className='text-gray-400 hover:text-[#0075bb] transition-colors duration-300'
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className='flex space-x-6 text-sm text-gray-400'>
              <a href="#" className='hover:text-[#0075bb] transition-colors duration-300'>Privacy Policy</a>
              <a href="#" className='hover:text-[#0075bb] transition-colors duration-300'>Terms of Service</a>
              <a href="#" className='hover:text-[#0075bb] transition-colors duration-300'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
