
import { motion } from 'framer-motion'
import { 

  TrendingUp, 
  Database, 
  Eye, 
  Target, 
  Zap,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  PieChart,
  LineChart,
  Headset
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ItSupportSolution = () => {
  const features = [
    {
      icon: <Headset className="w-8 h-8" />,
      title: "Remote & Onsite Support",
      description: "Get quick issue resolution with both remote troubleshooting and onsite assistance."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Network Management",
      description: "Design, monitor, and maintain secure and high-performing networks."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "System Maintenance",
      description: "Regular software updates, patch management, and system performance tuning."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Data Backup & Recovery",
      description: "Protect your business from data loss with automated backups and disaster recovery plans."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Cybersecurity Protection",
      description: "Endpoint protection, firewall configuration, and threat detection to secure your digital assets."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Asset Management",
      description: "Track, manage, and optimize the lifecycle of your IT assets."
    }
  ]

  const solutions = [
    "End-User Support",
    "Server & Infrastructure Support",
    "Email & Communication Systems",
    "IT Helpdesk Setup",
    "Hardware Troubleshooting",
    "Software Installation & Licensing"
  ]

  const tools = [
    "TeamViewer", "AnyDesk", "Google Workspace", "Windows Server", 
    "Azure & AWS", "Custom Dashboards", "SQL Server", "Python Analytics"
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
              <Headset className="w-16 h-16 text-[#0075bb] mr-4" />
              <h1 className="text-5xl font-bold text-gray-800">IT Support Solutions</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ensure smooth and secure business operations with Skynet Solution’s expert IT Support Services in Qatar. We provide end-to-end technical support to keep your systems running with minimal downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#005a94" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-[#0075bb] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Support Demo
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">IT Support Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services designed to maintain, manage, and optimize your IT infrastructure.
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

      {/* Solutions & Tools Section */}
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6">IT Support Solutions</h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#f5f7fb] to-[#e8f2ff] rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-[#0075bb]" />
                    <span className="text-gray-800 font-medium">{solution}</span>
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Tools & Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#0075bb] to-[#005a94] text-white p-4 rounded-lg text-center font-semibold"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-[#f5f7fb] to-[#e8f2ff] rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Supported Systems</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Windows & Linux Environments</li>
                  <li>• CRM Platforms</li>
                  <li>• Financial Systems</li>
                  <li>• Web Analytics</li>
                  <li>• Social Media</li>
                  <li>• IoT Devices</li>
                </ul>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Keep Your Business Running Smoothly</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff] rounded-2xl"
            >
              <PieChart className="w-16 h-16 text-[#0075bb] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Proactive Monitoring</h3>
              <p className="text-gray-600">Detect and fix issues before they impact operations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff] rounded-2xl"
            >
              <LineChart className="w-16 h-16 text-[#0075bb] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Response Times</h3>
              <p className="text-gray-600">Dedicated support team for quick resolution and minimal downtime</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff] rounded-2xl"
            >
              <Target className="w-16 h-16 text-[#0075bb] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Security First</h3>
              <p className="text-gray-600">Prevent breaches and protect sensitive business data</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how Business Intelligence can transform your decision-making process.
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

export default ItSupportSolution