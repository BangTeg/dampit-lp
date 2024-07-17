import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/logo.png";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Dampit Trans Solo</h3>
              <h2>Affordable, Comfortable, Safe, and Fun Car Rental Services</h2>
              <p>
                At Dampit Trans Solo, we strive to provide the best car rental services that cater to your needs. 
                Whether you're traveling for business or leisure, our fleet of high-quality vehicles ensures a comfortable and enjoyable journey. 
                With our affordable rates, you can experience the convenience of having your own transportation without breaking the bank. 
                Safety is our top priority, and we maintain our vehicles to the highest standards to ensure your peace of mind. 
                Discover the joy of exploring Solo City and its surroundings with Dampit Trans Solo car rental services.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>15+</h4>
                    <p>Car Units</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>30+</h4>
                    <p>Loyal Customers</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>500+</h4>
                    <p>Trips</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Contact our admins for more informations</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>(+62) 812-1292-6365 (Nunik)</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
