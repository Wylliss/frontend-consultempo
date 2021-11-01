import './style.css';
import ChartHeight from '../ChartHistoricComponent/height';
import ChartMoistureAir from '../ChartHistoricComponent/moistureAir';
import ChartMoistureGround from '../ChartHistoricComponent/moistureGround';
import ChartPressure from '../ChartHistoricComponent/pressure';
import ChartQualityAir from '../ChartHistoricComponent/qualityAir';
import ChartRainfall from '../ChartHistoricComponent/rainfall'
import ChartWind from '../ChartHistoricComponent/wind';

const HistoricComponent = () => {
  return (
    <>
      <div className='rowC'>
        <div className="card_container" >
          <ChartHeight />
        </div>

        <div className="card_container">
          <ChartMoistureAir />
        </div>

        <div className="card_container">
          <ChartMoistureGround />
        </div>

        <div className="card_container">
          <ChartPressure />
        </div>

        <div className="card_container">
          <ChartQualityAir />
        </div>
        <div className="card_container">
          < ChartRainfall />
        </div>
        <div className="card_container">
          <ChartWind />
        </div>
      </div>
    </>
  );
}

export default HistoricComponent