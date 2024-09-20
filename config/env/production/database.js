export default ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "deshmukhbuilders.in"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "u239155662_test"),
      user: env("DATABASE_USERNAME", "u239155662_test"),
      password: env("DATABASE_PASSWORD", "mPOlk36Q"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
