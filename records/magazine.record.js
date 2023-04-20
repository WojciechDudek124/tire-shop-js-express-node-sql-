const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require("uuid");

class MagazineRecord{
    constructor(obj) {
        if (!obj.number || obj.number <0 || obj.number >16) {
            throw new ValidationError('Name of magazine should have 1-15 chars')
        }

        this.id = obj.id;
        this.number = obj.number;
        this.tireId = obj.tireId;
    }

    async insert() {
        if (!this.id){
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `magazines`(`id` ,`number`) VALUES(:id, :number)", {
            id: this.id,
            number: this.number,
        })

        return this.id;
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `magazines` ORDER BY `number` ASC");
        return results.map(obj => new MagazineRecord(obj));
    }

    static async getOne(id) {
        const [results] = await pool.execute("SELECT * FROM `magazines` WHERE `id` = :id", {
            id,
        });

        return results.length === 0 ? null : new MagazineRecord(results[0]);
    }

    async update() {
        await pool.execute("UPDATE `magazines` SET `number` = :number, `tireId` = :tireId WHERE `id` = :id", {
            id: this.id,
            number: this.number,
            tireId: this.tireId,
        })
    }
}

module.exports = {
    MagazineRecord,
}