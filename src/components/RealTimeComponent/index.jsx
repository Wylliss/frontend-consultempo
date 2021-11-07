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

    const quality = realtime.airQuality;
    let comp;

    if (quality < 40) {
      comp = <h1>Bom</h1>
    } else if (quality > 40 & quality < 81) {
      comp = <h1>Moderada</h1>
    } else if (quality > 81 & quality < 120) {
      comp = <h1>Ruim</h1>
    } else if (quality > 121) {
      comp = <h1>Muito Ruim</h1>
    }

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
                {comp}
              </div>
            </div>
            <div className="card_row">
              <div className="card_col">
                Umidade do Ar
              </div>
              <div className="card_col">
                {realtime.airHumidity} %
              </div>
            </div>
            <div className="card_row">
              <div className="card_col">
                Umidade do Solo
              </div>
              <div className="card_col">
                {realtime.groundHumidity} %
              </div>
            </div>
            <div className="card_row">
              <div className="card_col">
                Altura
              </div>
              <div className="card_col">
                {realtime.height} m
              </div>
            </div>
            <div className="card_row">
              <div className="card_col">
                Pluviosidade
              </div>
              <div className="card_col">
                {realtime.pluviosity} mm³
              </div>
            </div>
            <div className="card_row">
              <div className="card_col">
                Pressão
              </div>
              <div className="card_col">
                {realtime.pressure} Pa
              </div>
            </div>
            <div className="card_row">
              <div className="card_col">
                Vento
              </div>
              <div className="card_col">
                {realtime.wind} Km/h
              </div>
            </div>
          </div>
        </>
      );
    }

  }