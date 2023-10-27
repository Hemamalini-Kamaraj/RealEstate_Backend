const config = require("./utils/config");
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(config.URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(config.PORT, () => {
      console.log(`Server running on ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error Connecting to MongoDB", error);
  });
