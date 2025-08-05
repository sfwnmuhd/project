import { motion } from 'framer-motion'
import { CarFront, Wrench, Calendar, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Garage = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "atAcc ERP Workshop Management",
      description: "Complete job card tracking, service history, and repair management with atAcc ERP's automotive module"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Integrated Appointment System",
      description: "atAcc ERP's automated appointment booking and service reminder notifications for Qatar garages"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM Integration",
      description: "atAcc ERP's comprehensive customer database with vehicle history and service preferences"
    }
  ]

  const benefits = [
    "Streamlined job card management",
    "Inventory control for spare parts",
    "Customer service tracking",
    "Automated billing and invoicing",
    "Service history maintenance",
    "Appointment scheduling system"
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
              <CarFront className='w-10 h-10 text-white' />
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
              atAcc ERP for Garage Management in Qatar
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Transform your automotive service center with atAcc ERP - the best ERP software in Qatar for garage management.
              Streamline job cards, inventory control, and customer service with our comprehensive atAcc ERP implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Key Features</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-6 rounded-xl bg-gray-50'
              >
                <div className='text-[#0075bb] mb-4 flex justify-center'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Why Choose Our Garage Solution?</h2>
              <div className='space-y-4'>
                {benefits.map((benefit, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <div className='w-6 h-6 bg-[#0075bb] rounded-full flex items-center justify-center'>
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                    </div>
                    <span className='text-gray-700 font-medium'>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-white p-8 rounded-2xl shadow-xl'
            >
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>Ready to Get Started?</h3>
              <p className='text-gray-600 mb-6'>
                Transform your garage operations with our comprehensive management solution.
                Contact us for a free consultation and demo.
              </p>
              <Link
                to="/#contact"
                className='inline-flex items-center space-x-2 bg-[#0075bb] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#005a94] transition-colors duration-300'
              >
                <span>Get Free Demo</span>
                <ArrowRight className='w-4 h-4' />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Garage
