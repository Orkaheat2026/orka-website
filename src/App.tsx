import { useState } from "react";
import {
  Flame,
  ShieldCheck,
  Phone,
  Wrench,
  Droplets,
  Star,
  Clock3,
  CheckCircle2,
  MessageCircle,
  MapPin,
  ChevronRight,
} from "lucide-react";
const FORMSPREE_ENDPOINT = https://formspree.io/f/xnjogzlr

const WHATSAPP_NUMBER = "447354764651";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi ORKA Heating & Plumbing, I need a quote please."
);

const services = [
  {
    title: "24/7 Emergency Call Outs",
    text: "Rapid response for no heating, no hot water, leaks, breakdowns and urgent plumbing issues.",
    icon: Clock3,
  },
  {
    title: "Boiler Installations",
    text: "Full boiler replacements and new installations carried out to a high professional standard.",
    icon: Flame,
  },
  {
    title: "Boiler Repairs",
    text: "Fault finding and repairs for broken, leaking or inefficient boilers.",
    icon: Wrench,
  },
  {
    title: "Boiler Servicing",
    text: "Keep your boiler safe, efficient and reliable with routine servicing.",
    icon: ShieldCheck,
  },
  {
    title: "Central Heating Work",
    text: "Radiators, pipework, heating upgrades, system balancing and performance improvements.",
    icon: Droplets,
  },
  {
    title: "General Plumbing",
    text: "Reliable plumbing repairs, bathroom work and day-to-day plumbing maintenance.",
    icon: Phone,
  },
];

const installPoints = [
  "Boiler replacements",
  "Combi boiler installations",
  "System boiler installations",
  "Regular boiler installations",
  "Wireless thermostat upgrades",
  "Magnetic filter installation",
  "Full chemical flush / system cleanse",
  "Heating system rebalance and optimisation",
];

const galleryItems = [
  { src: "/jobs/job-1.jpg", title: "Hot water cylinder repair" },
  { src: "/jobs/job-2.jpg", title: "Premium kitchen tap and sink install" },
  { src: "/jobs/job-3.jpg", title: "Sink and tap installation" },
  { src: "/jobs/job-4.jpg", title: "Copper pipework installation" },
  { src: "/jobs/job-5.jpg", title: "Radiator installation" },
  { src: "/jobs/job-6.jpg", title: "Boiler internal repair work" },
  { src: "/jobs/job-7.jpg", title: "Gas hob installation" },
  { src: "/jobs/job-8.jpg", title: "Boiler installation and copper pipework" },
  { src: "/jobs/job-9.jpg", title: "Boiler cupboard installation" },
  { src: "/jobs/job-10.jpg", title: "Boiler servicing and internal inspection" },
  { src: "/jobs/job-11.jpg", title: "Boiler fitted in cupboard" },
  { src: "/jobs/job-12.jpg", title: "Magnetic filter and pipework detail" },
];

const reviewItems = [
  {
    title: "Recommended on Facebook",
    text: "Customers can view ORKA Heating & Plumbing recommendations directly on our Facebook page.",
    meta: "Facebook recommendations",
  },
  {
    title: "Fast local response",
    text: "Trusted for quick replies, tidy work and getting urgent heating issues sorted quickly.",
    meta: "Facebook page feedback",
  },
  {
    title: "Professional installs",
    text: "Strong feedback around reliability, communication and quality boiler installation work.",
    meta: "Facebook page feedback",
  },
];

const areas = [
  "Newcastle",
  "North Tyneside",
  "Gateshead",
  "North Shields",
  "Wallsend",
  "Whitley Bay",
  "Tynemouth",
  "South Shields",
  "Hebburn",
  "Jarrow",
];

