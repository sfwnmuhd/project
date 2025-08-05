import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Database, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  BarChart3, 
  Shield,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "ERP Solutions",
      description: "Comprehensive enterprise resource planning systems that integrate all your business processes into a single, efficient platform.",
      features: ["Financial Management", "Inventory Control", "HR Management", "CRM Integration"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies to enhance your online presence.",
      features: ["Responsive Design", "E-commerce Solutions", "Custom Development", "SEO Optimization"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that provide seamless user experiences across all devices and platforms.",
      features: ["iOS Development", "Android Development", "Cross-platform", "UI/UX Design"]
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Solutions",
      description: "Complete online store solutions with payment integration, inventory management, and customer analytics.",
      features: ["Online Stores", "Payment Gateway", "Inventory Sync", "Analytics Dashboard"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "IT Support Solutions",
      description: "Comprehensive technical support to keep your business running smoothly — from system troubleshooting to network maintenance and user assistance.",
      features: ["  Remot & On-Site Support", "System Monitoring", "Hardware & Sofware Troubleshooting", "User Helpdesk & Ticketing"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Strategic IT consulting services to help you make informed technology decisions and optimize your infrastructure.",
      features: ["Technology Strategy", "System Integration", "Security Audit", "Digital Transformation"]
    }
  ]

  return (
    <section id="services" className='min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse'></div>
        <div className='absolute bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold text-gray-800 mb-6'>Our Services</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We offer comprehensive technology solutions designed to streamline your business operations and drive growth.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group'
            >
              <div className='text-[#0075bb] mb-6 group-hover:scale-110 transition-transform duration-300'>
                {service.icon}
              </div>
              
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>{service.title}</h3>
              <p className='text-gray-600 mb-6 leading-relaxed'>{service.description}</p>
              
              <ul className='space-y-2 mb-6'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center text-sm text-gray-600'>
                    <div className='w-2 h-2 bg-[#0075bb] rounded-full mr-3'></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to={getServiceLink(service.title)}>
                <motion.button
                  whileHover={{ x: 5 }}
                  className='flex items-center text-[#0075bb] font-semibold group-hover:text-[#005a94] transition-colors duration-300'
                >
                  Learn More <ArrowRight className='w-4 h-4 ml-2' />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#005a94" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className='inline-block px-10 py-4 bg-[#0075bb] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
          >
            View All Services
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  )
}

// Helper function to get service links
const getServiceLink = (serviceTitle: string): string => {
  const linkMap: { [key: string]: string } = {
    "ERP Solutions": "/services/erp-solutions",
    "Web Development": "/services/web-development", 
    "Mobile Applications": "/services/mobile-apps",
    "E-commerce Solutions": "/services/ecommerce-solutions",
    "IT Support Solutions": "/services/it-support-solutions",
    "IT Consulting": "/services/it-consulting"
  }
  return linkMap[serviceTitle] || "#"
}

export default Services
