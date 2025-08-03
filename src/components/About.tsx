
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
    <section id="about" className='min-h-screen py-20 bg-white flex items-center'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold text-gray-800 mb-6'>About Skynet Solution</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
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
            <h3 className='text-3xl font-bold text-gray-800 mb-6'>Our Mission</h3>
            <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
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
                  <CheckCircle className='w-6 h-6 text-green-500' />
                  <span className='text-gray-700 font-medium'>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff] rounded-2xl p-8'
          >
            <h3 className='text-3xl font-bold text-gray-800 mb-8'>Why Choose Us</h3>
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
                  <div className='text-[#0075bb] mt-1'>{feature.icon}</div>
                  <div>
                    <h4 className='text-xl font-semibold text-gray-800 mb-2'>{feature.title}</h4>
                    <p className='text-gray-600'>{feature.description}</p>
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