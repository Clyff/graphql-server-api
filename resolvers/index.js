import { ApolloError } from 'apollo-server';

export default {
  Query: {
    saldo: async (parent, { conta }, { db }, info) => {
      const rg = await db.carteira.findOne({where: { conta: conta }});

      if (!rg) {
        throw new ApolloError('Carteira não encontrado.', 404);
      }

      return rg.saldo;
    }
  },
  Mutation: {
    depositar: async (parent, { conta, valor }, { db }, info) => {
      const rg = await db.carteira.findOne({where: { conta: conta }});

      if (!rg) {
        throw new ApolloError('Carteira não encontrado.', 404);
      }

      await db.carteira.increment('saldo', {
        where: {
          conta: conta
        },
        by: valor
      });

      return db.carteira.findOne({where: { conta: conta }});
    },
    sacar: async (parent, { conta, valor }, { db }, info) => {
      const rg = await db.carteira.findOne({where: { conta: conta }});

      if (!rg) {
        throw new ApolloError('Carteira não encontrado.', 404);
      }

      if (valor > rg.saldo) {
        throw new ApolloError(`Valor acima do saldo atual! Saldo atual: ${rg.saldo}`, 405);
      }

      db.carteira.decrement('saldo', {
        where: {
          conta: conta
        },
        by: valor
      });

      return db.carteira.findOne({where: { conta: conta }});
    }
  }
};
