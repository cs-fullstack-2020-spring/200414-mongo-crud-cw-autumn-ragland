// import express
let express = require('express');
// create router
let router = express.Router();
// json middleware
router.use(express.json());

let ResidentCollection = require('../models/ResidentSchema');

// get all residents
router.get('/', (req,res) => {
    ResidentCollection.find(
        {}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// create a resident
router.post('/', (req,res) => {
    ResidentCollection.create(req.body, (error, results) => {
        error ? res.send(error) : res.send(results)
    });
});

// get residents by last name
router.get('/lastName/:lastName', (req,res) => {
    ResidentCollection.find(
        {lastName : req.params.lastName}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// get resident by first name
router.get('/firstName/:firstName', (req,res) => {
    ResidentCollection.findOne(
        {firstName : req.params.firstName}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// get single residents
router.get('/single', (req,res) => {
    ResidentCollection.find(
        {single : true}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// update resident
router.put('/:phoneNumber', (req,res) => {
    ResidentCollection.findOneAndUpdate({phoneNumber : req.params.phoneNumber}, req.body, (error, result) => {
        error ? res.send(error) : res.send(`${req.params.phoneNumber} Updated`);
    })
});

// delete resident
router.delete('/:phoneNumber', (req,res) => {
    ResidentCollection.findOneAndDelete({phoneNumber : req.params.phoneNumber}, (error, result) => {
        error ? res.send(error) : res.send(`${req.params.phoneNumber} Deleted`);
    });
});

module.exports = router;