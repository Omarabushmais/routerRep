import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        const result = await response.json();
        console.log("Fetched book data:", result);

        setBook(result);
      
    };
    fetchBookDetails();
  }, [id]);


  return (
    <div>
        <h1>{book?.title}</h1>
        <h3>
          {typeof book?.description === "string"
            ? book.description
            : book?.description?.value}
        </h3>
        {book?.covers?.[0] && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
            alt={book.title}
          />
        )}
        
      
    </div>
  );
}

export default BookDetails;



