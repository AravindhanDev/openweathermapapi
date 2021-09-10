import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const App = () => {
	const [inputText, setInputText] = useState("");
	const [city, setCity] = useState("Trichy");

	function handleChange(e) {
		setInputText(e.target.value);
	}

	function handleSubmit(e) {
		setCity(inputText);
		setInputText("");
		e.preventDefault();
	}

	return (
		<div className="app">
			<header className="animate__animated animate__tada animate__slow">
				<i className="fas fa-smog"></i>
				Weather API
			</header>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type="text"
					value={inputText}
					id="input"
					placeholder="City Name..."
					autoComplete="off"
				/>
				<button id="btn">
					<i className="fas fa-search-location"></i>
				</button>
			</form>
			<WeatherCard city={city} />
		</div>
	);
};

export default App;
