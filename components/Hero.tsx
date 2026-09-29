"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";

const PortfolioScene = dynamic(() => import("./PortfolioScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy wrap"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow"><i /> AI ENGINEER <span>·</span> FULL-STACK DEVELOPER</p>
        <h1 id="hero-title">I build AI<br />people can <em>use.</em></h1>
        <p className="lede">
          I&apos;m Sivabalan, a software developer shaping practical AI products
          and reliable full-stack systems, from retrieval pipelines to the
          interfaces people use every day.
        </p>
        <div className="actions">
          <a className="button primary" href="#work">Selected work <ArrowDownRight /></a>
          <a className="button resume" href="/Sivabalan-Resume.pdf" download="Sivabalan-Resume.pdf">
            Resume <Download />
          </a>
        </div>
        <a className="hero-social" href="https://www.linkedin.com/in/sivabalan-dev/" target="_blank" rel="noopener noreferrer">
          Find me on LinkedIn <ArrowUpRight />
        </a>
        <div className="hero-meta">
          <span>Python · FastAPI</span>
          <span>Gen AI · RAG</span>
          <span>Chennai · India</span>
        </div>
      </motion.div>
      <PortfolioScene />
      <div className="scroll-cue"><i /> Scroll to explore</div>
    </section>
  );
}
