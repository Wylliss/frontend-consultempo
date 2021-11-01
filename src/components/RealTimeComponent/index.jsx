import './style.css'
const RealTimeComponent = () => {
  return (
    <>
      <div className="weather_temperature">
        <h4>Temperatura</h4>
        <p>24°C</p>
      </div>
      <div className="card_container">
        <div className="card_row">
          <div className="card_col">
            Qualidade do Ar
          </div>
          <div className="card_col">
            76
          </div>
        </div>
        <div className="card_row">
          <div className="card_col">
            Umidade do Ar
          </div>
          <div className="card_col">
            61.5 %
          </div>
        </div>
        <div className="card_row">
          <div className="card_col">
            Umidade do Solo
          </div>
          <div className="card_col">
            774 %
          </div>
        </div>
        <div className="card_row">
          <div className="card_col">
            Altura
          </div>
          <div className="card_col">
            1 m
          </div>
        </div>
        <div className="card_row">
          <div className="card_col">
            Pluviosidade
          </div>
          <div className="card_col">
            0 mm³
          </div>
        </div>
        <div className="card_row">
          <div className="card_col">
            Pressão
          </div>
          <div className="card_col">
            926 PA
          </div>
        </div>
        <div className="card_row">
          <div className="card_col">
            Vento
          </div>
          <div className="card_col">
            20 km/h
          </div>
        </div>
      </div>
    </>
  );
}

export default RealTimeComponent