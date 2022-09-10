const JokesController = require('../controller/jokes.controller')


const routes = (app) => {

  //Create

  app.post('/api/jokes/', JokesController.createNewJoke)

  //Read

  app.get('/api/jokes/', JokesController.findAllJokes)

  app.get('/api/jokes/:id', JokesController.findOneJoke)

  //Update

  app.put('/api/jokes/:id', JokesController.updateExistingJoke)

  //Delete

  app.delete('/api/jokes/:id', JokesController.deleteExistingJoke)

}

module.exports = routes