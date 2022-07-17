import nc from "next-connect";
import { getAllBooks, saveBook } from "../../../controller/book/book";
import onError from "../../../common/errorMiddleware";

const handler = nc({ onError });
handler.get(getAllBooks);
handler.post(saveBook);
export default handler;
