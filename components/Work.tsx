"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    type: "AI HEALTHCARE PLATFORM",
    title: "NeuraPulse AI",
    description: "Intelligent healthcare assistant using RAG, wellness forecasting, and vision analysis for contextual health guidance.",
    link: "https://github.com/Sivabalan-tech/NeuraPulse",
    chips: ["Python", "Gemini API", "FAISS", "NLP"],
    artClass: "health-art",
  },
  {
    id: "02",
    type: "FULL-STACK EDTECH",
    title: "Study Buddy",
    description: "Turns study materials into personalized quizzes, coding tasks, and communication practice, with AI feedback, progress tracking, and teacher analytics.",
    link: "https://github.com/Sivabalan-tech/SRM-Study-Buddy",
    chips: ["FastAPI", "JavaScript", "Tailwind", "SQL"],
    artClass: "study-art",
  },
  {
    id: "03",
    type: "WEB DEVELOPMENT",
    title: "SSM Interiors",
    description: "A dynamic business site designed for clear brand communication and an engaging customer experience.",
    link: "https://github.com/Sivabalan-tech/SSM-Interiors",
    chips: ["HTML", "CSS", "JavaScript"],
    artClass: "interior-art",
  },
];

export default function Work() {
  return (
    <section id="work" className="work section">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
          <p className="section-label">03 / Selected work</p>
          <h2>Ideas, engineered.</h2>
        </motion.div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project"
              initial={{ opacity: 0, y: 32, rotateX: 3 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -6, rotateX: 1.2, rotateY: index % 2 === 0 ? -1.2 : 1.2 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
              style={{ transformPerspective: 1000 }}
            >
              <div className="project-no">{project.id}</div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  View repository <ArrowUpRight size={13} />
                </a>
                <div className="chips">{project.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
              </div>
              <div className={`project-art ${project.artClass}`} aria-hidden="true">
                {project.artClass === "health-art" && <><div className="pulse" /><div className="scan" /></>}
                {project.artClass === "study-art" && <><div className="code-lines"><i /><i /><i /><i /></div><div className="progress-ring">82%</div></>}
                {project.artClass === "interior-art" && <><div /><i /><b /></>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
