type PizzaProps = {
  name: string;
  price: number;
  image: string;
};

export default function PizzaCard({ name, price, image }: PizzaProps) {
  return (
    <div className="bg-blue-50 rounded-xl shadow hover:shadow-2xl transition overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-red-600 font-bold mb-3">${price.toFixed(2)}</p>
        <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
