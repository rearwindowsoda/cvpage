const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const credentials = {key: fs.readFileSync(path.join(__dirname, 'cert', 'cert.key')),cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))}
const app = express();

//middleware
app.all('*', ensureSecure)
const sslServer = https.createServer(credentials, app);
sslServer.listen(443)
app.use(express.static(path.join(__dirname + '/public')));

function ensureSecure(req, res, next){
    if(req.secure){
        // OK, continue
        return next();
    };
    res.redirect('https://' + req.hostname + req.url);
}

