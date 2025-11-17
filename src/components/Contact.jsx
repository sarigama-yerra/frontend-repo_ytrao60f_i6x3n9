import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Start a Project</h2>
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-xl border border-amber-200/60 bg-white p-6 shadow-sm">
          {!sent ? (
            <div className="grid gap-4">
              <input required placeholder="Your name" className="rounded-md border border-amber-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" />
              <input type="email" required placeholder="Email" className="rounded-md border border-amber-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" />
              <input placeholder="Company (optional)" className="rounded-md border border-amber-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" />
              <textarea required placeholder="Tell us about your project" rows="5" className="rounded-md border border-amber-200/60 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400" />
              <button disabled={loading} className="rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-medium px-4 py-2 shadow disabled:opacity-60">
                {loading ? 'Sending…' : 'Send inquiry'}
              </button>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-3xl">🎉</p>
              <p className="mt-2 font-semibold text-slate-900">We received your message.</p>
              <p className="text-slate-600">We’ll get back to you shortly.</p>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
