
import {Router} from "express"

import selecaoController from "../controllers/selecaoController.js"

const router = Router()

router.get('/', selecaoController.home)

router.get('/selecoes', selecaoController.findAll)

router.get('/selecoes/:id', selecaoController.findById)

router.post('/selecoes/:cadastro', selecaoController.create)

router.put('/selecoes/:id', selecaoController.update)

router.delete('/selecoes/:id', selecaoController.delete)

export default router

