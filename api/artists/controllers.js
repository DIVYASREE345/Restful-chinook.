const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM artists`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => {
    const sql = `SELECT * FROM artists WHERE ArtistId = ${req.params.id}`;
    db.get (sql, (err,rows)=> {
      if (err){
        res.status(400).json({"error":err.message});
        return;
      }
      res.json(rows);
    })
   },
   create: (req, res) => {
    // read row data from body
    const { Name } = req.body;
    // console.log(Name)
    const queryString = `INSERT INTO Artists (Name)
                        VALUES ("${Name}")`;

    db.run(queryString, [], function (err, rows) {
      if (err) {
        res.status(400).json({ error: err.message });
        return 
      }
      res.status(201).json("Artist added succesfully");
    });
  },
  update: (req, res) => {
    // read row data from body
  },
  delete: (req, res) => { }
}

module.exports = controllers;
