"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  ["9.6", "MCA CGPA"],
  ["80+", "AI/ML training hours"],
  ["500+", "Health logs analyzed"],
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="about wrap section reveal"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
    >
      <div className="about-visual">
        <p className="section-label">01 / A little context</p>
        <div className="about-photo">
          <Image src="/assets/sivabalan.png" alt="Portrait of Sivabalan" width={360} height={460} sizes="180px" />
          <span>SIVABALAN · DEVELOPER</span>
        </div>
      </div>
      <div>
        <h2>Curious by nature.<br />Technical by <em>practice.</em></h2>
        <p>
          I build scalable backend systems, responsive web applications, and
          AI-powered tools. My work brings together Python, JavaScript, FastAPI,
          REST APIs, TensorFlow, Keras, and Retrieval-Augmented Generation.
        </p>
        <div className="stats">
          {stats.map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
