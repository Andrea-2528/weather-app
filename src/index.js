import "./styles.css";

// Global object containing conditions icons
const icons = {
	snow: `<path d="M240-200q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200Zm480 0q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200ZM360-40q-17 0-28.5-11.5T320-80q0-17 11.5-28.5T360-120q17 0 28.5 11.5T400-80q0 17-11.5 28.5T360-40Zm120-160q-17 0-28.5-11.5T440-240q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240q0 17-11.5 28.5T480-200ZM600-40q-17 0-28.5-11.5T560-80q0-17 11.5-28.5T600-120q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40ZM300-320q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z"/>`,
	rain: `<path d="M558-83.33q-12.33 6-25.83 1.5-13.5-4.5-19.5-16.84l-66-132q-6-12.33-1.84-25.83Q449-270 461.33-276q12.34-6 25.84-1.5t19.5 16.83l66 132q6 12.34 1.83 25.84T558-83.33ZM798-84q-12.33 6-25.83 1.5-13.5-4.5-19.5-16.83l-66-132q-6-12.34-1.84-25.84 4.17-13.5 16.5-19.5 12.34-6 25.84-1.5t19.5 16.84l66 132q6 12.33 1.83 25.83Q810.33-90 798-84Zm-480 0q-12.33 6-25.83 1.83-13.5-4.16-19.5-16.5l-66-132q-6-12.33-1.5-25.83Q209.67-270 222-276q12.33-6 25.83-1.83 13.5 4.16 19.5 16.5l66 132.66q6 12.34 1.5 25.5Q330.33-90 318-84Zm-24.67-249.33q-88.33 0-150.83-62.5Q80-458.33 80-546.67 80-627 136-689q56-62 139-69.67 32-56.33 85.5-88.83T480-880q90.67 0 153.83 57.5Q697-765 711-679.67 786.67-675 833.33-625 880-575 880-506.67q0 71.67-50.5 122.5-50.5 50.84-122.83 50.84H293.33Zm0-66.67h413.34q44.66 0 75.66-31.33 31-31.34 31-75.34 0-44.66-31-75.66t-75.66-31h-60v-33.34q0-69.33-48.67-118-48.67-48.66-118-48.66-50 0-91.5 27t-61.5 73l-8.67 20h-27q-60.33 2-102.5 44.5-42.16 42.5-42.16 102.16 0 60.67 43 103.67t103.66 43ZM480-606.67Z"/>`,
	fog: `<path d="M720-203.33q-15 0-25.83-10.84Q683.33-225 683.33-240q0-15 10.84-25.83Q705-276.67 720-276.67q15 0 25.83 10.84Q756.67-255 756.67-240q0 15-10.84 25.83Q735-203.33 720-203.33ZM280-80q-15 0-25.83-10.83-10.84-10.84-10.84-25.84t10.84-25.83Q265-153.33 280-153.33q15 0 25.83 10.83 10.84 10.83 10.84 25.83 0 15-10.84 25.84Q295-80 280-80Zm-40-123.33q-15 0-25.83-10.84Q203.33-225 203.33-240q0-15 10.84-25.83Q225-276.67 240-276.67h360q15 0 25.83 10.84Q636.67-255 636.67-240q0 15-10.84 25.83Q615-203.33 600-203.33H240ZM400-80q-15 0-25.83-10.83-10.84-10.84-10.84-25.84t10.84-25.83Q385-153.33 400-153.33h280q15 0 25.83 10.83 10.84 10.83 10.84 25.83 0 15-10.84 25.84Q695-80 680-80H400ZM293.33-333.33q-88.24 0-150.78-62.52Q80-458.36 80-546.56 80-627 136-689t139-69.67q32-56.33 85.5-88.83T480.28-880q90.39 0 153.55 57.5Q697-765 711-679.67 786.67-675 833.33-625 880-575 880-506.92q0 71.92-50.56 122.75-50.55 50.84-122.77 50.84H293.33Zm0-66.67h413.34q44.8 0 75.73-31.33 30.93-31.34 30.93-75.67t-30.93-75.33q-30.93-31-75.73-31h-60v-33.34q0-69.33-48.67-118-48.67-48.66-117.86-48.66-50.32 0-91.73 27-41.41 27-61.41 73l-8.67 20h-27q-60.33 2-102.5 44.42-42.16 42.43-42.16 102.15 0 60.76 42.95 103.76 42.95 43 103.71 43ZM480-606.67Z"/>`,
	wind: `<path d="M463.33-160q-52.66 0-85.33-30.33-32.67-30.34-32.67-85h72q0 23 11.5 35.83 11.5 12.83 34.5 12.83 23.67 0 35.17-11.83t11.5-36.83q0-25-11.5-37.84Q487-326 463.33-326H80v-66.67h383.33q52.67 0 83 30.34 30.34 30.33 30.34 87 0 54.66-30.34 85Q516-160 463.33-160ZM80-565.33V-632h545.33q33.34 0 50.34-17.33 17-17.34 17-53.34t-17-53.33q-17-17.33-50.34-17.33-34 0-51 19.33t-17 48.67h-66.66q0-58.34 36.83-96.5Q564.33-840 625.33-840q60.34 0 97.17 37.17 36.83 37.16 36.83 100.16T722.5-602.5q-36.83 37.17-97.17 37.17H80Zm668 326.66v-66.66q32 0 48.67-18.67 16.66-18.67 16.66-52 0-34-18-51t-50-17H80v-66.67h665.33q61 0 97.84 36.84Q880-437 880-376q0 62.33-35.5 99.83t-96.5 37.5Z"/>`,
	cloudy: `<path d="M254-160q-89 0-151.5-62T40-373q0-78 49-137.67 49-59.66 125.67-73.33 21.66-95.33 96-155.33 74.33-60 170.66-60 113.67 0 192.17 81.5 78.5 81.5 78.5 196.5v16q71 1.33 119.5 50.83T920-332.67q0 71-50.83 121.84Q818.33-160 747.33-160H254Zm0-66.67h493.33q44 0 75-31t31-75q0-44-31-75t-75-31h-62v-82.66q0-88.34-60.16-149.84-60.17-61.5-146.5-61.5-86.34 0-146.84 61.5t-60.5 149.84H252q-60.67 0-103 42.66Q106.67-436 106.67-374q0 61.33 43 104.33t104.33 43ZM480-480Z"/>`,
	partlyCloudyDay: `<path d="M446.67-766.67V-920h66.66v153.33h-66.66ZM706-659.33l-46.67-47.34 108.34-108.66 46.66 47.66L706-659.33Zm60.67 212.66v-66.66H920v66.66H766.67Zm1.66 301L660-254l47.33-47.33 108.67 108-47.67 47.66ZM254-659.33 145.67-767.67l47-47 108 108.67L254-659.33Zm-14 472.66h180q30.56 0 51.94-21.34 21.39-21.34 21.39-51.83t-20.84-52.33Q451.65-334 421-334h-46.33L356-377.33q-14.76-34.84-46.4-55.42T240-453.33q-55.56 0-94.44 38.84-38.89 38.84-38.89 94.33 0 55.49 38.89 94.49 38.88 39 94.44 39Zm0 66.67q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q58.49 0 106.75 32.5Q395-455 418.33-400.67q59.41 0 99.88 43.4 40.46 43.39 40.46 103.94-4 56.33-43.53 94.83Q475.62-120 420-120H240Zm318.67-133.33q-3.67-16.93-7.34-33-3.66-16.08-7.33-33 49.67-19.67 79.5-63.36t29.83-97.22q0-72.09-50.66-122.76Q552-653.33 480-653.33q-64.81 0-113.42 41.45-48.61 41.44-57.25 105.21-17.33-3.66-34.66-6.66-17.34-3-34.67-6.67 14-88 82.5-144T480-720q100 0 170 70t70 170.23q0 77.44-44.33 139.27-44.34 61.83-117 87.17ZM481-480Z"/>`,
	partlyCloudyNight: `<path d="M513.33-435ZM524-40H412l14.67-10.5q14.66-10.5 32.16-23 17.5-12.5 32.17-23l14.67-10.5H533q91.67-2 170.17-55 78.5-53 123.83-134.33-88.67-8-169.67-42.17-81-34.17-143.66-96.5Q451-497.33 417-578t-41.67-168.67q-84.33 46.34-136.5 126.5Q186.67-540 186.67-444v9.67q0 5.66.66 9.66l-10.02 4.32q-10.03 4.31-22.14 9.02-12.12 4.7-22.14 9.02L123-398q-2-12.33-2.5-23.67Q120-433 120-444q0-146 93-257.5T450-840q-18 98.33 11 192.92 29 94.59 100 165.66t165.5 100.1Q821-352.3 920-370.31q-26 144.13-138 237.22T524-40Zm-284-66.67h180q30.56 0 51.94-21.34 21.39-21.34 21.39-51.83t-20.9-51.99q-20.91-21.5-50.43-21.5h-43.33L362-292.67q-16-37-49.12-58.83-33.13-21.83-72.88-21.83-54.67 0-94 38.83T106.67-240q0 55.56 38.89 94.44 38.88 38.89 94.44 38.89ZM240-40q-83 0-141.5-58.5T40-240q0-83 58.5-141.5T240-440q60 0 109.5 32.5T423-320q57 2 97 42.5t40 97.5q0 58-41 99t-99 41H240Z"/>`,
	clearDay: `<path d="M446.67-766.67V-920h66.66v153.33h-66.66ZM706-659.33l-46.33-46.34 108-109.66 46.66 47.66L706-659.33Zm60.67 212.66v-66.66H920v66.66H766.67ZM446.67-40v-153.33h66.66V-40h-66.66ZM253.33-660.67l-108-107 47-46.66L300.67-706l-47.34 45.33ZM768-145.33l-108.33-109L705-299.67l110 106-47 48.34ZM40-446.67v-66.66h153.33v66.66H40Zm153 301.34-47.33-47L253-299.67l24.33 22.34L301.67-254 193-145.33ZM480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-66.67q72 0 122.67-50.66Q653.33-408 653.33-480t-50.66-122.67Q552-653.33 480-653.33t-122.67 50.66Q306.67-552 306.67-480t50.66 122.67Q408-306.67 480-306.67ZM480-480Z"/>`,
	clearNight: `<path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 98.33 11 192.92 29 94.59 100 165.66t165.5 100.1Q781-392.3 880-410.31q-26 144.13-138 237.22T484-80Zm0-66.67q96 0 175.67-52.66Q739.33-252 787-336.33q-88.67-8-169.67-42.17-81-34.17-143.66-96.5Q411-537.33 377-618t-41.67-168.67q-84.33 46.34-136.5 126.5Q146.67-580 146.67-484q0 140.56 98.39 238.94 98.38 98.39 238.94 98.39ZM473.33-475Z"/>`,
};

