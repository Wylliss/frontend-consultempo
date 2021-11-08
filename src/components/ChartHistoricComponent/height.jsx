import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import api from '../../services/api';


export default class height extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    state = {
        historic: [],

    }

    componentDidMount() {
        api.get('/weather/historic')
            .then(res => {
                console.log(res.data)
                this.setState({ historic: res.data });
            })
    }


    render() {

        const { historic } = this.state;
         n       
        return (
            <ResponsiveContainer width="70%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={historic}
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
                    <Line type="monotone" dataKey="height" stroke="#8884d8" activeDot={{ r: 8 }} />                    
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
