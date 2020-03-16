export default `
type Carteira {
  id: ID!
  conta: Int
  saldo: Int!
}

type Query {
  saldo(conta: Int!): Int
}

type Mutation {
  sacar(conta: Int!, valor: Int!): Carteira
  depositar(conta: Int!, valor: Int!): Carteira
}
`
