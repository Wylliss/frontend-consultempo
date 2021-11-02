import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

class ChartMoistureGround extends Component {

    constructor(props) {
        super(props);

        this.state = {

            data: {
                datasets: [{
                    label: 'Umidade do Solo',
                    data: [20, 22, 30, 16, 16, 19, 18],
                    borderColor: 'blue',
                    backgroundColor: '#6AAFD1',
                    type: 'line',
                }],
                labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
            },
        }
    }


    render() {
        return (
            <div className="card_container3">
                <Line
                    data={this.state.data}
                    options={{
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                labels: {                                    
                                    font: {
                                        size:20,
                                        family: 'Helvetica',

                                    }
                                }
                            },
                        }
                    }}
                />
            </div>
        )
    }
}
export default ChartMoistureGround
