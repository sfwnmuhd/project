
import { motion } from 'framer-motion'
import { 
  ShoppingBag,
  Factory, 
  Hotel,
  CarFront,
  Dumbbell,
  WashingMachine,
  Shirt,
  ShoppingCart,
  Store,
  Coffee,
  Handshake
} from 'lucide-react'

const Industries = () => {
  const industries = [
    {
      icon: <CarFront className="w-16 h-16" />,
      title: "Garage",
      description: "Workshop management systems, job card tracking, inventory control, and customer service tools for automotive service centers and garages."
    },
    {
      icon: <Dumbbell className="w-16 h-16" />,
      title: "Gym",
      description: "Membership management, attendance tracking, fitness class scheduling, and billing systems for gyms and fitness centers."
    },
    {
      icon: <WashingMachine className="w-16 h-16" />,
      title: "Laundry",
      description: "Order management systems, pickup & delivery tracking, billing, and customer communication tools for laundry and dry-cleaning businesses."
    },
    {
      icon: <Shirt className="w-16 h-16" />,
      title: "Tailoring",
      description: "Order tracking, fabric inventory management, customer measurements database, and delivery scheduling for tailoring and custom apparel businesses."
    },
    {
      icon: <Factory className="w-16 h-16" />,
      title: "Manufacturing",
      description: "End-to-end ERP for production planning, raw material tracking, quality control, and supply chain integration for manufacturers."
    },
    {
      icon: <ShoppingCart className="w-16 h-16" />,
      title: "Grocery",
      description: "POS systems, stock management, customer loyalty programs, and online ordering solutions tailored for grocery stores."
    },
    {
      icon: <ShoppingBag className="w-16 h-16" />,
      title: "Retail",
      description: "Billing and POS software, inventory and supplier management, and CRM tools to streamline daily operations for retail stores."
    },
    {
      icon: <Store className="w-16 h-16" />,
      title: "Wholesale",
      description: "Bulk order processing, inventory and distribution management, invoicing, and customer account systems for wholesale businesses."
    },
    {
      icon: <Hotel className="w-16 h-16" />,
      title: "Restaurant",
      description: "POS systems, kitchen order ticketing, table reservation, and inventory control solutions for efficient restaurant operations."
    },
    {
      icon: <Store className="w-16 h-16" />,
      title: "Hypermarket",
      description: "Integrated billing, stock management, loyalty programs, and multi-department coordination tools for hypermarkets and large retail outlets."
    },
    {
      icon: <Handshake className="w-16 h-16" />,
      title: "SMEs",
      description: "Customizable ERP solutions, accounting, CRM, HR, and inventory management tailored for small and medium-sized enterprises."
    },
    {
      icon: <Coffee className="w-16 h-16" />,
      title: "Cafe",
      description: "Point-of-sale systems, menu management, order tracking, and customer loyalty solutions for cafes and small eateries."
    },


  ]

  return (
    <section id="industries" className='min-h-screen py-20 bg-white flex items-center'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold text-gray-800 mb-6'>Industries We Serve</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Our expertise spans across multiple industries, delivering tailored solutions that meet specific sector requirements.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className='text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-[#f5f7fb] hover:to-[#e8f2ff] transition-all duration-300 group'
            >
              <div className='text-[#0075bb] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300'>
                {industry.icon}
              </div>
              
              <h3 className='text-xl font-bold text-gray-800 mb-4'>{industry.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{industry.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-[#0075bb] to-[#005a94] rounded-2xl p-12 text-white'>
            <h3 className='text-3xl font-bold mb-4'>Don't See Your Industry?</h3>
            <p className='text-xl mb-8 opacity-90'>
              We work with businesses across all sectors. Contact us to discuss your specific requirements.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className='inline-block px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300'
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries