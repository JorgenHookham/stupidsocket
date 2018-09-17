'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const server = express()
	.use(bodyParser.json())
	.post('/broadcast', (req, res) => {
		broadcast(req.body);
		res.send('OK');
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`));

function broadcast (data) {
	console.log('Broadcast', data);
}
