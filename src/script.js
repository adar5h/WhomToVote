let express = require('express');
let mysql = require('mysql');
let app = express();

let connection = mysql.createConnection({
    // properties...
    // host: 'fdb33.awardspace.net',
    // user: '4004037_abc',
    // password: 'awardspace4004037',
    // database: '4004037_abc'
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'election'
});

connection.connect(function(err){ //callback
        if(!!err){
            console.log(err);
        }else{
            console.log('Connected');
        }
});

app.get('/', function(req, resp) {
    //SQL
        connection.query("SELECT * FROM Table", function(err, rows, fields){

            if(!!error){
                console.log("Error in the query");
            }else{
                console.log("Successful query!");
            }

        });
}); 

app.listen(1337);