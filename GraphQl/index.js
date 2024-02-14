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

async function getUserById(id) {
  return new Promise((resolve, reject) => {
    const queryparams = [id]
    const query = `select * from User where User.userId = ?`;
    connection.query(query, queryparams, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    const queryparams = [email]
    const query = `select * from User where User.email = ?`;
    connection.query(query, queryparams, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function getJobPostings() {
  return new Promise((resolve, reject) => {
    
    const query = `select * from JobPosting`;
    connection.query(query, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function getJobPostingById(id) {
  return new Promise((resolve, reject) => {
    const queryparams = [id]
    const query = `select * from User where JobPosting.jobId = ?`;
    connection.query(query, queryparams, function (err, res) {
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
    async userById(_, args) {
      const user = await getUserById(args.id);
       return user[0];
    },
    async userByEmail(_, args) {
      const user = await getUserByEmail(args.email);
       return user[0];
    },
    async jobPostings(){
      const postings = await getJobPostings();
      return postings;
    },
    async jobPostingById(_, id){
      const postings = await getJobPostingById(args.id);
      return postings[0];
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const url = await startStandaloneServer(server, {
  listen: { port: 4452 },
});

console.log("Server Ready at Port:", url);
