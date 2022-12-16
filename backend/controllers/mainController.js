import mysql from 'mysql';

var conn = mysql.createConnection({
   host: "127.0.0.1",
   user: "admin",
   password: "Fatec0sasc0",
   database: "techinjobs"
 });

//  conn.connect(function(err) {
//    if (err) throw err;
//    console.log("Connected!");
//  });

var sql = "select * from vagas";


function getVacanciesFromDB ()
{
  let resultJSON
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    conn.query(sql, function (err, result) {
      if (err) throw err;
      //  console.log("Result: " + result);
       resultJSON = JSON.stringify(result);
      //  console.log(JSON.stringify(result));
    });
 });
 return resultJSON;

}

export const getVacancies = (req, res) => {
  let vacancies = getVacanciesFromDB();
  console.log(vacancies);
  res.send(vacancies);
}