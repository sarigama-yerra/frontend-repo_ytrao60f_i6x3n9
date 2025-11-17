import { motion } from 'framer-motion'
import { Server, MonitorSmartphone, Palette, Sparkles } from 'lucide-react'

const services = [
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: 'Web Experiences',
    desc: 'React + Tailwind sites that feel effortless and elegant.'
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'APIs & Integrations',
    desc: 'FastAPI backends engineered for reliability and speed.'
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Brand Systems',
    desc: 'Minimal identities with Aegean-inspired palettes and glyphs.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-amber-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-amber-200/60 bg-white p-6 shadow-sm"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-200 to-yellow-300 flex items-center justify-center text-slate-900">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
