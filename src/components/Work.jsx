import { motion } from 'framer-motion'

const work = [
  {
    title: 'Agora Docs',
    desc: 'Developer docs with buttery-smooth interactions',
    img: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Ionian Cloud',
    desc: 'Landing page with animated hero and glassmorphism',
    img: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Parthenon UI',
    desc: 'Component library and design system showcase',
    img: 'https://images.unsplash.com/photo-1562072548-303e028e9f91?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Selected Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {work.map((w) => (
            <motion.div key={w.title} whileHover={{ scale: 1.02 }} className="group rounded-xl overflow-hidden border border-amber-200/60 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden">
                <img src={w.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{w.title}</h3>
                <p className="text-slate-600">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
