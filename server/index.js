const { ApolloServer } = require("@apollo/server");
const express = require("express");
const { expressMiddleware: startStandaloneServer } = require("@apollo/server/standalone");
const bodyParser = require("body-parser");
const cors = require("cors");

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({});

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", startStandaloneServer(server));

  app.listenerCount(7000, () =>
    console.log("server started with graphql at port 7000"),
  );
};

startServer();
