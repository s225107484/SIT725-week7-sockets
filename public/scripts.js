// connect to socket server
const socket = io();

// listen for the 'number' event and display it
socket.on('number', (msg) => {
  console.log('Random number:', msg);
  document.getElementById('number').innerText = msg;
});
