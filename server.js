'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const server = express()
	.use(bodyParser.json())
	.post('/broadcast', (req, res) => {
		console.log('Accepted request');
		broadcast(req.body);
		res.send('OK');
		console.log('Request complete');
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`));

function broadcast (data) {
	console.log('Beginning broadcast');
	console.log('Broadcast', data);
	console.log('Broadcast complete');
}
