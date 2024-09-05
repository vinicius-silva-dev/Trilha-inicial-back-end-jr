import express from 'express'
import { listTarefas } from '../controllers/lista_tarefas'

const route = express.Router()

route.get('/', listTarefas)
