import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
	const [active, setActive] = useState("SecondCar");
	const [colorBtn, setColorBtn] = useState("btn1");

	const btnID = (id) => {
		setColorBtn(colorBtn === id ? "" : id);
	};

	const coloringButton = (id) => {
		return colorBtn === id ? "colored-button" : "";
	};

	return (
		<>
			<section className="pick-section" id="vechicle_model">
				<div className="container">
					<div className="pick-container">
						<div className="pick-container__title">
							<h3>Model Kendaraan</h3>
							<h2>Penyewaan Mobil (06.00 - 23.00 WIB)</h2>
							<p>
								Pilih berbagai jenis kendaraan yang kami sediakan, mulai dari mobil keluarga hingga bus pariwisata, untuk memenuhi kebutuhan perjalanan Anda. Dengan armada yang terawat dan sopir berpengalaman, kami siap membantu Anda menjelajahi Kota Solo dan sekitarnya dengan aman dan nyaman.
							</p>
						</div>
						<div className="pick-container__car-content">
							{/* pick car */}
							<div className="pick-box">
								<button
									className={`${coloringButton("btn2")}`}
									id="btn2"
									onClick={() => {
										setActive("FirstCar");
										btnID("btn2");
									}}>
									Avanza
								</button>
								<button
									className={`${coloringButton("btn1")}`}
									onClick={() => {
										setActive("SecondCar");
										btnID("btn1");
									}}>
									Innova Reborn
								</button>
								<button
									className={`${coloringButton("btn3")}`}
									id="btn3"
									onClick={() => {
										setActive("ThirdCar");
										btnID("btn3");
									}}>
									Hiace Commuter
								</button>
								<button
									className={`${coloringButton("btn4")}`}
									id="btn4"
									onClick={() => {
										setActive("FourthCar");
										btnID("btn4");
									}}>
									Hiace Premio
								</button>
								<button
									className={`${coloringButton("btn5")}`}
									id="btn5"
									onClick={() => {
										setActive("FifthCar");
										btnID("btn5");
									}}>
									Elf Long
								</button>
								<button
									className={`${coloringButton("btn6")}`}
									id="btn6"
									onClick={() => {
										setActive("SixthCar");
										btnID("btn6");
									}}>
									Bus Medium
								</button>
								<button
									className={`${coloringButton("btn7")}`}
									id="btn7"
									onClick={() => {
										setActive("SeventhCar");
										btnID("btn7");
									}}>
									Big Bus
								</button>
							</div>

							{active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
							{active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
							{active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
							{active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
							{active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
							{active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
							{active === "SeventhCar" && <CarBox data={CAR_DATA} carID={6} />}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default PickCar;
