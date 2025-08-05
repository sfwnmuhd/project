import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar,
  Clock, 
  Send,
  CheckCircle,
  Video,
  Users,
  Zap
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const services = [
    "ERP Solutions",
    "Web Development",
    "Mobile Applications",
    "E-commerce Solutions",
    "IT Support Solutions",
    "IT Consulting"
  ]

  const demoFeatures = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live Demo Session",
      description: "Interactive demonstration of our solutions tailored to your business needs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Consultation",
      description: "One-on-one consultation with our experienced solution specialists"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Personalized recommendations based on your specific requirements"
    }
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      
      {/* Hero Section */}
      <section className='pt-24 pb-16 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff]'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <div className='inline-flex items-center justify-center w-20 h-20 bg-[#0075bb] rounded-full mb-8'>
              <Calendar className='w-10 h-10 text-white' />
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
              Book Your Free Demo
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Experience our solutions firsthand with a personalized demo session. 
              See how Skynet Solution can transform your business operations.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Booking Form */}
      <section className='py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-white rounded-2xl shadow-xl p-8'
            >
              <h3 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Schedule Your Demo</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='text-center py-12'
                >
                  <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                  <h4 className='text-2xl font-bold text-gray-800 mb-2'>Demo Scheduled!</h4>
                  <p className='text-gray-600'>We'll contact you shortly to confirm your demo session details.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
                        placeholder="+974 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Service of Interest *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>Preferred Date</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 mb-2'>Preferred Time</label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300 resize-none'
                      placeholder="Tell us about your specific requirements or questions..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: "#005a94" }}
                    whileTap={{ scale: 0.98 }}
                    className='w-full bg-[#0075bb] text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2'
                  >
                    <Calendar className='w-5 h-5' />
                    <span>Schedule Demo</span>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BookDemo
