import './style.css'
import Chart from './../ChartForecastComponent';
import api from '../../services/api';
import React from 'react'
import moment from 'moment';
export default class ForecastComponent extends React.Component {

  state = {
    forecast: [],

  }

  componentDidMount() {
    api.get('/forecast')
      .then(res => {
        console.log(res.data)
        this.setState({ forecast: res.data });
      })
  }

  render() {

    const { forecast } = this.state;
    moment.locale('pt-br');

    return (
      <>
        <div className="card_container2 card_row">
          <Chart />
          <div >            
            {forecast.map(tempo => (
              <div>
                <h2>{moment(tempo.date).format('LL')}</h2>               
                <h2>{tempo.description}</h2>
                <br></br>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}