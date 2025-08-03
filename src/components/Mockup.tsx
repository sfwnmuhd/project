import React from 'react'
import { motion } from 'framer-motion'

const Mockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className='container mx-auto flex justify-center items-center mt-8 mb-8 px-4 sm:px-6 w-full max-w-full overflow-hidden'
    >
      <div className='relative'>
        <div className='w-full max-w-4xl mx-auto bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8'>
          <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
            <div className='bg-gray-800 px-6 py-4 flex items-center space-x-2'>
              <div className='w-3 h-3 bg-red-500 rounded-full'></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>
            <div className='p-4 sm:p-6 md:p-8'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-gradient-to-br from-[#0075bb] to-[#005a94] rounded-lg p-6 text-white'>
                  <h3 className='text-xl font-bold mb-2'>ERP Solutions</h3>
                  <p className='text-sm opacity-90'>Comprehensive business management</p>
                </div>
                <div className='bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-6 text-white'>
                  <h3 className='text-xl font-bold mb-2'>Web Development</h3>
                  <p className='text-sm opacity-90'>Modern responsive websites</p>
                </div>
                <div className='bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-6 text-white'>
                  <h3 className='text-xl font-bold mb-2'>Consulting</h3>
                  <p className='text-sm opacity-90'>Expert business guidance</p>
                </div>
              </div>
              <div className='mt-6 bg-gray-50 rounded-lg p-4'>
                <div className='flex items-center justify-between mb-4'>
                  <h4 className='font-semibold text-gray-800'>Dashboard Overview</h4>
                  <div className='flex space-x-2'>
                    <div className='w-8 h-2 bg-[#0075bb] rounded'></div>
                    <div className='w-12 h-2 bg-gray-300 rounded'></div>
                    <div className='w-6 h-2 bg-gray-300 rounded'></div>
                  </div>
                </div>
                <div className='grid grid-cols-4 gap-2'>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className='h-8 bg-gray-200 rounded'></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Mockup
