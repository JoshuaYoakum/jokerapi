// const { response } = require("express")
const {Joker} = require("./../models/joker.model")

module.exports.allJoker = (req, res) =>{
    Joker.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err))
}

//get one
module.exports.oneJoke = (req, res) => {
    const id = req.params.id
    Joker.findOne({_id: id})
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

module.exports.createJoke = (req, res) =>{
    Joker.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.createJoke = (req, res) =>{
    const newJoke = new Joker(req.body)
    newJoke.save()
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.updateJoke = (req, res) =>{
    const id = req.params.id
    Joker.findOneAndUpdate(
        {_id: id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.deleteJoke = (req, res) =>{
    Joker.deleteOne({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}