const express = require('express');
const app = express();
app.use(express.static('./public'));
let bar = require('./public/core/barcodeCore');
let zip = require('./public/core/zipCodeCore');
let barcode = new bar();
let zipToBar = new zip();

app.get('/getBar', function (req, res) {
	let input = req.query.code;
	let barCode= zipToBar.dealZipcode(input);
	res.status(200).send(barCode);
});

app.get('/getZip', function (req, res) {
	let input = req.query.code;
	let zipCode=barcode.dealBarcode(input);
	res.status(200).send(zipCode);
});

app.listen(4000);

console.log('ok');