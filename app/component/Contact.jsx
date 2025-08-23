export default function Contact() {
  return (
    <section id="contact" className="py-6 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>
          <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-500 transition">
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">Visit Us</p>
          <p className="text-gray-600">📍 123 Pizza Street, Lagos, Nigeria</p>
          <p className="text-gray-600">📞 +234 800 123 4567</p>
          <p>📧 hello@pizzaheaven.com</p>
        </div>
      </div>
    </section>
  );
}
