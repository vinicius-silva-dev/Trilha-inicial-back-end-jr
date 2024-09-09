const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

// Essa classe é responsável por fazer as operações no banco de dados
class tarefasModels {
  async createTarefas(tarefa) {
    try {
      const result = await prisma.tarefa.create({
        data: tarefa
      })

      return result
    } catch (error) {
      console.log('Deu ruim!', error)
      return error
    }
  }

  async findAll() {
    try {
      const result = await prisma.tarefa.findAll()

      return result
    } catch (error) {
      console.log('Deu ruim!!', error)
    }
  }

  async findTarefas() {
    try {
      const result = await prisma.tarefa.findMany()

      return result
    } catch (error) {
      console.log('Deu ruim!!', error)
    }
  }

  async findTarefasById(id) {
    try {

      const result = await prisma.tarefa.findUnique({
        where: {
          id
        }
      })

      return result
    } catch (error) {
      console.log('Deu ruim!!', error)
    }
  }

  async findTarefasByIsCompleted(isCompleted) {
    try {
      const result = await prisma.tarefa.findMany({
        where: {
          isCompleted: isCompleted === "false" ? false : true
        }
      })

      return result
    } catch (error) {
      console.log('Deu ruim!!', error)
    }
  }

  async save(id, tarefa) {
    try {
      const result = await prisma.tarefa.update({
        where: {
          id
        },
        data: tarefa
      })

      return result
    } catch (error) {
      console.log(error)
    }
  }

  async deleteTarefas(id) {
    try {
      await prisma.tarefa.delete({
        where: {
          id
        }
      })

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new tarefasModels