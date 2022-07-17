const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "sql_bookstore",
});

pool.getConnection((err) => {
  if (err) {
    console.log("connection error");
  } else {
    console.log("connected...");
  }
});
const executeQuery = (query, arrParms) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrParms, (err, data) => {
        if (err) {
          console.log("error with query");
          reject(err);
        }
        resolve(data);
      });
    } catch (error) {
      reject(err);
    }
  });
};
module.exports = { executeQuery };
