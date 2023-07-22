import express from 'express'
import bookController from '../controllers/bookController.js'

const router = express.Router()

router
  .get('/books', bookController.getBooks)
  .get('/books/search', bookController.getBooksByPublisher)
  .get('/books/:id', bookController.getOneBook)
  .post('/books', bookController.createBook)
  .put('/books/:id', bookController.updateBook)
  .delete('/books/:id', bookController.deleteBook)

export default router
