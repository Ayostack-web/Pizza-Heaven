export default function Herovideo(){

  return (
    <section
      id="hero"
      className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/media/32415-360.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl text-shadow-amber-50 md:text-6xl font-bold mb-4">
       Welcome to Pizza Heaven
        </h1>
        <p className="text-lg md:text-xl mb-8 text-shadow-amber-50">
      Serving joy with every bite
        </p>
       
        <a
          href="#order"
          className="inline-block px-8 py-3 text-lg font-semibold text-black bg-gradient-to-tr from-orange-600 to-teal-100 rounded-full shadow-lg hover:from-orange-600 hover:to-white hover:-translate-y-1 transition"
        >
          Order Now
        </a>
      </div>
    </section>
  );
};




