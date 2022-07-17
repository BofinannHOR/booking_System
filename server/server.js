const express = require("express");
const { executeQuery } = require("../config/db");
const port = 9000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
s;

app.get("/book", async (req, res, next) => {
  try {
    let bookData = await executeQuery("SELECT * FROM books");
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.get("/book/:id", async (req, res, next) => {
  let id = req.params.id;
  try {
    let bookData = await executeQuery("SELECT * FROM books WHERE book_id=?", [
      id,
    ]);
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.post("/saveBook", async (req, res, next) => {
  try {
    const { book_article, book_type, unit_price, in_stock, book_author } =
      req.body;
    let bookData = await executeQuery(
      "INSERT INTO books(book_article,book_type,unit_price,in_stock,book_author)VALUES(?,?,?,?,?)",
      [book_article, book_type, unit_price, in_stock, book_author]
    );
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.listen(port, () => console.log(`server currently run on port ${port}`));
