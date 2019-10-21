// require("dotenv").config();
// const pg = require("pg");
// pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./sqdata.db"
    },
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
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
    useNullAsDefault: true
  }
};
