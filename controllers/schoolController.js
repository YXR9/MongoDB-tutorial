var School = require('../models/school');

exports.create = (req, res) => {
    const school = new School({
        name: req.body.name,
    });
    school
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                school:
                    err.school || "Some error occurred while creating the school.",
            });
        });
};