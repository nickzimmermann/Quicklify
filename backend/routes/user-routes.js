const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const UserModel = require('../models/UserModel.js');

// Get all of the users
// http://localhost:3001/users
router.get('/',
    (req, res) => {

        UserModel
        .find()
        .then(
            (dbDocument) => {
                res.send(dbDocument)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
)

// Post a new user
// http://localhost:3001/users/create
router.post('/create',
    (req, res) => {

        const formData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber
        }

        // If Email is unique, create account
        UserModel
        .findOne({ email: formData.email }) // for example: johndoe@gmail.com
        .then(
            (dbDocument) => {

                // If email exists, reject request
                if(dbDocument) {
                    res.send("Sorry, an account with this email already exists.")
                }

                // Otherwise, create the account
                else {
                    // Generate a Salt
                    bcryptjs.genSalt(
                        (err, theSalt) => {
                            // Combine user's password + Salt to hash the password
                            bcryptjs.hash(
                                formData.password,  // first ingredient
                                theSalt,    // second ingredient
                                (err, hashedPassword) => {
                                    // Replace the password in the form with the hash
                                    formData.password = hashedPassword;

                                    // Create the document
                                    // Use the UserModel to create a new document
                                    UserModel
                                    .create(
                                        formData
                                    )
                                    .then(
                                        (dbDocument) => {
                                            res.send(dbDocument);
                                        }
                                    )
                                    .catch(
                                        (error) => {
                                            console.log(error);
                                        }
                                    );
                                }
                            )
                        }
                    );

                }
            }
        )
        .catch(
            (err) => {
                console.log(err);
            }
        )
    }
);

// Export the routes for 'users'
module.exports = router;