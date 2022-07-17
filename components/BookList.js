import React from "react";
import Header from "./Header";
import { Container, Table, Box, Button, Anchor } from "@mantine/core";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function BookList({ bookData }) {
  const router = useRouter();
  // const deleteBook = async (id) => {
  //   let data = await axios.delete(`http://localhost:3000/api/book${id}`);
  //   router.push("/book");
  // };
  const deleteBook = async (id) => {
    let data = await axios.delete(`http://localhost:3000/api/book/${id}`);
    router.push("/books");
  };
  const rows = bookData.map((item) => (
    <tr key={item.book_id}>
      <td>{item.book_id}</td>
      <td>{item.book_article}</td>
      <td>{item.book_type}</td>
      <td>${item.unit_price}</td>
      <td>{item.in_stock}</td>
      <td>{item.book_author}</td>

      <td>
        <Button
          color="red"
          radius="sm"
          style={{ margin: 10 }}
          onClick={() => deleteBook(item.book_id)}
        >
          Delete
        </Button>
        <Button color="teal" radius="sm" style={{ margin: 10 }}>
          <Link href={`/book/${item.book_id}`}>
            <a>Update</a>
          </Link>
        </Button>
      </td>
    </tr>
  ));
  console.log("book", bookData);
  return (
    <div className="app">
      <Header />
      <Container style={{ marginTop: "20px", paddingTop: "20px" }}>
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
                <th>Book ID</th>
                <th>Book article</th>
                <th>Book type</th>
                <th>price</th>
                <th>In stock</th>
                <th>Writter</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <Button
            color="dark"
            radius="sm"
            style={{
              margin: 10,
              width: 200,
            }}
          >
            <Link href={"/addbooks"}>
              <a>Add book to library</a>
            </Link>
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default BookList;
