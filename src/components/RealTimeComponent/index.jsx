import './style.css'
import api from '../../services/api'
import React from 'react'

export default class RealTimeComponent extends React.Component {

  state = {
    realtime: [],

  }
  
  componentDidMount() {
    api.get('/weather/last')
      .then(res => {
        console.log(res.data)
        this.setState({ realtime: res.data });
      })
  }

  render() {

    const { realtime } = this.state;

    return (
      <>
        <div className="weather_temperature">
          <h4>Temperatura</h4>
          <h4>{realtime.temperature} °C</h4>
        </div>
        <div className="card_container">
          <div className="card_row">
            <div className="card_col">
              Qualidade do Ar
            </div>
            <div className="card_col">
              {realtime.airQuality}
            </div>
          </div>
          <div className="card_row">
            <div className="card_col">
              Umidade do Ar
            </div>
            <div className="card_col">
              {realtime.airHumidity}
            </div>
          </div>
          <div className="card_row">
            <div className="card_col">
              Umidade do Solo
            </div>
            <div className="card_col">
              {realtime.groundHumidity}
            </div>
          </div>
          <div className="card_row">
            <div className="card_col">
              Altura
            </div>
            <div className="card_col">
              {realtime.height}
            </div>
          </div>
          <div className="card_row">
            <div className="card_col">
              Pluviosidade
            </div>
            <div className="card_col">
              {realtime.pluviosity}
            </div>
          </div>
          <div className="card_row">
            <div className="card_col">
              Pressão
            </div>
            <div className="card_col">
              {realtime.pressure}
            </div>
          </div>
          <div className="card_row">
            <div className="card_col">
              Vento
            </div>
            <div className="card_col">
              {realtime.wind}
            </div>
          </div>
        </div>
      </>
    );
  }

}