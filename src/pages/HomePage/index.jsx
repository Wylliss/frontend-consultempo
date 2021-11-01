import React from 'react';
import Header from '../../components/HeaderComponent';
import Body from '../../components/BodyComponent/index';
import MyCard from '../../components/CardComponent';


const Home = () => {
    return (
        <>
            <Header page="home" />
            <Body /> 
        </>
    );
}

export default Home;