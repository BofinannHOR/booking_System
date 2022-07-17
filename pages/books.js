import React from "react";
import BookList from "../components/BookList";

function Books({ data }) {
  // console.log("book", data);
  return (
    <div className="app">
      <BookList bookData={data} />
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/book");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default Books;
