import React from 'react'
import { motion } from 'framer-motion'

function ProductCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="relative overflow-hidden rounded-2xl border border-amber-400/10 bg-slate-800/60"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-semibold text-lg">{item.name}</h4>
          <span className="text-amber-200 font-bold">{item.price}</span>
        </div>
        {item.desc && (
          <p className="text-amber-100/70 text-sm mt-1">{item.desc}</p>
        )}
      </div>
    </motion.div>
  )
}

function ProductGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {items.map((it, idx) => (
        <ProductCard key={idx} item={it} />)
      )}
    </div>
  )
}

export default ProductGrid
