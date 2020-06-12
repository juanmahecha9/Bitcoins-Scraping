 const request = require('request'); 
const cheerio = require('cheerio'); 
const fs = require('fs'); 
varobj1 = 0;

// read the BTC value
const URL = "https://dolar.wilkinsonpc.com.co/divisas/dolar.html/"; 
request(URL, function (err, res, body) {
    if(err)
    {
        console.log(err, "error occured while hitting URL");
    }
    else
    {
        console.log(body);
    }
}); 

