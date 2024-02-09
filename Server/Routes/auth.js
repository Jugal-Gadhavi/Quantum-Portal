const express = require('express');
const router = require('express').Router();
const {authenticate} = require('../Controllers/auth')

router.use(express.json());
router.use(express.urlencoded())

router.post('/checkCred',authenticate);

module.exports = router;

