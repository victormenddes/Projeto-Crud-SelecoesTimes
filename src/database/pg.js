
import pg from "pg"

const conexao = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "1234",
  database: "selecoes12"
})

export default conexao
