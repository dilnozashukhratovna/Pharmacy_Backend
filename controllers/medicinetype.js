const db = require("../config/db");

exports.getAllMedType = (req, res) => {
    db.query("SELECT * FROM medicine_type", (error, results) => {
        if (error) {
            console.log("Error selecting all medicinetype:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
        res.json(results);
    });
};

exports.createMedType = (req, res) => {
    const { name } = req.body;
    db.query(
        "INSERT INTO medicine_type(name) VALUES(?)",
        [name],
        (error, results) => {
            if (error) {
                console.log("Error creating new medicinetype: ", error);
                res.status(500).json({ error: "Internal server error" });
            }
            res.json({
                message: "New medicine type successfuly added!",
                medicineTypeId: results.insertId,
            });
        }
    );
};

exports.getMedTypeById = (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT * FROM medicine_type WHERE id = ?",
        [id],
        (error, results) => {
            if (error) {
                console.log("Error selecting medicinetype by id: ", error);
                res.status(500).json({ error: "Internal server error" });
            }
            if (results.length === 0) {
                res.status(404).json({ error: "404 not found page" });
            }
            res.json(results);
        }
    );
};

exports.updateMedType = (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    db.query(
        "UPDATE medicine_type SET name=? WHERE id = ?",
        [name, id],
        (error) => {
            if (error) {
                console.log("Error updating medicinetype: ", error);
                res.status(500).json({ error: "Internal server error" });
            }
            res.json({ message: "Medicine type successfuly updated!" });
        }
    );
};

exports.deleteMedType = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM medicine_type WHERE id = ?", [id], (error) => {
        if (error) {
            console.log("Error deleting medicinetype by id: ", error);
            res.status(500).json({ error: "Internal server error" });
        }
        res.json({ message: "Medicine type successfuly deleted!" });
    });
};
