// connection with mongose to have access to the database
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected !");
  })
  .catch((err) => {
    console.error(err);
  });
