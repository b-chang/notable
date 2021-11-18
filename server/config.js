"use strict";

module.exports = {
  PORT: process.env.PORT || 8000,
  DATABASE_URL: process.env.DATABASE_URL || "mongodb://localhost/notable_db",
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000'
}
