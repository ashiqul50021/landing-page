import React from 'react';
import About from '../About/About';
import AskedQuestion from '../AskedQuestion/AskedQuestion';
import Banner from '../Banner/Banner';
import Campain from '../Campaign/Campain';
import ChatWithLine from '../ChatWithLine/ChatWithLine';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import PopularProgram from '../PopularProgram/PopularProgram';
import RegiAndService from '../RegiAndService/RegiAndService';
import Searchbox from '../Searchbox/Searchbox';
import SearchCountry from '../SearchFromCountryArea/SearchCountry';
import SearchLanguage from '../SearchFromLanguage/SearchLanguage';
import SearchObject from '../SearchFromObject/SearchObject';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Searchbox />
            <Campain />
            <About />
            <ChatWithLine />
            <PopularProgram />
            <SearchCountry />
            <SearchObject />
            <SearchLanguage />
            <RegiAndService />
            <ChooseUs />
            <AskedQuestion />
            <Footer />
        </div>
    );
};

export default Home;