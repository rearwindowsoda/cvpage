const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');
const credentials = {key: fs.readFileSync(path.join(__dirname, 'cert', 'cert.key')),cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))}
const app = express();

//middleware
app.enable('trust proxy');

app.use(express.static(path.join(__dirname + '/public')));


//routes
app.get('*', (req, res) => {
    res.redirect('https://' + req.headers.host + req.url);
})

//create and  start server
const httpServer = http.createServer(app);
const sslServer = https.createServer(credentials, app);
sslServer.listen(3443)
httpServer.listen(3000)

