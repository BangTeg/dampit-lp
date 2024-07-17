import React from "react";
import SideBar from "./sidebar";
import { Separator } from "./admin/ui/separator";
import { useAuth } from "@/hook/useAuth";

const AuthenticatedLayout = ({ children }) => {
	const { users } = useAuth();
	return (
		<div className="flex relative w-full md:max-w-full">
			<div className="lg:w-1/5">
				<SideBar />
			</div>
			<div className="px-3 py-5 lg:flex-1 md:p-8 w-full min-h-screen">
				<div className="flex items-center justify-between mb-10">
					<h1 className="font-semibold text-base lg:text-xl">
						Dampit Trans Dashboard
					</h1>
					<div className="text-base lg:text-2xl">
						Welcome, <span className="font-semibold">{users?.username}</span>
					</div>
				</div>
				<Separator className="mb-8" />
				<div className="w-full flex flex-col relative overflow-hidden">
					{children}
				</div>
			</div>
		</div>
	);
};

export default AuthenticatedLayout;
