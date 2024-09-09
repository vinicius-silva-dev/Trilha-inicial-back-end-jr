const { 
  createTarefas,
  findTarefasById,
  findTarefas,
  findTarefasByIsCompleted, 
  deleteTarefas, 
  save 
  } = require("../models/tarefas-models")

  // Essa classe é responsável pelos controllers referênte aos usuários
class Tarefas {
  // Metodo para criar tarefas
  async createTarefas(req, res) {
    try {
      const {
        title,
        description,
        tarefasId
      } = req.body

      const result = await createTarefas({
        title,
        description,
        tarefasId,
        createdAt: new Date(),
        updatedAt: new Date()
  
      })

      res.status(201)
      res.json(result)

    } catch (error) {
      res.status(401)
      res.json({message: 'Deu ruim!!'})
      console.log(error)
    }
  }

  // Metodo para listar as tarefas
  async listTarefas(req, res) {
    try {
      const result = await findTarefas()

      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }

  // Metodo para listar tarefa pelo id
  async listTarefasById(req, res) {
    try {
      const {id} = req.params
      
      const result = await findTarefasById(id)

      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }

  // Metodo para listar tarefa comcluidas ou pendente
  async listTarefasByIsCompleted(req, res) {
    try {
      const {isCompleted} = req.query
      
      console.log(isCompleted)
      const result = await findTarefasByIsCompleted(isCompleted)

      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }

  // Metodo para editar tarefa
  async editTarefas(req, res) {
    try {
      const { id } = req.params
      const {title, description, isCompleted} = req.body
      
      const result = await save(id, {title, description, isCompleted})

      res.status(201)
      res.json(result)
      
    } catch (error) {
      res.status(401)
      console.log(error)
    }
  }

  // Metodo para deletar tarefa
  async tarefasDelete(req, res) {
    try {
      const { id } = req.params
    
      const result = await deleteTarefas(id)
      console.log(result)
      res.status(204)
      res.json({message: 'Deletado com sucesso !'})

    } catch (error) {
      res.status(401)
      console.log(error)
    }
  }
}

module.exports = new Tarefas()