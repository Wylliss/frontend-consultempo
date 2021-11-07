import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs-2'
import './style.css'
import api from '../../services/api';
import moment from 'moment';
import { Chart } from 'react-chartjs-2';
import { blue } from '@material-ui/core/colors';

class ChartForecastComponent extends React.Component {



    state = {
        forecast: [],

    }

    componentDidMount() {
        api.get('/forecast')
            .then(res => {
                console.log(res.data)
                this.setState({ forecast: res.data });
                const data = {
                    labels: res.data.date,
                    datasets: [{
                        label: "Maxima",
                        data: res.data.maximum,
                        backgroundColor: blue,
                        borderWidth: 1
                    },
                    {
                        label: "Minima",
                        data: res.data.minimum,
                        backgroundColor: blue,
                        borderWidth: 1
                    }]
                };
        
                const config = {
                    type: 'bar',
                    data,
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                }
        
                const myChart = new Chart(
                    document.getElementById('myChart'),
                    config
        
                );
                myChart.destroy();
            })
    }



    render() {
       

        return (
            <div className="chart" >
                <myChart />
            </div >
        )
    }
}

export default ChartForecastComponent
