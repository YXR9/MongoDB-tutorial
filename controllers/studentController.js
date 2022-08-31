const { default: mongoose } = require('mongoose');
var Student = require('../models/student');

exports.create = (req, res) => {
    const student = new Student({
        school: req.body.school,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    });
    student
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                student:
                    err.student || "Some error occurred while creating the student.",
            });
        });
};

exports.findAll = (req, res) => {
    Student.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                student:
                    err.student || "Some error occurred while retrieving student.",
            });
        });
};

exports.findOne = async (req, res) => {
    // var studentId = req.params.studentId
	Student.findById(req.params.studentId).then((result) => {
        res.send(result);
        console.log(result);
	}).catch((e) =>  res.send(e) );
};

exports.updateStudentProfile = (req, res) => {
    Student.findByIdAndUpdate(req.params.studentId,
        { 
            name: req.body.name, 
            age: req.body.age, 
            gender: req.body.gender },
        {
            new: true
    }).then(data => {
        res.send(data);
        console.log("Student profile is updated!");
    }).catch(err => {
        console.log(err);
    })
};

exports.delete = (req, res) => {
    Student.findByIdAndDelete(req.params.studentId,
        function(err, data) {
            if (err) {
                console.log(err);
            } else {
                res.send(data);
                console.log("Student is deleted!");
            }
        });
};

exports.detail = (req, res) => {
    var schoolId = req.params.schoolId
    Student.aggregate([
        {
            $match: {
                school: { "$in": [schoolId] }
            }
        },
        {
            $lookup: {
                from: "schools",
                localField: "school",
                foreignField: "_id",
                as: "school"
            }
        }
    ])
}