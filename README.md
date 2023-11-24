![](https://i.ibb.co/wS4LFFC/Assignement-Cover.png)
### Application Url: https://level2-assignment2-delta.vercel.app/

### Overview
This project is a Node.js Express application developed with TypeScript, integrating MongoDB with Mongoose for user data management. Data integrity is ensured through validation using Joi.

### Set up the Project


##### 1. Clone the repository:
``` git clone https://github.com/zamanmayed1/l2assignment2.git ```

##### 2.Install dependencies:
``` npm install ```

### Set up the MongoDB database url:

1. Create a .env file
2. Copy the keys with value and paste it on .env file.
``` 
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://zaman:zaman1234mi@cluster0.upo44j8.mongodb.net/?retryWrites=true&w=majority
 ```
###  Eindpoints 
1. Create a new user
* Local Endpoint:POST http://localhost:5000/api/users
* Live Endpoint: POST https://level2-assignment2-delta.vercel.app/api/users

2. Retrieve a list of all users
* Local Endpoint:GET http://localhost:5000/api/users
* Live Endpoint: GET https://level2-assignment2-delta.vercel.app/api/users

3. Retrieve a specific user by ID
* Local Endpoint:GET http://localhost:5000/api/users/:userId
* Live Endpoint: GET https://level2-assignment2-delta.vercel.app/api/users/:userId

4. Update user information
* Local Endpoint:PUT http://localhost:5000/api/users/:userId
* Live Endpoint: PUT https://level2-assignment2-delta.vercel.app/api/users/:userId

5. Delete a user
* Local Endpoint:DELETE http://localhost:5000/api/users/:userId
* Live Endpoint: DELETE https://level2-assignment2-delta.vercel.app/api/users/:userId

### Start the application:
```
npm run start:dev
```
The application will be running at http://localhost:5000