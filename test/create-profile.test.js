const assert = require("assert");
const connectToDatabase = require("../src/lib/connectDB");
const User = require("../src/lib/user");
const lambda = require("../src/create-profile");

describe("Create Profile Test: ", function() {
  before(async function() {
    // runs before all tests in this block
    await connectToDatabase();
    const criteria = {
      email: "test@test.com"
    };
    return User.findOneAndRemove(criteria);
  });
  it("should create", function() {
    const body = {
      name: "test",
      email: "test@test.com",
      mobile_number: "8004913901"
    };
    const event = {
      body: JSON.stringify(body)
    };
    const context = {};
    return lambda(event, context)
      .then(data => {
        console.log(data.body);
        const returnedBody = JSON.parse(data.body);
        assert.strictEqual(returnedBody.name, body.name);
        assert.strictEqual(returnedBody.email, body.email);
        assert.strictEqual(returnedBody.mobile_number, body.mobile_number);
      })
      .catch(error => {
        console.log(error);
        assert.strictEqual(error, null);
      });
  });
  after(async function() {
    // runs before all tests in this block
    await connectToDatabase();
    const criteria = {
      email: "test@test.com"
    };
    return User.findOneAndRemove(criteria);
  });
});
