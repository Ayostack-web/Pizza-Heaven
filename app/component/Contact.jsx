const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2>Contact Us</h2>

      <p>📍 123 Pizza Street, Food City</p>
      <p>📞 (123) 456-7890</p>
      <p>📧 hello@pizzaheaven.com</p>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
