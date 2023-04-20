const {Router} = require("express");
const {MagazineRecord} = require("../records/magazine.record");
const {TireRecord} = require("../records/tire.record");
const {ValidationError} = require("../utils/errors");

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

    .patch('/tire/:magazineId', async (req,res) => {
        const magazine = await MagazineRecord.getOne(req.params.magazineId);

        if (magazine === null) {
            throw new ValidationError("We cannot find warehouse like this id!");
        }

        const tire = req.body.tireId === '' ? null : await TireRecord.getOne(req.body.tireId);

        if (tire) {
            if(tire.count <= await tire.countGivenTires()) {
                throw new ValidationError("Not enough pcs!");
            };
        }

        magazine.tireId = tire?.id ?? null;

        await magazine.update();

        res.redirect('/magazine');
    })

module.exports = {
    magazineRouter,
}