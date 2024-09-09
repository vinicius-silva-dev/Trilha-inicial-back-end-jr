require('dotenv')
const {hash, compare} = require('bcrypt')
const {sign} = require('jsonwebtoken')
const {createUser, findById, findAll, save, userDelete, findByEmail} = require('../models/users-models')

// Essa classe é responsável pelos controllers referênte aos usuários
class UserController {
  // Metodo de login
  async login(req, res) {
    try {
      const {email, password} = req.body

      const findUser = await findByEmail(email)

      if(!findUser) {
        res.json('User not found !')
        throw new Error('User not found !')
      }

      const validatePassword = await compare(password, findUser.password)

      if(!validatePassword) {
        res.status(401)
        throw new Error('Password invalid !')
      }

      const token = await sign({ id: findUser.id}, process.env.SECRET_KEY)

      res.json(token)
    } catch (error) {
      console.log(error)
    }
  }

  // Metodo para criar usuários
  async create(req, res) {
    try {
      const {name, email, password} = req.body

      const hashPassword = await hash(password, 8)

      const result = await createUser({
        name,
        email,
        password: hashPassword
      })

      res.status(201)
      res.json(result)

    } catch (error) {
      // res.json({message: 'Deu ruim!!'})
      console.log(error)
    }
  }

  // Metodo para listar usuários
  async listUser(req, res) {
    try {
      const result = await findAll()

      res.json(result)
    } catch (error) {

      console.log(error)
    }
  }

  // Método para buscar um usuário pelo Id
  async listUserById(req, res){
    try {
      const {id} = req.params

      if(id) {
        const user = await findById(id)

        
        res.json(user)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Método para editar um usuário
  async editUser(req, res) {
    try {
      const { id } = req.params
      const {email, password} = req.body
      
      if(!email || !password) {
        throw new Error('Operação invalida!')
      }

      const hashPassword = await hash(password, 8)
      const result = await save(id, {email, password: hashPassword})

      res.status(201)
      res.json(result)
      
    } catch (error) {
      res.status(401)
      console.log(error)
    }
  }

  // Método para deletar um usuário
  async deleteUser(req, res) {
    try {
      const { id } = req.params
    
      const result = await userDelete(id)
      console.log(result)
      res.status(204)
      res.json({message: 'Deletado com sucesso !'})

    } catch (error) {
      res.status(401)
      console.log(error)
    }
  }
}

module.exports = new UserController()