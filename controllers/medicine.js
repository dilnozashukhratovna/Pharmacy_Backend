const db = require("../config/db");

exports.getAllMed = (req, res) => {
    db.query("SELECT * FROM medicines", (error, results) => {
        if (error) {
            console.log("Error selecting all medicines: ", error);
            res.status(500).json({ error: "Internal server error" });
        }
        res.json(results);
    });
};

exports.createMed = (req, res) => {
    const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
        req.body;
    db.query(
        "INSERT INTO medicines(name, manufacturer, medicine_type_id, price, expiry_date, info) VALUES(?,?,?,?,?,?)",
        [name, manufacturer, medicine_type_id, price, expiry_date, info],
        (error, results) => {
            if (error) {
                console.log("Error creating new medicine: ", error);
                res.status(500).json({ error: "Internal server error" });
            }
            res.json({
                message: "New medicine successfuly created!",
                medicineId: results.insertId,
            });
        }
    );
};

exports.getMedById = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM medicines WHERE id=?", [id], (error, results) => {
        if (error) {
            console.log("Error celecting medicine by id");
            res.status(500).json({ error: "Internal server error" });
        }
        if (results.length === 0) {
            res.status(404).json({ error: "404 not found page" });
        }
        res.json(results[0]);
    });
};

exports.updateMed = (req, res) => {
    const id = req.params.id;
    const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
        req.body;
    db.query(
        "UPDATE medicines SET name=?, manufacturer=?, medicine_type_id=?, price=?, expiry_date=?, info=? WHERE id=?",
        [name, manufacturer, medicine_type_id, price, expiry_date, info, id],
        (error) => {
            if (error) {
                console.log("Error updating medicine:", error);
                res.status(500).json({ error: "Internal server error" });
            }
            res.json({
                message: "Medicine successfuly updated!",
            });
        }
    );
};

exports.deleteMed = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM medicines WHERE id = ?", [id], (error) => {
        if (error) {
            console.log("Error deleting medicine:", error);
            res.status(500).json({ error: "Internal server error" });
        }
        res.json({
            message: "Medicine successfuly deleted!",
        });
    });
};
