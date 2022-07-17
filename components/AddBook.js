import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "./Header";
import { Container, Box, Title, Input, Button } from "@mantine/core";
import { Database } from "tabler-icons-react";

function Addbook() {
  const router = useRouter();
  const [addBook, setAddBook] = useState({
    book_article: "",
    book_type: "",
    unit_price: "",
    in_stock: "",
    book_author: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(`http://localhost:3000/api/book`, addBook);
    // if (data.data) router.push("/books");
    setAddBook({
      book_article: "",
      book_type: "",
      unit_price: "",
      in_stock: "",
      book_author: "",
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setAddBook({ ...addBook, [e.target.name]: value });
  };
  return (
    <>
      <Container size="xs" px="xs" style={{ paddingTop: 10 }}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Title order={2}>Add new book</Title>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div>
              <Input
                style={{ marginTop: 10 }}
                type="text"
                name="book_article"
                placeholder="book name..."
                value={addBook.book_article}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                style={{ marginTop: 10 }}
                type="text"
                name="book_type"
                placeholder="type of book..."
                value={addBook.book_type}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                style={{ marginTop: 10 }}
                type="text"
                name="unit_price"
                placeholder="book price..."
                // rightSection="$"
                value={addBook.unit_price}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                style={{ marginTop: 10 }}
                type="text"
                name="in_stock"
                placeholder="amnout of book..."
                value={addBook.in_stock}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                style={{ marginTop: 10 }}
                type="text"
                name="book_author"
                placeholder="book writter..."
                value={addBook.book_author}
                onChange={handleChange}
              />
            </div>

            <div>
              <Button
                type="submit"
                color="blue"
                radius="sm"
                leftIcon={<Database size={14} />}
                style={{
                  margin: 10,
                  width: 200,
                  marginTop: 30,
                }}
              >
                Add to library
              </Button>
            </div>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Addbook;
