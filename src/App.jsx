import "../src/dist/styles.css";
import "rc-pagination/assets/index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import PublicLayout from "./components/PublicLayout";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		const isTailwind = ["/admin", "/auth", "/user"].some((path) =>
			pathname.includes(path)
		);

		if (pathname.includes("user/reservasi")) {
			document.getElementsByTagName("html")[0].style.fontSize = "62.5%";
		} else if (isTailwind) {
			document.getElementsByTagName("html")[0].style.fontSize = "16px";
		} else {
			document.getElementsByTagName("html")[0].style.fontSize = "62.5%";
		}
	}, [pathname]);

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route element={<PublicLayout />}>
					<Route index path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
