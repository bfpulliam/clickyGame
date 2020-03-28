import React, { Component } from "react";
import "./App.css";
import image from "./images.json";
import Album from "../src/components/Album";
import Nav from "../src/components/Nav";
import Wrapper from "../src/components/Wrapper";
import Title from "../src/components/Title";


// Fisher Yates Shuffle
function randomizer(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

class App extends Component {
	// Setting this.state
	state = {
		image,
		currentScore: 0,
		topScore: 0,
		status: "",
		clicked: [],
	};

	shuffleImages = () => {
		let shuffleImages = randomizer(image);
		this.setState({ image: shuffleImages });
	};

	handleIncrement = () => {
		const newScore = this.state.currentScore + 1;
		this.setState({
			currentScore: newScore,
			status: "You have already clicked this album."
		});
		if (newScore >= this.state.topScore) {
			this.setState({ topScore:newScore });
		}
		else if (newScore === 24) {
			this.setState({ status: "YOU ARE THE CHAMPION... OF THE WORLD!!"});
		}
		this.shuffleImages();
	};

	reset = () => {
		this.setState({
			currentScore: 0,
			topScore: this.state.topScore,
			status:"You guessed incorrectly!",
			clicked: [],
		});
		this.shuffleImages();
	};

	handleClick = id => {
	if (this.state.clicked.indexOf(id) === -1) {
		this.handleIncrement();
		this.setState({ clicked: this.state.clicked.concat(id)});
	} else {
		this.reset();
	}
	};

	render() {
		return (
		<Wrapper>

			<Nav
				title="Clicky Game"
				topScore={this.state.topScore}
				score={this.state.currentScore}

				correctIncorrect={this.state.correctIncorrect}
			/>

			<Title> Click on an album cover to earn points.  You are only allowed to click on each album cover once!
			</Title>

			<div className = "row">
				<div className = "column">

				{this.state.image.map(image => (
					<Album
						key ={ image.id }
						id = { image.id }
						image = { image.picture }
						handleClick = { this.handleClick }
						reset = { this.reset }
						shuffleImages = { this.shuffleImages }
					/>
				))}
				</div>

			</div>
		</Wrapper>
		);
	};
}

export default App;
