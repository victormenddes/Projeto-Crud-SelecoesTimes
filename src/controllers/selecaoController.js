import selecaoModel from "../models/selecaoModel.js"


class selecaoController {

  home(req, res) {
    res.send('Pagina Home da API')
  }

  async findAll(req, res) {
    try {
      const findAll = await selecaoModel.findAll()
      res.json(findAll)
    } catch (error) {
      res.status(404).json('Seleção não encontrada!')
    }
  }

  async findById(req, res) {
    const id = req.params.id
    try {
      const findById = await selecaoModel.findById(id)
      res.json(findById)
    } catch (error) {
      res.status(400).json('Seleção não encontrada!')
    }
  }

  async create(req, res) {
    const selecao = req.body
    try {
      const create = await selecaoModel.create(selecao)
      res.json(create)
    } catch (error) {
      res.status(400).json('Seleção não cadastrada!')
    }
  }


  async update(req, res) {
    const id = req.params.id
    const selecao = req.body
    try {
      const updade = await selecaoModel.update(selecao, id)
      res.json(updade)
    } catch (error) {
      res.status(404).json('Selecao não Alterada!')
    }
  }

  async delete(req, res) {
    const id = req.params.id
    try {
      const deletar = await selecaoModel.delete(id)
      res.json(deletar)
    } catch (error) {
      res.status(404).json('Seleção não deletada!')
    }
  }

}

export default new selecaoController()
