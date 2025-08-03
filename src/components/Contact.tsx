import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
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

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+974 4431 1525", "+974 7765 1525"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@skynetqatar.com", "support@skynetqatar.com"]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Office No 8, 1st floor", "Alkhal commercial Building", "Abu Hamour, Doha - Qatar"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Sat - Thu: 8:30 AM - 8:30 PM", "Fri: Closed"]
    }
  ]

  const services = [
    "ERP Solutions",
    "Web Development",
    "Mobile Applications",
    "E-commerce Solutions",
    "Business Intelligence",
    "IT Consulting"
  ]

  return (
    <section id="contact" className='min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold text-gray-800 mb-6'>Get in Touch</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Ready to transform your business? Contact us today for a free consultation and discover how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className='text-3xl font-bold text-gray-800 mb-8'>Contact Information</h3>
            
            <div className='space-y-8'>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-start space-x-4'
                >
                  <div className='text-[#0075bb] mt-1'>{info.icon}</div>
                  <div>
                    <h4 className='text-xl font-semibold text-gray-800 mb-2'>{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className='text-gray-600'>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className='mt-12 p-8 bg-gradient-to-r from-[#0075bb] to-[#005a94] rounded-2xl text-white'
            >
              <h4 className='text-2xl font-bold mb-4'>Why Choose Skynet Solution?</h4>
              <ul className='space-y-3'>
                <li className='flex items-center'>
                  <CheckCircle className='w-5 h-5 mr-3' />
                  12+ years of proven experience
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='w-5 h-5 mr-3' />
                  99% customer satisfaction rate
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='w-5 h-5 mr-3' />
                  24/7 technical support
                </li>
                <li className='flex items-center'>
                  <CheckCircle className='w-5 h-5 mr-3' />
                  Competitive pricing
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl shadow-xl p-8'
          >
            <h3 className='text-3xl font-bold text-gray-800 mb-8'>Send us a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className='text-center py-12'
              >
                <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                <h4 className='text-2xl font-bold text-gray-800 mb-2'>Thank You!</h4>
                <p className='text-gray-600'>Your message has been sent successfully. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Name *</label>
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
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Email *</label>
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
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Company</label>
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
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Phone</label>
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
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Service of Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300 resize-none'
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: "#005a94" }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full bg-[#0075bb] text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2'
                >
                  <Send className='w-5 h-5' />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact