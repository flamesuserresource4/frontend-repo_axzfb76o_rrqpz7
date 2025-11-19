import React, { useEffect, useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function SpecialsCarousel({ items = [], interval = 4000 }) {
  const [index, setIndex] = useState(0)

  const safeItems = useMemo(() => Array.isArray(items) ? items.filter(Boolean) : [], [items])
  const total = safeItems.length

  useEffect(() => {
    if (!total) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), interval)
    return () => clearInterval(id)
  }, [total, interval])

  if (!total) return null

  const current = safeItems[index]

  return (
    <div className="relative w-full aspect-[16/7] md:aspect-[16/5] overflow-hidden rounded-2xl border border-amber-400/10 bg-slate-900/50">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.12),transparent_60%)]" />

          {/* Content */}
          <div className="absolute left-0 top-0 h-full w-full p-6 md:p-10 flex items-end">
            <div className="max-w-xl">
              <div className="uppercase tracking-[0.3em] text-xs md:text-sm text-amber-100/80 mb-2">Tonight's Feature</div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-md">{current.name}</h3>
              <p className="text-amber-100/80 mt-2 md:mt-3 text-sm md:text-base">{current.desc}</p>
              <div className="mt-3 inline-flex items-center gap-3 bg-slate-900/40 backdrop-blur-sm border border-amber-400/10 rounded-full px-4 py-2">
                <span className="text-amber-200 font-semibold">{current.price}</span>
                <span className="w-1 h-1 rounded-full bg-amber-300/60" />
                <span className="text-amber-100/70 text-xs md:text-sm">Rotates every {Math.round(interval/1000)}s</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {safeItems.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i+1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-amber-300' : 'w-2 bg-amber-300/40'}`}
          />
        ))}
      </div>

      {/* Prev/Next arrows (invisible on small to keep it clean) */}
      <div className="hidden md:flex absolute inset-0 items-center justify-between p-2">
        <button
          onClick={() => setIndex((i) => (i - 1 + total) % total)}
          className="size-9 grid place-items-center rounded-full bg-slate-900/40 hover:bg-slate-900/60 border border-amber-400/10 text-amber-200 transition"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={() => setIndex((i) => (i + 1) % total)}
          className="size-9 grid place-items-center rounded-full bg-slate-900/40 hover:bg-slate-900/60 border border-amber-400/10 text-amber-200 transition"
          aria-label="Next"
        >
          ▶
        </button>
      </div>
    </div>
  )
}

export default SpecialsCarousel
