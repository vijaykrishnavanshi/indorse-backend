const assert = require("assert");
const connectToDatabase = require("../src/lib/connectDB");
const User = require("../src/lib/user");
const lambda = require("../src/update-profile");

describe("Update Interest Test: ", function() {
  before(async function() {
    // runs before all tests in this block
    await connectToDatabase();
    const body = {
      name: "test",
      email: "test@test.com",
      mobile_number: "8004913901"
    };
    return new User(body).save();
  });
  it("should update", function() {
    const body = {
      name: "test new",
      mobile_number: "8004913901",
      address: "Hello"
    };
    const event = {
      queryStringParameters: {
        id: "test@test.com"
      },
      body: JSON.stringify(body)
    };
    const context = {};
    return lambda(event, context)
      .then(data => {
        console.log(data.body);
        const returnedBody = JSON.parse(data.body);
        assert.strictEqual(returnedBody.name, body.name);
        assert.strictEqual(returnedBody.mobile_number, body.mobile_number);
        assert.strictEqual(returnedBody.address, body.address);
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
