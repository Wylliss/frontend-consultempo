import './style.css'
import Chart from '../ChartComponent';
const ForecastComponent = () => {
    return (
      <>
        
          <div className="card_container">
            Qualidade do Ar
            <Chart />
          </div>
          <div className="card_container">
            Umidade do ar
            <Chart />
          </div>
          <div className="card_container">
            Umidade do solo
            <Chart />
          </div>
  
       

      </>
    );
  }

export default ForecastComponent