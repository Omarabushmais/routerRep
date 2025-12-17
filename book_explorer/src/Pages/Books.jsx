import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
        const response = await fetch("https://openlibrary.org/search.json?q=programming");

        const result = await response.json();
        setBooks(result.docs);
      
    };

    fetchData();
  }, []);
 

  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => {
        
        const id = book.key.split('/').pop();
        return (
            <div key={book.key}>
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            )}
        
                <h2>Title:</h2>{" "}
                <Link to={`/BookDetails/${id}`}> 
                    {book.title} 
                </Link> 

                <h2>Author:</h2>{" "}
                {book.author_name?.join(", ")}
                
            <h1>-----------------------------</h1>
            </div>
        )
        
})}
    </div>
  );
}

export default Books;

