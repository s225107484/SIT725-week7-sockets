const express = require('express');
const app = express();

// serve static client files from /public
app.use(express.static('public'));

// IMPORTANT: create http server from app and pass to socket.io
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// socket logic
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // send a random number every second
  setInterval(() => {
    socket.emit('number', parseInt(Math.random() * 10));
  }, 1000);
});

// start server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
