const fs = require('fs');

module.exports = ({ env }) => ({
  // defaultConnection: 'default',
  defaultConnection: 'pg',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
    pg: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        schema: env("DATABASE_SCHEMA", "public"),
        ssl: {
          ca: Buffer.from(env("SERVER_CA"), "base64").toString("ascii"),
          cert: Buffer.from(env("CLIENT_CERT"), "base64").toString("ascii"),
          key: Buffer.from(env("CLIENT_KEY"), "base64").toString("ascii"),
          rejectUnauthorized: false,
        },
      },
    },
  },
});