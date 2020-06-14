import React from 'react';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';
import BookList from '../components/BookList';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import axios from 'axios';

import CallToBg from '../assets/img/call-to-bg.svg';

// import * as GlobalStyles from '../assets/css/app.css';

const Home = ({books}) => {
  return (
    <div className="app">
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
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

        *{margin: 0; padding: 0; box-sizing: border-box;}
        *:active, *:focus{outline: none;}
        body, button{font-family: 'Roboto Condensed', sans-serif;}
        ul{list-style: none;}
        a{text-decoration: none; color: inherit;}
        .relative{position: relative;}
        .absolute{position: absolute;}
        .z-0{z-index: 0;}
        .z-10{z-index: 10;}
        .container-wrapper, .container, .container-inner{max-width: 900px; margin: 0 auto;}
        .container{max-width: 750px;}
        .container-inner{max-width: 600px;}
        
        .navigation{padding: 10px 10px;}
        .navigation-inner, .navigation-inner .nav-items, .search-box, .call-to-action .container-wrapper, .slider-item .container, .slider .slider-items, .slider .slider-highlights, .footer .container-wrapper, .footer .links-list{display: flex; justify-content: space-between; align-items: center;}
        .navigation .nav-item{padding: 0 10px; font-size: 18px; font-weight: normal;}
        .navigation .nav-item-a.active{border-bottom: 3px solid #5e05ff;}
        
        .slider{background-color: #5e05ff33; overflow: hidden;}
        .slider .slider-items{width: 300%; transition: all 0.3s;}
        .slider-item .container, .slider .slider-items, .slider .slider-highlights{align-items: flex-end;}
        .slider-item{width: 100%; padding: 40px 0px;}
        .slider-item .book-img{height: 200px;}
        .slider-item .book-quote{font-size: 48px; margin-left: 24px; margin-bottom: 15px;}

        .slider .slider-highlights{padding: 10px; align-items: center; justify-content: center;}
        .slider .slider-highlight{height: 5px; width: 5px; background-color: #5e05ff; margin: 0px 4px; border-radius: 5px; transition: all 0.3s;}
        .slider .slider-highlight.active{width: 62px;}

        .books-heading{min-height: 125px;}
        .books-heading .title, .books-heading .title-bg{font-size: 36px; font-weight: bold;}
        .books-heading .title-bg{font-size: 96px; color: #00000033;}
        .books-heading .title{top: 40px; left 20px;}

        .book-rows{display: grid; grid-template-columns: auto auto auto auto; grid-gap: 37px;}
        .book-rows .book{text-align: center;}
        .book-rows .book-img{height: 280px; width: 180px; border-radius: 5px; overflow: hidden; border: 1px solid #eee; box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);}

        .call-to-action{background-color: rgba(94, 5, 255, 0.2); background-image: url(${CallToBg}); background-repeat: no-repeat; background-position: right bottom; background-size: 60% 150%; margin-top: 40px;}
        .call-to-action .container-wrapper{padding: 50px 20px;}
        .call-to-action .title{font-size: 48px; line-height: 56px; margin-bottom: 10px;}
        .call-to-action .desc{font-weight: 300; font-size: 24px; line-height: 28px; color: #5E05FF; border-bottom: 2px solid;}
        .call-to-action .start-now-btn{font-size: 36px; line-height: 42px; background-color: #140A26; padding: 20px 45px; border-radius: 5px; color: #fff; white-space: nowrap;}

        .footer .container-wrapper{justify-content: flex-start; align-items: flex-end;}
        .footer .footer-left{text-align: center;}
        .footer .footer-right{margin-left: 25px; margin-bottom: 20px;}
        .footer .footer-right .title{color: #BA99F5; font-size: 30px; margin-bottom: 20px;}
        .footer .footer-right ul li{margin: 0px 20px;}

        @media screen and (max-width: 768px){
          .book-rows{grid-template-columns: auto auto auto; grid-gap: 10px;}
          .container-wrapper, .container, .container-inner{overflow: hidden;}
        }

        @media screen and (max-width: 480px){
          .slider-item{width: 100%; padding: 25px 0px;}
          .slider .slider-item .container, .call-to-action .container-wrapper{flex-direction: column; align-items: center;}
          .slider-item .book-quote{margin-left: 0; margin-bottom: 0; padding: 15px 20px; text-align: center;}
          .book-rows{grid-template-columns: auto auto; grid-gap: 10px;}
          .call-to-action .start-now-btn{margin-top: 20px;}
          .book-rows .book-img{height: 200px; width: 140px;}
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async ({req}) => {
  const api = await axios.get(`http://${req.headers.host}/api/book`);
  return { books: api.data.books };
}

export default Home;