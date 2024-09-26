import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import SearchBar from '../../components/SearchBar/SearchBar';
import TourDisplay from '../../components/tourDisplay/tourDisplay';
import { Layout } from 'antd';

const { Content } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: '0 50px', marginTop: '64px' }}>
        <Banner />
        <SearchBar />
        <TourDisplay />
      </Content>
    </Layout>
  );
};

export default HomePage;