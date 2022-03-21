const JokerController = require('../controllers/joker.controller')
module.exports = app =>{
    app.get("/api/jokes", JokerController.allJoker)
    app.get("/api/jokes/:id", JokerController.oneJoke)
    // app.get("/api/jokes/random",)
    app.post("/api/jokes/new", JokerController.createJoke)
    app.put("/api/jokes/update/:id", JokerController.updateJoke)
    app.delete("/api/jokes/delete/:id", JokerController.deleteJoke)
}