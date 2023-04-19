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
        .post('/', async (req,res) =>{
            const data = {
                ...req.body,
                count: Number(req.body.count)
            }

            console.log(data);

            const dataTires = new TireRecord(data);

            await dataTires.insert();

            res.redirect('/tire');
        })

module.exports = {
    tireRouter,
}