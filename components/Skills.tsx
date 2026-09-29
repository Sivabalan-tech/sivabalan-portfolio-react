"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Bot, Braces, Code2, Database, Layers3, X } from "lucide-react";
import {
  siCss,
  siFastapi,
  siGithub,
  siGooglecolab,
  siHtml5,
  siJavascript,
  siKeras,
  siMysql,
  siOpenjdk,
  siPython,
  siTailwindcss,
  siTensorflow,
  type SimpleIcon,
} from "simple-icons";

type Skill = { name: string; brand?: SimpleIcon; icon?: typeof Code2 };

const groups = [
  { number: "01", title: "Languages", icon: Code2, skills: [{ name: "Python", brand: siPython }, { name: "Java", brand: siOpenjdk }, { name: "SQL", icon: Database }] },
  { number: "02", title: "Web", icon: Layers3, skills: [{ name: "HTML5", brand: siHtml5 }, { name: "CSS", brand: siCss }, { name: "JavaScript", brand: siJavascript }, { name: "Tailwind CSS", brand: siTailwindcss }, { name: "FastAPI", brand: siFastapi }, { name: "REST APIs", icon: Layers3 }, { name: "JWT Authentication", icon: Braces }] },
  { number: "03", title: "AI & Data", icon: Bot, skills: [{ name: "Generative AI", icon: Bot }, { name: "NLP", icon: Braces }, { name: "RAG", icon: Layers3 }, { name: "FAISS", icon: Database }, { name: "Deep Learning", icon: Bot }, { name: "TensorFlow", brand: siTensorflow }, { name: "Keras", brand: siKeras }] },
  { number: "04", title: "Tools", icon: Database, skills: [{ name: "MySQL", brand: siMysql }, { name: "GitHub", brand: siGithub }, { name: "Power BI", icon: Layers3 }, { name: "Excel", icon: Code2 }, { name: "Google Colab", brand: siGooglecolab }] },
  { number: "05", title: "Core Concepts", icon: Braces, skills: [{ name: "OOP", icon: Braces }, { name: "Data Structures", icon: Database }, { name: "API Integration", icon: Layers3 }, { name: "Database Management", icon: Database }] },
];

export default function Skills() {
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const restoreFocusTo = useRef(0);
  const dialogWasOpen = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (selectedGroup === null) {
      if (dialogWasOpen.current) {
        triggerRefs.current[restoreFocusTo.current]?.focus();
        dialogWasOpen.current = false;
      }
      return;
    }

    dialogWasOpen.current = true;
    dialogRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedGroup(null);
        return;
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button:not(:disabled), a[href], [tabindex]:not([tabindex='-1'])");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedGroup]);

  return (
    <section id="skills" className="skills wrap section">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
        <p className="section-label">04 / Skills</p>
        <div className="skills-head">
          <h2>Technical<br /><em>skills.</em></h2>
          <p>Languages, frameworks, AI methods, and core concepts from my day-to-day practice.</p>
        </div>
      </motion.div>
      <div className="skill-explorer">
        <div className="skill-tabs" role="group" aria-label="Skill categories">
          {groups.map(({ number, title, icon: Icon }, index) => (
            <button
              key={number}
              type="button"
              className="skill-tab"
              ref={(element) => { triggerRefs.current[index] = element; }}
              aria-haspopup="dialog"
              onClick={() => {
                restoreFocusTo.current = index;
                setSelectedGroup(index);
              }}
            >
              <Icon aria-hidden="true" />
              <span>{title}</span>
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedGroup !== null && (() => {
          const selected = groups[selectedGroup];
          const SelectedIcon = selected.icon;
          return (
            <motion.div
              className="skill-modal-backdrop"
              key="skill-dialog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setSelectedGroup(null);
              }}
            >
              <motion.section
                className="skill-modal"
                id="skill-detail"
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="skill-modal-title"
                tabIndex={-1}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
              >
                <div className="skill-modal-head">
                  <div className="skill-detail-heading">
                    <SelectedIcon aria-hidden="true" />
                    <div><span>{selected.number} / SKILL SET</span><h3 id="skill-modal-title">{selected.title}</h3></div>
                  </div>
                  <button className="skill-modal-close" type="button" aria-label="Close skills dialog" onClick={() => setSelectedGroup(null)}><X /></button>
                </div>
                <ul className="skill-items">
                  {selected.skills.map((skill: Skill) => (
                    <li key={skill.name}>
                      {skill.brand ? (
                        <svg viewBox="0 0 24 24" role="img" aria-label={`${skill.name} logo`} style={{ color: ["000000", "181717"].includes(skill.brand.hex) ? "#f1f0e6" : `#${skill.brand.hex}` }}><path fill="currentColor" d={skill.brand.path} /></svg>
                      ) : skill.icon ? (
                        <skill.icon aria-hidden="true" />
                      ) : null}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
