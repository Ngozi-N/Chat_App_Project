const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (optional, if you add a frontend later)
// app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle a client connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Broadcast message to all clients
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Handle client disconnect
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
