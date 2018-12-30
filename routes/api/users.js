const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

//email
const nodemailer = require('nodemailer');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//Load User Model
const User = require('../../models/User');


// @route  GET api/users/test
// @desc   Tests users route
// @access public

router.get('/test', (req,res) => res.json({msg: "Users Works"}));

// @route  POST api/users/register
// @desc   Register user
// @access public
router.post('/register', (req,res) => {

    const { errors, isValid } = validateRegisterInput(req.body);

    //Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user){
            errors.email = 'Email already exists!';
            return res.status(400).json(errors);
        }else{

            const avatar = gravatar.url(req.body.email, {
                s: '200', //Size
                r: 'pg',  //Rating
                d: 'mm'   //Default  

            });

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar, //avatar: avatar
                password: req.body.password
            });

            bcrypt.genSalt(10, (err,salt)=>{
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));  
                })
            })

            // Send Email

            const output = `
                <div style="font-family: Calibri;">
                <h2>Hello ${req.body.name}!!</h2>
                <h3>Thanks for Signing Up at Devportal!</h3>
                <hr>
                
                <h3>Stay tuned to this site to connect and developers...Happy Learning!...</h3></div>`;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', //'smtp.ethereal.email',
            port: 587,//587
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'lakshmeekant@gmail.com', // generated ethereal user
                pass: 'lcxlzbdxwsvdcwno'//account.pass ''// generated ethereal password
            },
            tls:{
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: 'DevPortal', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: 'DevPortal Signup', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });

        }
    })
});

// @route  GET api/users/login
// @desc   Login user / Returning JWT
// @access public

router.post('/login', (req,res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    //Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //Find user by email
    User.findOne({email})
        .then(user => {
            //check for user
           
            if(!user){
                errors.email = 'User not found!';
                return res.status(404).json(errors);
            }

            //check password
            bcrypt.compare(password, user.password)
                  .then(isMatch => {
                      if(isMatch){
                          //User Matched
                          const payload = {id: user.id, name: user.name, avatar: user.avatar} //create jwt payload

                          //Sign Token
                          jwt.sign(
                              payload, 
                              keys.secretOrKey, 
                              { expiresIn: 3600}, 
                              (err, token)=>{
                                res.json({
                                    success:true,
                                    token: 'Bearer ' + token
                                });
                            });
                      }else{
                          errors.password = 'Password incorrect!';
                          return res.status(400).json(errors);
                      }
                  })
        });
});

// @route  GET api/users/current
// @desc   Return current user
// @access private
router.get('/current', passport.authenticate('jwt', {session: false}), (req,res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});



module.exports = router;