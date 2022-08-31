module.exports = (app) => {
    const App = require("../controllers/studentController");
    app.post("/student", App.create);
    app.get("/students", App.findAll);
    app.get("/students/:studentId", App.findOne);
    app.post("/students/:studentId", App.updateStudentProfile);
    app.delete("/students/:studentId", App.delete);
    app.get("/students/:schoolId", App.detail);
};