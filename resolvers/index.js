import { ApolloError } from 'apollo-server';

export default {
  Query: {
    saldo: async (parent, { conta }, { db }, info) => {
      const rg = await db.registro.findOne({where: { conta: conta }});

      if (!rg) {
        throw new ApolloError('Registro não encontrado.', 404);
      }

      return rg.saldo;
    }
  },
  Mutation: {
    depositar: async (parent, { conta, valor }, { db }, info) => {
      const rg = await db.registro.findOne({where: { conta: conta }});

      if (!rg) {
        throw new ApolloError('Registro não encontrado.', 404);
      }

      await db.registro.increment('saldo', {
        where: {
          conta: conta
        },
        by: valor
      });

      return db.registro.findOne({where: { conta: conta }});
    },
    sacar: async (parent, { conta, valor }, { db }, info) => {
      const rg = await db.registro.findOne({where: { conta: conta }});

      if (!rg) {
        throw new ApolloError('Registro não encontrado.', 404);
      }

      if (valor > rg.saldo) {
        throw new ApolloError(`Valor acima do saldo atual! Saldo atual: ${rg.saldo}`, 405);
      }

      db.registro.decrement('saldo', {
        where: {
          conta: conta
        },
        by: valor
      });

      return db.registro.findOne({where: { conta: conta }});
    }
  }
};
