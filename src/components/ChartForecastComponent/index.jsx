import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';
import api from '../../services/api';
import moment from 'moment';
import 'moment/locale/pt-br'

export default class ChartForecast extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

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

        function formatXAxis(tickItem) {
            moment.locale('pt-br')
            return moment(tickItem).format('dddd')  

        }


        return (
            <ResponsiveContainer width="70%" height="100%"  >
                <LineChart
                    width={500}
                    height={300}
                    data={forecast}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={formatXAxis} >
                        <Label
                            position="bottom"
                            style={{ textAnchor: "middle" }}
                        />
                    </XAxis>
                    <YAxis>
                        <Label
                            value={"Temperatura ºC"}
                            position="left"
                            angle={-90}
                            style={{ textAnchor: "middle" }}
                        />
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Line name="Máxima" dataKey="maximum" stroke="#b03407" />
                    <Line name="Mínima" dataKey="minimum" stroke="#07b06d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
