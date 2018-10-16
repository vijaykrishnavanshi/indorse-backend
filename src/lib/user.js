const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const dbURI =
  process.env.MONGOURI ||
  "mongodb://indorse:indorse123@ds133113.mlab.com:33113/indorse";
const connection = mongoose.createConnection(dbURI);
autoIncrement.initialize(connection);

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile_number: { type: String },
  address: { type: String, default: "" },
  company: { type: String, default: "" },
  title: { type: String, default: "" },
  interest: { type: Array, default: [] }
});

UserSchema.plugin(autoIncrement.plugin, { model: "User", field: "user_id" });

module.exports = mongoose.model("User", UserSchema);
