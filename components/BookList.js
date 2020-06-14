import React from 'react';

const BookList = ({title, books}) => {
  return (
    <div className="book-list">
      <div className="books-heading relative">
        <div className="absolute title-bg z-0">{title}</div>
        <div className="relative title z-10">Books</div>
      </div>
      <div className="book-rows">
        {books.map((book, i) => {
          return (
            <div className="book" key={`book-${i}`}>
              <a href={book.href} title={book.title}>
                <img src={book.img} className="book-img" />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BookList;