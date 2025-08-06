const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/media/32415-360.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="hero-text">
        <h1>Welcome to Pizza Heaven</h1>
        <p>Serving joy with every bite</p>
        <a href="#menu" className="cta-btn">Order Now</a>
      </div>
    </section>
  );
};

export default Hero;
