import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Navbar() {
	const [nav, setNav] = useState(false);

	const openNav = () => {
		setNav(!nav);
	};

	const pathViewId = window.location.hash;

	useEffect(() => {
		if (pathViewId) {
			const id = pathViewId.replace("#", "");
			scrollIntoView(id);
		}
	}, [pathViewId]);

	const scrollIntoView = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<nav>
				{/* mobile */}
				<div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
					<div onClick={openNav} className="mobile-navbar__close">
						<IconX width={30} height={30} />
					</div>
					<ul className="mobile-navbar__links">
						<li>
							<Link onClick={openNav} to="/">
								Home
							</Link>
						</li>
						<li>
							<Link onClick={openNav} to="/about">
								Tentang Kami
							</Link>
						</li>
						<li>
							<Link to="#vechicle_model">Model</Link>
						</li>
						<li>
							<Link to="/#gallery">Galeri</Link>
						</li>
						<li>
							<Link onClick={openNav} to="/contact">
								Kontak
							</Link>
						</li>
					</ul>
				</div>

				{/* desktop */}

				<div className="navbar">
					<div className="navbar__img">
						<Link to="/" onClick={() => window.scrollTo(0, 0)}>
							<img src={Logo} alt="dampit-trans-logo" />
						</Link>
					</div>
					<ul className="navbar__links">
						<li>
							<Link className="home-link" to="/">
								Home
							</Link>
						</li>
						<li>
							{" "}
							<Link className="about-link" to="/about">
								Tentang Kami
							</Link>
						</li>
						<li>
							{" "}
							<Link className="models-link" to="/#vechicle_model">
								Model
							</Link>
						</li>
						<li>
							{" "}
							<Link className="testi-link" to="/#gallery">
								Galeri
							</Link>
						</li>
						<li>
							{" "}
							<Link className="contact-link" to="/contact">
								Kontak
							</Link>
						</li>
					</ul>
					{/* mobile */}
					<div className="mobile-hamb" onClick={openNav}>
						<IconMenu2 width={30} height={30} />
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
