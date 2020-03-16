# GraphQL API Sample

This is a sample of GraphQL API.

### Requesites

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/)

### Installation

Install all dependencies with yarn:
```bash
$ yarn
```

Create a new file `.env` based on `.env-example` and run the docker container:
```bash
$ docker-compose up -d
```

If that is the first time you run the API, generate the tables e some data in the db:
```bash
$ yarn sequelize-skeleton
```
### Usage

Run the following command and try Queries or mutations at: `http://localhost:4000/graphql`
```bash
$ yarn start
```

The following Queries and mutations are allowed:

 - **saldo(conta: Int!):** returns a int for the current balance of the given account.
 - **sacar(conta: Int!, valor: Int!):** Returns the given account, after usbtracting the value
 - **depositar(conta: Int!, valor: Int!):** Returns the given account, after adding the value.


**TO DO list**
 [ ] Add a unit tests in the project
 [ ] Add script to build to production (ops, lol)
 [ ] Alot of refactoring
 [ ] Create more Queries to generate new accounts (basic CRUD)
 [ ] Develop a web application to consume the API

### Docs used in this project:
 - Graphql <https://graphql.org/>
 - Apollo Graphql <https://www.apollographql.com/docs/>
 - Serialize: <https://sequelize.org/>


License
----

MIT
