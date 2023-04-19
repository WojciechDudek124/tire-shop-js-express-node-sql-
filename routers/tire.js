const {Router} = require("express");
const {TireRecord} = require("../records/tire.record");
const {MagazineRecord} = require("../records/magazine.record");

const tireRouter = Router();

tireRouter
        .get('/', async (req,res) =>{
            const tiresList = await TireRecord.listAll();
            const magazinesList = await MagazineRecord.listAll();
            res.render('tires/list', {
                tiresList,
                magazinesList,
            })
        })

module.exports = {
    tireRouter,
}