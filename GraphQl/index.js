import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { createConnection } from "mysql";

const connection = createConnection({
  host: `localhost`,
  user: `root`,
  password: `Jugal@1234`,
  database: `QuantumSchema`,
});

connection.connect();

async function getUsers() {
  return new Promise((resolve, reject) => {
    const query = `select * from User`;
    connection.query(query, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

const resolvers = {
  Query: {
    async users() {
      const users = await getUsers();
      return users;
    },
    async user(_, args) {
      const users = await getUsers();
      console.log(users)
       const foundUser =  users.find( (user) => String(user.userId)  === args.id);
       console.log(foundUser)
       return foundUser;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const url = await startStandaloneServer(server, {
  listen: { port: 4452 },
});

console.log("Server Ready at Port:", 4452);
