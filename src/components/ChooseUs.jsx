import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Layanan Kami</h4>
                <h2>Penawaran terbaik yang bisa kamu dapatkan</h2>
                <p>
                  Temukan penawaran terbaik yang bisa Anda temukan di Kota Solo, dengan penawaran khusus dari kami.
                  Kami berdedikasi untuk memberikan Anda harga terbaik untuk dompet Anda, sehingga Anda dapat menikmati layanan dari penyewaan kami tanpa khawatir dengan dompet Anda.
                  Penawaran kami dirancang untuk memberi Anda pengalaman perjalanan yang luar biasa, jadi jangan lewatkan kesempatan Anda bersama Dampit Trans.
                </p>
                <a href="/about">
                  Selengkapnya &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Jangkauan yang Luas</h4>
                    <p>
                      Mulailah perjalanan lintas daerah yang berkesan di seluruh Pulau Jawa, dengan kendaraan terbaik kami. 
                      Temukan keajaiban Indonesia bersama Dampit Trans Solo.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Harga Transparan</h4>
                    <p>
                      Dapatkan semua yang Anda butuhkan dengan nyaman dan transparan dari kebijakan kami.
                      Paket yang kami tawarkan meliputi sopir berpengalaman, bahan bakar mobil, air mineral, dan banyak lagi, sehingga perjalanan Anda menjadi lebih nyaman dan tanpa masalah.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Pelayanan Informatif</h4>
                    <p>
                      Kami selalu memberikan informasi yang jelas dan akurat kepada pelanggan kami, sehingga Anda tidak perlu khawatir dengan kebingungan selama perjalanan Anda.
                      Merasa bingung dengan cara pemesanan dan layanan kami? Customer Service kami siap membantu Anda 24/7.
                      Butuh informasi seputar perjalanan Anda? Supir kami siap memberikan segala informasi yang Anda butuhkan.
                    </p>
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

export default ChooseUs;
