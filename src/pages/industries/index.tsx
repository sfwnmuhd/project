// Export all industry pages
export { default as Garage } from './Garage'
export { default as Gym } from './Gym'
export { default as Laundry } from './Laundry'

// Simple pages using the same structure
import { Shirt, Factory, ShoppingCart, Store, ShoppingBag, Hotel, Handshake, Coffee } from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'

export const Tailoring = () => IndustryTemplate({
  icon: <Shirt className='w-10 h-10 text-white' />,
  title: 'Tailoring Management Solutions',
  description: 'Streamline your custom apparel business with our comprehensive tailoring management system. Track orders, manage measurements, and schedule deliveries efficiently.',
  imageUrl: 'https://images.pexels.com/photos/4620607/pexels-photo-4620607.jpeg',
  imageAlt: 'Professional tailor measuring client in workshop',
  features: [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Order Management",
      description: "Complete order tracking from measurement to final delivery"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Measurement Database",
      description: "Customer measurements storage and management system"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Fabric Inventory",
      description: "Track fabric stock, patterns, and accessories inventory"
    }
  ],
  benefits: [
    "Customer measurement tracking",
    "Order progress monitoring",
    "Fabric inventory management",
    "Delivery scheduling",
    "Custom pricing calculations",
    "Customer history maintenance"
  ]
})

export const Manufacturing = () => IndustryTemplate({
  icon: <Factory className='w-10 h-10 text-white' />,
  title: 'atAcc ERP for Manufacturing in Qatar',
  description: 'Transform your manufacturing operations with atAcc ERP - the best ERP software in Qatar for production management. Complete end-to-end manufacturing ERP solution with production planning, quality control, and supply chain integration.',
  imageUrl: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg',
  imageAlt: 'Manufacturing worker operating industrial equipment',
  features: [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Production Planning",
      description: "Complete production scheduling and resource allocation"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Inventory Control",
      description: "Raw material tracking and finished goods management"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Quality Control",
      description: "Quality assurance and compliance management system"
    }
  ],
  benefits: [
    "Production planning optimization",
    "Raw material tracking",
    "Quality control processes",
    "Supply chain integration",
    "Cost management",
    "Compliance reporting"
  ]
})

export const Grocery = () => IndustryTemplate({
  icon: <ShoppingCart className='w-10 h-10 text-white' />,
  title: 'Grocery Store Management',
  description: 'Streamline your grocery store operations with our comprehensive POS and inventory management system. Handle everything from billing to stock management.',
  imageUrl: 'https://images.pexels.com/photos/4177725/pexels-photo-4177725.jpeg',
  imageAlt: 'Customer shopping in modern grocery store',
  features: [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "POS System",
      description: "Advanced point-of-sale with barcode scanning and billing"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Inventory Management",
      description: "Real-time stock tracking and automatic reorder alerts"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Customer Loyalty",
      description: "Customer loyalty programs and membership management"
    }
  ],
  benefits: [
    "Barcode-based billing",
    "Real-time inventory tracking",
    "Customer loyalty programs",
    "Supplier management",
    "Expiry date tracking",
    "Sales analytics and reporting"
  ]
})

export const Retail = () => IndustryTemplate({
  icon: <ShoppingBag className='w-10 h-10 text-white' />,
  title: 'atAcc ERP for Retail Business in Qatar',
  description: 'Revolutionize your retail operations with atAcc ERP Qatar - the best ERP software for retail management. Comprehensive retail ERP system for inventory, sales, CRM, and supplier management across all store locations in Qatar.',
  features: [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Sales Management",
      description: "Complete sales tracking and customer management"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Inventory Control",
      description: "Multi-location inventory and stock management"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Supplier Management",
      description: "Vendor management and purchase order processing"
    }
  ],
  benefits: [
    "Multi-channel sales tracking",
    "Inventory optimization",
    "Customer relationship management",
    "Supplier coordination",
    "Price management",
    "Sales performance analytics"
  ]
})

export const Wholesale = () => IndustryTemplate({
  icon: <Store className='w-10 h-10 text-white' />,
  title: 'Wholesale Business Management',
  description: 'Manage your wholesale operations efficiently with our comprehensive business management system. Handle bulk orders, distribution, and customer accounts.',
  features: [
    {
      icon: <Store className="w-8 h-8" />,
      title: "Bulk Order Processing",
      description: "Efficient handling of large volume orders and pricing"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Distribution Management",
      description: "Warehouse and distribution center coordination"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Customer Accounts",
      description: "B2B customer account and credit management"
    }
  ],
  benefits: [
    "Bulk order management",
    "Distribution optimization",
    "Credit and payment tracking",
    "Volume-based pricing",
    "Warehouse management",
    "Business analytics"
  ]
})

export const Restaurant = () => IndustryTemplate({
  icon: <Hotel className='w-10 h-10 text-white' />,
  title: 'Restaurant Management System',
  description: 'Complete restaurant management solution with POS, kitchen management, and table reservations. Streamline your food service operations.',
  features: [
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "POS & Billing",
      description: "Restaurant POS with table management and billing"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Kitchen Management",
      description: "Kitchen order tracking and preparation management"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Inventory Control",
      description: "Food inventory and ingredient cost management"
    }
  ],
  benefits: [
    "Table reservation system",
    "Kitchen order management",
    "Menu and pricing control",
    "Inventory cost tracking",
    "Staff management",
    "Customer feedback system"
  ]
})

export const Hypermarket = () => IndustryTemplate({
  icon: <Store className='w-10 h-10 text-white' />,
  title: 'Hypermarket Management System',
  description: 'Comprehensive management solution for large retail outlets. Handle multiple departments, extensive inventory, and complex operations efficiently.',
  features: [
    {
      icon: <Store className="w-8 h-8" />,
      title: "Multi-Department Management",
      description: "Manage multiple departments and product categories"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Advanced POS",
      description: "Multi-terminal POS with barcode and RFID support"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Loyalty Programs",
      description: "Advanced customer loyalty and membership programs"
    }
  ],
  benefits: [
    "Department-wise management",
    "Large-scale inventory control",
    "Multi-location coordination",
    "Advanced analytics",
    "Customer behavior tracking",
    "Supplier relationship management"
  ]
})

export const SMEs = () => IndustryTemplate({
  icon: <Handshake className='w-10 h-10 text-white' />,
  title: 'SME Business Solutions',
  description: 'Customizable ERP solutions designed specifically for small and medium enterprises. Scale your business with our comprehensive management tools.',
  features: [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Business Management",
      description: "Complete business process management and automation"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Financial Management",
      description: "Accounting, invoicing, and financial reporting"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Customer Management",
      description: "CRM and customer relationship management tools"
    }
  ],
  benefits: [
    "Scalable business solutions",
    "Cost-effective implementation",
    "Process automation",
    "Financial control",
    "Growth enablement",
    "Operational efficiency"
  ]
})

export const Cafes = () => IndustryTemplate({
  icon: <Coffee className='w-10 h-10 text-white' />,
  title: 'Cafe Management Solutions',
  description: 'Streamline your cafe operations with our point-of-sale system, inventory management, and customer loyalty programs designed for coffee shops.',
  features: [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Cafe POS",
      description: "Specialized POS system for cafes and coffee shops"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Menu Management",
      description: "Dynamic menu and pricing management system"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Customer Loyalty",
      description: "Loyalty programs and customer engagement tools"
    }
  ],
  benefits: [
    "Quick order processing",
    "Inventory cost control",
    "Customer loyalty tracking",
    "Staff scheduling",
    "Sales analytics",
    "Mobile ordering integration"
  ]
})
