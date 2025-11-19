import React from 'react'
import MenuHeader from './components/MenuHeader'
import Ticker from './components/MarqueeTicker'
import Category from './components/Category'
import AnimatedSpecials from './components/AnimatedSpecials'
import SpecialsCarousel from './components/SpecialsCarousel'
import ProductGrid from './components/ProductGrid'

const starters = [
  { name: 'Charred Avocado', desc: 'Citrus, chili oil, sea salt', price: '$9', badge: 'v', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Wood-Fired Wings', desc: 'Smoked paprika rub, lemon honey', price: '$12', badge: '⭐', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Roasted Beet Salad', desc: 'Goat cheese, pistachio, orange', price: '$11', badge: 'v', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1600&auto=format&fit=crop' },
]

const mains = [
  { name: 'Oak-Grilled Ribeye', desc: 'Herb butter, crispy potatoes', price: '$29', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Cedar Plank Salmon', desc: 'Maple glaze, charred lemon', price: '$24', image: 'https://images.unsplash.com/photo-1633910059461-8b5e672627de?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb2FzdGVkJTIwQmVldCUyMFNhbGFkfGVufDB8MHx8fDE3NjM1OTUxNDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Wild Mushroom Pasta', desc: 'Parmesan, thyme, truffle oil', price: '$19', badge: 'v', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1600&auto=format&fit=crop' },
]

const drinks = [
  { name: 'Smoked Old Fashioned', desc: 'Bourbon, demerara, orange', price: '$12', image: 'https://images.unsplash.com/photo-1583354594393-7c011dbf47d8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDZWRhciUyMFBsYW5rJTIwU2FsbW9ufGVufDB8MHx8fDE3NjM1OTUxNTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Charred Pineapple Margarita', desc: 'Reposado, lime, agave', price: '$11', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop' },
  { name: 'House Lemonade', desc: 'Fresh‑squeezed, mint', price: '$5', image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1600&auto=format&fit=crop' },
]

const specials = [
  { name: 'Porcini-Crusted Lamb', price: '$32', desc: 'Mint gremolata, pan jus', image: 'https://images.unsplash.com/photo-1761266483718-cb1350c59906?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFycmVkJTIwUGluZWFwcGxlJTIwTWFyZ2FyaXRhfGVufDB8MHx8fDE3NjM1OTUxNTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Fire-Kissed Octopus', price: '$28', desc: 'Smoked paprika, fennel', image: 'https://images.unsplash.com/photo-1654378275636-d20cec3f7e6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3VzZSUyMExlbW9uYWRlfGVufDB8MHx8fDE3NjM1OTUxNTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Burnt Basque Cheesecake', price: '$10', desc: 'Amarena cherry', image: 'https://images.unsplash.com/photo-1658331454691-21d45636b880?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb3JjaW5pLUNydXN0ZWQlMjBMYW1ifGVufDB8MHx8fDE3NjM1OTUxNTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-amber-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full opacity-[0.08] bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.35),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <MenuHeader />

        <div className="mb-8">
          <Ticker items={[
            'Happy Hour 4–6PM',
            'Ask about our gluten‑free options',
            'Reservations recommended on weekends',
            'Now pouring: Small‑batch local IPAs',
          ]} speed={50} />
        </div>

        {/* Hero Specials Carousel with rotating images */}
        <div className="mb-10">
          <SpecialsCarousel items={specials} interval={5000} />
        </div>

        {/* Featured items as image cards with hover motion */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-200">Featured Dishes</h2>
            <div className="h-px flex-1 mx-4 bg-gradient-to-r from-amber-500/30 via-amber-300/20 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-amber-400/60" />
          </div>
          <ProductGrid items={mains} />
        </section>

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
