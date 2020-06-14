import React from 'react';

const books  = [
  {
    img: 'https://static.zlibcdn.com/covers300/books/6c/d7/01/6cd7019852b43e6e67f5b21d8a60b1db.jpg',
    quote: 'A room without <strong>book</strong> is like a body without a soul.'
  }, {
    img: 'https://static.zlibcdn.com/covers300/books/54/fc/3b/54fc3b79216a35cf6b133eae91e7a612.jpg',
    quote: 'If you don’t like to read, you haven’t found the right <strong>book</strong>'
  }, {
    img: 'https://static.zlibcdn.com/covers300/books/13/d2/f6/13d2f692c3dd3a90a7ec5aceb8b62b01.jpg',
    quote: 'Take a good <strong>book</strong> to bed with you—<strong>books</strong> do not snore.'
  }
]

export default class Slider extends React.Component {
  state = {active: 0, _interval: null, width: null};

  loopItems = () => {
    let _interval = setInterval(() => {
      const {active} = this.state;
      if(active === 2)
        this.setState({active: 0});
      else
        this.setState({active: active + 1});
    }, 2500);
    this.setState({_interval});
  }

  componentDidMount() {
    this.setState({width: window.innerWidth}, () => this.loopItems());
  }

  componentWillUnmount() {
    const {_interval} = this.state;
    clearInterval(_interval);
  }

  render() {
    const {active, width} = this.state;
    console.log(active, width, 'active');

    return (
      <div className="slider">
        <div className="slider-items" style={{transform: `translateX(-${active * width}px)`}}>
          {books.map((book, i) => {
            return (
              <div className="slider-item" key={`slider-${i}`}>
                <div className="container">
                  <div className="book-img-wrapper">
                    <img src={book.img} className="book-img" />
                  </div>
                  <div className="book-quote-wrapper">
                    <p className="book-quote" dangerouslySetInnerHTML={{__html:book.quote}} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="slider-highlights">
          {books.map((book, i) => {
            return (<div className={`slider-highlight ${active === i ? 'active' : ''}`} key={`slider-highlight-${i}`}></div>);
          })}
        </div>
      </div>
    )
  }
}