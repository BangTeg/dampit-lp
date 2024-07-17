import React, { useEffect, useState } from "react";
import Logo from "../images/logo/logo.png";
import { Button } from "./admin/ui/button";
import { useLocation, Link } from "react-router-dom";
import { IconDashboard, IconUserCheck } from "@tabler/icons-react";
import { HistoryIcon, Home } from "lucide-react";
import { useAuth } from "@/hook/useAuth";
import { signOut } from "@/lib/utils";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/admin/ui/sheet";
import { MenuIcon } from "lucide-react";

const adminRoutes = [
	{
		icon: <IconDashboard />,
		name: "Dashboard",
		path: "/admin/dashboard",
	},
	{
		icon: <IconUserCheck />,
		name: "Reservation List",
		path: "/admin/reservasi",
	},
];

const userRoutes = [
	{
		icon: <IconUserCheck />,
		name: "Profile",
		path: "/user/profile",
	},
	{
		icon: <HistoryIcon />,
		name: "Booking History",
		path: "/user/history",
	},
];

const SideBar = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const { role } = useAuth();
	const [isMobile, setisMobile] = useState(false);

	const routes = role === "admin" ? adminRoutes : userRoutes;

	useEffect(() => {
		if (window.innerWidth < 1024) {
			setisMobile(true);
		} else {
			setisMobile(false);
		}

		window.addEventListener("resize", () => {
			if (window.innerWidth < 1024) {
				setisMobile(true);
			} else {
				setisMobile(false);
			}
		});

		console.log(isMobile);

		return window.removeEventListener("resize", () => {
			if (window.innerWidth < 1024) {
				setisMobile(true);
			} else {
				setisMobile(false);
			}
		});
	}, [window.innerWidth, isMobile, pathname]);

	return (
		<>
			{isMobile ? (
				<Sheet>
					<SheetTrigger asChild className="fixed bottom-5 right-5 z-10">
						<Button variant="outline">
							<MenuIcon size={24} />
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<div className="w-full min-h-screen text-black ">
							<Link
								to="/"
								className="flex justify-center items-center my-10 gap-3">
								<img src={Logo} alt="logo" className="w-20" />
							</Link>
							<div className="px-2 flex flex-col space-y-5">
								<Link
									to="/"
									className="py-2 px-2 w-full hover:bg-gray-300 rounded-md transition duration-300 flex gap-3">
									<Home size={24} />
									Back To Home
								</Link>
								{routes.map((route, index) => (
									<Link
										key={index}
										to={route.path}
										className={`py-2 px-2 w-full hover:bg-gray-300 rounded-md transition duration-300 flex gap-3 ${
											pathname === route.path ? "bg-gray-300 font-semibold" : ""
										}`}>
										{route.icon}
										{route.name}
									</Link>
								))}
								<Button className="hover:bg-red-500" onClick={signOut}>
									Sign Out
								</Button>
							</div>
						</div>
						<SheetFooter>
							<SheetClose asChild>
								<Button type="submit">Save changes</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			) : (
				<div className="w-1/5 border-r-2 min-h-screen text-black fixed hidden lg:block">
					<Link to="/" className="flex justify-center items-center my-10 gap-3">
						<img src={Logo} alt="logo" className="w-20" />
					</Link>
					<div className="px-10 flex flex-col space-y-5">
						<Link
							to="/"
							className="py-2 px-2 w-full hover:bg-gray-300 rounded-md transition duration-300 flex gap-3">
							<Home size={24} />
							Back To Home
						</Link>
						{routes.map((route, index) => (
							<Link
								key={index}
								to={route.path}
								className={`py-2 px-2 w-full hover:bg-gray-300 rounded-md transition duration-300 flex gap-3 ${
									pathname === route.path ? "bg-gray-300 font-semibold" : ""
								}`}>
								{route.icon}
								{route.name}
							</Link>
						))}
						<Button className="hover:bg-red-500" onClick={signOut}>
							Sign Out
						</Button>
					</div>
				</div>
			)}
		</>
	);
};

export default SideBar;
