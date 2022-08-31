module.exports = (app) => {
    const App = require("../controllers/schoolController");
    app.post("/school", App.create);
};