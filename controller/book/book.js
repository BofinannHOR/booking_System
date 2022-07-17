import { executeQuery } from "../../config/db";
import bookValidation from "../../common/bookValidation";
import ErrorHandler from "../../common/errorHandler";
const getAllBooks = async (req, res) => {
  try {
    let bookData = await executeQuery("SELECT * FROM books", []);
    res.send(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
};
//get each book by id
const getBookById = async (req, res, next) => {
  let id = req.query.id;
  try {
    let bookData = await executeQuery(
      `SELECT * FROM books WHERE book_id=${id}`,
      []
    );
    if (bookData.length > 0) res.status(200).json(bookData);
    next(
      new ErrorHandler(
        `no such a book found in database with this id = [${id}]`,
        404
      )
    );
    // res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json();
  }
};
//delete book
const deleteBookById = async (req, res) => {
  let id = req.query.id;
  try {
    let bookData = await executeQuery("DELETE FROM books WHERE book_id=?", [
      id,
    ]);
    res.status(200).json(bookData);
  } catch (error) {
    res.status(500).json(err);
  }
};
// add new book
const saveBook = async (req, res) => {
  // console.log(req.body);
  try {
    const result = req.body;
    const { book_article, book_type, unit_price, in_stock, book_author } =
      result;
    let { error } = bookValidation(result);
    if (error) {
      res.status(400).json(error.details[0].message);
    } else {
      console.log("post request");
      let bookData = await executeQuery(
        "INSERT INTO books(book_article,book_type,unit_price,in_stock,book_author)VALUES(?,?,?,?,?)",
        [book_article, book_type, unit_price, in_stock, book_author]
      );
      bookData = await executeQuery(
        `SELECT * FROM books WHERE book_id=${bookData.insertId}`
      );
      res.status(201).json(bookData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
// update book
const updateBook = async (req, res) => {
  let id = req.query.id;
  const { book_article, book_type, unit_price, in_stock, book_author } =
    req.body;
  try {
    let bookData = await executeQuery(" SELECT * FROM books WHERE book_id=?", [
      id,
    ]);
    if (bookData.length > 0) {
      bookData = await executeQuery(
        "UPDATE books SET book_article=?,book_type=?,unit_price=?, in_stock=?,book_author=? WHERE book_id=?",
        [book_article, book_type, unit_price, in_stock, book_author, id]
      );
      res.status(200).json(bookData);
    } else {
      res.status(400).json(`book not found due to id = ${id}`);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export { getAllBooks, getBookById, deleteBookById, saveBook, updateBook };
