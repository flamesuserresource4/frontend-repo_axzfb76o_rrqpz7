import React, { useEffect, useState } from 'react'

const words = [
  { k: 'Fresh', c: 'text-amber-300' },
  { k: 'Smoky', c: 'text-amber-200' },
  { k: 'Seasonal', c: 'text-amber-400' },
  { k: 'Handcrafted', c: 'text-amber-300' },
]

function AnimatedSpecials({ items }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="text-center">
      <p className="text-amber-100/80 mb-2 uppercase tracking-[0.3em] text-xs md:text-sm">Tonight’s</p>
      <div className="text-3xl md:text-4xl font-extrabold">
        <span className={`transition-all duration-500 ${words[index].c}`}>{words[index].k}</span>
        <span className="text-white"> Chef Specials</span>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((sp, i) => (
          <div key={i} className="bg-slate-800/60 border border-amber-400/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-white font-semibold">{sp.name}</h4>
              <span className="text-amber-200 font-bold">{sp.price}</span>
            </div>
            <p className="text-amber-100/70 text-sm">{sp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedSpecials
