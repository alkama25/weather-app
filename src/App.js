import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import WeatherChart from "./Components/WeatherChart/WeatherChart";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen ">
      <div class="w-full md:w-3/5 md:mx-auto lg:w-3/5 lg:mx-auto">
        <SearchBar></SearchBar>
        <WeatherCard></WeatherCard>
        <WeatherChart></WeatherChart>
        <WeatherDetails></WeatherDetails>
      </div>
    </div>
  );
}

export default App;
