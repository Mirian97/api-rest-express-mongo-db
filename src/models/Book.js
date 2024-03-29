import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authors',
    required: true
  },
  bookPublisher: { type: String, required: true },
  numberOfPages: { type: Number }
})

const books = mongoose.model('books', bookSchema)

export default books
