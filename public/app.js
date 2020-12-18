const ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', e => {
  console.log('Connected!');
});

const parent = document.getElementById('msg-area');
ws.addEventListener('message', e => {
  const child = document.createElement('li');
  child.append(e.data);
  parent.append(child);
});

ws.addEventListener('close', e => {
  console.log('Disconnected!');
});

ws.addEventListener('error', e => {
  console.log('error!');
});

btn.addEventListener('click', e => {
  const value = document.getElementById('input').value;
  if (value !== '') {
    ws.send(value);
  };
});
