const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');
const credentials = {key: fs.readFileSync(path.join(__dirname, 'cert', 'cert.key')),cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))}
const app = express();

//middleware
app.all('*', function(req, res, next){
    console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
    if (req.secure) {
        return next();
    }

    res.redirect('https://'+req.hostname + ':' + app.get('secPort') + req.url);
});
app.use(express.static(path.join(__dirname + '/public')));
const sslServer = https.createServer(credentials, app);
const httpServer = http.createServer(app);
sslServer.listen(443)
httpServer.listen(3000);





