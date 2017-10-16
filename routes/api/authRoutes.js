const authControl = require('../../controllers/auth');
const express = require('express');
const passportService = require('../../config/passport');
const passport = require('passport');

// Passport middleware
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });


// create instance of a route
const authRoutes = express.Router()

// When we post /register, we use the register controller function
authRoutes.post('/register', authControl.register)

// When we post /login, we use the login controller function
authRoutes.post('/login', authControl.login)

module.exports = authRoutes