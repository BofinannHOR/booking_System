import nc from "next-connect";
import onError from "../../../common/errorMiddleware";
import {
  getBookById,
  deleteBookById,
  updateBook,
} from "../../../controller/book/book";

const handler = nc({ onError });
handler.get(getBookById);
handler.delete(deleteBookById);
handler.put(updateBook);

export default handler;
