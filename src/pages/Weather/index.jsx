import { useState } from "react";
import styles from "./Weather.module.scss";

const weatherData = {
    hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
    hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
    danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
};

const getIcon = (weather) => {
    if (weather === "Nắng") return "☀️";
    if (weather === "Có mây") return "🌤️";
    if (weather === "Mưa nhẹ") return "🌧️";
    return "";
};

function Weather() {
    const [city, setCity] = useState("hanoi");
    const [weather, setWeather] = useState(weatherData.hanoi);

    const changeCity = (e) => {
        const value = e.target.value;
        setCity(value);
        setWeather(weatherData[value]);
    };

    const refresh = () => {
        setWeather({
            ...weather,
            temp: weather.temp + Math.floor(Math.random() * 10 - 5),
            humidity: weather.humidity + Math.floor(Math.random() * 10 - 5),
        });
    };

    return (
        <div className={styles.weather}>
            <h2>Weather App</h2>

            <select
                value={city}
                onChange={changeCity}
                className={styles.select}
            >
                <option value="hanoi">Hà Nội</option>
                <option value="hcm">TP.HCM</option>
                <option value="danang">Đà Nẵng</option>
            </select>

            <div className={styles.card}>
                <p className={styles.icon}>{getIcon(weather.weather)}</p>
                <h3>{weather.city}</h3>
                <p className={styles.condition}>{weather.weather}</p>
                <p className={styles.temp}>{weather.temp}°C</p>
                <p className={styles.humidity}>Độ ẩm: {weather.humidity}%</p>
                <button onClick={refresh}>Làm mới</button>
            </div>
        </div>
    );
}

export default Weather;
