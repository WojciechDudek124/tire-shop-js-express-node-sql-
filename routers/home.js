const {Router} = require("express");

const homeRouter = Router();

homeRouter
        .get('/', (req,res) => {
            res.redirect('/tire');
        })

module.exports = {
    homeRouter,
}