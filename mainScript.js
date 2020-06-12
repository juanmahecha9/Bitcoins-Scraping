
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const axios = require("axios");


// main script 


// read the value of BTC in Dollar
const URL = "https://www.coingecko.com/es/monedas/bitcoin/";
var obj = {};

const getResults = request(URL, function (err, res, body) {
	if (err) {
		console.log(err);
	}
	else {

		const arr = [];
		let $ = cheerio.load(body);
		$('#wrapper').each(function (index) {

			const data = $(this).find('.text-3xl .no-wrap').text().trim().replace(/\s\s+/g, ',');
			const name = $(this).find('.mr-md-3 ').text().trim().replace(/\s\s+/g, ',');
			obj = {
				data: data,
				name: name
			};
			//console.log(obj.data);
			// Convertir data 
			ret = data.replace('$', '');
			ret = ret.replace('.', '')
			btcValue = ret.substring(0, ret.lastIndexOf(","))

			arr.push(JSON.stringify(btcValue));
		});

		//console.log(arr.toString());
		fs.writeFile('./text1/BTC-Value.txt', arr, function (err) {
			if (err) {
				console.log(err);
			}
			else {
				console.log("success btc");

			}
		});

	}






	//Read the value of Dollar in COP
	const URL1 = "https://dolar.wilkinsonpc.com.co/divisas/dolar.html/";
	var obj1 = {};

	const getResults1 = request(URL1, function (err, res, body) {
		if (err) {
			console.log(err);
		}
		else {

			const arr1 = [];
			let $1 = cheerio.load(body);
			$1('.row .col-xs-24 .caja .valor').each(function (index) {

				const data1 = $1(this).find('.numero').text().trim().replace(/\s\s+/g, ',');

				obj1 = {
					data: data1,
				};

				//convert data
				ret1 = data1.replace('*', '');
				ret1 = ret1.replace(',', '')
				usd = ret1.substring(0, ret1.lastIndexOf("."))


				arr1.push(JSON.stringify(usd));
			});

			//console.log(arr1.toString());
			fs.writeFile('./text1/Dolar-Value.txt', arr1, function (err) {
				if (err) {
					console.log(err);
				}
				else {
					console.log("success usd");

				}
			});

		}



		//Read the value of btc in localbitcoin
		const URL2 = "https://localbitcoins.com/es/buy-bitcoins-online/cop/";
		var obj2 = {};
		var arr2 = [];
		const getResults2 = request(URL2, function (err, res, body) {
			if (err) {
				console.log(err);
			}
			else {

				const arr2 = [];
				let $2 = cheerio.load(body);
				$2('.table-striped').each(function (index) {

					const data2 = $2(this).find(' .column-price').text().trim().replace(/\s\s+/g, ',');
					//const name2 = $2(this).find('.table-number ').text().trim().replace(/\s\s+/g, ',');
					obj2 = {
						data: data2,

					};


					ret2 = data2.replace('undefined', '');

					ret2 = ret2.replace(/ COP/g, '-');
					ret2 = ret2.replace(/,/g, '');
					ret2 = ret2.split('-');
					for (i = 0; i <= 49; i++) {
						ret2[i] = ret2[i].substring(0, ret2[i].lastIndexOf("."))
					}
					for (i = 0; i <= 49; i++) {
						arr2[i] = ret2[i];
					}

				});

				//console.log(arr2.toString());
				fs.writeFile('./text1/BTC-Value-LocalBitcoin.txt', arr2, function (err) {
					if (err) {
						console.log(err);
					}
					else {
						console.log("success Local Btc");

					}
				});

			}



			//Read the value of btc in localbitcoin minimun and maximun limit of sell
const URL3 = "https://localbitcoins.com/es/buy-bitcoins-online/cop/";
var obj3 = {};

const getResults3 = request(URL3, function (err, res, body) {
	if (err) {
		console.log(err);
	}
	else {

		var arr3 = [];
		let $3 = cheerio.load(body);
		$3('.clickable').each(function (index) {

			var data3 = $3(this).find('.column-limit ').text().trim().replace(/\s\s+/g, ',');
			//const name2 = $2(this).find('.table-number ').text().trim().replace(/\s\s+/g, ',');


			arr3.push(JSON.stringify(data3));

			
			//console.log(arreglo)
		});

		//console.log(arr3.toString());
		fs.writeFile('./text1/Limit-Value-LocalBitcoin.txt', arr3, function (err) {
			if (err) {
				console.log(err);
			}
			else {
				console.log("success limits");

			}
		});

	}


				//Read links of btc
				const URL4 = "https://localbitcoins.com/es/buy-bitcoins-online/cop/";
				var obj4 = {};

				const getResults4 = request(URL4, function (err, res, body) {
					if (err) {
						console.log(err);
					}
					else {

						var arr4 = [];
						let $4 = cheerio.load(body);
						$4('.column-button ').each(function (index) {


							var data4 = $4(this).find('.megabutton').attr('href');
							//const name2 = $2(this).find('.table-number ').text().trim().replace(/\s\s+/g, ',');

							obj4 = {
								data: data4,
				
							};
							arr4.push(JSON.stringify(data4));
							
							
							//console.log(arreglo)
						});

						//console.log(arr3.toString());
						fs.writeFile('./text2/Links.json', arr4, function (err) {
							if (err) {
								console.log(err);
							}
							else {
								console.log("success links");

							}
						});

					}

				});
			});

		});
	});
});

