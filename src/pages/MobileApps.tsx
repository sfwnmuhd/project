
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Tablet, 
  Zap, 
  Users, 
  Shield, 
  Palette,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  Apple,
  Play
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MobileApps = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Native iOS Development",
      description: "High-performance iOS apps built with Swift and optimized for Apple devices"
    },
    {
      icon: <Tablet className="w-8 h-8" />,
      title: "Android Development",
      description: "Feature-rich Android applications using Kotlin and modern Android frameworks"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cross-Platform Solutions",
      description: "Cost-effective apps that work seamlessly across iOS and Android platforms"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for optimal user experience and engagement"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with scalable architecture for growing businesses"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom UI/UX",
      description: "Beautiful, brand-aligned designs that reflect your business identity"
    }
  ]

  const appTypes = [
    "Business & Productivity Apps",
    "E-commerce Mobile Apps",
    "Social & Communication Apps",
    "Healthcare & Fitness Apps",
    "Education & Learning Apps",
    "Entertainment & Media Apps"
  ]

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", 
    "Firebase", "AWS Mobile", "Node.js", "MongoDB"
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
              <Smartphone className="w-16 h-16 text-[#0075bb] mr-4" />
              <h1 className="text-5xl font-bold text-gray-800">Mobile Applications</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business ideas into powerful mobile applications. We create native and 
              cross-platform apps that deliver exceptional user experiences across all devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#005a94" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-[#0075bb] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your App Project
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Mobile App Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to app store, we deliver mobile solutions that engage users and drive business growth
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

      {/* App Types & Technologies Section */}
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Types of Apps We Build</h3>
              <div className="space-y-4">
                {appTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#f5f7fb] to-[#e8f2ff] rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-[#0075bb]" />
                    <span className="text-gray-800 font-medium">{type}</span>
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Technologies & Platforms</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
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
              
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 rounded-lg text-center">
                  <Apple className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-semibold">App Store</span>
                </div>
                <div className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-lg text-center">
                  <Play className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-semibold">Google Play</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-[#f5f7fb] to-[#e8f2ff] rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Development Process</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Strategy & Planning</li>
                  <li>• UI/UX Design</li>
                  <li>• Development & Testing</li>
                  <li>• App Store Deployment</li>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's turn your app idea into reality. Contact us for a free consultation and project estimate.
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

export default MobileApps