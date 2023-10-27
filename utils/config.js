require("dotenv").config();

const URL = process.env.MONGO_URI;
const PORT = process.env.PORT;
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
  URL,
  PORT,
  EMAIL_ADDRESS,
  EMAIL_PASSWORD,
  SECRET_KEY,
};
