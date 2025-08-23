
export default function About() {
  return (
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-6">
          At <span className="font-bold text-red-600">PizzaHeaven</span>, we’ve
          been serving fresh and delicious pizzas made with love for over a
          decade. Our chefs use the finest ingredients to bring you the
          authentic taste of Italy right to your doorstep.
        </p>
        <img
          src="/img/friends-eating-pizza-together-home_53876-32984.jpg"
          alt="Our Restaurant"
          className="rounded-xl shadow-lg mx-auto"
        />
      </div>
    </section>
  );
}
