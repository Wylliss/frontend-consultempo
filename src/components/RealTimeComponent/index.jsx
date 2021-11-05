import './style.css'
import api from '../../services/api'
import React from 'react'

export default class RealTimeComponent extends React.Component {

  state = {
    posts: [],
    posts2: []
  }

  componentDidMount() {
    api.get('/weather/historic')
      .then(res => {
        const posts = res.data; //array completo
        const posts2 = res.data[res.data.length - 1] //apenas um objeto do array
        console.log(posts);
        console.log(posts2)

        this.setState({ posts , posts2 });
      })
  }

  render() {
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
              {this.state.posts2.map(post => <li>{post.airQuality}</li>)}
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

}