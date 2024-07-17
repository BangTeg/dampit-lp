import { useEffect, useState } from "react";
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { useMutation, useQuery } from "react-query";
import apiInstance from "@/libs/axios";

function BookCar() {
	const [modal, setModal] = useState(false); //  class - active-modal
	const [maxPassengers, setMaxPassengers] = useState(0);

	const [reservationPayload, setReservationPayload] = useState({
		pickUp: "",
		dropOff: "",
		carId: "",
		unit: 1,
		passenger: 1,
		institution: "company",
	});
	const [pickTime, setPickTime] = useState("");
	const [dropTime, setDropTime] = useState("");
	const [pickDate, setPickDate] = useState("");
	const [dropDate, setDropDate] = useState("");
	const [isDefaultPickUpLocation, setIsDefaultPickUpLocation] = useState(false);
	const [isDefaultDropOffLocation, setIsDefaultDropOffLocation] =
		useState(false);

	const DefaultPoolDampit =
		"Dampit Trans Solo, Jl. Jagir No.Rt 01/01, Dusun I, Gentan, Kec. Baki, Kabupaten Sukoharjo, Jawa Tengah 57556";

	const onChangeDefaultPickUpLocation = (e) => {
		setIsDefaultPickUpLocation(e.target.checked);
		if (e.target.checked) {
			setReservationPayload({
				...reservationPayload,
				pickUp: DefaultPoolDampit,
			});
		}
	};

	const onChangeDefaultDropOffLocation = (e) => {
		setIsDefaultDropOffLocation(e.target.checked);
		if (e.target.checked) {
			setReservationPayload({
				...reservationPayload,
				dropOff: DefaultPoolDampit,
			});
		}
	};

	const onChangeDate = (e) => {
		const today = new Date();

		const date = new Date(e.target.value);
		if (e.target.name === "pickDate") {
			if (date <= today) {
				alert("Pick-up date must be greater than today");
				setPickDate("");
				setDropDate("");
				return;
			}
			setPickDate(e.target.value);
		} else {
			if (!pickDate) {
				alert("Please select pick-up date first");
				setDropDate("");
				return;
			}

			const datePick = new Date(pickDate);
			if (datePick > date) {
				alert("Drop-off date must be greater than pick-up date");
				setDropDate("");
				return;
			}
			setDropDate(e.target.value);
		}
	};
	const onChangeTime = (e) => {
		if (e.target.name === "pickDate") {
			setPickTime(e.target.value);
		} else {
			setDropTime(e.target.value);
		}
	};

	const { carId, pickUp, dropOff, passenger, unit, institution } =
		reservationPayload;

	const onChangeValue = (e) => {
		if (e.target.name === "unit") {
			if (parseInt(e.target.value) < 1) {
				alert("Unit must be greater than 0");
				return;
			}
		}
		setReservationPayload({
			...reservationPayload,
			[e.target.name]: e.target.value,
		});
	};

	// open modal when all inputs are fulfilled
	const openModal = (e) => {
		e.preventDefault();
		const errorMsg = document.querySelector(".error-message");
		if (parseInt(passenger) < 0) {
			alert("Passenger must be greater than 0");
			return;
		}

		if (
			pickUp === "" ||
			dropOff === "" ||
			pickDate === "" ||
			dropDate === "" ||
			carId === "" ||
			passenger === "" ||
			institution === "" ||
			pickTime === "" ||
			dropTime === "" ||
			unit === ""
		) {
			errorMsg.style.display = "flex";
		} else {
			setModal(!modal);
			const modalDiv = document.querySelector(".booking-modal");
			modalDiv.scroll(0, 0);
			errorMsg.style.display = "none";
		}
	};

	// disable page scroll when modal is displayed
	useEffect(() => {
		if (modal === true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [modal]);

	const clearAllPayload = () => {
		setReservationPayload({
			pickUp: "",
			dropOff: "",
			carId: "",
			unit: 1,
			passenger: 1,
			institution: "company",
		});
		setPickTime("");
		setDropTime("");
		setPickDate("");
		setDropDate("");
		setIsDefaultPickUpLocation(false);
		setIsDefaultDropOffLocation(false);
	};

	const { data: vehicleData } = useQuery("get-vehicle", async () => {
		const response = await apiInstance.get("/vehicle");
		return response.data;
	});

	const { data: carData } = useQuery(
		`get-car-detail-${carId}`,
		async () => {
			const response = await apiInstance.get(`/vehicle/${carId}`);
			return response.data;
		},
		{
			onSuccess: (data) => {
				const capacity = data?.data.capacity;
				setReservationPayload({
					...reservationPayload,
					passenger: capacity ?? 1,
				});
				setMaxPassengers(capacity ?? 0);
			},
		}
	);

	const { mutate, isLoading } = useMutation(
		"create-reservation",
		async (data) => {
			const response = await apiInstance.post("/reservation/", data);
			return response.data;
		},
		{
			onSuccess: (data) => {
				setModal(!modal);
				const doneMsg = document.querySelector(".booking-done");
				doneMsg.style.display = "flex";
				clearAllPayload();
				window.location.href = `/user/history/${data.data.id}`;
			},
			onError: (error) => {
				console.log(error);
				alert(error.response.data.error || "Failed to book a car");
			},
		}
	);

	// confirm modal booking
	const confirmBooking = (e) => {
		e.preventDefault();

		const data = {
			vehicleId: parseInt(carId),
			pickUp,
			dropOff,
			passengers: passenger,
			unit,
			institution,
			pickDate: `${pickDate} ${pickTime}:00`,
			dropDate: `${dropDate} ${dropTime}:00`,
		};

		mutate(data);
	};

	useEffect(() => {
		if (maxPassengers > 0) {
			if (passenger > maxPassengers) {
				alert(`Max passenger is ${maxPassengers}`);
			}
		}
	}, [passenger, maxPassengers]);

	return (
		<>
			<section id="booking-section" className="book-section">
				{/* overlay */}
				<div
					onClick={openModal}
					className={`modal-overlay ${modal ? "active-modal" : ""}`}></div>

				<div className="container">
					<div className="book-content">
						<form className="book-content__box">
							<h2>Book a car</h2>

							<p className="error-message">
								All fields required! <IconX width={20} height={20} />
							</p>

							<p className="booking-done">
								Check your email to confirm an order.{" "}
								<IconX width={20} height={20} />
							</p>

							<div className="box-form">
								<div className="box-form__car-type md:col-span-2">
									<label>
										<IconCar className="input-icon" /> &nbsp; Select Your Car
										Type <b>*</b>
									</label>
									<select
										value={reservationPayload.carId}
										name="carId"
										onChange={onChangeValue}>
										<option>Select your car type</option>
										{vehicleData?.data.rows.map((vehicle) => (
											<option key={vehicle.id} value={vehicle.id}>
												{vehicle.name}
											</option>
										))}
									</select>
								</div>

								<div className="box-form__car-type md:col-span-2">
									<label htmlFor="institution" className="flex items-center">
										Institution <b>*</b>
									</label>
									<select
										name="institution"
										id="institution"
										onChange={onChangeValue}>
										<option value="">Select your institution</option>
										<option value="company">Company</option>
										<option value="personal">Personal</option>
										<option value="organization">Organization</option>
										<option value="others">Others</option>
									</select>
								</div>
								<div className="box-form__car-time ">
									<label htmlFor="institution" className="flex items-center">
										Unit <b>*</b>
									</label>
									<input
										id="institution"
										value={unit}
										type="number"
										name="unit"
										className="py-6 px-5 text-[1.5rem]"
										onChange={onChangeValue}
										placeholder="Unit"
									/>
								</div>
								<div className="box-form__car-time ">
									<label htmlFor="passenger" className="flex items-center">
										Passenger <b>*</b>
									</label>
									<input
										id="passenger"
										value={passenger}
										type="number"
										min={0}
										name="passenger"
										className="py-6 px-5 text-[1.5rem]"
										onChange={onChangeValue}
										placeholder="Passenger"
									/>
								</div>

								<div className="box-form__car-type">
									<label>
										<IconMapPinFilled className="input-icon" /> &nbsp; Pick-up
										Location <b>*</b>
									</label>
									<textarea
										name="pickUp"
										cols="30"
										rows="5"
										onChange={onChangeValue}
										disabled={isDefaultPickUpLocation}
										value={pickUp}
										placeholder="Enter your pick-up location here..."></textarea>
									<div className="flex items-center gap-3 mt-3">
										<input
											type="checkbox"
											id="defaultPickUp"
											onChange={onChangeDefaultPickUpLocation}
										/>
										<label htmlFor="defaultPickUp" className="!mb-0">
											Default Pull Dampit
										</label>
									</div>
								</div>

								<div className="box-form__car-type">
									<label>
										<IconMapPinFilled className="input-icon" /> &nbsp; Drop-of
										Location <b>*</b>
									</label>
									<textarea
										name="dropOff"
										cols="30"
										rows="5"
										onChange={onChangeValue}
										disabled={isDefaultDropOffLocation}
										value={dropOff}
										placeholder="Enter your drop-off location here..."></textarea>
									<div className="flex items-center gap-3 mt-3">
										<input
											type="checkbox"
											id="defaultDropOff"
											onChange={onChangeDefaultDropOffLocation}
										/>
										<label htmlFor="defaultDropOff" className="!mb-0">
											Default Pull Dampit
										</label>
									</div>
								</div>

								<div className="box-form__car-time">
									<label htmlFor="pickDate" className="flex items-center">
										<IconCalendarEvent className="input-icon" /> &nbsp; Pick-up
										Date <b>*</b>
									</label>
									<input
										id="pickDate"
										value={pickDate}
										type="date"
										name="pickDate"
										className="text-[1.5rem]"
										onChange={onChangeDate}></input>
								</div>

								<div className="box-form__car-time ">
									<label htmlFor="dropDate" className="flex items-center">
										<IconCalendarEvent className="input-icon" /> &nbsp; Drop-of
										Date <b>*</b>
									</label>
									<input
										id="dropDate"
										value={dropDate}
										type="date"
										name="dropDate"
										className="text-[1.5rem]"
										onChange={onChangeDate}></input>
								</div>
								<div className="box-form__car-time ">
									<label htmlFor="dropDate" className="flex items-center">
										<IconCalendarEvent className="input-icon" /> &nbsp; Pick-up
										Time <b>*</b>
									</label>
									<input
										id="pickDate"
										value={pickTime}
										type="time"
										name="pickDate"
										className="text-[1.5rem]"
										onChange={onChangeTime}></input>
								</div>
								<div className="box-form__car-time ">
									<label htmlFor="dropDate" className="flex items-center">
										<IconCalendarEvent className="input-icon" /> &nbsp; Drop-of
										Time <b>*</b>
									</label>
									<input
										id="dropDate"
										value={dropTime}
										type="time"
										name="dropDate"
										className="text-[1.5rem]"
										onChange={onChangeTime}
									/>
								</div>

								<button onClick={openModal} type="submit">
									Search
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* modal ------------------------------------ */}

			<div className={`booking-modal ${modal ? "active-modal" : ""}`}>
				{/* title */}
				<div className="booking-modal__title">
					<h2>Complete Reservation</h2>
					<IconX onClick={openModal} />
				</div>
				{/* message */}
				<div className="booking-modal__message">
					<h4>
						<IconInfoCircleFilled /> Upon completing this reservation enquiry,
						you will receive:
					</h4>
					<p>
						A validation of your reservation will be sended by WhatsApp chat within 24 hours, and after that you will receive an email with the reservation details and status of your reservation.
					</p>
				</div>
				{/* car info */}
				<div className="booking-modal__car-info">
					<div className="dates-div">
						<div className="booking-modal__car-info__dates">
							<h5>Location & Date</h5>
							<span>
								<IconMapPinFilled />
								<div>
									<h6>Pick-Up Date & Time</h6>
									<p>
										{pickDate} / {pickTime}
									</p>
								</div>
							</span>
						</div>

						<div className="booking-modal__car-info__dates">
							<span>
								<IconMapPinFilled />
								<div>
									<h6>Drop-Off Date & Time</h6>
									<p>
										{dropDate} / {dropTime}
									</p>
								</div>
							</span>
						</div>

						<div className="booking-modal__car-info__dates">
							<div className="flex flex-col justify-center max-sm:items-center">
								<div className="flex gap-3 items-center">
									<IconMapPinFilled />
									<h6 className="text-2xl">Pick-Up Location</h6>
								</div>
								<div>
									<p className="mt-3 text-xl text-[#777777] md:text-2xl">
										{pickUp}
									</p>
								</div>
							</div>
						</div>

						<div className="booking-modal__car-info__dates">
							<div className="flex flex-col justify-center max-sm:items-center">
								<div className="flex gap-3 items-center">
									<IconMapPinFilled />
									<h6 className="text-2xl">Drop-Off Location</h6>
								</div>
								<div>
									<p className="mt-3 text-xl text-[#777777] md:text-2xl">
										{dropOff}
									</p>
								</div>
							</div>
						</div>
						<div className="booking-modal__car-info__dates">
							<span>
								<div>
									<h6>Institution</h6>
									<p>{institution}</p>
								</div>
							</span>
						</div>
						<div className="booking-modal__car-info__dates">
							<span>
								<div>
									<h6>Passenger</h6>
									<p>{passenger} Person </p>
								</div>
							</span>
						</div>
					</div>
					<div className="dates-div">
						<div className="booking-modal__car-info__dates">
							<h5>Detail Car</h5>
							<span>
								<div>
									<h6>Model</h6>
									<p>{carData?.data.model}</p>
								</div>
							</span>
						</div>
						<div className="booking-modal__car-info__dates">
							<span>
								<div>
									<h6>Include</h6>
									<p>{carData?.data.include}</p>
								</div>
							</span>
						</div>
						<div className="booking-modal__car-info__dates">
							<span>
								<div>
									<h6>Area</h6>
									<p>{carData?.data.area}</p>
								</div>
							</span>
						</div>
						<div className="booking-modal__car-info__dates">
							<span>
								<div>
									<h6>Parking</h6>
									<p>{carData?.data.parking}</p>
								</div>
							</span>
						</div>
						<div className="booking-modal__car-info__dates">
							<span>
								<div>
									<h6>Capacity</h6>
									<p>{carData?.data.capacity} Person </p>
								</div>
							</span>
						</div>
						<div className="booking-modal__car-info__dates">
							<span>
								<div>
									<h6>Overtime Charge / hour</h6>
									<p>
										{new Intl.NumberFormat("id-ID", {
											style: "currency",
											currency: "IDR",
										}).format(carData?.data.overtime)}{" "}
									</p>
								</div>
							</span>
						</div>
					</div>
				</div>
				<div className="reserve-button">
					<button onClick={confirmBooking} disabled={isLoading}>
						{isLoading ? "Loading..." : "Reserve Now"}
					</button>
				</div>
			</div>
		</>
	);
}

export default BookCar;
