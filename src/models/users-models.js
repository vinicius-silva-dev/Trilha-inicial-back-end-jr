const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
class UserModels {
  async createUser(user) {
    try {
      const result = await prisma.user.create({
        data: user
      })

      return result
    } catch (error) {
      console.log('Deu ruim!', error)
      return error
    }
  }

  async findAll() {
    try {
      const result = await prisma.user.findMany()

      return result
    } catch (error) {
      console.log('Deu ruim!!', error)
    }
  }

  async findById(id) {
    try {
      const result = await prisma.user.findUnique({
        where: {
          id
        }
      })

      return result
    } catch (error) {
      console.log('Deu ruim!!', error)
    }
  }

  async findByEmail(email) {
    try {
      const result = await prisma.user.findUnique({
        where: {
          email
        }
      })

      return result
    } catch (error) {
      console.log('Deu ruim!!', error)
    }
  }

  async save(id, user) {
    try {
      const result = await prisma.user.update({
        where: {
          id
        },
        data: user
      })

      return result
    } catch (error) {
      console.log(error)
    }
  }

  async userDelete(id) {
    try {
      await prisma.user.delete({
        where: {
          id
        }
      })

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new UserModels