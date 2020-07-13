var http = require('http');
var port = process.env.PORT || 3000;
var fs = require('fs');
var sleep = require('./operation.js')
var l1, l2, p;
var ata = [];
var nodemailer = require('nodemailer');
//require the express nodejs module
var express = require('express'),
  //set an instance of express
  app = express(),
  //require the body-parser nodejs module
  bodyParser = require('body-parser'),
  //require the path nodejs module
  path = require("path");


  let co;
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));

//tell express what to do when the /form route is requested
app.post('/form', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  //mimic a slow network connection


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'BTC.vigila@gmail.com',
      pass: 'btc-123look'
    }
  });

  res.send(JSON.stringify({
    l1: req.body.l1 || null,
    l2: req.body.l2 || null,
    p: req.body.p || null,
    email: req.body.email || null
  }));

  co = req.body.email;
  sleep.then((d) => {
    p = d.cx;
    l1 = d.ax;
    l2 = d.bx;
    link = d.dx

    /* console.log(p)
    console.log(l1)
    console.log(l2)
    console.log(link) */

    x1 = parseInt(req.body.l1);
    x2 = parseInt(req.body.l2);
    p1 = parseInt(req.body.p) / 100;

    for (var i = 0; i <= 49; i++) {

      if (p[i] < p1) {

             if ((x1 >= l1[i] && x2 <= l2[i])) {
        
          var mailOptions = {
            from: 'BTC.vigila@gmail.com',
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: 'ES MOMENTO DE COMPRAR BITCOIN https://localbitcoins.com/' + link[i]
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
        if (x1 <= l1[i] && x1 <= l2[i] && x2 >= l1[i]) {
          

          var mailOptions = {
            from: 'BTC.vigila@gmail.com',
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: 'ES MOMENTO DE COMPRAR BITCOIN https://localbitcoins.com/' + link[i]
          };



          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
        if (x1 >= l1[i] && x1 <= l2 && x2 >= l2[i]) {
        

          var mailOptions = {
            from: 'BTC.vigila@gmail.com',
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: 'ES MOMENTO DE COMPRAR BITCOIN https://localbitcoins.com/' + link[i]
          };



          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
        if (x1 < l1[i] && x2 > l2[i]) {
         


          var mailOptions = {
            from: 'BTC.vigila@gmail.com',
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: 'ES MOMENTO DE COMPRAR BITCOIN https://localbitcoins.com/' + link[i]
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
      }
      else{
        console.log("en este momento no hay valores en ese rango");
console.log(co)
var mailOptions = {
  from: 'BTC.vigila@gmail.com',
  to: co,
  subject: 'Sending Email using Node.js',
  text: 'En este momento no hay ningun vendror de BITCOINS que se ajuste a tus requerimeintos: '+ "Porcentaje: " + req.body.p +'%' +  '   POR FAVOR INTENTA MAS TARDE.'
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
        
      }
    }


  });

  //debugging output for the terminal
  console.log('l1 ' + req.body.l1 + ' l2 ' + req.body.l2 + ' p ' + req.body.p + ' email ' + req.body.email);
});



//wait for a connection
app.listen(port, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});

function x(q1){
 
}