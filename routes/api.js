let express = require('express');
let router = express.Router();
router.use(express.json())

let ResidentSchema = require('../models/ResidentSchema')

// get all residents
router.get('/', (req,res) => {
    ResidentSchema.find(
        {}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// get residents by last name
router.get('/lastName/:lastName', (req,res) => {
    ResidentSchema.find(
        {lastName : req.params.lastName}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// get single residents
router.get('/single', (req,res) => {
    ResidentSchema.find(
        {single : true}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// get resident by first name
router.get('/firstName/:firstName', (req,res) => {
    ResidentSchema.find(
        {firstName : req.params.firstName}, (error, result) => {
            error ? res.send(error) : res.send(result)
        }
    );
});

// update resident
router.put('/:phoneNumber', (req,res) => {
    ResidentSchema.findOneAndUpdate({phoneNumber : req.params.phoneNumber}, req.body, (error, result) => {
        error ? res.send(error) : res.send(`${req.params.phoneNumber} Updated`);
    })
});

// delete resident
router.delete('/:phoneNumber', (req,res) => {
    ResidentSchema.findOneAndDelete({phoneNumber : req.params.phoneNumber}, req.body, (error, result) => {
        error ? res.send(error) : res.send(`${req.params.phoneNumber} Deleted`);
    });
});

module.exports = router;