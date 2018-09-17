'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const server = express()
	.use(bodyParser.json())
	.post('/broadcast', (req, res) => {
		console.log('Accepted request');
		console.log(req, req.body, req.header)
		res.send('OK');
		console.log('Request complete');
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`));
