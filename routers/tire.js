const {Router} = require("express");
const {TireRecord} = require("../records/tire.record");
const {MagazineRecord} = require("../records/magazine.record");

const tireRouter = Router();

tireRouter
        .get('/', (req,res) =>{
            const tiresList = TireRecord.listAll();
            const magazinesList = MagazineRecord.listAll();
            res.render('tires/list', {
                tiresList,
                magazinesList,
            })
        })

module.exports = {
    tireRouter,
}