import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Asset = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { number: 12, suffix: '+', label: 'Years', subtitle: 'Proven Track Record' },
    { number: 99, suffix: '%', label: '', subtitle: 'Customer Satisfaction' },
    { number: 1000, suffix: '+', label: '', subtitle: 'Happy Clients' },
    { number: 15, suffix: '+', label: '', subtitle: 'Industries Served' },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className='container mx-auto w-full flex flex-wrap justify-center items-center mt-20 gap-4 sm:gap-6 md:gap-8 lg:gap-16 px-4'
    >
      {stats.map((stat, index) => {
        const count = useCountUp({
          end: stat.number,
          duration: 2000,
          delay: isInView ? index * 200 : 0
        })

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            className='text-center'
          >
            <h3 className='font-extrabold text-4xl text-gray-800'>
              {isInView ? count : 0}{stat.suffix} <span className='font-bold text-2xl text-[#0075bb]'>{stat.label}</span>
            </h3>
            <p className='text-lg font-semibold text-gray-600 mt-2'>{stat.subtitle}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Asset
