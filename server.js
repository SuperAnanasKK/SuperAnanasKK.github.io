
const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true
});

app.use('/peerjs', peerServer);

app.get('/', (req, res) => {
  res.send('Mellrooms PeerServer is running!');
});

const PORT = process.env.PORT || 10000;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`PeerServer running on port ${PORT}`);
});
