const express = require('express');
const router = require('express').Router();
const {authenticate, getUser} = require('../Controllers/auth')

router.use(express.json());
router.use(express.urlencoded())

router.post('/checkCred',authenticate);
router.get('/getUser/:email', getUser);

module.exports = router;

