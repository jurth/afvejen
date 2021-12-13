module.exports = ({ env }) => ({
  // connection: {
  //   client: 'sqlite',
  //   connection: {
  //     filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
  //   },
  //   useNullAsDefault: true,
  // },
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        ca: Buffer.from(env("SERVER_CA"), "base64").toString("ascii"),
        cert: Buffer.from(env("CLIENT_CERT"), "base64").toString("ascii"),
        key: Buffer.from(env("CLIENT_KEY"), "base64").toString("ascii"),
        rejectUnauthorized: false,
      },
    }
  },
  debug: true,
});
