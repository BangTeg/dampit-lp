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
              <h3>Tentang Dampit Trans Solo</h3>
              <h2>Rental Mobil Nyaman, Aman, dan Terjangkau di Kota Solo</h2>
              <p>
                Di Dampit Trans Solo, kami berkomitmen menyediakan layanan sewa mobil terbaik yang sesuai dengan kebutuhan Anda. 
                Baik untuk perjalanan bisnis atau liburan, armada kendaraan berkualitas tinggi kami menjamin perjalanan yang nyaman dan menyenangkan. 
                Dengan harga sewa yang terjangkau, Anda dapat menikmati kemudahan memiliki transportasi sendiri tanpa harus mengeluarkan biaya yang besar. 
                Keamanan adalah prioritas utama kami. Kendaraan kami dirawat dengan standar tertinggi untuk memastikan ketenangan pikiran Anda. 
                Jelajahi keindahan Kota Solo dan sekitarnya dengan penuh kegembiraan bersama layanan sewa mobil Dampit Trans Solo. 
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>30+</h4>
                    <p>Unit Kendaraan</p>
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
                    <p>Perjalanan</p>
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
            <h2>Hubungi Kontak Admin Untuk Informasi Lebih Lanjut</h2>
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
