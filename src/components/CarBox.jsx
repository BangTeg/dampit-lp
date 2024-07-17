import { useState } from "react";

function CarBox({ data, carID }) {
  const bookBtn = () => {
		const nomor_tel = "+6281212926365";
		const templateChat = "Halo admin, saya ingin menyewa mobil di Dampit";

		window.open(
			`https://api.whatsapp.com/send?phone=${nomor_tel}&text=${encodeURIComponent(
				templateChat
			)}`
		);
	};
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>Rp {car.price}</span>/ hari
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Kapasitas</span>
                <span>{car.capacity} Orang</span>
              </div>

              <div className="pick-description__table__col">
                <span>Include</span>
                <span>{car.include}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Area</span>
                <span>{car.area}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Parkir</span>
                <span>{car.parking}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Pembayaran</span>
                <span>{car.payment}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Overtime</span>
                <span>Rp {car.overtime}/jam</span>
              </div>
            </div>
            <button className="cta-btn" onClick={bookBtn}>
              Reservasi Sekarang
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
