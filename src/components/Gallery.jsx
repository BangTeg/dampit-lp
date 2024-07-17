import React, { useState, useEffect } from "react";
import Img1 from "../images/gallery/img1.jpg";
import Img2 from "../images/gallery/img2.jpg";
import Img3 from "../images/gallery/img3.jpg";
import Img4 from "../images/gallery/img4.jpg";
import Img5 from "../images/gallery/img5.jpeg";
import Img6 from "../images/gallery/img6.jpeg";

function Gallery() {
	const images = [Img1, Img2, Img3, Img4, Img5, Img6];
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) =>
				prevImage === images.length - 1 ? 0 : prevImage + 1
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [currentImage, images.length]);

	const handlePrevClick = () => {
		setCurrentImage((prevImage) =>
			prevImage === 0 ? images.length - 1 : prevImage - 1
		);
	};

	const handleNextClick = () => {
		setCurrentImage((prevImage) =>
			prevImage === images.length - 1 ? 0 : prevImage + 1
		);
	};

	return (
		<section className="gallery-section" id="gallery">
			<div className="container">
				<div className="gallery-content">
					<div className="gallery-content__title">
						<h4>Galeri</h4>
						<h2>Memori Bersama Sahabat Dampit</h2>
						<p>
							Dokumentasi perjalanan bersama pelanggan yang puas dengan layanan kami.
						</p>
					</div>

					<div className="gallery">
						{images.map((image, index) => (
							<div
								key={index}
								className={`gallery__box ${
									index === currentImage ? "active" : ""
								}`}>
								<img src={image} alt={`gallery_img_${index}`} />
							</div>
						))}
						<button className="gallery__prev" onClick={handlePrevClick}>
							&lt;
						</button>
						<button className="gallery__next" onClick={handleNextClick}>
							&gt;
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