export default function App() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
    } catch {
      alert("Something went wrong. Please call instead.");
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-red-500/30">
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full border border-white/15 bg-green-500 px-5 py-3 font-bold text-white shadow-2xl transition hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp Now
        </a>
        <a
          href="tel:07354764651"
          className="flex items-center gap-3 rounded-full border border-white/15 bg-white px-5 py-3 font-bold text-black shadow-2xl transition hover:scale-105 md:hidden"
        >
          <Phone className="h-5 w-5" /> Call Now
        </a>
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              alt="ORKA Heating and Plumbing logo"
              className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/10"
            />
            <div>
              <div className="text-lg font-black tracking-[0.22em] sm:text-xl">
                ORKA HEATING & PLUMBING
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-red-500 sm:text-xs">
                In Warmth We Trust
              </div>
            </div>
          </div>

         <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-[0.2em]">

  <a href="#services" className="hover:text-blue-400 transition">Services</a>

  <div className="relative group">
    <button
      type="button"
      className="hover:text-blue-400 transition flex items-center gap-2"
    >
      More Services <span>▾</span>
    </button>

   <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 min-w-[240px] rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl">
      <a href="#services" className="block rounded-lg px-3 py-2 hover:bg-white/10">Boiler Installations</a>
      <a href="#services" className="block rounded-lg px-3 py-2 hover:bg-white/10">Boiler Repairs</a>
      <a href="#services" className="block rounded-lg px-3 py-2 hover:bg-white/10">Boiler Servicing</a>
      <a href="#services" className="block rounded-lg px-3 py-2 hover:bg-white/10">Central Heating Work</a>
      <a href="#services" className="block rounded-lg px-3 py-2 hover:bg-white/10">General Plumbing</a>
      <a href="#contact" className="block rounded-lg px-3 py-2 hover:bg-white/10">Emergency Call Outs</a>
    </div>
  </div>

  <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
  <a href="#reviews" className="hover:text-blue-400 transition">Reviews</a>
  <a href="#contact" className="hover:text-blue-400 transition">Contact</a>

</nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200">
              <Clock3 className="h-4 w-4" /> 24/7 emergency call outs across the North East
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Emergency boiler help and premium installations <span className="text-red-500">done properly.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              ORKA Heating & Plumbing specialises in all aspects of boiler installations, boiler replacements,
              repairs, servicing and heating work. From emergency call outs to full system upgrades, every job
              is carried out with speed, care and professional pride.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:07354764651"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-bold text-black transition hover:scale-105"
              >
                <Phone className="h-5 w-5" /> Emergency Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-3.5 font-bold text-white transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold transition hover:border-white/30 hover:bg-white hover:text-black"
              >
                Get a Free Quote
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-white/72 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">Gas Safe Registered No. 977946</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">Boiler installation specialists</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">Fast local emergency response</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40">
            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-red-500/20 via-black to-blue-500/20 p-8">
              <img
                src="/logo.jpg"
                alt="ORKA logo"
                className="mx-auto w-full max-w-md rounded-3xl border border-white/10 object-cover shadow-2xl"
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Boiler replacements",
                  "Combi / system / regular installs",
                  "Breakdowns and no heating",
                  "Full heating system upgrades",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm font-medium text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.04]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 text-center text-sm font-medium text-white/70 md:grid-cols-4 md:text-left">
          <div>24/7 Emergency Call Outs</div>
          <div>Boiler Installation Specialists</div>
          <div>Gas Safe Registered No. 977946</div>
          <div>North East Coverage</div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mb-10 max-w-3xl">
          <div className="text-sm uppercase tracking-[0.3em] text-red-500">Services</div>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Built to win emergency work and installation jobs</h2>
          <p className="mt-4 leading-8 text-white/70">
            Clear service pages, stronger trust signals and sharper positioning make it easier for customers to choose ORKA quickly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-7 shadow-xl transition hover:-translate-y-1 hover:border-red-500/50"
              >
                <div className="inline-flex rounded-2xl bg-white/8 p-3 text-red-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="installs" className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1fr,1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.3em] text-blue-400">Boiler Installations</div>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Specialising in all aspects of boiler installations</h2>
            <p className="mt-5 leading-8 text-white/72">
              Whether you need a straightforward boiler swap or a full heating system upgrade, ORKA Heating & Plumbing
              provides a complete installation service built around performance, reliability and clean workmanship.
            </p>
            <p className="mt-4 leading-8 text-white/72">
              We install combi, system and regular boilers, carry out system cleansing, fit filters and controls,
              rebalance heating systems and make sure every installation is finished to a high standard.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-red-500/15 via-white/[0.03] to-blue-500/15 p-8 md:p-10">
            <h3 className="text-2xl font-black">What’s included in our boiler installation work</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {installPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white/80"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <a
            href="tel:07354764651"
            className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-red-500/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-red-400">Fastest contact</div>
                <div className="mt-2 text-2xl font-black">Call now</div>
              </div>
              <ChevronRight className="h-6 w-6 text-white/50 transition group-hover:translate-x-1" />
            </div>
            <p className="mt-3 text-white/68">Best for emergency call outs, no heating and urgent boiler breakdowns.</p>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-green-500/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-green-400">Instant leads</div>
                <div className="mt-2 text-2xl font-black">WhatsApp us</div>
              </div>
              <ChevronRight className="h-6 w-6 text-white/50 transition group-hover:translate-x-1" />
            </div>
            <p className="mt-3 text-white/68">Perfect for quick photos, fault messages and getting a fast reply.</p>
          </a>

          <a
            href="#contact"
            className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-blue-400">Quote requests</div>
                <div className="mt-2 text-2xl font-black">Use the form</div>
              </div>
              <ChevronRight className="h-6 w-6 text-white/50 transition group-hover:translate-x-1" />
            </div>
            <p className="mt-3 text-white/68">Best for boiler installs, planned work and bigger jobs needing a quote.</p>
          </a>
        </div>

        <div className="mb-6 rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-blue-500/10 via-white/[0.03] to-red-500/10 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-blue-400">Gas Safe Registered</div>
              <h3 className="mt-2 text-2xl font-black">Registered business number 977946</h3>
              <p className="mt-2 max-w-2xl text-white/70">
                Customers can verify ORKA Heating & Plumbing on the official Gas Safe Register using our registration number.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-blue-400/30 bg-blue-400/10 px-5 py-4 text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-blue-300">Gas Safe</div>
                <div className="mt-1 text-lg font-black text-white">977946</div>
              </div>
              <a
                href="https://www.gassaferegister.co.uk/find-an-engineer-or-check-the-register/check-a-business/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white hover:text-black"
              >
                Check the Register
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Emergency response",
              text: "No heating, no hot water or a breakdown? We prioritise urgent call outs and fast contact.",
            },
            {
              title: "Professional presentation",
              text: "Premium branding, strong trust signals and a cleaner site help customers feel confident before they even call.",
            },
            {
              title: "Built for conversions",
              text: "Clear calls to action, specialist positioning and a simple quote form turn visits into real leads.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/68">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="areas" className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-blue-400">Areas We Cover</div>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Local coverage that helps you rank and convert</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/70">
              ORKA Heating & Plumbing covers the North East and surrounding areas for boiler installations,
              boiler repairs, servicing, plumbing work and emergency call outs.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/78"
            >
              <MapPin className="h-4 w-4 text-red-400" /> {area}
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-blue-400">Recent Work Photos</div>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">View our latest jobs and finished work</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              We regularly share photos of recent work, installs and completed jobs on our Facebook page.
            </p>
          </div>
          <a
            href="https://www.facebook.com/people/ORKA-Heating-and-Plumbing/61578329100877/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white hover:text-black"
          >
            View All Facebook Photos
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-3 shadow-xl transition hover:-translate-y-1 hover:border-blue-400/50"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/10">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="px-2 pb-1 pt-4">
                <div className="text-base font-bold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-red-500">Facebook Reviews</div>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Social proof that helps close jobs</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              ORKA Heating & Plumbing is listed on Facebook with recommendations enabled,
              so customers can see public feedback and contact us directly.
            </p>
          </div>
          <a
            href="https://www.facebook.com/people/ORKA-Heating-and-Plumbing/61578329100877/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white hover:text-black"
          >
            Read Reviews on Facebook
          </a>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <div className="text-sm uppercase tracking-[0.25em] text-white/45">Facebook Page</div>
            <div className="mt-3 text-3xl font-black">108 likes</div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <div className="text-sm uppercase tracking-[0.25em] text-white/45">Recommendation Rate</div>
            <div className="mt-3 text-3xl font-black">100%</div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <div className="text-sm uppercase tracking-[0.25em] text-white/45">Visible Reviews</div>
            <div className="mt-3 text-3xl font-black">7 reviews</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviewItems.map((review) => (
            <div key={review.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-xl">
              <div className="flex gap-1 text-red-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <h3 className="mt-4 text-xl font-black">{review.title}</h3>
              <p className="mt-3 leading-7 text-white/72">{review.text}</p>
              <div className="mt-5 text-sm font-semibold text-white/50">{review.meta}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="seo" className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="text-sm uppercase tracking-[0.3em] text-red-500">Local SEO</div>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Built to help ORKA get found locally</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="leading-8 text-white/70">
                This website is structured around the phrases local customers search for most:
                boiler installation, boiler repair, boiler servicing, emergency plumber,
                emergency heating engineer and emergency call outs in the North East.
              </p>
              <p className="mt-4 leading-8 text-white/70">
                To push rankings harder, connect this site to your Google Business Profile,
                keep adding real job photos, collect more reviews and create area-based pages later.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Google Business Profile linked",
                "Real job gallery added",
                "Facebook reviews linked",
                "Gas Safe trust signals added",
                "Area coverage section added",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white/80">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-red-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-red-500/20 via-black to-blue-500/20 p-8 shadow-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-red-500">Get in touch</div>
              <h2 className="mt-3 text-4xl font-black">Need an emergency call out or boiler quote?</h2>
              <p className="mt-4 leading-8 text-white/72">
                Call now for urgent issues, or send your details for a fast quote. This page is built
                to make contacting ORKA quick and easy.
              </p>
              <div className="mt-6 space-y-4 text-white/80">
                <a href="tel:07354764651" className="flex items-center gap-3 text-lg font-bold hover:text-white">
                  <Phone className="h-5 w-5 text-red-400" /> 07354 764651
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-lg font-bold hover:text-white"
                >
                  <MessageCircle className="h-5 w-5 text-green-400" /> WhatsApp ORKA
                </a>
                <div className="flex items-center gap-3 text-lg font-bold">
                  <ShieldCheck className="h-5 w-5 text-blue-400" /> Gas Safe Registered No. 977946
                </div>
                <div className="flex items-center gap-3 text-lg font-bold">
                  <Clock3 className="h-5 w-5 text-red-400" /> 24/7 emergency call out availability
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/45 p-6 md:p-7">
              <h3 className="text-2xl font-black">Get a free quote</h3>

              {submitted ? (
                <p className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-4 font-bold text-green-400">
                  Enquiry sent. We’ll be in touch shortly.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    required
                    placeholder="Name"
                    value={form.name}
                    className="w-full rounded-2xl border border-white/15 bg-black px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-red-500"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    required
                    placeholder="Phone"
                    value={form.phone}
                    className="w-full rounded-2xl border border-white/15 bg-black px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-red-500"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <textarea
                    required
                    placeholder="Tell us what you need"
                    value={form.message}
                    rows={5}
                    className="w-full rounded-2xl border border-white/15 bg-black px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-red-500"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  <button className="w-full rounded-2xl bg-gradient-to-r from-red-500 to-blue-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-red-500/20 transition hover:scale-[1.02]">
                    Send Enquiry
                  </button>
                </form>
              )}

              <p className="mt-4 text-sm text-white/50">
                Before going live: replace <span className="font-semibold text-white">your-form-id</span> with your real Formspree ID.
              </p>
              <p className="mt-2 text-sm text-white/50">
                Turn on Formspree email notifications and autoresponder to get instant lead alerts and automatic reply messages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
