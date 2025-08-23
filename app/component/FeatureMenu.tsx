import { Truck, Clock, Utensils } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-10 h-10 text-red-600" />,
    title: "Fast Delivery",
    desc: "Get your pizza hot and fresh, straight to your door.",
  },
  {
    icon: <Clock className="w-10 h-10 text-red-600" />,
    title: "Always Fresh",
    desc: "Our pizzas are made with the finest ingredients daily.",
  },
  {
    icon: <Utensils className="w-10 h-10 text-red-600" />,
    title: "Delicious Taste",
    desc: "Taste the difference with our secret recipe sauces.",
  },
];

export default function Features() {
  return (
    <section className="py-6 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
