const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel.js');

router.post('/create',
    (req, res) => {

        ProductModel
        .create(
            {
                package: req.body.package
            }
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
);
module.exports = router;