const  express = require('express');
const  mysql = require('mysql');
const app = express();

let con = mysql.createConnection({
    // properties...
    host: 'fdb33.awardspace.net',
    user: '4004037_abc',
    password: 'awardspace4004037',
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'election'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// app.get('/', function(req, resp) {
//     //SQL
//         connection.query("SELECT * FROM Table", function(err, rows, fields){

//             if(!!error){
//                 console.log("Error in the query");
//             }else{
//                 console.log("Successful query!");
//             }

//         });
// }); 

// app.listen(1337);