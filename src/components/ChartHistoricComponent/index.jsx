import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import api from '../../services/api';
import moment from 'moment';
import 'moment/locale/pt-br';
import './style.css'

export default class height extends PureComponent {

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

        function formatXAxis(tickItem) {
            moment.locale('pt-br')
            return moment(tickItem).format('l')
        }

        return (
            <>
                <div>
                    <div>
                        <LineChart className="chart"
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
                            <XAxis dataKey="dateTime" tickFormatter={formatXAxis}>
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
                            <defs>
                                <linearGradient id="temperature" x1="0%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="#d3f0bc" />
                                    <stop offset="25%" stopColor="#94e854" />
                                    <stop offset="50%" stopColor="#dbe854" />
                                    <stop offset="75%" stopColor="#ff8317" />
                                    <stop offset="100%" stopColor="#ff0000" />
                                </linearGradient>
                            </defs>
                            <Line dataKey="temperature" name="Temperatura" unit={"°C"}
                                dot={false}
                                type={"natural"}
                                stroke="url(#temperature)"
                                strokeWidth="4px" />
                        </LineChart>
                    </div>
                    <div >
                        <LineChart className="chart"
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
                            <XAxis dataKey="dateTime" tickFormatter={formatXAxis}>
                                <Label
                                    position="bottom"
                                    style={{ textAnchor: "middle" }}
                                />
                            </XAxis>
                            <YAxis>
                                <Label
                                    value={"Percentual"}
                                    position="left"
                                    angle={-90}
                                    style={{ textAnchor: "middle" }}
                                />
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Line dataKey="airHumidity" name="Umidade do ar" unit={"%"} />
                        </LineChart>
                    </div>
                    <div>
                        <LineChart className="chart"
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
                            <XAxis dataKey="dateTime" tickFormatter={formatXAxis}>
                                <Label
                                    position="bottom"
                                    style={{ textAnchor: "middle" }}
                                />
                            </XAxis>
                            <YAxis>
                                <Label
                                    value={"Indice qualidade do ar"}
                                    position="left"
                                    angle={-90}
                                    style={{ textAnchor: "middle" }}
                                />
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Tooltip />
                            <Legend />
                            <Line dataKey="airQuality" name="Qualidade do ar" />
                        </LineChart>
                    </div>
                </div>
                <div>
                    <div>
                        <LineChart className="chart"
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
                            <XAxis dataKey="dateTime" tickFormatter={formatXAxis}>
                                <Label
                                    position="bottom"
                                    style={{ textAnchor: "middle" }}
                                />
                            </XAxis>
                            <YAxis>
                                <Label
                                    value={"Indice umidade do solo"}
                                    position="left"
                                    angle={-90}
                                    style={{ textAnchor: "middle" }}
                                />
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Line dataKey="groundHumidity" name="umidade do solo" />
                        </LineChart>
                    </div>
                    <div>
                        <LineChart className="chart"
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
                            <XAxis dataKey="dateTime" tickFormatter={formatXAxis}>
                                <Label
                                    position="bottom"
                                    style={{ textAnchor: "middle" }}
                                />
                            </XAxis>
                            <YAxis>
                                <Label
                                    value={"Altura em relação ao nivel do mar"}
                                    position="left"
                                    angle={-90}
                                    style={{ textAnchor: "middle" }}
                                />
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Line dataKey="height" name="Altura" unit={"metro(s)"} />
                        </LineChart>
                    </div>
                    <div>
                        <LineChart className="chart"
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
                            <XAxis dataKey="dateTime" tickFormatter={formatXAxis}>
                                <Label
                                    position="bottom"
                                    style={{ textAnchor: "middle" }}
                                />
                            </XAxis>
                            <YAxis>
                                <Label
                                    value={"Indice de pluviosidade"}
                                    position="left"
                                    angle={-90}
                                    style={{ textAnchor: "middle" }}
                                />
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Line dataKey="pluviosity" name="Pluviosidade" />
                        </LineChart>
                    </div>
                </div>
                <div>
                    <div>
                        <LineChart className="chart"
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
                            <XAxis dataKey="dateTime" tickFormatter={formatXAxis}>
                                <Label
                                    position="bottom"
                                    style={{ textAnchor: "middle" }}
                                />
                            </XAxis>
                            <YAxis>
                                <Label
                                    value={"Indice pressão atmosferica"}
                                    position="left"
                                    angle={-90}
                                    style={{ textAnchor: "middle" }}
                                />
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Line dataKey="pressure" name="Pressão atmosferica" unit={"Pa"} />
                        </LineChart>
                    </div>

                    <div>
                        <LineChart className="chart"
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
                            <XAxis dataKey="dateTime" tickFormatter={formatXAxis}>
                                <Label
                                    position="bottom"
                                    style={{ textAnchor: "middle" }}
                                />
                            </XAxis>
                            <YAxis>
                                <Label
                                    value={"Vento (km/h)"}
                                    position="left"
                                    angle={-90}
                                    style={{ textAnchor: "middle" }}
                                />
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Line dataKey="wind" name="Vento" unit={"Km/h)"} />
                        </LineChart>
                    </div>
                </div>
            </>
        );
    }
}
