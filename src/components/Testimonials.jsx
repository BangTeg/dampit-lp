import { IconQuote } from "@tabler/icons-react";
import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Review</h4>
              <h2>Testimoni Pelanggan</h2>
              <p>
                Berikut adalah beberapa testimoni dari pelanggan setia kami yang telah menggunakan layanan Dampit Trans Solo untuk perjalanan mereka.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "Kami menyewa mobil dari situs web ini dan mendapatkan pengalaman yang luar biasa! 
                  Mereka memberikan kami informasi tentang rencana perjalanan kami dan tarif sewaannya yang sangat terjangkau. 
                  Saya pasti akan memilih Dampit Trans lagi di masa depan."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Titiek</h4>
                      <p>Kartasura, Jawa Tengah</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "Mobil yang kami sewa sangat nyaman dan sopirnya sangat ramah. Kendaraan selalu terjaga kebersihannya dan kami merasa sangat aman selama perjalanan.
                  Saya sangat merekomendasikan Dampit Trans Solo untuk perjalanan Anda"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Nadia Zerlinda</h4>
                      <p>Tulungagung, Jawa Timur</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
