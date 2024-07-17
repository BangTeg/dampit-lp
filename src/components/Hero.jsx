import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import WhatsappIcon from "../images/hero/whatsapp.png";
import { useEffect, useState } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";

function Hero() {
	const [goUp, setGoUp] = useState(false);

	const sendWhatsapp = () => {
		const nomor_tel = "+6281212926365";
		const templateChat = "Halo admin, saya ingin menyewa mobil di Dampit";

		window.open(
			`https://api.whatsapp.com/send?phone=${nomor_tel}&text=${encodeURIComponent(
				templateChat
			)}`
		);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: (0, 0), behavior: "smooth" });
		const url = window.location.href.split("#")[0];
		window.history.pushState({}, "", url);
	};

	const bookBtn = () => {
		const nomor_tel = "+6281212926365";
		const templateChat = "Halo admin, saya ingin menyewa mobil di Dampit";

		window.open(
			`https://api.whatsapp.com/send?phone=${nomor_tel}&text=${encodeURIComponent(
				templateChat
			)}`
		);
	};

	useEffect(() => {
		const onPageScroll = () => {
			if (window.pageYOffset > 600) {
				setGoUp(true);
			} else {
				setGoUp(false);
			}
		};
		window.addEventListener("scroll", onPageScroll);

		return () => {
			window.removeEventListener("scroll", onPageScroll);
		};
	}, []);
	return (
		<>
			<section id="home" className="hero-section pt-32 md:pt-0">
				<div className="container">
					<img className="bg-shape" src={BgShape} alt="bg-shape" />
					<div className="hero-content">
						<div className="hero-content__text">
							<h4>Dampit Trans</h4>
							<h1>
								Rental Mobil <span>Termurah</span> dan <span>Ternyaman</span> di Kota {" "}
								<span>Solo</span>.
							</h1>
							{/* <p>
								Explore the freedom of driving your dream car! Discover
								unbeatable prices, enjoy unlimited miles, and experience
								flexible pick-up options with Dampit Trans. Your journey begins
								with us - <span>where affordability meets adventure</span>.
							</p> */}
							<p>
								Bosen jalan kaki terus?
								Yuk, wujudkan mimpi berkendara dengan mobil impian kamu bareng Dampit Trans!  Dapatkan harga sewa paling cuan, kilometer bebas jalan-jalan, dan penjemputan yang gampang banget.
								Mau liburan ke pantai atau ngadem di pegunungan? Gas aja!  Di <span>Dampit Trans</span>, perjalananmu pasti seru dan gak bikin kantong jebol.
							</p>
							<div className="hero-content__text__btns">
								<Link
									onClick={bookBtn}
									className="hero-content__text__btns__book-ride"
									to="/">
									Booking Sekarang! &nbsp; <IconCircleCheck />
								</Link>
								<Link
									className="hero-content__text__btns__learn-more"
									to="/about">
									Selengkapnya &nbsp; <IconChevronRight />
								</Link>
							</div>
						</div>

						{/* img */}
						<img
							src={HeroCar}
							alt="dampit-trans-solo-logo"
							className="hero-content__car-img"
						/>
					</div>
				</div>

				{/* page up */}
				<div
					onClick={scrollToTop}
					className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
					^
				</div>
				<div onClick={sendWhatsapp} className="cursor-pointer">
					<img
						src={WhatsappIcon}
						className={`whatsapp ${goUp ? "show-scroll" : ""}`}
						alt=""
					/>
				</div>
			</section>
		</>
	);
}

export default Hero;
