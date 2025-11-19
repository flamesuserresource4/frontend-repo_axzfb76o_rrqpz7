import React from 'react'

const priceDots = (price) => {
  const len = Math.max(10 - String(price).length, 3)
  return '.'.repeat(len)
}

function Category({ title, items }) {
  return (
    <div className="bg-slate-800/60 border border-amber-400/10 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-200 tracking-wide">
          {title}
        </h2>
        <div className="h-px flex-1 mx-4 bg-gradient-to-r from-amber-500/30 via-amber-300/20 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-amber-400/60 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
      </div>

      <ul className="space-y-4">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-start justify-between gap-4 group">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl font-semibold text-white">
                  {it.name}
                </span>
                {it.badge && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30">
                    {it.badge}
                  </span>
                )}
              </div>
              {it.desc && (
                <p className="text-sm md:text-base text-amber-100/70 mt-1">
                  {it.desc}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-amber-300/40 font-mono hidden md:block">
                {priceDots(it.price)}
              </span>
              <span className="text-amber-200 font-bold text-lg md:text-xl">
                {it.price}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
