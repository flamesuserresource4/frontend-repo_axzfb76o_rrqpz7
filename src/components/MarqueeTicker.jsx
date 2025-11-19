import React from 'react'

const Ticker = ({ items = [], speed = 40, direction = 'left' }) => {
  const animation = direction === 'left' ? 'marquee-left' : 'marquee-right'
  const list = [...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden w-full select-none">
      <div
        className={`flex gap-10 whitespace-nowrap will-change-transform animate-[${animation}_linear_infinite]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {list.map((item, idx) => (
          <span key={idx} className="text-amber-200/80 text-sm md:text-base tracking-wider uppercase">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ticker
