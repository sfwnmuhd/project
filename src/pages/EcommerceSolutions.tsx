
import { motion } from 'framer-motion'
import { 
  ShoppingCart, 
  CreditCard, 
  BarChart3, 
  Truck, 
  Shield, 
  Smartphone,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  Globe,
  Users
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EcommerceSolutions = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Complete Online Store",
      description: "Full-featured e-commerce platform with product catalog, shopping cart, and checkout"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integration",
      description: "Secure payment gateways supporting multiple payment methods and currencies"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive sales analytics, customer insights, and performance reports"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Inventory Management",
      description: "Real-time inventory tracking, stock alerts, and automated reordering"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "PCI DSS compliance, SSL encryption, and fraud protection systems"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Commerce",
      description: "Mobile-optimized shopping experience and dedicated mobile apps"
    }
  ]

  const platforms = [
    "Custom E-commerce Development",
    "Shopify Store Setup",
    "WooCommerce Solutions",
    "Magento Development",
    "B2B E-commerce Platforms",
    "Marketplace Integration"
  ]

  const integrations = [
    "Payment Gateways", "Shipping Providers", "CRM Systems", "ERP Integration", 
    "Email Marketing", "Social Media", "Analytics Tools", "Tax Calculators"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ShoppingCart className="w-16 h-16 text-[#0075bb] mr-4" />
              <h1 className="text-5xl font-bold text-gray-800">E-commerce Solutions</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Launch and grow your online business with our comprehensive e-commerce solutions. 
              From simple online stores to complex B2B platforms, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#005a94" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-[#0075bb] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Your Store
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">E-commerce Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful online business, from storefront to fulfillment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[#0075bb] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">E-commerce Platforms</h3>
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#f5f7fb] to-[#e8f2ff] rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-[#0075bb]" />
                    <span className="text-gray-800 font-medium">{platform}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Third-Party Integrations</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#0075bb] to-[#005a94] text-white p-4 rounded-lg text-center font-semibold text-sm"
                  >
                    {integration}
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-[#f5f7fb] to-[#e8f2ff] rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Success Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0075bb]">300%</div>
                    <div className="text-sm text-gray-600">Avg. Sales Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0075bb]">50+</div>
                    <div className="text-sm text-gray-600">Stores Launched</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Our E-commerce Solutions?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff] rounded-2xl"
            >
              <Globe className="w-16 h-16 text-[#0075bb] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Reach</h3>
              <p className="text-gray-600">Multi-currency, multi-language support for international sales</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff] rounded-2xl"
            >
              <Users className="w-16 h-16 text-[#0075bb] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Experience</h3>
              <p className="text-gray-600">Optimized user journey from discovery to purchase</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff] rounded-2xl"
            >
              <BarChart3 className="w-16 h-16 text-[#0075bb] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Growth Focused</h3>
              <p className="text-gray-600">Scalable solutions that grow with your business</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0075bb]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Selling Online?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build your e-commerce success story. Contact us for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+97444445555"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-[#0075bb] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+974 4431 1525</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@skynetsolution.qa"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>info@skynetqatar.com</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EcommerceSolutions