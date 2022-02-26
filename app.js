const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');
const credentials = {key: fs.readFileSync(path.join(__dirname, 'cert', 'cert.key')),cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))}
const app = express();

//middleware
app.get('*', function(req, res, next){

    res.redirect('https://' +req.headers.host + req.path);
});
app.use(express.static(path.join(__dirname + '/public')));
const sslServer = https.createServer(credentials, app);
const httpServer = http.createServer(app);
sslServer.listen(443)
httpServer.listen(3000);





