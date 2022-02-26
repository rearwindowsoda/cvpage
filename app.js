const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const credentials = {key: fs.readFileSync(path.join(__dirname, 'cert', 'cert.key')),cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))}
const app = express();

//middleware
app.all('*', function(req, res, next){
    if (req.secure) {
        return next();
    }

    res.redirect('https://'+req.hostname + ':' + app.get('secPort') + req.url);
});
const sslServer = https.createServer(credentials, app);
sslServer.listen(443)
app.use(express.static(path.join(__dirname + '/public')));



