const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

function getProductByBarcode(barcode) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM products WHERE barcode = ?";
    connection.query(query, [barcode], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
}
