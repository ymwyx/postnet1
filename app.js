const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/message', (req, res) => {
	res.status(200).send('This is a success message');
});

app.listen(3000);
