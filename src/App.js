import "./App.css";
import Input from "./components/Input";
import Forecasts from "./components/Forecasts";
import { ForecastProvider } from "./components/ForecastContext";

function App() {
  return (
    <div className="App">
      <ForecastProvider>
        <Input />
        <Forecasts />
      </ForecastProvider>
    </div>
  );
}

export default App;
