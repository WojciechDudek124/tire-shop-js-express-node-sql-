const {Router} = require("express");
const {MagazineRecord} = require("../records/magazine.record");
const {TireRecord} = require("../records/tire.record");

const magazineRouter = Router();

magazineRouter
    .get('/', async (req,res) =>{
        const magazineList = await MagazineRecord.listAll();
        const tiresList = await TireRecord.listAll();
        res.render('magazines/list', {
            magazineList,
            tiresList,
        })
    })
    .post('/', async (req,res) =>{
        const data = {
            ...req.body,
            number: Number(req.body.number)
    };

        console.log(data);

        const magazineNumber = new MagazineRecord(data);

        await magazineNumber.insert();

        res.redirect('/magazine');
    })

module.exports = {
    magazineRouter,
}