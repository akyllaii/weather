import React, {useEffect, useState} from 'react';
import axios from "axios";

const WeatherBottom = () => {
    const [fiveDays, setFiveDays] = useState([])
    const [date,setDate] = useState('')

    useEffect(() => {
        axios('https://api.openweathermap.org/data/2.5/forecast?q=bishkek&appid=bfc4fb2b6fb4279a58ca397e030ca39e')
            .then(({data}) => {
                setFiveDays(data.list)
                setDate(data.list[0].dt_txt.slice(0,10))
            })
    },[])
    return (
        <section className='weather-bottom'>
            <div className="container">
                {
                    JSON.stringify({fiveDays}) !== '{}' &&
                        <>
                            <ul className="weather-bottom__days">
                                {
                                    [...new Set(fiveDays.map((item) => item.dt_txt.slice(0,10)))].
                                    map((item) => (
                                        <li className={`weather-bottom__day ${date === item ? 'active' : ''} `}
                                        onClick={() => setDate(item)}
                                        >{item}</li>
                                    ))
                                }

                            </ul>
                            <div className="weather-bottom__content">
                                {
                                    fiveDays.filter(item => item.dt_txt.includes(date)).map((item) => (

                                        <div className="weather-bottom__card">
                                            <h3 className="weather-bottom__hour">
                                                {item.dt_txt.slice(11,16)}
                                            </h3>
                                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" className="weather-top__deg-icon"/>
                                            <p className="weather-bottom__card-temp">
                                                {( item.main.temp - 273.15).toFixed()}°
                                            </p>
                                            <p className="weather-bottom__card-temp">
                                                <span>{(item.main.feels_like - 273.15).toFixed()}°</span>
                                            </p>
                                            <p className="weather-bottom__card-temp">
                                                <span>
                                                    {item.weather[0].main}
                                                </span>
                                            </p>
                                        </div>

                                    ))
                                }

                            </div></>
                }

            </div>
        </section>
    );
};

export default WeatherBottom;