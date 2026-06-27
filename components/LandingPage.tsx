"use client";

import { useEffect, useState } from "react";
import { getContent, type Lang } from "@/lib/content";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Director from "@/components/sections/Director";
import Services from "@/components/sections/Services";
import Destinations from "@/components/sections/Destinations";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Partners from "@/components/sections/Partners";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingWhatsapp from "@/components/sections/FloatingWhatsapp";

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("fr");
  const [menuOpen, setMenuOpen] = useState(false);

  // Hydrate the saved language preference (matches the prototype's localStorage behavior).
  useEffect(() => {
    try {
      const saved = localStorage.getItem("f10_lang");
      if (saved === "fr" || saved === "en") setLang(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "fr" ? "en" : "fr";
    try {
      localStorage.setItem("f10_lang", next);
    } catch {
      /* ignore */
    }
    setLang(next);
  };

  const {
    c,
    nav,
    stats,
    serv1,
    serv2,
    serv3,
    destinations,
    steps,
    advantages,
    partnersInt,
    partnersExt,
    testimonials,
    faq,
    aboutBullets,
  } = getContent(lang);

  return (
    <div style={{ overflowX: "clip" }}>
      <Header
        nav={nav}
        c={c}
        langBtn={lang === "fr" ? "EN" : "FR"}
        onToggleLang={toggleLang}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <Hero c={c} />
      <Stats stats={stats} />
      <About c={c} aboutBullets={aboutBullets} />
      <Director c={c} />
      <Services c={c} serv1={serv1} serv2={serv2} serv3={serv3} />
      <Destinations c={c} destinations={destinations} />
      <Process c={c} steps={steps} />
      <WhyUs c={c} advantages={advantages} />
      <Partners
        c={c}
        partnersInt={partnersInt}
        partnersExt={partnersExt}
        testimonials={testimonials}
      />
      <Faq c={c} faq={faq} />
      <Contact c={c} destinations={destinations} lang={lang} />
      <Footer c={c} nav={nav} />
      <FloatingWhatsapp />
    </div>
  );
}
