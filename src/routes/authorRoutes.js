import express from 'express'
import AuthorController from '../controllers/authorController.js'

const router = express.Router()

router
  .get('/authors', AuthorController.getAuthors)
  .get('/authors/:id', AuthorController.getOneAuthor)
  .post('/authors', AuthorController.createAuthor)
  .put('/authors/:id', AuthorController.updateAuthor)
  .delete('/authors/:id', AuthorController.deleteAuthor)

export default router
