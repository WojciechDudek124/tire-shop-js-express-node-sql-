const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require('uuid')

class TireRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 100) {
            throw new ValidationError('Name should have 1-100 chars')
        }
        if (!obj.count || obj.count <1 || obj.count >1000) {
            throw new ValidationError('Count of tires should have 1-1000 pcs')
        }

        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;
    }

    async insert() {
        if (!this.id){
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `tires` VALUES(:id, :name, :count)", {
            id: this.id,
            name: this.name,
            count: this.count,
        })

        return this.id;
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `tires` ORDER BY `name` ASC");
        return results;
    }
}

module.exports = {
    TireRecord,
}