import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://mirianquispe1505:12345@cluster0.yrhvtdg.mongodb.net/library'
)

const db = mongoose.connection

export default db
