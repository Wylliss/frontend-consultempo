import './style.css'
const ForecastComponent = () => {
  return (
    <>
      <div className="weather_temperature">
        <h4>Temperatura</h4>
        <p>24°C</p>
      </div>
      <div className="card_container">
        <div className="card_row">
          <div className="card_col">
            Qualidade do Ar - Historico
          </div>
          <div className="card_col">
            76
          </div>
        </div>
      </div>
    </>
  );
}

export default ForecastComponent