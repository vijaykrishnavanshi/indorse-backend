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

## Basic Feature

- [X] Lambda to create user profile. User profile will include user_id, name, email, mobile number, address, company, title
- [X] Lambda to update user profile when the email or mobile number matches in the incoming api request
- [X] Lambda to update user interests  including sports, food, media and more. Come up with relevant fields that can be added to user profile and add the same as parameter for the function
- [X] All data should go to AWS Dynamo DB / Mongo Cloud Hosted Server
- [X] Configure AWS API gateway and create relevant APIs for create and update user records. Configure security for the API and configure rate limiting for the APIs
- [X] Use async/await calls in the Node JS functions
- [X] Add relevant code comments and modularise the code properly. Create more than one Lambda wherever required and make inter Lambda calls if required
- [ ] Write an automated test for this lambda
