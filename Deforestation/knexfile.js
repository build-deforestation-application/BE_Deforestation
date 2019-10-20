require("dotenv").config();
const pg = require("pg");
pg.defaults.ssl = true;

const localPgConnection = {
  host: "localhost",
  database: "UserDB",
  user: "data",
  password: "data"
};

const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: "pg",
    connection: prodDbConnection,
    useNullAsDefault: true,

    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },
  production: {
    client: "pg",
    connection: prodDbConnection,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
