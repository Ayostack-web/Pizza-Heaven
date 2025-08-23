
 export default function Gallery (){
  return (
    <section id="gallery" className="py-6 bg-blue-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🍕 Our <span className="text-red-600">Gallery</span>
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/img/pizza-is-being-baked-wood-fired-oven_24640-81741.jpg"
              alt="Pizza Making"
              className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/img/delicious-pizza-with-lots-filling-wooden-table_496782-79.jpg"
              alt="Cheesy Pizza"
              className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/img/chef-kitchen-prepares-pizza_1157-21841.jpg"
              alt="Wood Fired Oven"
              className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


