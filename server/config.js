// server/config.js
module.exports = {
    port: process.env.PORT || 5432,
    db: {
      host: process.env.DB_HOST || 'database-instance-1.ct0u4caqi9em.us-east-2.rds.amazonaws.com',
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || 'postgres',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
    },
    sessionSecret: process.env.SESSION_SECRET || 'yourSecretKey',
  };