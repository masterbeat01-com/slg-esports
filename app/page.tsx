export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-white/10">
        <h1 className="text-2xl font-black tracking-widest">SLG <span className="text-yellow-400">ESPORTS</span></h1>
        <div className="flex gap-4">
          <a className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm" href="#">Join Discord</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <p className="text-yellow-400 font-bold tracking-[0.3em] text-xs mb-4">INDIA'S PREMIER ESPORTS ORG</p>
        <h2 className="text-5xl md:text-7xl font-black leading-none">WE DON'T PLAY.<br/>WE DOMINATE.</h2>
        <p className="text-white/60 max-w-xl mx-auto mt-6">SLG Esports is building the future of competitive gaming in India. Teams, tournaments, content & community.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-black">VIEW TEAMS</button>
          <button className="border border-white/20 px-8 py-3 rounded-full font-bold">OUR JOURNEY</button>
        </div>
      </section>

      {/* Teams */}
      <section className="grid md:grid-cols-3 gap-4 p-6 max-w-6xl mx-auto">
        {[
          { game: "BGMI", name: "SLG X SPARK" },
          { game: "VALORANT", name: "SLG LEGION" },
          { game: "FREE FIRE", name: "SLG ROGUES" },
        ].map((t)=>(
          <div key={t.game} className="bg-[#111] border border-white/10 p-8 rounded-2xl">
            <p className="text-xs text-white/40 tracking-widest">{t.game}</p>
            <h3 className="text-2xl font-black mt-2">{t.name}</h3>
            <p className="text-sm text-white/50 mt-3">Undefeated in regionals. Ready for nationals.</p>
          </div>
        ))}
      </section>

      <footer className="text-center py-10 text-white/30 text-sm border-t border-white/10 mt-10">
        © 2026 SLG Esports - Lucknow, UP. Built by SLG.
      </footer>
    </main>
  );
}
