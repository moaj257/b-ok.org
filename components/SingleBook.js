import React from 'react';
// import Link from 'next/link';

const SingleBook = ({title, book}) => {
  return (
    <div className="single-list">
      <div className="books-heading relative">
        <div className="absolute title-bg z-0">{title}</div>
        <div className="relative title z-10">{book.name}</div>
      </div>
      <div className="book-item">
        <div className="book-left">
            <div className="book-img-wrapper">
                <img src={book.img} className="book-img" />
            </div>
            {/* <div className="book-download-wrapper book-box dark-purple">
                <a target="_blanks" href={book.link}>{`Download`}</a>
            </div> */}
            {book.year && (<div className="book-year-lang-wrapper">
                <div className="book-year-wrap book-box light-green" title={book.year}>{book.year}</div>
            </div>)}
            {book.language && (<div className="book-year-lang-wrapper">
                <div className="book-lang-wrap book-box light-blue" title={book.language}>{book.language}</div>
            </div>)}
            {book.pages && (<div className="book-page-size-wrapper">
                <div className="book-page-wrap book-box light-orange" title={book.pages}>{book.pages}</div>
            </div>)}
            {book.file && (<div className="book-page-size-wrapper">
                <div className="book-size-wrap book-box light-purple" title={book.file}>{book.file}</div>
            </div>)}
            {book.category && (<div className="book-category-wrapper book-box dark-rose" title={book.category}>{book.category}</div>)}
        </div>
        <div className="book-right">
            <div className="book-title">{book.name}</div>
            <div className="book-desc">{book.desc}</div>
        </div>
      </div>
    </div>
  )
}

export default SingleBook;