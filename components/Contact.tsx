"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, AtSign } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailtoLink = `mailto:ssivabalan174@gmail.com?subject=${encodeURIComponent(
      `Portfolio enquiry from ${formData.name}`,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <motion.div className="contact-copy" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
            <p className="section-label">05 / Let&apos;s connect</p>
            <h2>Let&apos;s build what&apos;s<br /><em>next.</em></h2>
            <p>Have a project, opportunity, or question? Send a message and I&apos;ll get back to you.</p>
            <a className="contact-email" href="mailto:ssivabalan174@gmail.com">ssivabalan174@gmail.com <ArrowUpRight size={14} /></a>
            <div className="contact-links">
              <a href="https://github.com/Sivabalan-tech" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
            <a className="linkedin-feature" href="https://www.linkedin.com/in/sivabalan-dev/" target="_blank" rel="noopener noreferrer">
              <AtSign />
              <span><strong>Connect on LinkedIn</strong><small>linkedin.com/in/sivabalan-dev</small></span>
              <ArrowUpRight />
            </a>
          </motion.div>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 22, rotateX: 3 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ rotateX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{ transformPerspective: 1000 }}
          >
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" autoComplete="name" required placeholder="What should I call you?" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" required placeholder="Tell me a little about your project..." value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} />
            <button type="submit">Send message <ArrowUpRight /></button>
            <p className="form-note">Opens your email app with the message filled in. Press Send there to deliver it.</p>
          </motion.form>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sivabalan S</span>
          <span>Chennai, India</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
