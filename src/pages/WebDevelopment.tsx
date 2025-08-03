
import { motion } from 'framer-motion'
import { 
  Globe, 
  Smartphone, 
  Zap, 
  Search, 
  Shield, 
  Palette,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WebDevelopment = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices and screen sizes"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Performance",
      description: "Optimized code and modern technologies for lightning-fast loading speeds"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Built-in SEO best practices to improve your search engine rankings"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures and reliable hosting solutions"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Design",
      description: "Unique, brand-focused designs tailored to your business identity"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Modern Technologies",
      description: "Latest web technologies including React, Node.js, and cloud solutions"
    }
  ]

  const services = [
    "Corporate Websites",
    "E-commerce Platforms",
    "Web Applications",
    "Content Management Systems",
    "API Development",
    "Website Maintenance"
  ]

  const technologies = [
    "React.js", "Node.js", "TypeScript", "Next.js", 
    "MongoDB", "PostgreSQL", "AWS", "Docker"
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
              <Globe className="w-16 h-16 text-[#0075bb] mr-4" />
              <h1 className="text-5xl font-bold text-gray-800">Web Development</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create stunning, high-performance websites and web applications that engage your audience 
              and drive business growth with our expert web development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#005a94" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-[#0075bb] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we deliver comprehensive web solutions that exceed expectations
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

      {/* Services & Technologies Section */}
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6">What We Build</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#f5f7fb] to-[#e8f2ff] rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-[#0075bb]" />
                    <span className="text-gray-800 font-medium">{service}</span>
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#0075bb] to-[#005a94] text-white p-4 rounded-lg text-center font-semibold"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-[#f5f7fb] to-[#e8f2ff] rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Development Process</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Discovery & Planning</li>
                  <li>• Design & Prototyping</li>
                  <li>• Development & Testing</li>
                  <li>• Launch & Optimization</li>
                </ul>
              </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create a web solution that drives results for your business.
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

export default WebDevelopment