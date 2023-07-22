import authors from '../models/Author.js'

class AuthorController {
  static getAuthors = async (req, res) => {
    try {
      const response = await authors.find()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ message: 'Error interno do servidor' })
    }
  }
  static getOneAuthor = async (req, res) => {
    const id = req.params.id
    try {
      const response = await authors.findById(id)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao obter autor' })
    }
  }
  static createAuthor = async (req, res) => {
    const author = new authors(req.body)
    try {
      await author.save()
      return res.status(201).json(author.toJSON())
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao cadastrar autor' })
    }
  }
  static updateAuthor = async (req, res) => {
    const id = req.params.id
    try {
      await authors.findByIdAndUpdate(id, { $set: req.body })
      return res.status(200).json({ message: 'Autor atualizado com sucesso' })
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao atualizar autor' })
    }
  }
  static deleteAuthor = async (req, res) => {
    const id = req.params.id
    try {
      await authors.findByIdAndDelete(id)
      return res.status(200).json({ message: 'Autor excluído com sucesso' })
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao excluir autor' })
    }
  }
}

export default AuthorController
