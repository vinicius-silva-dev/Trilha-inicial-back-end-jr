let express = require('express')
let app = express()
// const {listTarefas} = require('../controllers/tarefasController')
const {
  create, 
  listUser, 
  editUser, 
  deleteUser, 
  listUserById, 
  login
} = require('../controllers/userController')
const { 
  listTarefas,
  createTarefas,
  listTarefasById,
  listTarefasByIsCompleted,
  editTarefas, 
  tarefasDelete
} = require('../controllers/tarefasController')
const { authenticate } = require('../middlewares/auth')


const route = express.Router()

// Users
route.post('/login', login)
route.get('/users/',authenticate, listUser)
route.get('/search/:id',authenticate, listUserById)
route.post('/users', create)
route.put('/users/edit/:id',authenticate, editUser)
route.delete('/users/delete/:id',authenticate, deleteUser)

// Tarefas
route.get('/tarefas/list/',authenticate, listTarefas)
route.get('/tarefas/:id/', authenticate, listTarefasById)
route.get('/tarefas', authenticate, listTarefasByIsCompleted)
route.post('/tarefas', authenticate, createTarefas)
route.put('/tarefas/:id/', authenticate, editTarefas)
route.delete('/tarefas/:id/', authenticate, tarefasDelete)

module.exports = route