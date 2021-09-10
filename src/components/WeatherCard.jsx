import React, { useEffect, useState } from "react";

const WeatherCard = ({ city }) => {
	const [data, setData] = useState([]);
	const [desc, setDesc] = useState("");
	const [icon, setIcon] = useState("");
	const [imgURL, setImgURL] = useState("");

	if (city === "" || city === undefined || city === null) {
		city = "Trichy";
	}
	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d6e3b728d3b5daadf19ea44a6e0869b1`
		)
			.then((response) => response.json())
			.then((json) => {
				console.log(json.weather[0].description);
				setData(json);
				setDesc(json.weather[0].description);
				setIcon(json.weather[0].icon);
			})
			.catch(() => alert("Please enter valid city name"));
	}, [city]);

	return (
		<div className="card">
			<div className="city-details">
				<h4>
					{data.name}, {data?.sys?.country}
				</h4>
				<ul>
					<li>
						<strong>Longitude:</strong> {data?.coord?.lon}
					</li>
					<li>
						<strong>Latitude:</strong> {data?.coord?.lat}
					</li>
				</ul>
			</div>
			<hr />
			<div className="atmosphere">
				<div className="sec1">
					<p>
						<strong>
							<i className="far fa-sun"></i> Sunrise:
						</strong>
						&nbsp;
						{data?.sys?.sunrise.toString().slice(0, 5)}
					</p>
					<p>
						<strong>
							<i className="fas fa-wind"></i> Wind Speed:
						</strong>
						&nbsp;
						{data?.wind?.speed}
					</p>
				</div>
				<div className="sec2">
					<p>
						<strong>
							<i className="fas fa-tint"></i> Humidity:
						</strong>
						&nbsp;
						{data?.main?.humidity}
					</p>
					<p>
						<strong>
							<i className="far fa-arrow-alt-circle-right"></i> Pressure:
						</strong>
						&nbsp;
						{data?.main?.pressure}
					</p>
				</div>
			</div>
			<hr />
			<div className="temperature">
				<h3>{data?.main?.temp} &deg;C</h3>
				<p className="description">{desc}</p>
			</div>
			<div className="img">
				<img
					className="animate__animated animate__fadeIn animate__slow"
					src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
					alt="Img"
				/>
			</div>
		</div>
	);
};

export default WeatherCard;
