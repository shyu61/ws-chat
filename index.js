const WebSocket = require('ws');
const ws = new WebSocket.Server({ port: 8080 });

ws.on('connection', socket => {
  console.log(`Connected: ${new Date()}`);

  socket.on('message', msg => {
    console.log(`Message: ${msg}`);

    ws.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`${msg}`);
      }
    });
  });

  socket.on('close', () => {
    console.log('closed!');
  });
});
