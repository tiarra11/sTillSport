import React from "react";
import Navbar from "./Navbar";
import Ad from "./Ad";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Navbar />
				<Ad />
				<Carousel />
				<Cards />
				<Jumbotron />
				<Footer />
			</div>
		);
	}
}
