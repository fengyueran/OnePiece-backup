const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(fs.readFileSync('./index.html'));
  } else if (req.url === '/jet.png') {
    res.writeHead(200, {
      'Content-Type': 'image/png',
    });
    res.end(fs.readFileSync('./jet.png'));
  } else {
    res.end('404');
  }
}).listen(8080, () => console.log('8080 监听成功'));
