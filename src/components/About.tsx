import { motion } from 'framer-motion'
import { CheckCircle, Users, Award, Globe } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience in ERP solutions and web development."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in every project we deliver."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients across Qatar and the Middle East with cutting-edge solutions."
    }
  ]

  const achievements = [
    "Over 12 Years of Industry Excellence",
    "Trusted IT Partner for Leading Qatari Enterprises",
    "Reliable IT Infrastructure, Unmatched Support",
    "Quality-Focused IT Service Provider"
  ]

  return (
    <section id="about" className='min-h-screen py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-8'>About Skynet Solution</h2>
          <p className='text-2xl font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed'>
            With over 12 years of experience, we are Qatar's leading provider of innovative ERP solutions
            and professional web development services, helping businesses transform and grow.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className='text-4xl font-bold text-gray-900 mb-8'>Our Mission</h3>
            <p className='text-xl font-medium text-gray-700 mb-8 leading-relaxed'>
              To empower businesses with intelligent software solutions that streamline operations,
              enhance productivity, and drive sustainable growth in the digital age.
            </p>
            <div className='space-y-4'>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-center space-x-3'
                >
                  <CheckCircle className='w-7 h-7 text-green-600' />
                  <span className='text-gray-800 font-semibold text-lg'>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/50'
          >
            <h3 className='text-4xl font-bold text-gray-900 mb-10'>Why Choose Us</h3>
            <div className='space-y-6'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-start space-x-4'
                >
                  <div className='text-blue-600 mt-1 p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl w-fit'>{feature.icon}</div>
                  <div>
                    <h4 className='text-2xl font-bold text-gray-900 mb-3'>{feature.title}</h4>
                    <p className='text-gray-700 text-lg leading-relaxed'>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
