const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(process.env.DB, connectionParams).then(() => {
    try {
      console.log("DB connected successfully");
    } catch (error) {
      console.log(error);
      console.log("Failed to connect DB");
    }
  });
};
