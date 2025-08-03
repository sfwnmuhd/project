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
    <section id="services" className='min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-8'>Our Services</h2>
          <p className='text-2xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed'>
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
              whileHover={{ y: -12, scale: 1.03 }}
              className='bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group border border-white/50 hover:border-blue-200/50'
            >
              <div className='text-blue-600 mb-8 group-hover:scale-125 transition-transform duration-500 p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl w-fit'>
                {service.icon}
              </div>
              
              <h3 className='text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-800 transition-colors duration-300'>{service.title}</h3>
              <p className='text-gray-700 mb-8 leading-relaxed text-lg'>{service.description}</p>
              
              <ul className='space-y-2 mb-6'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center text-base text-gray-700 font-medium'>
                    <div className='w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300'></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to={getServiceLink(service.title)}>
                <motion.button
                  whileHover={{ x: 8, scale: 1.05 }}
                  className='flex items-center text-blue-600 font-bold group-hover:text-purple-600 transition-all duration-300 text-lg'
                >
                  Learn More <ArrowRight className='w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300' />
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
