const Joke = require('../models/joke.module')

const UserController = {

  //Create
  createNewJoke: (req, res) => {
    Joke.create(req.body)
    .then((joke) => {
      res.json({joke:joke})
    })
    .catch((err) => {
      res.json({message: `Caught an error: ` ,error:err})
    })
  },

  //Read
  findAllJokes: (req, res) => {
    Joke.find({})
    .then((jokes) => {
      res.json({jokes:jokes})
    })
    .catch((err) => {
      res.json({message: `Caught an error: ` ,error:err})
    })
  },

  findOneJoke: (req, res) => {
    Joke.find({_id: req.params.id})
    .then((joke) => {
      res.json({joke:joke})
    })
    .catch((err) => {
      res.json({message: `Caught an error: ` ,error:err})
    })
  },

  //Update

  updateExistingJoke: (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
      .then((joke) => {
        res.json({updatedJoke:joke})
      })
      .catch((err) => {
        res.json({message: `Caught an error: ` ,error:err})
      })
  },

  //Destroy

    deleteExistingJoke: (req, res) => {
      Joke.findOneAndDelete(req.params.id)
        .then((joke) => {
          res.json({deletedJoke:joke})
        })
        .catch((err) => {
          res.json({message: `Caught an error: ` ,error:err})
        })
    }

}

module.exports = UserController