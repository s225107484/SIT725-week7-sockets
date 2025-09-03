const express = require('express');
const app = express();

app.use(express.static('public'));

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  setInterval(() => {
    socket.emit('number', parseInt(Math.random() * 10));
  }, 1000);
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
