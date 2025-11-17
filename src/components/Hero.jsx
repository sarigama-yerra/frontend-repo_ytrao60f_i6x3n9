import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900"
          >
            Clean, modern IT websites inspired by ancient Greece
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-slate-700"
          >
            We craft fast, accessible, animation-rich developer sites that blend minimalist UI with timeless Aegean aesthetics.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-semibold px-6 py-3 shadow hover:shadow-lg transition">
              Get a Quote
            </a>
            <a href="#work" className="rounded-full border border-amber-300 text-slate-900 font-semibold px-6 py-3 hover:bg-amber-50 transition">
              See Work
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: 'Performance', v: '95+ Lighthouse' },
              { k: 'Delivery', v: '2-4 weeks' },
              { k: 'Animation', v: 'Framer Motion' },
            ].map((i) => (
              <div key={i.k} className="rounded-lg border border-amber-200/60 bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-amber-700">{i.k}</p>
                <p className="text-sm text-slate-900 font-semibold">{i.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl"
          >
            <div className="absolute inset-6 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.25),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(234,179,8,0.2),transparent_60%)]" />
            <div className="absolute inset-0 grid place-content-center">
              <motion.div
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="text-center p-8"
              >
                <p className="text-6xl">🏛️</p>
                <p className="mt-2 text-slate-800 font-semibold">Aegean UI Systems</p>
                <p className="text-slate-600">Made with care and craft</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
