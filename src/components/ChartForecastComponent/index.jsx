import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import api from '../../services/api';


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
       
       
        return (
            <ResponsiveContainer width="70%" height="100%">
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
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="maximum" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="minimum" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