async function getWeatherData(input) {
	try {
		const response = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=FJBC9PMWGFNQ97Z36YBQ7JA2E&contentType=json`,
		);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		console.log(data);

		const currentConditions = data.currentConditions;
		delete data.currentConditions;
		const stations = data.stations;
		delete data.stations;
		const alerts = data.alerts;
		delete data.alerts;
		const days = data.days;
		delete data.days;
		const general = data;

		return { currentConditions, stations, alerts, days, general };
	} catch (error) {
		console.error("Error fetching weather data:", error);
	}
}

(async () => {
	const searchInput = document.querySelector(".search-bar");
	const welcomeMessage = document.querySelector(".welcome-message");
	const loadingScreen = document.querySelector(".loading-screen");
	loadingScreen.style.display = "none";
	searchInput.addEventListener("keydown", async (e) => {
		if (e.key === "Enter") {
			const input = searchInput.value;

			welcomeMessage.style.transition = "opacity 0.5s ease-in-out";
            loadingScreen.style.transition = "opacity 0.5s ease-in-out";
			welcomeMessage.style.opacity = "0";
			await new Promise((resolve) => setTimeout(resolve, 500));
			welcomeMessage.style.display = "none";
			loadingScreen.style.display = "flex";
            loadingScreen.style.opacity = "1";

			const weatherDataObj = await getWeatherData(input);
			console.log(weatherDataObj);
			updateDOMWeatherData(weatherDataObj);

			
			loadingScreen.style.opacity = "0";
			await new Promise((resolve) => setTimeout(resolve, 500));
			loadingScreen.style.display = "none";
		}
	});
})();

function updateDOMWeatherData(data) {
	// Main Icon and Summary
	const mainIcon = document.querySelector(".card-icon");
	const summary = document.querySelector(".summary-text");
	switch (data.currentConditions.icon) {
		case "snow":
			mainIcon.innerHTML = icons.snow;
			summary.textContent = "Snow";
			break;
		case "rain":
			mainIcon.innerHTML = icons.rain;
			summary.textContent = "Rain";
			break;
		case "fog":
			mainIcon.innerHTML = icons.fog;
			summary.textContent = "Mist";
			break;
		case "wind":
			mainIcon.innerHTML = icons.wind;
			summary.textContent = "Windy";
			break;
		case "cloudy":
			mainIcon.innerHTML = icons.cloudy;
			summary.textContent = "Cloudy";
			break;
		case "partly-cloudy-day":
			mainIcon.innerHTML = icons.partlyCloudyDay;
			summary.textContent = "Partly Cloudy";
			break;
		case "partly-cloudy-night":
			mainIcon.innerHTML = icons.partlyCloudyNight;
			summary.textContent = "Partly Cloudy";
			break;
		case "clear-day":
			mainIcon.innerHTML = icons.clearDay;
			summary.textContent = "Clear";
			break;
		case "clear-night":
			mainIcon.innerHTML = icons.clearNight;
			summary.textContent = "Clear";
			break;
	}

	// Local Time
	const localTime = document.querySelector(".local-time");
	localTime.textContent = data.currentConditions.datetime.slice(0, -3);

	// Sunrise and sunset
	const sunrise = document.querySelector(".sunrise-time");
	const sunset = document.querySelector(".sunset-time");
	sunrise.textContent = data.currentConditions.sunrise.slice(0, -3);
	sunset.textContent = data.currentConditions.sunset.slice(0, -3);

	// Moonphase
	const moonphase = document.querySelector(".moonphase-name");
	if (data.currentConditions.moonphase === 0) {
		moonphase.textContent = "New Moon";
	} else if (
		data.currentConditions.moonphase > 0 &&
		data.currentConditions.moonphase < 0.25
	) {
		moonphase.textContent = "Waxing Crescent";
	} else if (data.currentConditions.moonphase === 0.25) {
		moonphase.textContent = "First Quarter";
	} else if (
		data.currentConditions.moonphase > 0.25 &&
		data.currentConditions.moonphase < 0.5
	) {
		moonphase.textContent = "Waxing Gibbous";
	} else if (data.currentConditions.moonphase === 0.5) {
		moonphase.textContent = "Full Moon";
	} else if (
		data.currentConditions.moonphase > 0.5 &&
		data.currentConditions.moonphase < 0.75
	) {
		moonphase.textContent = "Waning Gibbous";
	} else if (data.currentConditions.moonphase === 0.75) {
		moonphase.textContent = "Last Quarter";
	} else if (
		data.currentConditions.moonphase > 0.75 &&
		data.currentConditions.moonphase < 1
	) {
		moonphase.textContent = "Waning Crescent";
	}

	// Temperature
	const temperature = document.querySelector(".temperature-current");
	const feelslike = document.querySelector(".feelslike-value");
	const maxTemp = document.querySelector(".max-temperature");
	const minTemp = document.querySelector(".min-temperature");
	temperature.textContent = `${data.currentConditions.temp} °C`;
	feelslike.textContent = `${data.currentConditions.feelslike} °C`;
	maxTemp.textContent = `Max: ${data.days[0].tempmax} °C (${data.days[0].feelslikemax} °C)`;
	minTemp.textContent = `Min: ${data.days[0].tempmin} °C (${data.days[0].feelslikemin} °C)`;

	// Pressure
	const pressure = document.querySelector(".pressure-value");
	pressure.textContent = `${data.currentConditions.pressure} hPa`;

	// Dew point
	const dew = document.querySelector(".dew-value");
	dew.textContent = `${data.currentConditions.dew} °C`;

	// UV
	const uv = document.querySelector(".uv-value");
	uv.textContent = `${data.currentConditions.uvindex}`;

	// Risk
	const risk = document.querySelector(".risk-value");
	let riskLabel = undefined;
	if (data.days[0].severerisk <= 30) {
		riskLabel = "Low";
	} else if (data.days[0].severerisk > 30 && data.days[0].severerisk <= 70) {
		riskLabel = "Medium";
	} else if (data.days[0].severerisk > 70) {
		riskLabel = "High";
	}
	risk.textContent = `${riskLabel} (${data.days[0].severerisk})`;

	// Wind icon
	const windIcon = document.querySelector(".wind-icon");
	const windDir = data.currentConditions.winddir;
	windIcon.style.transform = `rotate(${windDir}deg)`;

	// Wind & visibility values
	const windSpeed = document.querySelector(".wind-speed-value");
	const windGust = document.querySelector(".wind-gust-value");
	const visibility = document.querySelector(".visibility-value");
	windSpeed.textContent = `${data.currentConditions.windspeed} Km/h`;
	windGust.textContent = `(up to ${data.currentConditions.windgust} Km/h)`;
	visibility.textContent = `${data.currentConditions.visibility} Km`;

	// Sun
	const sunRadiation = document.querySelector(".sun-radiation");
	const sunEnergy = document.querySelector(".sun-energy");
	sunRadiation.textContent = `${data.currentConditions.solarradiation} W/m²`;
	sunEnergy.textContent = `${data.currentConditions.solarenergy} MJ/m²`;

	// Rain snow and clouds
	const rain = document.querySelector(".rain-value");
	const rainChance = document.querySelector(".rain-chanse");
	const clouds = document.querySelector(".cloud-cover-value");

	if (data.currentConditions.snow === 0) {
		rain.textContent = `Rain: ${data.currentConditions.precip} mm`;
	} else {
		rain.textContent = `Snow: ${data.currentConditions.snow} cm`;
	}

	rainChance.textContent = `(${data.currentConditions.precipprob}%)`;
	clouds.textContent = `Cloud cover: ${data.currentConditions.cloudcover}%`;
}
