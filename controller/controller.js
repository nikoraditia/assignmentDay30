const db = require('../config/database') 

function insertStore(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO store (petId, quantity, status) VALUES (?);`
    db.query(insertQuery, data.description, function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

function listStore(req, res) {
    let selectQuery = `SELECT * FROM store`

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}

function updateStore(req, res) {
    let updateQuery = `UPDATE store SET status = ? WHERE id = ?`
    let data = [req.body.status, req.params.id]  
    
    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

function deleteStore(req, res) {
    let deleteQuery = `DELETE FROM store WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertStore,
    listStore,
    updateStore,
    deleteStore
}