
import { motion } from 'framer-motion'
import alraiqa from '../assets/clients/al raiqa.jpg';
import alrawabi from '../assets/clients/AL RAWABI GROUP.png';
import aliftrading from '../assets/clients/aliftrading.jpg';
import aljazeera from '../assets/clients/aljazeeera.jpg'

const Clients = () => {
  const clients = [
    { name: 'AL RAIQA', logo: alraiqa},
    { name: 'AL RAWABI GROUP', logo: alrawabi },
    { name: 'ALIF TRADING', logo: aliftrading },
    { name: 'AL JAZEERA', logo: aljazeera },
    { name: 'Emirates Park Zoo', logo: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Shifa Al Oroba', logo: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Container Hub', logo: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'STLSA Express', logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Trinity Modify', logo: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Richmount', logo: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Petroil', logo: 'https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Rain', logo: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Coinmena', logo: 'https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Charity Soft', logo: 'https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'Cellsave', logo: 'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' }
  ]

  return (
    <section id="clients" className='min-h-screen py-20 bg-gray-900 flex items-center'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold text-white mb-6'>Clients</h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Trusted by leading companies across Qatar and the Middle East
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16'>
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className=' rounded-lg p-6 flex items-center justify-center h-24 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='text-center'>
                <div className='w-16 h-8 bg-gray-200 rounded mb-2 mx-auto flex items-center justify-center'>
                  
                  <img src={client.logo} alt="" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className='px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300'
          >
            View All Clients
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients