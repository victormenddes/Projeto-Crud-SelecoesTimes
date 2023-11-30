
import { error } from "console"
import conexao from "../database/pg.js"

class selecaoModel {

  findAll() {
    const sql = "SELECT * FROM selecoes"
    return new Promise((resolve, rejects) => {
      conexao.query(sql, (error, resultado) => {
        if (error) {
          rejects('Seleção não encontrada')
        } else {
          const resultadoBusca = JSON.parse(JSON.stringify(resultado.rows))
          resolve(resultadoBusca)
        }
      })
    })
  }


  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id= $1"
    return new Promise((resolve, rejects) => {
      conexao.query(sql, [id], (error, resultado) => {
        if (error) {
          rejects('Seleção não encontrada')
        } else {
          const resultadoBusca = JSON.parse(JSON.stringify(resultado.rows))
          resolve(resultadoBusca)
        }
      })
    })
  }


  create(selecao) {
    const sql = "INSERT INTO selecoes (selecao, grupo) VALUES ($1, $2)"
    return new Promise((resolve, rejects) => {
      conexao.query(sql, [selecao.selecao, selecao.grupo], (error, resultado) => {
        if (error) {
          rejects('Seleção não Cadastrada')
        } else {
          const resultadoBusca = JSON.parse(JSON.stringify(resultado))
          resolve(resultadoBusca)
        }
      })
    })
  }


  update(selecao, id) {
    const sql = "UPDATE selecoes SET selecao= $1, grupo= $2 WHERE id= $3"
    return new Promise((resolve, rejects) => {
      conexao.query(sql, [selecao.selecao, selecao.grupo, id], (error, resultado) => {
        if (error) {
          rejects('Seleção não Alterada')
        } else {
          const resultadoBusca = JSON.parse(JSON.stringify(resultado))
          resolve(resultadoBusca)
        }
      })
    })
  }


  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id= $1"
    return new Promise((resolve, rejects) => {
      conexao.query(sql, [id], (error, resultado) => {
        if (error) {
          rejects('Seleção não Deletada!')
        } else {
          const resultadoBusca = JSON.parse(JSON.stringify(resultado))
          resolve(resultadoBusca)
        }
      })
    })
  }

}

export default new selecaoModel()
