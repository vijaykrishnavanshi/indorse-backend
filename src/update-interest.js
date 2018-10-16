"use strict";
const connectToDatabase = require("./lib/connectDB");
const User = require("./lib/user");

/**
 * @api {post} /update-profile Update Profile [POST]
 * @apiGroup Profile
 * @apiDescription This api is used to create a profile.
 *
 * @apiParam (Query) {String} id email or id of the user.
 *
 * @apiParam (body) {String} name name of the user.
 * @apiParam (body) {String} email email id of the user.
 * @apiParam (body) {String} mobile_address Mobile Address of the user.
 * @apiParam (body) {String} address address of the user.
 * @apiParam (body) {String} company company of the user.
 * @apiParam (body) {String} title title of the user.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "address": "<address>",
 *       "company": "<company>",
 *       "title": "<title>",
 *       "interest": [],
 *       "_id": "<id>",
 *       "name": "<name>",
 *       "email": "<email>",
 *       "mobile_number": "8004913901",
 *       "user_id": 34,
 *       "__v": 0
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to signup.
 *     {
 *       <message>
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *        "Could not create the user."
 *     }
 */

module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const response = {
    statusCode: 500,
    body: ""
  };
  console.log("event: ", event.queryStringParameters);
  const query = event.queryStringParameters;
  console.log(query.email);
  await connectToDatabase();
  const criteria = {
    $or: [
      {
        email: query.id
      },
      {
        mobile_number: query.id
      }
    ]
  };
  return User.findOne(criteria)
    .exec()
    .then(foundUser => {
      const body = JSON.parse(event.body); // fetch body and parse it
      console.log("body: ", body);
      let interest = foundUser.interest || [];
      if (body.remove) {
        interest = interest.filter(
          elem => elem.toLowerCase() != body.interest.toLowerCase()
        );
      } else {
        interest = interest.filter(
          elem => elem.toLowerCase() != body.interest.toLowerCase()
        );
        interest.push(body.interest.toLowerCase());
      }
      foundUser.interest = interest;
      return foundUser.save();
    })
    .then(savedUser => {
      savedUser = savedUser.toObject();
      console.log(savedUser);
      response.statusCode = 200;
      response.body = JSON.stringify(savedUser);
      return response;
    })
    .catch(error => {
      response.statusCode = error.statusCode || 500;
      response.headers = { "Content-Type": "text/plain" };
      response.body = "Could not create the user.";
      return response;
    });
};
