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
          ca: fs.readFileSync(`${__dirname}/../.certs/server-ca.pem`).toString(),
          cert: fs.readFileSync(`${__dirname}/../.certs/client-cert.pem`).toString(),
          key: fs.readFileSync(`${__dirname}/../.certs/client-key.pem`).toString(),
          rejectUnauthorized: false,
        },
      },
      // options: {
      //   min: 2,
      //   max: 6,
      //   createTimeoutMillis: 3000,
      //   acquireTimeoutMillis: 30000,
      //   idleTimeoutMillis: 30000,
      //   reapIntervalMillis: 1000,
      //   createRetryIntervalMillis: 100,
      //   propagateCreateError: false // <- default is true, set to false
      // },
    },
  },
});