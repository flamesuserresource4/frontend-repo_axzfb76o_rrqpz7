import React from 'react'
import MenuHeader from './components/MenuHeader'
import Ticker from './components/MarqueeTicker'
import Category from './components/Category'
import AnimatedSpecials from './components/AnimatedSpecials'

const starters = [
  { name: 'Charred Avocado', desc: 'Citrus, chili oil, sea salt', price: '$9', badge: 'v' },
  { name: 'Wood-Fired Wings', desc: 'Smoked paprika rub, lemon honey', price: '$12', badge: '⭐' },
  { name: 'Roasted Beet Salad', desc: 'Goat cheese, pistachio, orange', price: '$11', badge: 'v' },
]

const mains = [
  { name: 'Oak-Grilled Ribeye', desc: 'Herb butter, crispy potatoes', price: '$29' },
  { name: 'Cedar Plank Salmon', desc: 'Maple glaze, charred lemon', price: '$24' },
  { name: 'Wild Mushroom Pasta', desc: 'Parmesan, thyme, truffle oil', price: '$19', badge: 'v' },
]

const drinks = [
  { name: 'Smoked Old Fashioned', desc: 'Bourbon, demerara, orange', price: '$12' },
  { name: 'Charred Pineapple Margarita', desc: 'Reposado, lime, agave', price: '$11' },
  { name: 'House Lemonade', desc: 'Fresh‑squeezed, mint', price: '$5' },
]

const specials = [
  { name: 'Porcini-Crusted Lamb', price: '$32', desc: 'Mint gremolata, pan jus' },
  { name: 'Fire-Kissed Octopus', price: '$28', desc: 'Smoked paprika, fennel' },
  { name: 'Burnt Basque Cheesecake', price: '$10', desc: 'Amarena cherry' },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-amber-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full opacity-[0.08] bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.35),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-10">
        <MenuHeader />

        <div className="mb-8">
          <Ticker items={[
            'Happy Hour 4–6PM',
            'Ask about our gluten‑free options',
            'Reservations recommended on weekends',
            'Now pouring: Small‑batch local IPAs',
          ]} speed={50} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Category title="Starters" items={starters} />
          <Category title="Mains" items={mains} />
          <div className="md:col-span-2">
            <Category title="Drinks" items={drinks} />
          </div>
        </div>

        <div className="mt-12">
          <AnimatedSpecials items={specials} />
        </div>

        <footer className="mt-12 text-center text-amber-100/60 text-sm">
          Prices include applicable taxes. 18% gratuity may be added to parties of six or more.
        </footer>
      </div>
    </div>
  )
}

export default App
