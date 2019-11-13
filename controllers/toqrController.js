const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        // console.log("controller findAll req.body: ", req.body);
        // console.log("controller findAll res: ", res);
        db.ToqrDB
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        console.log("controller findById req.body: ", req.body);
        console.log("controller findById req.params: ", req.params);
        db.ToqrDB
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        // console.log("controller create req.body: ", req.body)
        db.ToqrDB
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                return res.status(422).json(err)
            });
    },
    update: function (req, res) {
        db.ToqrDB
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.ToqrDB
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};