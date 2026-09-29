"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    type: "AI HEALTHCARE PLATFORM",
    title: "NeuraPulse AI",
    description: "Intelligent healthcare assistant using RAG, wellness forecasting, and vision analysis for contextual health guidance.",
    link: "https://github.com/Sivabalan-tech/NeuraPulse",
    chips: ["Python", "Gemini API", "FAISS", "NLP"],
    image: "/assets/neurapulse-dashboard.png",
    imageAlt: "Healthcare dashboard with ECG, vital signs, scan imagery, and wellness charts",
  },
  {
    id: "02",
    type: "FULL-STACK EDTECH",
    title: "Study Buddy",
    description: "Turns study materials into personalized quizzes, coding tasks, and communication practice, with AI feedback, progress tracking, and teacher analytics.",
    link: "https://github.com/Sivabalan-tech/SRM-Study-Buddy",
    chips: ["FastAPI", "JavaScript", "Tailwind", "SQL"],
    image: "/assets/study-buddy-dashboard.png",
    imageAlt: "Study platform dashboard with a code editor, quiz progress, and learning analytics",
  },
  {
    id: "03",
    type: "WEB DEVELOPMENT",
    title: "SSM Interiors",
    description: "A dynamic business site designed for clear brand communication and an engaging customer experience.",
    link: "https://github.com/Sivabalan-tech/SSM-Interiors",
    chips: ["HTML", "CSS", "JavaScript"],
    image: "/assets/ssm-interiors-living-room.png",
    imageAlt: "Contemporary living room interior with natural wood, stone, and tailored furniture",
  },
];

export default function Work() {
  return (
    <section id="work" className="work section">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
          <p className="section-label">03 / Projects</p>
          <h2>Projects.</h2>
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
              <div className="project-art">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 680px) calc(100vw - 72px), (max-width: 900px) 175px, 230px" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
