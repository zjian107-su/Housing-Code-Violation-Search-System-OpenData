var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "capstone",
  password: "466"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


