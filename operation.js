// Requiring fs module in which 
// readFile function is defined. 
const fs = require('fs')

const b = require('./read.js')
var ata, ata1;
var ata2 = [], ata3 = [], ata4 = [];
var Porcentage = [];
var lk =[];

/* 
async function timeout() {
    return new Promise(resolve => {
         */
const sleep = new Promise(r =>

    setTimeout(function () {
        // read BTC value .txt
        // Reading data in utf-8 format 
        // which is a type of character set. 
        // Instead of 'utf-8' it can be  
        // other character set also like 'ascii' 
        fs.readFile('text2/btc.json', 'utf-8', (err, data) => {
            if (err) throw err;
            ata = parseInt(data)
            //  console.log(`bitcoin ${data}`)

            fs.readFile('text2/usd.json', 'utf-8', (err, data1) => {
                if (err) throw err;
                ata1 = parseInt(data1)
                //  console.log(`usd ${data1}`)

                fs.readFile('text2/localbtc.json', 'utf-8', (err, data2) => {
                    if (err) throw err;
                    data2 = data2.split(',');
                    for (i = 0; i <= 49; i++) {
                        data2[i] = parseInt(data2[i]);
                    }
                    ata2 = data2;

                    // console.log(`local b ${ata2}`) 

                    fs.readFile('text2/l1.json', 'utf-8', (err, data3) => {
                        if (err) throw err;
                        data3 = data3.split(',');
                        for (i = 0; i <= 49; i++) {
                            data3[i] = parseInt(data3[i]);
                        }
                        ata3 = data3;
                        //    console.log(`l1 ${data3}`)

                        fs.readFile('text2/l2.json', 'utf-8', (err, data4) => {
                            if (err) throw err;
                            data4 = data4.split(',');
                            for (i = 0; i <= 49; i++) {
                                data4[i] = parseInt(data4[i]);
                            }
                            ata4 = data4;
                            // console.log(`l2 ${data4}`)
                            operation();


                            //lecutura de los links

                            fs.readFile('text2/Links.json', 'utf-8', (err, link) => {
                                if (err) throw err;
                                link = link.split(',');
                                for (i = 0; i <= 49; i++) {
                                    lk[i] = link[i].replace(/"/g, '');
                                }


                                r({
                                    ax: ata3,
                                    bx: ata4,
                                    cx: Porcentage,
                                    dx: lk
                                })
                                //console.log(generateData)
                            })
                        })
                    })
                })
            })

        })
        function operation() {

            BTC_cop = ata * ata1;
            console.log(`BTC cop: ${BTC_cop}`)
            for (i = 0; i <= 49; i++) {
                Porcentage[i] = (ata2[i] / BTC_cop);
            }
            // console.log(`porcentaje: ${Porcentage}`)

        }
    }, 6500)

);


module.exports = sleep;
