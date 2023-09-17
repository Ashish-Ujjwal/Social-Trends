<!-- 
## Instagram Id: https://www.instagram.com/its_king_ashish12345/
### Server runs on http://localhost:5000 and client on http://localhost:3000  -->

# Social-Trends | Social Media Web App

**_✨ A MERN Stack Clone of the social networking giant - Instagram_**


![MERN](https://img.shields.io/badge/MERN-Stack-teal)
![MongoDB](https://img.shields.io/badge/MongoDB-database-green)
![Express](https://img.shields.io/badge/Express-server-orange)
![React](https://img.shields.io/badge/React-front--end-blue)
![Node.js](https://img.shields.io/badge/Node.js-back--end-yellow)
![Redux](https://img.shields.io/badge/Redux-state--management-red)
![Cloudinary](https://img.shields.io/badge/Cloudinary-image--video--service-blue)


# 1. Key features

- ***User registration and authentication:*** Users are able to sign up and log in securely to the app - **JWT authentication**.

- ***User profiles:*** Each user have a profile page that displays their information and activity on the app.

- ***Messaging:*** Users are able to send private messages to each other. This feature requires implementing a real-time messaging system using Node.js and Socket.io.

- ***Search functionality:*** Users are able to search for other users and content on the app.

- ***Notifications:*** Users receive notifications when they receive a new message, a comment, or other relevant activity on the app. This feature requires implementing a real-time notification system using Node.js and Socket.io.

- ***Commenting and liking:*** Users are able to comment on and like posts and other content on the app.

- ***Discover:*** The app have a discover section that suggests new content and new registered users to the user.

- ***Followers and followings:*** Users are able to follow other users and see the users they are following on their profile page. Users are also be able to see their followers and receive notifications when someone new follows them. 
# 2. Demo


<!-- ![Screenshot (41)](https://user-images.githubusercontent.com/84794183/224631527-18933625-0bae-4d2f-b59b-1c91960e8561.png)  |  ![Screenshot (42)](https://user-images.githubusercontent.com/84794183/224631584-f1ef1555-9612-437d-b56e-b50c12040fb6.png)
:-------------------------:|:-------------------------:
![Screenshot (48)](https://user-images.githubusercontent.com/84794183/224631651-ece4c0da-d637-4c2c-87c9-86c218f29287.png)  |  ![Screenshot (46)](https://user-images.githubusercontent.com/84794183/224631679-0801e7a7-e071-4f0a-80e6-edda58eabac3.png)
![Screenshot (49)](https://user-images.githubusercontent.com/84794183/224631786-6d243698-295a-45ca-9917-e3f07b414b9b.png)  |  ![Screenshot (52)](https://user-images.githubusercontent.com/84794183/224631823-03bc0e50-5ae5-4108-9922-154fd36555c3.png)
![Screenshot (50)](https://user-images.githubusercontent.com/84794183/224631867-dd5943d3-32f1-4d4b-946f-acdbfee33911.png)  |  ![Screenshot (54)](https://user-images.githubusercontent.com/84794183/224631918-d671dc14-3882-49f1-82ab-84fb85231cbb.png)
![Screenshot (56)](https://user-images.githubusercontent.com/84794183/224631969-d6aadf8c-5288-4474-b88f-3f61c7adae66.png)  |  ![Screenshot (58)](https://user-images.githubusercontent.com/84794183/224632002-391ba81a-4465-46be-815a-215e30b7ee0b.png)
![Screenshot (61)](https://user-images.githubusercontent.com/84794183/224632046-82afc366-004e-4d71-af27-9b63aedb79a3.png)  |  ![Screenshot (64)](https://user-images.githubusercontent.com/84794183/224632074-8f8cc2b0-1324-4fbe-9efa-d76b52756a0a.png) -->


# 3. Deployment

### A. Clone and install packages

1. Fork this project from the top right of the screen to create a copy of the code.
2. Download your fork of the project locally on your machine or clone it using

   ```bash
    git clone git@github.com:AssimUjjwal/V-Network.git
   ```

3. Navigate to the folder and run `npm install` for installing all packages & dependencies for the server/backend via npm.
4. Navigate to the `client` and run `npm install` to install all dependencies & packages required for the frontend via yarn.

   ```bash
    npm install
    cd ./client/
    npm install
   ```

### B. Create API secrets for external services

1. This project uses external services and APIs which require a secret/API pass-key for operations. Please ensure you obtain a pass-key from all these sources before running the project locally.

   - [Cloudinary](https://cloudinary.com/users/register/free) : For storing & fetching images.
   - [MongoDB](https://www.mongodb.com/cloud/atlas) : Either a cloud hosted cluster on Mongo Atlas or your local mongo URL.

### C. Environment Variables

1. Add .env file to parent repository as well as client.
2. Now add the following environment variables to your .env file of parent directory.

- `MONGODB_URL`
- `ACCESS_TOKEN_SECRET`
- `REFRESH_TOKEN_SECRET`

3.Then add below environment variables to your .env file of client directory. (These are from cloudinary media hosting)

- `REACT_APP_UPLOAD_PRESET`
- `REACT_APP_CLOUD_NAME`
- `REACT_APP_CLOUDINARY_URL`


### D. Run the project locally

1. Start the express server (via nodemon) for the backend. By default, it starts on port: `5000`
   ```bash
   npm run server
   ```
2. Navigate to the client to start the frontend server. By default, it starts on port: `3000`.

   ```bash
   cd ./client/
   npm start
   ```


## License

[MIT](https://choosealicense.com/licenses/mit/)