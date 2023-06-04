const db = require("../config/db");

exports.getAllDistrict = (req, res) => {
    db.query("SELECT * FROM district", (error, results) => {
        if (error) {
            console.log("Error selecting all districts:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
        res.json(results);
    });
};

exports.createDistrict = (req, res) => {
    const { name, region_id } = req.body;
    db.query(
        "INSERT INTO district(name, region_id) VALUES(?, ?)",
        [name, region_id],
        (error, results) => {
            if (error) {
                console.log("Error creating district: ", error);
                res.status(500).json({ error: "Internal server error" });
            }
            res.json({
                message: "New district successfuly added!",
                districtId: results.insertId,
            });
        }
    );
};

exports.getDistrictById = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM district WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error selecting district by id: ", error);
            res.status(500).json({ error: "Internal server error" });
        }
        if (results.length === 0) {
            res.status(404).json({ error: "404 not found page" });
        }
        res.json(results);
    });
};

exports.updateDistrict = (req, res) => {
    const id = req.params.id;
    const { name, region_id } = req.body;
    db.query(
        "UPDATE district SET name = ?, region_id = ? WHERE id = ?",
        [name, region_id, id],
        (error) => {
            if (error) {
                console.log("Error updating district: ", error);
                res.status(500).json({ error: "Internal server error" });
            }
            res.json({ message: "District successfuly updated!" });
        }
    );
};

exports.deleteDistrict = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM district WHERE id = ?", [id], (error) => {
        if (error) {
            console.log("Error deleting district by id: ", error);
            res.status(500).json({ error: "Internal server error" });
        }
        res.json({message: "District successfuly deleted!"});
    });
};
