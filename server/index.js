const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const server = new ApolloServer({
  typeDefs: `
    type Todo {
      id: ID!
      title: String!
      completed: Boolean
    }

    type Query {
      getTodos: [Todo]
    }
  `,
  resolvers: {
    Query: {
      getTodos: () => [
        { id: '1', title: 'GraphQL শিখবো', completed: false },
        { id: '2', title: 'প্রজেক্ট বানাবো', completed: true }
      ]
    }
  }
})

startStandaloneServer(server, {
  listen: { port: 7000 }
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})