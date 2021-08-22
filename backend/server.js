// Import the express function.
const express = require('express');

// Import CORS (Cross-Origin Resource Sharing) to allow external HTTP requests to Express
const cors = require('cors');
// dotenv will allow Express to read Environment Variables
require('dotenv').config();

// Cloudinary is the CDN (Content Delivery Network) service
const cloudinary = require('cloudinary').v2;

// express-form-data will allow files to be sent
const expressFormData = require('express-form-data');

// Passport and passport-jwt for user authentication
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtSecret = process.env.JWT_SECRET;

// This will tell passport where to find the jsonwebtoken and how to extract the payload
const passportJwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
}
// This function will tell passport what to do with the payload
const passportJwt = (passport) => {
    passport.use(
        new JwtStrategy(
            passportJwtOptions,
            (jwtPayload, done) => {
                // Tell passport what to do with payload
                UserModel
                .findOne({ _id: jwtPayload._id })
                .then(
                    (dbDocument) => {
                        // The done() function will pass the dbDocument to Express. The Users Document can then be accessed via req.user
                        return done(null, dbDocument)
                    }
                )
                .catch(
                    (err) => {
                        // If the _id or anything else is invalid, pass 'null' to Express.
                        if(err) {
                            console.log(err);
                        }
                        return done(null, null)
                    }
                )
            }
        )
    )
};
passportJwt(passport);

// This will make 'server' an object with methods for server operations
const server = express();

// Parse urlencoded bodies and where the Content-type header matches the type option
server.use (express.urlencoded({extended: false}));
// tell express to parse JSON data
server.use(express.json());
// Tell express to allow external HTTP requests
server.use(cors());
// Tell Express about express-form-data
server.use(expressFormData.parse());

// Import mongoose to connect to MongoDB Atlas
const mongoose = require('mongoose');

// Import the model
const userRoutes = require('./routes/user-routes.js');
const UserModel = require('./models/UserModel.js');
const productRoutes = require('./routes/product-routes.js');

const connectionString = process.env.MONGODB_CONNECTION_STRING;

const connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
.connect(connectionString, connectionConfig) // returns Promise
.then(
    () => {
        console.log('DB is connected');
    }
)
.catch(
    (dbError) => {
        console.log('error occured', dbError);
    }
);

// Configure cloudinary
// Cloudinary needs to know our credentials before accepting any HTTP request
cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET
    }
);

// A method to process a GET HTTP request.
// server.get(path, callbackFunction)
server.get('/',                // http://localhost:3001/
    (req, res) => { 
        res.send("<html><head><title>Home</title></head><body><h1>Welcome to the Quicklify server</h1></body></html>") 
    }
);

server.use(
    '/users', userRoutes
);
    
server.use(
    '/products', productRoutes
);

// The .listen() will connect the server to an available Port
// server.listen(portNumber, callbackFunction)
server.listen(
    // Check the Environment Variable for PORT otherwise use 3001
    process.env.PORT || 3001,
    () => {
        console.log('Server is running on http://localhost:3001/')
    }
)