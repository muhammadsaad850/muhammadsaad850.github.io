import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-body">
        <div className="contact-info">
          <p className="contact-item">
            📧 <a href="mailto:muhammad.saad850@gmail.com">muhammad.saad850@gmail.com</a>
          </p>
          <p className="contact-item">
            📞 <a href="tel:+15154786138">+1 (515) 478-6138</a>
          </p>
        </div>
        <a href="mailto:muhammad.saad850@gmail.com" className="contact-cta">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Contact;
