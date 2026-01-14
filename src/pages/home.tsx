import { IMAGES } from '../assets/image';

const Home = () => {
  return (
    <div className="page home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${IMAGES.hero})` }}>
        <div className="hero-overlay">
          <h1>Modern Branding Solutions</h1>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

      {/* Content Section */}
      <section className="container">
        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <img src={IMAGES.placeholder} alt="Brand Showcase" className="responsive-img" />
      </section>
    </div>
  );
};
export default Home;