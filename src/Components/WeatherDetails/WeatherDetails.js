import React from "react";

function WeatherDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-white gap-5 mt-10">
      <div className="rounded-md bg-gray-700 p-4">
        <p className="text-xl">Pressure</p>
        <p className="text-sm">1013 hpa</p>
      </div>
      <div className="rounded-md bg-gray-700 p-4">
        <p className="text-xl">Wind speed</p>
        <p className="text-sm">1013 hpa</p>
      </div>
      <div className="rounded-md bg-gray-700 p-4">
        <p className="text-xl">Humidity</p>
        <p className="text-sm">1013 hpa</p>
      </div>
      <div className="rounded-md bg-gray-700 p-4">
        <p className="text-xl">Pressure</p>
        <p className="text-sm">1013 hpa</p>
      </div>
      <div className="rounded-md bg-gray-700 p-4">
        <p className="text-xl">Sunrise</p>
        <p className="text-sm">1013 hpa</p>
      </div>
      <div className="rounded-md bg-gray-700 p-4">
        <p className="text-xl">Sunset</p>
        <p className="text-sm">1013 hpa</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
