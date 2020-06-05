### b-ok.org

A simple, clean, fast and elegant books api which helps one to find books. More than 5 lakh books are available. Will be updating constantly. Please check and subscribe for more content.

An unofficial b-ok.org api.

#### API DOCUMENTAION
###### [Books Home](https://github.com/moaj257/b-ok.org#books-home)
###### [Top 100](https://github.com/moaj257/b-ok.org#top-100)
###### [Single Book](https://github.com/moaj257/b-ok.org#single-book)
###### [Search Books](https://github.com/moaj257/b-ok.org#search-books)

##### BOOKS HOME

###### REQUEST
```
   curl --silent --location --request GET 'https://b-ok.herokuapp.com/'
```
###### RESPONSE
```
{
    "data": [
        {
            "title": "How to Blow Her Mind in Bed: The essential guide for any man who wants to satisfy his woman",
            "href": "/book/946378/a39ab9?dsource=mostpopular",
            "img": "https://static.zlibcdn.com/covers300/books/9c/de/95/9cde954bfb23fd3969b30fb0a0441b09.jpg"
        },
        {
            "title": "Smart Thinking: Skills for Critical Understanding and Writing",
            "href": "/book/554686/c08ec0?dsource=mostpopular",
            "img": "https://static.zlibcdn.com/covers300/books/a3/45/9c/a3459c403398638208308d220747d6c5.jpg"
        },
        {...},
        {...}
    ]
}
```

##### TOP 100

###### REQUEST
```
   curl --silent --location --request GET 'https://b-ok.herokuapp.com/top'
```
###### RESPONSE
```
{
    "data": [
        {
            "title": "Computer Hacking for Beginners",
            "href": "/book/2563260/b2147c?dsource=mostpopular",
            "img": "https://static.zlibcdn.com/covers300/books/99/24/d8/9924d843708d6054a63556e229579975.jpg"
        },
        {
            "title": "Modern Sauces: More than 150 Recipes for Every Cook, Every Day",
            "href": "/book/1313094/1df7ee?dsource=mostpopular",
            "img": "https://static.zlibcdn.com/covers300/books/a6/d6/e7/a6d6e78e29434cb1cc2c40d7adb998b6.jpg"
        },
        {...},
        {...}
    ]
}
```

##### SINGLE BOOK

###### REQUEST
```
   curl --silent --location --request GET 'https://b-ok.herokuapp.com/book/single/book/{:bookid}/{:versionid}'
```
###### RESPONSE
```
{
    "data": {
        "name": "Grammar for Everyone: Practical Tools for Learning and Teaching Grammar",
        "desc": "Our national language, and the culture from which it has formed, is the rightful inheritance of all English-speaking people. It deserves to be taught with knowledge and respect. English is now spoken, also, by more than 500 million people around the world. They need the opportunity to learn to speak and write it confidently, and correctly. Grammar provides a language to talk about language. As a mechanic needs naming words for the parts of an engine, so a student needs naming words for the components of speech and writing. This practical book provides all who learn or teach Grammar with these skills in a clear step-by-step process. It provides teachers with an armoury of learning strategies to use at all levels. Grammar should be fun to teach and fun to learn.",
        "category": "Linguistics\\\\Foreign: English",
        "year": "2007",
        "publisher": "Acer Press",
        "language": "english",
        "pages": "224",
        "file": "PDF, 3.56 MB",
        "link": "/dl/701405/5593b3?dsource=mostpopular"
    },
    "similar": [
        {
            "title": "The A-Z of Correct English ",
            "href": "/book/459456/309fab?dsource=recommend",
            "img": "https://static.zlibcdn.com/covers200/books/dc/59/a6/dc59a6132405d3f46c4dd23b5da8ce06.jpg"
        },
        {
            "title": "An Introduction to English Sentence Structure",
            "href": "/book/540761/512818?dsource=recommend",
            "img": "https://static.zlibcdn.com/covers200/books/61/c7/bd/61c7bd7fc7ebdd76d30199585e208aba.jpg"
        },
        {...},
        {...}
    ]
}
```

##### SEARCH BOOKS

###### REQUEST
```
   curl --silent --location --request GET 'https://b-ok.herokuapp.com/book/search?q={:query}&page={:page_number}'
```
###### RESPONSE
```
{
    "data": [
        {
            "counter": "1",
            "img": "https://static.zlibcdn.com/covers100/books/d6/0b/c0/d60bc0290422ef98d7bcf78d7edee0da.jpg",
            "link": "/book/2364078/e40b27",
            "title": "A Mind For Numbers: How to Excel at Math and Science (Even if You Flunked Algebra)",
            "publiser": "Tarcher",
            "authors": "Barbara Oakley",
            "year": "2014",
            "language": "english",
            "file": "EPUB, 8.90 MB"
        },
        {
            "counter": "2",
            "img": "https://static.zlibcdn.com/covers100/books/fb/8a/1e/fb8a1e45659cb11f26690d8de4cdfebf.jpg",
            "link": "/book/675718/aba47d",
            "title": "Illustrated Maths Dictionary",
            "publiser": "Pearson",
            "authors": "Judith De Klerk",
            "year": "2007",
            "language": "english",
            "file": "PDF, 16.44 MB"
        },
        {...},
        {...}
    ]
}
```

#### TODOS:
  - [x] Home Books api
  - [x] Top 100 Books api
  - [x] Single Book api
  - [ ] View / Download Book
  - [x] Search Books api
     - [ ] Multiple Author Issues.
     - [ ] Adding Search Specific Features
  - [ ] Authentication
     - [ ] Login
     - [ ] Register
     - [ ] Logout
  - [ ] User Permissions