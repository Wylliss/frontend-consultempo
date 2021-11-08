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


  
    render(b) {

        const { historic } = this.state;
        return (
            <>
            <div>
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
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="airHumidity" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
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
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="airQuality" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
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
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="groundHumidity" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
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
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="height" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
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
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pluviosity" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
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
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pressure" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
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
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
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
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="wind" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            </>
        );
    }
}
