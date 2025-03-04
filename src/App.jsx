import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Services from "./components/pages/Services";
function App() {
	return (
		<>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Hero />} />
						<Route path="/services" element={<Services />} />
						<Route
							path="/industries"
							element={
								<div className="flex justify-center items-start">
									<h1 className="text-xl underline">Industries</h1>
								</div>
							}
						/>
						<Route
							path="/products"
							element={
								<div className="flex justify-center items-start">
									<h1 className="text-xl underline">Produts</h1>
								</div>
							}
						/>
						<Route
							path="/blog"
							element={
								<div className="flex justify-center items-start">
									<h1 className="text-xl underline">Blogs</h1>
								</div>
							}
						/>
						<Route
							path="/contact"
							element={
								<div className="flex justify-center items-start">
									<h1 className="text-xl underline">Contact</h1>
								</div>
							}
						/>
					</Routes>
				</Layout>
			</Router>
		</>
	);
}

export default App;
