"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav wrap">
      <a className="brand" href="#top" aria-label="Sivabalan, home">SIVABALAN<span>.</span></a>
      <button className="menu" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={16} /> : <Menu size={16} />}
      </button>
      <nav className={isOpen ? "open" : ""} aria-label="Main navigation">
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a className="nav-cta" href="#contact" onClick={() => setIsOpen(false)}>Let&apos;s talk <ArrowUpRight size={13} /></a>
      </nav>
    </header>
  );
}
