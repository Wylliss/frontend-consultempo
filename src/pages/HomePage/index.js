import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/HeaderComponent';
import Body from './../../components/BodyComponent/index';


const Home = () => {
    return (
        <><Header /><Body /> <div>Aqui esta a Home Page</div></>   
    );
}

export default Home;