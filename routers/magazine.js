const {Router} = require("express");
const {MagazineRecord} = require("../records/magazine.record");
const {TireRecord} = require("../records/tire.record");

const magazineRouter = Router();

magazineRouter
    .get('/', (req,res) =>{
        const magazineList = MagazineRecord.listAll();
        const tiresList = TireRecord.listAll();
        res.render('magazines/list', {
            magazineList,
            tiresList,
        })
    })

module.exports = {
    magazineRouter,
}