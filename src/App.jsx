import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Subtle top border inspired by Greek meander pattern via gradient */}
      <div className="h-1 bg-[linear-gradient(90deg,#eab308_0%,#facc15_50%,#eab308_100%)]/80" />
      <Navbar />

      {/* Content sections */}
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>

      <footer className="border-t border-amber-200/60 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} Aegean Dev — Crafted on the coast.</p>
          <div className="text-slate-600 text-sm">Performance-first • Accessible • Animations that serve the story</div>
        </div>
      </footer>
    </div>
  )
}

export default App
