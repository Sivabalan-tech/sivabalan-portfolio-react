"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "MCA · Generative AI",
    school: "SRM Institute of Science and Technology · Tamil Nadu",
    dates: "2024 – 2026",
    result: "CGPA 9.6",
  },
  {
    degree: "B.Sc. · Computer Science",
    school: "Sri Ramakrishna Mission Vidyalaya · Tamil Nadu",
    dates: "2021 – 2024",
    result: "CGPA 7.4",
  },
];

const certifications = [
  ["Google AI/ML Virtual Internship", "AICTE"],
  ["Python Full Stack Developer Virtual Internship", "Eduskills"],
  ["Power BI Workshop", "Data visualization & dashboard development"],
  ["IoT Workshop", "Applications, sensor integration & device connectivity"],
];

export default function Credentials() {
  return (
    <motion.section
      className="credentials section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      aria-labelledby="credentials-title"
    >
      <div className="credentials-inner wrap">
        <div className="credentials-intro">
          <p className="section-label">02 / Education & credentials</p>
          <h2 id="credentials-title">Always learning.<br /><em>Always building.</em></h2>
        </div>
        <div className="credentials-content">
          <div>
            <p className="credential-heading">Education</p>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-item" key={item.degree}>
                  <div className="education-topline">
                    <h3>{item.degree}</h3>
                    <span>{item.result}</span>
                  </div>
                  <p>{item.school}</p>
                  <span className="education-dates">{item.dates}</span>
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="credential-heading">Selected certifications</p>
            <ul className="certification-list">
              {certifications.map(([name, issuer]) => (
                <li key={name}>
                  <span>{name}</span>
                  <small>{issuer}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
