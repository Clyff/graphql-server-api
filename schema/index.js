export default `
type Registro {
  id: ID!
  conta: Int
  saldo: Int!
}

type Query {
  saldo(conta: Int!): Int
}

type Mutation {
  sacar(conta: Int!, valor: Int!): Registro
  depositar(conta: Int!, valor: Int!): Registro
}
`
