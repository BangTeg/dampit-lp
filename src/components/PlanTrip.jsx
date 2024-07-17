import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Percayakan Trip Anda Besok!</h3>
              <h2>Rental Mobil Terpercaya Sejak Tahun 2010</h2>
            </div>

            <div className="plan-container__boxes">
            <div className="plan-container__boxes__box">
              <img src={SelectCar} alt="icon_img" />
              <h3>Beraneka Jenis Mobil</h3>
              <p>
                Dengan berbagai jenis mobil yang kami sediakan,
                Anda dapat memilih mobil yang sesuai dengan kebutuhan perjalanan Anda, sehingga perjalanan Anda akan lebih menyenangkan.
              </p>
            </div>

            <div className="plan-container__boxes__box">
              <img src={Contact} alt="icon_img" />
              <h3>Admin Responsif</h3>
              <p>
                Temukan layanan pelanggan yang responsif dan ramah di Dampit Trans Solo, yang siap membantu Anda dengan segala pertanyaan dan kebutuhan Anda seputar rencana perjalananmu 24/7.
              </p>
            </div>

            <div className="plan-container__boxes__box">
              <img src={Drive} alt="icon_img" />
              <h3>Supir Berpengalaman</h3>
              <p>
                Mulai perjalanan mu dengan tenang dan nyaman bersama sopir berpengalaman kami yang siap membantu Anda menjelajahi Kota Solo dan seluruh Pulau Jawa dengan aman dan nyaman.
              </p>
            </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
