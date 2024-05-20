import './styles/style.scss'
import Header from "./components/Header/Header";
import WeatherTop from "./components/WeatherTop/WeatherTop";
import WeatherBottom from "./components/WeatherBottom/WeatherBottom";


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <WeatherTop/>
        <WeatherBottom/>
      </main>
    </div>
  );
}

export default App;
