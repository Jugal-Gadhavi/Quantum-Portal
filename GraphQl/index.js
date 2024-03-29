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

async function getFamiliarity(id) {
  return new Promise((resolve, reject) => {
    const queryparam = [id];
    const query = `select * from familiarity where userId=?`;
    connection.query(query, queryparam, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function getExpertise(id) {
  return new Promise((resolve, reject) => {
    const queryparam = [id];
    const query = `select * from expertise where userId=?`;
    connection.query(query, queryparam, function (err, res) {
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
    const queryparams = [id];
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
    const queryparams = [email];
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
  
    const queryparams = [id];
    const query = `select * from JobPosting where JobPosting.jobId = ?`;
    connection.query(query, queryparams, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function getInformation(id) {
  return new Promise((resolve, reject) => {
    const queryparams = [id];
    const query = `select * from Information where Information.userid = ?`;
    connection.query(query, queryparams, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function getApplications(id) {
  return new Promise((resolve, reject) => {
    const queryparams = [id];
    const query = `select * from Application where Application.userid = ?`;
    connection.query(query, queryparams, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function getSubopenings(id) {
  return new Promise((resolve, reject) => {
    const queryparams = [id];
    const query = `select * from SubOpening where SubOpening.jobId = ?`;
    connection.query(query, queryparams, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function getPreferences(id) {
  return new Promise((resolve, reject) => {
    const queryparams = [id];
    const query = `select * from Preferences where Preferences.jobId = ?`;
    connection.query(query, queryparams, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function addApplicationFunc(object) {
  return new Promise((resolve, reject) => {
    const queryparams = [object.openingId, object.userId, object.timeSlot];
    const query = `INSERT INTO Application (openingId, userId, timeSlot) VALUES ( ?, ?, ?);`;
    connection.query(query, queryparams, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

async function changeInformationFunc(id, obj) {
  return new Promise((resolve, reject) => {
    const queryparams = [
      id,
      obj.applicantType,
      obj.yearsOfExperience,
      obj.currentCTC,
      obj.expectedCTC,
      obj.noticePeriod,
      obj.noticePeriodDuration,
      obj.noticePeriodEnd,
      obj.previouslyApplied,
      obj.previouslyAppliedRole,
      obj.referrer,
      obj.percentage,
      obj.yearOfPassing,
      obj.collegeName,
      obj.qualification,
      obj.stream,
      obj.city,
      obj.phoneNumber,
      obj.portfolioLink,
      obj.resumeLink,
      
    ];
    const query = `
    INSERT INTO Information (
      userId,
      applicantType,
      yearsOfExperience,
      currentCTC,
      expectedCTC,
      noticePeriod,
      noticePeriodDuration,
      noticePeriodEnd,
      previouslyApplied,
      previouslyAppliedRole,
      referrer,
      percentage,
      yearOfPassing,
      collegeName,
      qualification,
      stream,
      city,
      phoneNumber,
      portfolioLink,
      resumeLink
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  ON DUPLICATE KEY UPDATE
      applicantType = VALUES(applicantType),
      yearsOfExperience = VALUES(yearsOfExperience),
      currentCTC = VALUES(currentCTC),
      expectedCTC = VALUES(expectedCTC),
      noticePeriod = VALUES(noticePeriod),
      noticePeriodDuration = VALUES(noticePeriodDuration),
      noticePeriodEnd = VALUES(noticePeriodEnd),
      previouslyApplied = VALUES(previouslyApplied),
      previouslyAppliedRole = VALUES(previouslyAppliedRole),
      referrer = VALUES(referrer),
      percentage = VALUES(percentage),
      yearOfPassing = VALUES(yearOfPassing),
      collegeName = VALUES(collegeName),
      qualification = VALUES(qualification),
      stream = VALUES(stream),
      city = VALUES(city),
      phoneNumber = VALUES(phoneNumber),
      portfolioLink = VALUES(portfolioLink),
      resumeLink = VALUES(resumeLink);`;
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
    async jobPostings() {
      const postings = await getJobPostings();
      return postings;
    },
    async jobPostingById(_, args) {
      const postings = await getJobPostingById(args.id);
      return postings[0];
    },
  },
  User: {
    async familiarity(parent) {
      const arr = await getFamiliarity(parent.userId);
      return arr[0];
    },
    async expertise(parent) {
      const arr = await getExpertise(parent.userId);
      return arr[0];
    },
    async information(parent) {
      const arr = await getInformation(parent.userId);
      return arr[0];
    },
    async applications(parent) {
      const arr = await getApplications(parent.userId);
      return arr;
    },
  },
  JobPosting: {
    async subOpenings(parent) {
      const arr = await getSubopenings(parent.jobId);
      return arr;
    },
    async preferences(parent) {
      const arr = await getPreferences(parent.jobId);
      return arr[0];
    },
  },
  Mutation: {
    async addApplication(_, args) {
      console.log(args.application);
      await addApplicationFunc(args.application);
      args.application.applicationId = "Returned";
      return args.application;
    },
    async changeInformation(_, args) {
      const res = await changeInformationFunc(args.id, args.object);
      console.log('res',res);
      const obj = await getInformation(args.id);
      return obj[0];
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

console.log("Server Ready at Port:", url);
