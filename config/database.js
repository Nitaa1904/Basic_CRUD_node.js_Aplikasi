require("dotenv").config();

module.exports = {
  development: {
    // setting sesuai yang ada di postgres
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "database_development_km7",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
