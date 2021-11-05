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
        <ChartHeight />
        <ChartMoistureAir />
        <ChartMoistureGround />
        <ChartPressure />
        <ChartQualityAir />
        <ChartRainfall />
        <ChartWind />
      </div>
    </>
  );
}

export default HistoricComponent