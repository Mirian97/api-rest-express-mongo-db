import express from 'express'
import authors from './authorRoutes.js'
import books from './bookRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    return res.status(200).send({ titulo: 'API Rest com MongoDB' })
  })
  app.use(express.json(), books, authors)
}

export default routes
