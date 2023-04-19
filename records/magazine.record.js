const {pool} = require("../utils/db");

class MagazineRecord{
    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `magazines` ");
        return results;
    }
}

module.exports = {
    MagazineRecord,
}