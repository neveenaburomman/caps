'use strict';

const client = require('socket.io-client');

const host = 'http://localhost:3000';

const capsConnection = client.connect(host);

//setInterval(() => {
capsConnection.emit('pick-up');
//}, 5000);
