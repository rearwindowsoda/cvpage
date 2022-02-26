const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const httpolyglot = require('httpolyglot');
const fs = require('fs');
const credentials = {key: fs.readFileSync(path.join(__dirname, 'cert', 'cert.key')),cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))}
const app = express();

//middleware
app.use(express.static(path.join(__dirname + '/public')));

httpolyglot.createServer(credentials, app).listen(443);




