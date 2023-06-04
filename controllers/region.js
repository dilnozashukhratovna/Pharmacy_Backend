const db = require("../config/db");

exports.getAllRegions = (req, res) => {
    db.query("SELECT * FROM region", (error, results) => {
        if (error) {
            console.log("Error selecting all regions: ", error);
        }
        res.json(results);
    });
};

exports.createRegion = (req, res) => {
    const { id, name } = req.body;
    db.query(
        "INSERT INTO region (id, name) VALUES (?, ?)",
        [id, name],
        (error, results) => {
            if (error) {
                console.log("Error inserting region: ", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            res.json({ message: "New region successfully added!" });
        }
    );
};

exports.getRegionById = (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM region WHERE id = ?", [id], (error, results) => {
        if (error) {
            console.log("Error selecting region by id: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "404 not found page" });
        }
        res.json(results[0]);
    }); 
};

exports.updateRegion = (req, res) => {
    const regionId = req.params.id
    const {name} = req.body
    db.query(
        "UPDATE region SET id=?, name = ? WHERE id = ?",
        [regionId, name, regionId],
        (error, results) => {
            if (error) {
                console.log("Error updating region by id: ", error);
                return res.status(500).json({ error: "Internal server error" });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: "404 not found page" });
            }
            res.json({ message: "Region successfuly updated!" });
        }
    );
}; 

exports.deleteRegion = (req, res) => {
    const regionId = req.params.id;
    db.query(
        "DELETE FROM region WHERE id = ?",
        [regionId],
        (error, results) => {
            if (error) {
                console.log("Error deleting region by id: ", error);
                return res.status(500).json({ error: "Internal server error" });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: "404 not found page" });
            }
            res.json({ message: "Region successfuly deleted!" });
        }
    );
}; 
  