# Indorse

This repo has the code lambda functions for API service.

## Run the project locally

Run the following command and the APIs will the available locally for testing and development.

```closure
git clone https://github.com/vijaykrishnavanshi/indorse-backend.git
cd indorse-backend
npm install
npm run offline
```

## Deploy Project

Run the following command once the setup is working locally on your system.

```closure
npm run deploy
```

## Lint Project

```closure
npm run lint  # for cheking the lint error
npm run lint-fix # for fixing the minor lint error
```

## Generate Documentation

```closure
npm run generate-docs  # for generating documentation
```

## Basic Feature

- [X] Lambda to create user profile. User profile will include user_id, name, email, mobile number, address, company, title
- [X] Lambda to update user profile when the email or mobile number matches in the incoming api request
- [X] Lambda to update user interests  including sports, food, media and more. Come up with relevant fields that can be added to user profile and add the same as parameter for the function
- [X] All data should go to AWS Dynamo DB / Mongo Cloud Hosted Server
- [X] Configure AWS API gateway and create relevant APIs for create and update user records. Configure security for the API and configure rate limiting for the APIs
- [X] Use async/await calls in the Node JS functions
- [X] Add relevant code comments and modularise the code properly. Create more than one Lambda wherever required and make inter Lambda calls if required
- [X] Write an automated test for this lambda

## Deployed Information

``` closure
Service Information
service: indorse-backend
stage: dev
region: us-east-1
stack: indorse-backend-dev
api keys:
  None
endpoints:
  GET - https://m0mlmbw42g.execute-api.us-east-1.amazonaws.com/dev/get
  POST - https://m0mlmbw42g.execute-api.us-east-1.amazonaws.com/dev/create-profile
  POST - https://m0mlmbw42g.execute-api.us-east-1.amazonaws.com/dev/update-profile
  POST - https://m0mlmbw42g.execute-api.us-east-1.amazonaws.com/dev/update-interest
functions:
  get: indorse-backend-dev-get
  createProfile: indorse-backend-dev-createProfile
  updateProfile: indorse-backend-dev-updateProfile
  updateInterest: indorse-backend-dev-updateInterest
```

## Postman Collections

For Localhost: [https://www.getpostman.com/collections/d68d6ba1212d8d1c5c05](https://www.getpostman.com/collections/d68d6ba1212d8d1c5c05)

For Deployed Version: [https://www.getpostman.com/collections/4e63dc0d46edea1867f3](https://www.getpostman.com/collections/4e63dc0d46edea1867f3)
