const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/errors");

class MagazineRecord{
    constructor(obj) {
        if (!obj.magazineNumber || obj.magazineNumber.length <0 || obj.magazineNumber.length >16) {
            throw new ValidationError('Name of magazine should have 1-15 chars')
        }

        this.magazineNumber = obj.magazineNumber;
    }


    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `magazines` ");
        return results;
    }
}

module.exports = {
    MagazineRecord,
}