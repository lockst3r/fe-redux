import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import * as usersActions from './weather.actions'

const Weather = ({ weatherData, fetchWeatherData }) => {

  useEffect(() => {
    fetchWeatherData();
  }, [])

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
          {weatherData.map(data => (
            <li key={data.id} className="city">
              <span className="city__name">{data.name}</span>
              <span className="city__temperature">{`${data.temperature} F`}</span>
            </li>
          ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  }
}

const mapDispatch = {
  fetchWeatherData: usersActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);