// "Contact me" section — name, email, and a message box, all POSTed
// to the backend (/api/messages), which saves them to MongoDB. View
// submitted messages later from the admin dashboard at /admin.
// (Name and email are optional on the backend, but collected here
// since a reply address is useful.)

import { useState } from "react";
import { sendMessage } from "../api/api.js";
import Reveal from "./Reveal.jsx";
import "./Contact.css";

const emptyForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.message.trim()) return;

    setStatus("sending");
    try {
      await sendMessage(form);
      setForm(emptyForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section container">
      <Reveal>
        <p className="section-eyebrow">Connect with me</p>
        <h2 className="section-title">Get in touch</h2>
        <p className="section-subtitle">
          I'd love to hear from you — questions, feedback, or just to say hi. Use the form below.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-row">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Submit now →"}
          </button>

          {status === "sent" && <p className="contact-status success">Thanks — your message was sent!</p>}
          {status === "error" && <p className="contact-status error">Something went wrong. Please try again.</p>}
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;
