import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ImageRotator({ images = [], interval = 3000, className = '' }) {
  const [index, setIndex] = useState(0)
  const total = images.length

  useEffect(() => {
    if (!total) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), interval)
    return () => clearInterval(id)
  }, [total, interval])

  if (!total) return null

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="rotating"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  )
}

export default ImageRotator
