/* Quiet Orchard direction: editorial asymmetry, tea-green ink, oat paper, saffron ritual accents. */
import { useState } from "react";
import { ArrowDownRight, ArrowRight, Menu, Minus, Plus, Search, ShoppingBag, X } from "lucide-react";
import { toast } from "sonner";

const teas = [
  { name: "Golden Hour", type: "Oolong · bright / honeyed", price: "$24", color: "#d69a32", note: "apricot · toasted grain", size: "24 servings", ritual: "4 min · 85°C", origin: "Fujian / spring lot" },
  { name: "Moss & Mint", type: "Green · cool / mineral", price: "$22", color: "#6c825e", note: "spearmint · wet stone", size: "20 servings", ritual: "3 min · 78°C", origin: "Shizuoka / shade grown" },
  { name: "Ember Chai", type: "Black · warm / spiced", price: "$26", color: "#b86f4a", note: "cardamom · cacao nib", size: "18 servings", ritual: "5 min · 95°C", origin: "Assam / winter blend" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [selectedTea, setSelectedTea] = useState(0);
  const [email, setEmail] = useState("");

  const addTea = (name: string) => {
    setBagCount((count) => count + 1);
    toast.success(`${name} added to your bag`, { description: "Your next pause is taking shape." });
  };

  const subscribe = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.includes("@")) {
      toast.error("A small correction", { description: "Enter a valid email to receive the field notes." });
      return;
    }
    toast.success("You’re on the list", { description: "Field notes and new harvests will find their way to you." });
    setEmail("");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f1e7] text-[#183b32]">
      <div className="grain" aria-hidden="true" />
      <header className="relative z-40 border-b border-[#183b32]/10 bg-[#f7f1e7]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Tea home">
            <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[#183b32]/30 bg-[#e5eadb] transition-transform duration-200 group-hover:rotate-[-8deg]"><span className="absolute -right-2 top-0 h-5 w-px bg-[#d69a32]" />
              <img src="/manus-storage/tea-mark_ea5b51bb.png" alt="" className="h-6 w-6 object-contain" />
            </span>
            <span className="flex items-center gap-2"><span className="font-serif text-[1.45rem] tracking-[-0.06em]">te<span className="inline-block -translate-x-[1px] text-[#b86f4a]">a</span></span><span className="h-4 w-px bg-[#d69a32]" /><span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#183b32]/55">field notes</span></span>
          </a>
          <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#183b32]/70 md:flex">
            <a className="transition-colors hover:text-[#d69a32]" href="#shop">Shop tea</a>
            <a className="transition-colors hover:text-[#d69a32]" href="#ritual">The ritual</a>
            <a className="transition-colors hover:text-[#d69a32]" href="#story">Our story</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden text-[#183b32]/70 transition-colors hover:text-[#d69a32] md:block" aria-label="Search"><Search size={17} strokeWidth={1.6} /></button>
            <button className="relative text-[#183b32]" aria-label={`Shopping bag with ${bagCount} items`} onClick={() => toast.info(bagCount ? `${bagCount} item${bagCount > 1 ? "s" : ""} in your bag` : "Your bag is waiting", { description: "Checkout is coming soon." })}>
              <ShoppingBag size={18} strokeWidth={1.6} />
              {bagCount > 0 && <span className="absolute -right-3 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-[#d69a32] px-1 text-[9px] font-bold text-[#183b32]">{bagCount}</span>}
            </button>
            <button className="md:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={21} /></button>
          </div>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-50 bg-[#183b32] p-6 text-[#f7f1e7] md:hidden">
        <div className="flex items-center justify-between"><span className="font-serif text-2xl">tea.</span><button aria-label="Close menu" onClick={() => setMenuOpen(false)}><X /></button></div>
        <nav className="mt-24 flex flex-col gap-7 font-serif text-5xl tracking-[-0.04em]"><a href="#shop" onClick={() => setMenuOpen(false)}>Shop tea</a><a href="#ritual" onClick={() => setMenuOpen(false)}>The ritual</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a></nav>
        <p className="absolute bottom-8 left-6 max-w-[230px] text-sm leading-6 text-[#f7f1e7]/60">A slower cup for the spaces between things.</p>
      </div>}

      <main id="top">
        <section className="relative mx-auto grid max-w-[1320px] gap-12 px-5 pb-20 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:pb-28 lg:pt-20">
          <div className="relative z-10 flex flex-col justify-center lg:pb-10">
            <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d69a32]"><span className="h-px w-10 bg-[#d69a32]" /> brewed slowly</div>
            <h1 className="max-w-[560px] font-serif text-[clamp(4.3rem,9vw,8.5rem)] leading-[0.83] tracking-[-0.075em] text-[#183b32]">A softer<br /><em className="text-[#b86f4a]">way</em> to<br />start.</h1>
            <p className="mt-9 max-w-[380px] text-base leading-7 text-[#183b32]/70">Small-batch leaves for the space between things. Thoughtfully sourced, quietly blended, and ready when you are.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5"><a href="#shop" className="group inline-flex items-center gap-4 rounded-full bg-[#183b32] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f7f1e7] transition-transform duration-200 hover:-translate-y-1">Find your cup <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a><a href="#ritual" className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#183b32]/60 underline decoration-[#d69a32] underline-offset-8">Read the ritual</a></div>
            <div className="mt-16 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#183b32]/45"><ArrowDownRight size={16} className="text-[#d69a32]" /> steeped for the present moment</div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[700px]">
            <img src="/manus-storage/tea-hero_a43ebb56.jpg" alt="A ceramic cup of tea on a linen table in morning light" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#183b32]/35 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-4 text-[#f7f1e7] lg:bottom-10 lg:left-10"><span className="grid h-10 w-10 place-items-center rounded-full border border-[#f7f1e7]/60 text-xs">01</span><span className="text-[10px] font-bold uppercase tracking-[0.2em]">The morning pour</span></div>
            <span className="absolute right-5 top-5 font-serif text-6xl italic text-[#f7f1e7]/70">pause</span>
          </div>
        </section>

        <section className="border-y border-[#183b32]/10 bg-[#e5eadb]" id="shop">
          <div className="relative mx-auto max-w-[1320px] px-5 py-20 lg:px-10 lg:py-28"><span className="steep-line left-5 top-0 lg:left-10" aria-hidden="true"><span>01</span></span><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="section-kicker">01 / the collection</p><h2 className="mt-4 max-w-[510px] font-serif text-5xl leading-[0.95] tracking-[-0.055em] md:text-7xl">Leaves with<br /><em className="text-[#b86f4a]">somewhere</em> to go.</h2></div><p className="max-w-[270px] text-sm leading-6 text-[#183b32]/65">Three expressions, each with a distinct mood. Start with the feeling you want to carry into the day.</p></div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">{teas.map((tea, index) => <article key={tea.name} className={`group relative overflow-hidden border border-[#183b32]/15 bg-[#f7f1e7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(24,59,50,0.12)] ${selectedTea === index ? "ring-2 ring-[#d69a32] ring-offset-2 ring-offset-[#e5eadb]" : ""}`} onMouseEnter={() => setSelectedTea(index)}><div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-full text-xs font-bold" style={{ background: tea.color, color: index === 0 ? "#183b32" : "#f7f1e7" }}>0{index + 1}</span><button className="grid h-9 w-9 place-items-center rounded-full border border-[#183b32]/20 transition-colors hover:bg-[#183b32] hover:text-[#f7f1e7]" aria-label={`Add ${tea.name} to bag`} onClick={() => addTea(tea.name)}><Plus size={16} /></button></div><div className="mt-28"><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#183b32]/50">{tea.type}</p><h3 className="mt-3 font-serif text-4xl tracking-[-0.045em]">{tea.name}</h3><div className="mt-5 flex items-center justify-between border-t border-[#183b32]/15 pt-4 text-xs text-[#183b32]/65"><span>{tea.note}</span><span className="font-semibold text-[#183b32]">{tea.price}</span></div><p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-[#183b32]/40">{tea.size}</p><div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#183b32]/10 pt-3 text-[9px] uppercase tracking-[0.12em] text-[#183b32]/45"><span>origin<br /><strong className="mt-1 block font-semibold normal-case tracking-normal text-[#183b32]/75">{tea.origin}</strong></span><span>ritual<br /><strong className="mt-1 block font-semibold normal-case tracking-normal text-[#183b32]/75">{tea.ritual}</strong></span></div></div></article>)}</div>
          </div>
        </section>

        <section id="ritual" className="relative mx-auto grid max-w-[1320px] gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24 lg:px-10 lg:py-32"><span className="steep-line left-5 top-0 lg:left-10" aria-hidden="true"><span>02</span></span><div className="relative order-2 lg:order-1"><div className="absolute -left-5 -top-5 h-28 w-28 rounded-full border border-[#d69a32]/60" /><img src="/manus-storage/tea-ritual_cd36da17.jpg" alt="Stoneware teapot and cup arranged on a clay table" className="relative z-10 h-[560px] w-full object-cover" /><div className="absolute -bottom-5 -right-5 z-20 bg-[#d69a32] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#183b32]">made for slow mornings</div></div><div className="order-1 flex flex-col justify-center lg:order-2"><p className="section-kicker">02 / the ritual</p><h2 className="mt-5 max-w-[520px] font-serif text-5xl leading-[0.92] tracking-[-0.06em] md:text-7xl">Good tea<br />makes room<br /><em className="text-[#b86f4a]">for you.</em></h2><p className="mt-8 max-w-[430px] text-base leading-7 text-[#183b32]/70">We believe the best part of tea is not the tasting note. It is the little clearing it creates: five minutes where nothing needs improving.</p><div className="mt-10 border-t border-[#183b32]/20 pt-5"><div className="grid grid-cols-3 gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#183b32]/55"><span>01<br /><strong className="mt-2 block font-serif text-2xl normal-case tracking-normal text-[#183b32]">Warm</strong></span><span>02<br /><strong className="mt-2 block font-serif text-2xl normal-case tracking-normal text-[#183b32]">Steep</strong></span><span>03<br /><strong className="mt-2 block font-serif text-2xl normal-case tracking-normal text-[#183b32]">Arrive</strong></span></div></div><a href="#story" className="mt-10 inline-flex w-fit items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#183b32] underline decoration-[#d69a32] underline-offset-8">Our approach <ArrowRight size={15} /></a></div></section>

        <section id="story" className="relative bg-[#183b32] text-[#f7f1e7]"><span className="steep-line dark left-5 top-0 lg:left-10" aria-hidden="true"><span>03</span></span><div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28"><div><p className="section-kicker text-[#d69a32]">03 / field notes</p><h2 className="mt-6 max-w-[680px] font-serif text-5xl leading-[0.95] tracking-[-0.055em] md:text-7xl">A cup can be<br /><em className="text-[#d69a32]">a small act</em><br />of attention.</h2></div><div className="flex flex-col justify-end"><p className="text-sm leading-7 text-[#f7f1e7]/65">From the first leaf to the last sip, we keep things considered. Our blends are made in small lots with ingredients we can name, trace, and taste.</p><a href="#newsletter" className="mt-8 inline-flex w-fit items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f7f1e7] underline decoration-[#d69a32] underline-offset-8">Get the field notes <ArrowRight size={15} /></a></div></div><div className="mx-auto max-w-[1320px] px-5 pb-16 lg:px-10"><img src="/manus-storage/tea-botanical_01edb713.jpg" alt="Tea leaves and blossoms arranged as a botanical field note" className="h-[300px] w-full object-cover opacity-80 grayscale-[15%] lg:h-[460px]" /></div></section>

        <section id="newsletter" className="relative mx-auto max-w-[1320px] px-5 py-20 lg:px-10 lg:py-28"><span className="steep-line left-5 top-0 lg:left-10" aria-hidden="true"><span>04</span></span><div className="ml-auto max-w-[780px] border-y border-[#183b32]/15 py-14 text-center"><p className="section-kicker">a note from the garden</p><h2 className="mx-auto mt-5 max-w-[640px] font-serif text-5xl leading-none tracking-[-0.06em] md:text-7xl">A little something<br /><em className="text-[#b86f4a]">to steep on.</em></h2><p className="mx-auto mt-6 max-w-[380px] text-sm leading-6 text-[#183b32]/65">New harvests, brewing notes, and the occasional reason to put the kettle on.</p><form onSubmit={subscribe} className="mx-auto mt-9 flex max-w-[420px] border-b border-[#183b32]/40 pb-2"><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="your@email.com" aria-label="Email address" className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm outline-none placeholder:text-[#183b32]/40" /><button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em]" type="submit">Join in <ArrowRight size={15} /></button></form></div></section>
      </main>
      <footer className="border-t border-[#183b32]/10 px-5 py-8 lg:px-10"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#183b32]/55 md:flex-row"><span>tea. / brewed for the moment</span><span>© 2026 tea company</span><span>instagram · journal · contact</span></div></footer>
    </div>
  );
}
