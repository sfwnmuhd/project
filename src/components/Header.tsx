import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section id="home" className='min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden pt-1'>
      <Navbar/>

      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse'></div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)]'>

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col justify-center space-y-8'
          >
            <div className='space-y-6'>
              

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900'
              >
                Transform Your Business with
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2'>
                  atACC ERP Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='text-xl text-gray-600 leading-relaxed max-w-lg'
              >
                Streamline operations, boost productivity, and drive growth with Qatar's leading ERP implementation partner. Trusted by 500+ businesses across 15+ industries.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 text-center inline-block w-full sm:w-auto'
                >
                  Get Free Demo →
                </motion.div>
              </Link>

              <motion.a
                whileHover={{ y: -2, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className='px-8 py-4 border-2 border-gray-300 bg-white/70 backdrop-blur-sm text-gray-800 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-center'
              >
                Explore Solutions
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='grid grid-cols-3 gap-8 pt-8 border-t border-gray-200'
            >
              {[
                { number: '1000+', label: 'Happy Clients' },
                { number: '15+', label: 'Industries' },
                { number: '12+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-2xl font-bold text-gray-900'>{stat.number}</div>
                  <div className='text-sm text-gray-600 font-medium'>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - ERP Dashboard Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative'
          >
            <div className='relative max-w-lg mx-auto lg:max-w-none'>
              {/* Main Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className='bg-white rounded-2xl shadow-2xl p-6 relative z-10'
              >
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-lg font-semibold text-gray-800'>ERP Dashboard</h3>
                  <div className='flex space-x-2'>
                    <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className='space-y-4'>
                  {/* Revenue Chart */}
                  <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4'>
                    <div className='flex justify-between items-center mb-3'>
                      <span className='text-sm font-medium text-gray-600'>Monthly Revenue</span>
                      <span className='text-sm text-green-600 font-semibold'>+24%</span>
                    </div>
                    <div className='flex items-end space-x-1 h-16'>
                      {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                        <div
                          key={index}
                          className='bg-blue-500 rounded-t'
                          style={{ height: `${height}%`, width: '12px' }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-green-50 rounded-lg p-3'>
                      <div className='text-2xl font-bold text-green-600'>₹2.4M</div>
                      <div className='text-xs text-gray-600'>Total Sales</div>
                    </div>
                    <div className='bg-blue-50 rounded-lg p-3'>
                      <div className='text-2xl font-bold text-blue-600'>1,247</div>
                      <div className='text-xs text-gray-600'>Active Orders</div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className='space-y-2'>
                    <div className='text-sm font-medium text-gray-600 mb-2'>Recent Activity</div>
                    {[
                      { action: 'New order received', time: '2 min ago' },
                      { action: 'Inventory updated', time: '5 min ago' },
                      { action: 'Payment processed', time: '8 min ago' }
                    ].map((activity, index) => (
                      <div key={index} className='flex justify-between text-xs'>
                        <span className='text-gray-700'>{activity.action}</span>
                        <span className='text-gray-500'>{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className='absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20'
              >
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                    <span className='text-green-600 font-bold'>✓</span>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-gray-800'>Order Completed</div>
                    <div className='text-xs text-gray-500'>#ORD-1247</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className='absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 z-20'
              >
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                    <span className='text-blue-600 font-bold'>📊</span>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-gray-800'>Analytics Ready</div>
                    <div className='text-xs text-gray-500'>View Reports</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Header
