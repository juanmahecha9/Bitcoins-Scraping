const a = require('./mainScript.js')

// Requiring fs module in which 
// readFile function is defined. 
const fs = require('fs')

var btcValue = 0;
var usd = 0;
var localbtc = 0;


// read BTC value .txt
// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
setTimeout(function(){
fs.readFile('./text1/BTC-Value.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  btcValue = data;
  btcValue = btcValue.replace('"', '')
  btcValue = btcValue.replace('"', '')
  btcValue = parseInt(btcValue);
  //console.log(`value of BTC in usd: ${btcValue}`)
  fs.writeFile('./text2/btc.json', btcValue, function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("success 1");

    }
  });

  // read USD value .txt
  // Reading data in utf-8 format 
  // which is a type of character set. 
  // Instead of 'utf-8' it can be  
  // other character set also like 'ascii' 
  fs.readFile('./text1/Dolar-Value.txt', 'utf-8', (err, data1) => {
    if (err) throw err;

    usd = data1;
    usd = usd.replace('"', '')
    usd = usd.replace('"', '')
    usd = parseInt(usd);
    //console.log(`value of usd in cop: ${usd}`)
    fs.writeFile('./text2/usd.json', usd, function (err) {
      if (err) {
        console.log(err);
      }
      else {
        console.log("success 2");

      }
    });
    //Read the Local bitcoin .txt
    // read BTC value .txt
    //var ret2 = 0;

    // Reading data in utf-8 format 
    // which is a type of character set. 
    // Instead of 'utf-8' it can be  
    // other character set also like 'ascii' 
    fs.readFile('./text1/BTC-Value-LocalBitcoin.txt', 'utf-8', (err, data2) => {
      if (err) throw err;

      // Converting Raw Buffer to text 
      // data using tostring function. 
      //console.log(data1);
      
ret2 = data2.split(',')
for (i=0;i<=49;i++){
  ret2[i] = parseInt(ret2[i])
}
localbtc =ret2;
     
      //console.log(`value of BTC in cop: ${localbtc}`)
      fs.writeFile('./text2/localbtc.json', localbtc, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("success 3");

        }
      });

      //Read the Local limit bitcoin .txt
      // read BTC value .txt
      //var ret3 = 0;

      // Reading data in utf-8 format 
      // which is a type of character set. 
      // Instead of 'utf-8' it can be  
      // other character set also like 'ascii' 
      fs.readFile('./text1/Limit-Value-LocalBitcoin.txt', 'utf-8', (err, data3) => {
        if (err) throw err;
        var l1= [], l2=[], b=[];
        
        ret3 = data3.split('","')
        for(i=0;i<=49;i++){
          for(j=0;j<=98;j++)
          ret3[i] = ret3[i].replace(' COP', '');
					ret3[i] = ret3[i].replace(/,/g, '');
          ret3[i] = ret3[i].replace(/"/g, '');
        }
        
       

for(i=0;i<=49;i++){

  b= ret3[i].split('-', 2)
  l1[i] = (b[0])
  l2[i] = (b[1])

}
       // console.log(ret3[0])
        console.log()
        //console.log(`value of BTC limit minimum: ${l1}`)
        //console.log(`value of BTC limit maximum: ${l2}`)
        fs.writeFile('./text2/l1.json', l1, function (err) {
          if (err) {
            console.log(err);
          }
          else {
            console.log("success 4");

          }
        });
        fs.writeFile('./text2/l2.json', l2, function (err) {
          if (err) {
            console.log(err);
          }
          else {
            console.log("success 5");

          }
        });
      })
    })
  })
})
 }, 6000);
