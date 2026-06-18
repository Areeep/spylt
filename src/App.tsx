import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Message from "./sections/Message";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
	return (
		<main>
			<Navbar />

			<Hero />

			<Message />

			<div className="h-dvh"></div>
		</main>
	);
}

export default App;
