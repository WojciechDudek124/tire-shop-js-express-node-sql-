const {pool} = require("../utils/db");

class TireRecord {
    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `tires` ");
        return results;
    }
}

module.exports = {
    TireRecord,
}