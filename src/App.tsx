import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Home, 
  Palette, 
  Layers, 
  Quote, 
  CheckCircle2, 
  Send,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Section = ({ children, className = "", id = "", dark = false }: { children: React.ReactNode, className?: string, id?: string, dark?: boolean }) => (
  <section id={id} className={`relative py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    {dark && (
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    )}
    <div className="relative z-10">
      {children}
    </div>
  </section>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/916392348664" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
    id="whatsapp-cta"
  >
    <Phone size={24} />
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#F5F5F0]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter text-[#1A1A1A] shrink-0">
          KAMAKHYA<span className="font-light italic text-[#1A1A1A]/60">.INT</span>
        </a>

        {/* Desktop & Tablet Nav */}
        <div className="hidden sm:flex items-center justify-end flex-1 ml-8 space-x-4 md:space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[9px] md:text-xs lg:text-sm font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-[#1A1A1A]/50 transition-all whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="sm:hidden text-[#1A1A1A] ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#F5F5F0] border-t border-[#1A1A1A]/5 py-8 px-6 flex flex-col space-y-6 sm:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium tracking-tight text-[#1A1A1A]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <Section className="relative min-h-screen flex items-center bg-[#F5F5F0] pt-32 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="z-10"
        >
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-4 text-[#1A1A1A]/40">
            Interior Design Studio • Lucknow
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#1A1A1A] leading-[1.1] mb-8 tracking-tighter">
            Luxury Interiors <br /> 
            <span className="italic font-serif font-light text-[#1A1A1A]/80">That Reflect You.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#333] max-w-lg mb-10 leading-relaxed font-serif italic">
            Bespoke residential and commercial design solutions crafted with Zen-like precision and meaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact"
              className="bg-[#1A1A1A] text-[#F5F5F0] px-10 sm:px-12 py-5 sm:py-6 font-bold uppercase tracking-widest text-xs sm:text-sm hover:scale-105 transition-transform duration-300 text-center"
            >
              Book Free Consultation
            </a>
            <a 
              href="#portfolio"
              className="flex items-center gap-3 text-[#1A1A1A] font-bold uppercase tracking-widest text-xs sm:text-base border-b-2 border-[#1A1A1A]/20 pb-2 cursor-pointer hover:border-[#1A1A1A] transition-all w-fit"
            >
              View Our Work <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[400px] sm:h-[600px] rounded-sm overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Flagship Project" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-[#F5F5F0]/90 backdrop-blur-sm p-4 sm:p-6 max-w-[150px] sm:max-w-[200px]">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-2">Flagship Project</p>
            <p className="text-xs sm:text-sm font-serif italic">Modern Minimalist Apartment in Gomti Nagar</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const SocialProof = () => {
  const testimonials = [
    {
      name: "Anjali Sharma",
      role: "Homeowner",
      content: "Kamakhya transformed our 3BHK into a serene oasis. The attention to detail is unmatched in Lucknow.",
    },
    {
      name: "Rohan Varma",
      role: "Restaurateur",
      content: "Drashti's vision for our café was exactly what we needed—functional yet incredibly aesthetic.",
    }
  ];

  return (
    <Section className="bg-[#1A1A1A] text-[#F5F5F0] !py-20" id="testimonials" dark>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Kind Words</h2>
          <p className="text-[#F5F5F0]/60 font-serif italic text-sm sm:text-base">Building trust through meaningful designs and happy spaces.</p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border-l border-[#F5F5F0]/20 pl-6 sm:pl-8 py-4">
              <Quote className="text-[#F5F5F0]/20 mb-4" size={28} />
              <p className="text-base sm:text-lg mb-6 leading-relaxed italic font-serif">"{t.content}"</p>
              <div>
                <p className="font-bold uppercase tracking-widest text-[10px] sm:text-xs">{t.name}</p>
                <p className="text-[9px] text-[#F5F5F0]/40 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const allServices = [
    { 
      title: "Turnkey Project", 
      desc: "Complete end-to-end design and execution. We handle every detail from concept to move-in day.",
      icon: <Layers className="mb-6" size={40} strokeWidth={1} />,
      color: "bg-[#EAEAE2]"
    },
    { 
      title: "Modular Kitchen", 
      desc: "High-end functional kitchens starting at ₹1,550/sq ft. Combining durability with stunning Japanese minimalism.",
      icon: <Palette className="mb-6" size={40} strokeWidth={1} />,
      color: "bg-[#E2E6EA]"
    },
    { 
      title: "Full Interior (2/3 BHK)", 
      desc: "Comprehensive home transformations focusing on spatial harmony, light play, and bespoke craftsmanship.",
      icon: <Home className="mb-6" size={40} strokeWidth={1} />,
      color: "bg-[#F0EEEB]"
    },
    { 
      title: "Residential Project", 
      desc: "Custom designs for bungalows and independent houses that prioritize comfort and architectural integrity.",
      icon: <Home className="mb-6" size={40} strokeWidth={1} />,
      color: "bg-[#EAEAE2]"
    },
    { 
      title: "Commercial Project", 
      desc: "Strategic workspace designs that foster productivity and reflect your brand's unique identity.",
      icon: <Layers className="mb-6" size={40} strokeWidth={1} />,
      color: "bg-[#E2E6EA]"
    }
  ];

  const displayedServices = showAllServices ? allServices : allServices.slice(0, 3);

  return (
    <Section className="bg-[#F5F5F0]" id="services">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-4 gap-6">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#1A1A1A]/40 mb-4 block">Our Expertise</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-tighter">Bespoke Design Services</h2>
        </div>
        <button 
          onClick={() => setShowAllServices(!showAllServices)}
          className="border-b-2 border-[#1A1A1A] pb-1 font-bold uppercase tracking-widest text-xs hover:tracking-[0.2em] transition-all cursor-pointer whitespace-nowrap"
        >
          {showAllServices ? "Show Less" : "View More Services"}
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {displayedServices.map((s, idx) => (
            <motion.div 
              key={s.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-10 md:p-12 ${s.color} border border-[#1A1A1A]/5 flex flex-col justify-between group cursor-default transition-all duration-500`}
            >
              <div>
                {s.icon}
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{s.title}</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed font-serif italic mb-8">{s.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] group-hover:gap-4 transition-all">
                Learn More <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { title: "Turnkey Project", type: "Full Execution", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000" },
    { title: "Modular Kitchen", type: "L-Shaped Modern", img: "https://images.unsplash.com/photo-1556911220-e15204da40be?auto=format&fit=crop&q=80&w=1000" },
    { title: "Full Interior 3 BHK", type: "Luxury Living", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000" },
    { title: "Residential Project", type: "Bespoke Home", img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000" },
    { title: "Commercial Project", type: "Modern Works", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" },
    { title: "2 BHK Zen Space", type: "Minimalist Living", img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=1000" },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <Section className="bg-[#F5F5F0] !pt-0" id="portfolio">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-4 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#1A1A1A]/40 mb-4 block">Selection</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Curated Portfolio</h2>
        </div>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="border-b-2 border-[#1A1A1A] pb-1 font-bold uppercase tracking-widest text-xs hover:tracking-[0.2em] transition-all cursor-pointer whitespace-nowrap"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((p, idx) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              layout
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 mt-1">{p.type}</p>
                </div>
                <div className="w-10 h-10 border border-[#1A1A1A]/10 rounded-full flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-[#F5F5F0] transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Consultation", desc: "Understanding your vision, lifestyle, and aesthetic needs." },
    { num: "02", title: "Planning & Design", desc: "Crafting blueprints, moodboards, and detailed 3D renders." },
    { num: "03", title: "Execution", desc: "Bringing the design to life with expert craftsmen and oversight." },
    { num: "04", title: "Final Reveal", desc: "The moment your space officially becomes your home." },
  ];

  return (
    <Section className="bg-[#1A1A1A] text-[#F5F5F0]" id="process" dark>
      <div className="max-w-7xl mx-auto mb-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Journey Together</h2>
        <p className="text-[#F5F5F0]/50 font-serif italic">Transparent steps from a dream to reality.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="p-8 border border-[#F5F5F0]/10 hover:border-[#F5F5F0]/30 transition-colors">
            <span className="block text-5xl font-bold text-[#F5F5F0]/10 mb-6 font-serif">{step.num}</span>
            <h3 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h3>
            <p className="text-sm text-[#F5F5F0]/60 font-serif italic leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const About = () => {
  return (
    <Section className="bg-[#F5F5F0]" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto">
             <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000" 
              alt="Drashti Mishra" 
              className="w-full h-full object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-[#1A1A1A] text-[#F5F5F0] p-6 sm:p-10 hidden sm:block">
              <p className="text-2xl sm:text-3xl font-bold mb-1">10+</p>
              <p className="text-[10px] uppercase tracking-[0.3em]">Years Experience</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#1A1A1A]/40 mb-6 block">Our Story</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#1A1A1A] mb-8">
            Crafting Living <br />
            <span className="italic font-serif font-light opacity-80">Works of Art.</span>
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-[#1A1A1A]/80 leading-relaxed font-serif">
              Founded by <span className="font-bold">Drashti Mishra</span>, Kamakhya Interior Designs is rooted in the philosophy of "Meaningful Living." We believe that a space should not only look beautiful but should also resonate with the soul of its inhabitant.
            </p>
            <p className="text-lg text-[#1A1A1A]/80 leading-relaxed font-serif">
              Based in the heart of Lucknow, we blend traditional craftsmanship with modern Japandi minimalism to create interiors that are timeless, quiet, and profoundly luxurious.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            {['Eco-friendly Materials', 'Handcrafted Accents', 'Spatial Harmony', 'Bespoke Furniture'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                <CheckCircle2 size={16} className="text-[#1A1A1A]/30 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section className="bg-[#1A1A1A] text-[#F5F5F0]" id="contact" dark>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#F5F5F0]/40 mb-6 block">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8 italic font-serif">
            Ready to transform <br /> your space?
          </h2>
          <p className="text-lg text-[#F5F5F0]/60 mb-12 font-serif italic max-w-sm">
            We are currently accepting new projects. Limited consultation slots available this month.
          </p>
          
          <div className="space-y-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F5F5F0]/40 mb-2">Location</p>
              <p className="text-lg sm:text-xl font-medium">Lucknow - 226023, Uttar Pradesh</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F5F5F0]/40 mb-2">Direct Contact</p>
              <p className="text-lg sm:text-xl font-medium">+91 6392348664</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F5F5F0]/40 mb-2">Email Address</p>
              <a href="mailto:Kamakhyainteriordesigns@gmail.com" className="text-lg sm:text-xl font-medium hover:text-[#F5F5F0]/70 transition-colors">Kamakhyainteriordesigns@gmail.com</a>
            </div>
          </div>

          <div className="flex gap-6 mt-16">
            <a href="https://www.instagram.com/kamakhyainteriordesigns" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-[#F5F5F0]/50 cursor-pointer transition-colors" />
            </a>
            <Facebook size={24} className="hover:text-[#F5F5F0]/50 cursor-pointer transition-colors" />
            <Twitter size={24} className="hover:text-[#F5F5F0]/50 cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="bg-[#F5F5F0] p-8 sm:p-12 text-[#1A1A1A] rounded-sm shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Book Your Consultation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#1A1A1A] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#1A1A1A] transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Phone Number</label>
                <input type="tel" placeholder="+91" className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#1A1A1A] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Project Type</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#1A1A1A] transition-colors appearance-none cursor-pointer">
                    <option>Modular Kitchen</option>
                    <option>Full Interior (2/3 BHK)</option>
                    <option>Turnkey Project</option>
                    <option>Residential Interior</option>
                    <option>Commercial Space</option>
                  </select>
                  <ChevronRight className="absolute right-0 top-1/2 -rotate-90 pointer-events-none opacity-20" size={14} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Your Vision / Message</label>
              <textarea rows={3} placeholder="Tell us about your dream space..." className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-[#1A1A1A] text-[#F5F5F0] py-5 font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:gap-6 transition-all rounded-sm shadow-lg">
              Confirm Consultation <Send size={14} />
            </button>
            <div className="bg-[#1A1A1A]/5 p-4 text-[10px] uppercase tracking-widest text-center font-bold border border-[#1A1A1A]/10">
              ✨ Free 30-minute design session
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F0] py-20 px-6 border-t border-[#1A1A1A]/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1A1A1A] mb-4">KAMAKHYA</h2>
          <p className="text-xs uppercase tracking-[0.5em] text-[#1A1A1A]/40">Interior Designs</p>
        </div>
        <div className="text-center md:text-right text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 font-medium">
          <p>© 2026 Kamakhya Interior Designs.</p>
          <p className="mt-2">Crafted by Drashti Mishra in Lucknow.</p>
        </div>
      </div>
    </footer>
  );
};

// --- App ---

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F0] selection:bg-[#1A1A1A] selection:text-[#F5F5F0]">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
