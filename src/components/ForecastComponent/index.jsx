import './style.css'
import Chart from './../ChartComponent';
const ForecastComponent = () => {
  return (
    <>
      <div className="card_container2">
        <div className="card_row">
          Previsao Temperatura
        </div>
        <Chart />

      </div>
      <div className="card_container3">
        <div>
          <div className="card_row"> Segunda</div>
          <div className="card_col"> Tempestade</div>
        </div>
      </div>
    </>
  );
}

export default ForecastComponent