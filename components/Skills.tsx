"use client";

import { motion } from "framer-motion";
import { Bot, Braces, Code2, Database, Layers3 } from "lucide-react";

const groups = [
  { number: "01", title: "Languages", detail: "Python · Java · SQL", icon: Code2 },
  { number: "02", title: "Web", detail: "HTML5 · CSS3 · JavaScript · Tailwind CSS · FastAPI · REST APIs · JWT Authentication", icon: Layers3 },
  { number: "03", title: "AI & Data", detail: "Generative AI · NLP · RAG · FAISS · Deep Learning · TensorFlow · Keras", icon: Bot },
  { number: "04", title: "Tools", detail: "MySQL · Git/GitHub · Power BI · Excel · Google Colab", icon: Database },
  { number: "05", title: "Core Concepts", detail: "OOP · Data Structures · API Integration · Database Management", icon: Braces },
];

export default function Skills() {
  return (
    <section id="skills" className="skills wrap section">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
        <p className="section-label">04 / Skills</p>
        <div className="skills-head">
          <h2>Technical<br /><em>skills.</em></h2>
          <p>Languages, frameworks, AI methods, and core concepts from my day-to-day practice.</p>
        </div>
      </motion.div>
      <div className="skill-grid">
        {groups.map(({ number, title, detail, icon: Icon }, index) => (
          <motion.article
            key={number}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
            style={{ transformPerspective: 700 }}
          >
            <div className="skill-card-top"><Icon /><span>{number}</span></div>
            <h3>{title}</h3>
            <p>{detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
