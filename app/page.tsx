

import Hero from './component/Hero';
import Header from './component/Header'
import About from './component/About'
import Order from './component/Order'
import Gallery from './component/Gallery'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Features from './component/FeatureMenu';
import PizzaCard from './component/PizzzaCard';
import Accordion from './component/accordion'
import Tobuy from './component/tobuy'



const pizzas = [
  { name: "Margherita", price: 8, image: "/img/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg" },
  { name: "Pepperoni", price: 10, image: "/img/freshly-baked-gourmet-pizza-rustic-wood-table-generated-by-ai_188544-18731.jpg" },
  { name: "BBQ Chicken", price: 12, image: "/img/pizza-plate-table-selective-focus_74760-26396.jpg" },
  { name: "Veggie Delight", price: 9, image: "/img/pizza-with-basil-leaves-it-sits-table_1293074-135234.jpg" },
];

export default function Home() {
  return (
    <>
      <Header />
         <Hero/>
      <About/>
      <Features/>
         <section className="py-6 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
      <div id="menu" className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pizzas.map((pizza, i) => (
          <PizzaCard key={i} {...pizza} />
        ))}
      </div>
    </section>
      <Order/>
      <Tobuy/>
      <Gallery/>
      <Contact/>
       <Accordion/>
      <Footer/>
    </>
  );
}






