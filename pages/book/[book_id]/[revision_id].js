import React from 'react';
import axios from 'axios';
import Navigation from '../../../components/Navigation';
import CallToAction from '../../../components/CallToAction';
import BookList from '../../../components/BookList';
import Footer from '../../../components/Footer';
import CallToBg from '../../../assets/img/call-to-bg.svg';
import Head from 'next/head';

import '../../../assets/css/app.css';
import SingleBook from '../../../components/SingleBook';

const SinglePage = ({data}) => {
  return (
    <div className="app">
      <Head>
        <title>{`${data.singleBook.name} - Booke`}</title>
      </Head>
      <div className="container-wrapper">
        <Navigation active="" />
      </div>
      <div className="light-gray">
        <div className="container-wrapper">
          <SingleBook title={'Single Book'} book={data.singleBook} />
        </div>
        <div className="container-wrapper">
          <BookList title={'Similar'} books={data.similar} />
        </div>
      </div>
      <CallToAction />
      <Footer />
      <style jsx global>{`
        .call-to-action{background-image: url(${CallToBg});}
      `}</style>
    </div>
  );
}

SinglePage.getInitialProps  = async ({req}) => {
  const api = await axios.get(`http://${req.headers.host}/api/book/single${req.url}`);
  return { data: api.data };
}

export default SinglePage;