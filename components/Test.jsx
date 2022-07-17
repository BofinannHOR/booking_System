import React, { useState, useEffect } from "react";
import { Container, Table, Box } from "@mantine/core";
import axios from "axios";

const BookList = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    getAllBook();
  }, []);

  const getAllBook = async () => {
    let bookData = await axios.get("http://localhost:8080/getAllBooks");
    console.log(bookData.data);
    setBook(bookData.data);
  };

  const rows = book.map((item) => (
    <tr key={item.book_id}>
      <td>{item.book_article}</td>
      <td>{item.book_type}</td>
      <td>${item.unit_price}</td>
      <td>{item.in_stock}</td>
      <td>{item.book_author}</td>
    </tr>
  ));

  return (
    <Container style={{ marginTop: "20px" }}>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        <Table verticalSpacing="md" fontSize="md" striped>
          <thead>
            <tr>
              <th>Book article</th>
              <th>Book type</th>
              <th>price</th>
              <th>In stock</th>
              <th>Writter</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default BookList;