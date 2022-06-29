import React from 'react';
import CurrentWeather from './CurrentWeather';

function WeatherChart() {
  return (
    <div class="bg-gray-800 p-6 mt-10 rounded-lg">
      <CurrentWeather></CurrentWeather>
      <div className=''></div>
    </div>
  );
}

export default WeatherChart;
