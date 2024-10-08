require('dotenv').config();

module.export = {
        "development": {
          "username": process.env.DB_USERNAME,
          "password": process.nextTick.DB_PASSWORD,
          "database": "database_development_km7",
          "host": "127.0.0.1",
          "dialect": "postgres"
        },
        "test": {
          "username": "root",
          "password": null,
          "database": "database_test",
          "host": "127.0.0.1",
          "dialect": "mysql"
        },
        "production": {
          "username": "root",
          "password": null,
          "database": "database_production",
          "host": "127.0.0.1",
          "dialect": "mysql"
        }
}