const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
const credentials = {key: fs.readFileSync(path.join(__dirname, 'cert', 'cert.key')),cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))}
const app = express();

//middleware
app.use(redirectToHTTPS());
const sslServer = https.createServer(credentials, app);
sslServer.listen(443)
app.use(express.static(path.join(__dirname + '/public')));



