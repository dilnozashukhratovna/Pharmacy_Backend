const db = require("../config/db");

exports.getAllStock = (req, res) => {
    db.query("SELECT * FROM stock", (error, results) => {
        if (error) {
            console.log("Error selecting all stock:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
        res.json(results);
    });
};

exports.createStock = (req, res) => {
    const { pharmacy_id, medicine_id, quantity } = req.body;
    db.query(
        "INSERT INTO stock(pharmacy_id, medicine_id, quantity) VALUES(?, ?, ?)",
        [pharmacy_id, medicine_id, quantity],
        (error, results) => {
            if (error) {
                console.log("Error creating new stock: ", error);
                res.status(500).json({ error: "Internal server error" });
            }
            res.json({
                message: "New stock successfuly added!",
                stockId: results.insertId,
            });
        }
    );
};

exports.getStockById = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM stock WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error selecting stock by id: ", error);
            res.status(500).json({ error: "Internal server error" });
        }
        if (results.length === 0) {
            res.status(404).json({ error: "404 not found page" });
        }
        res.json(results);
    });
};

exports.updateStock = (req, res) => {
    const id = req.params.id;
    const { pharmacy_id, medicine_id, quantity } = req.body;
    db.query(
        "UPDATE stock SET pharmacy_id = ?, medicine_id = ?, quantity=? WHERE id = ?",
        [pharmacy_id, medicine_id, quantity, id],
        (error) => {
            if (error) {
                console.log("Error updating stock: ", error);
                res.status(500).json({ error: "Internal server error" });
            }
            res.json({ message: "Stock successfuly updated!" });
        }
    );
};

exports.deleteStock = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM stock WHERE id = ?", [id], (error) => {
        if (error) {
            console.log("Error deleting stock by id: ", error);
            res.status(500).json({ error: "Internal server error" });
        }
        res.json({ message: "Stock successfuly deleted!" });
    });
};
