import { IconMail, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";

function Contact() {
	return (
		<>
			<section className="contact-page">
				<HeroPages name="Contact" />
				<div className="container">
					<div className="contact-div">
						<div className="contact-div__text">
							<h2>Need additional information?</h2>
							<p>
							<strong>Dampit Trans Solo</strong> as a car rental service provider in Solo, are ready to assist you in finding a car that suits your needs. 
							Please do not hesitate to contact us via phone or email below, or you can come directly to our office. 
							We will be happy to assist you!
							</p>
							<a href="tel: +6281212926365" className="flex gap-3 items-center justify-center">
								<IconPhone /> &nbsp; (+62)812-1292-6365 (Nunik)
							</a>
							<a href="tel: +6282136488824" className="flex gap-3 items-center justify-center">
								<IconPhone /> &nbsp; (+62)821-3648-8824 (Wied)
							</a>
							<a href="mailto: nunikkembar.nk@gmail.com" className="flex gap-3 items-center justify-center">
								<IconMail /> &nbsp; nunikkembar.nk@gmail.com
							</a>
							<a
								href="https://maps.app.goo.gl/1ojPxCzHimp6WrLBA"
								target="_blank"
								rel="noreferrer"
								className="flex gap-3 items-center justify-center">
								<IconLocation />
								&nbsp; Jl. Jagir No.Rt 01/01, Dusun I, Gentan, Kec. Baki,
								Kabupaten Sukoharjo, Jawa Tengah 57556
							</a>
							<iframe
								title="Google Maps of Dampit Trans Solo"
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15820.015788235696!2d110.775321!3d-7.574547000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a151b0ada830f%3A0xc09b4ee050473823!2sDampit%20Trans%20Rental%20Mobil%20Solo!5e0!3m2!1sen!2sid!4v1707207076561!5m2!1sen!2sid"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"></iframe>
						</div>
					</div>
				</div>
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
			</section>
		</>
	);
}

export default Contact;
