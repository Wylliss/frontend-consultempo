import React, { Component } from 'react';
import {Line } from 'react-chartjs-2'

class ChartComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {


            data: {
                datasets: [{
                    label: 'Minima',
                    data: [20, 22, 30, 16,16,19,18],
                    borderColor: 'blue',
                    backgroundColor:  '#6AAFD1',                    
                    type: 'line',


                }, {
                    label: 'Maxima',
                    data: [30, 35, 40, 25,23,26,29],
                    borderColor: 'red',
                    backgroundColor:  'orange',
                    type: 'line'

                }],
                
                labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
            },
        }
    }


    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.data}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        )
    }
}
export default ChartComponent