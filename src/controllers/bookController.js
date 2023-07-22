import books from '../models/Book.js'

class bookController {
  static getBooks = async (req, res) => {
    try {
      const response = await books.find().populate('author').exec()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ message: 'Error interno do servidor' })
    }
  }
  static getOneBook = async (req, res) => {
    const id = req.params.id
    try {
      const response = await books
        .findById(id)
        .populate('author', 'name')
        .exec()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao obter livro' })
    }
  }
  static getBooksByPublisher = async (req, res) => {
    const publisher = req.query.publisher
    try {
      const response = await books.find({
        bookPublisher: { $regex: publisher, $options: 'i' }
      })
      return res.status(200).json(response)
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Erro ao obter livros por editora' })
    }
  }
  static createBook = async (req, res) => {
    const book = new books(req.body)
    try {
      await book.save()
      return res.status(201).send(book.toJSON())
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao cadastrar livro' })
    }
  }
  static updateBook = async (req, res) => {
    const id = req.params.id
    try {
      await books.findByIdAndUpdate(id, { $set: req.body })
      return res.status(200).json({ message: 'Livro atualiado com sucesso' })
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao atualizar livro' })
    }
  }
  static deleteBook = async (req, res) => {
    const id = req.params.id
    try {
      await books.findByIdAndDelete(id)
      return res.status(200).json({ message: 'Livro excluído com sucesso' })
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao excluir livro' })
    }
  }
}

export default bookController
