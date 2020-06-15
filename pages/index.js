import React from 'react';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';
import BookList from '../components/BookList';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import axios from 'axios';
import Head from 'next/head';

import CallToBg from '../assets/img/call-to-bg.svg';

import '../assets/css/app.css';

const Home = ({books}) => {
  return (
    <div className="app">
      <Head>
        <title>{`Booke`}</title>
      </Head>
      <div className="container-wrapper">
        <Navigation active="home" />
      </div>
      <Slider/>
      <div className="container-wrapper">
        <BookList title="Popular" books={books} />
      </div>
      <CallToAction />
      <Footer />
      <style jsx global>{`
        .call-to-action{background-image: url(${CallToBg});}
      `}</style>
    </div>
  );
}

Home.getInitialProps = async ({req}) => {
  const api = await axios.get(`http://${req.headers.host}/api/book`);
  return { books: api.data.books };
}

export default Home;