import './style.css'
import RealTimeComponent from '../RealTimeComponent';
import ForecastComponent from '../ForecastComponent';
import HistoricComponent from '../HistoricComponent'
const Body = ({ page }) => {

  if (page === "home") {
    return (
      <div class="bg_image">
        <RealTimeComponent />
      </div>
    );
  }

  if (page === "previsao") {
    return (
      <div class="bg_image">        
        <ForecastComponent />
      </div>
    );
  }

  if (page === "historico") {
    return (
      <div class="bg_image">     
        <HistoricComponent />
      </div>
    );
  }

  return (
    <div class="bg_image">
      <div>DEU RUIM MANO</div>
    </div>
  );
}

export default Body