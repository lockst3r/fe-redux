import { weatherData } from './users.gateway';

export const ADD_WEATHER_DATA = 'ADD_WEATHER_DATA';

export const weatherDataRecieved = weatherData => {
  return {
    type: ADD_WEATHER_DATA,
    payload: {
      weatherData,
    }
  }
}

export const getWeatherData = () => {
  return function(dispatch) {
    weatherData()
      .then(weatherData => {
        dispatch(weatherDataRecieved(weatherData));
      });
  }
};