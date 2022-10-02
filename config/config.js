module.exports = {
  development: {
    username: "root",
    password: "kwko2368@@",
    database: "COWORK",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORLD,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "mysql",
  },
};
