import React from 'react';
import Header from '../../components/HeaderComponent';
import Body from '../../components/BodyComponent/index';

const Home = () => {
    return (
        <>
            <Header page="home" />
            <Body page="home"/> 
        </>
    );
}

export default Home;