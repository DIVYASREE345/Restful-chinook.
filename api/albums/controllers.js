const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM albums`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => {
    const sql = `SELECT * FROM artists WHERE AlbumId = ${req.params.id}`;
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
  },
  update: (req, res) => {
    // read row data from body
  },
  delete: (req, res) => { }
}

module.exports = controllers;
